import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TablePagination,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import CheckBoxField from "./CheckBoxField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
  overflow: "hidden",
  border: "1px #f2f2f2 solid",
  p: 4,
};

export default function CommonTable(props) {
  const [isCheckBox] = useState(false);
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editAction, setEditAction] = useState(false);
  const [deleteAction, setDeleteAction] = useState(false);
  const [open, setOpen] = useState(false);
  const [requiredIndex, setRequiredIndex] = useState({});

  const { control, setValue, watch } = useForm();
  const handleOpen = (row) => {
    setRequiredIndex(row);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const removeHeaders = (headers, fieldToRemove) => {
    return headers.filter((v) => {
      return !fieldToRemove.includes(v);
    });
  };

  const allHeaders = Object.keys(props.data.result[0]);

  const headers = removeHeaders(allHeaders, ["id"]);
  let getCheckboxVal = watch(`selectOptions${requiredIndex.id}`);
  // console.log("getCheckboxVal", getCheckboxVal);

  React.useEffect(() => {
    props.data.actions.forEach((action) => {
      if (action === "Delete") {
        setDeleteAction(true);
      }
      if (action === "Edit") {
        setEditAction(true);
      }
    });
  }, [props.data.actions]);

  const handleSetValue = () => {
    setValue(`selectOptions${requiredIndex.id}`, false);
    handleClose();
  };
  const handleSetUserActive = () => {
    setValue(`selectOptions${requiredIndex.id}`, true);
    handleClose();
  };

  const handleFalseVal = () => {
    setValue(`selectOptions${requiredIndex.id}`, true);
    handleClose();
  };
  const handleFalseValUser = () => {
    setValue(`selectOptions${requiredIndex.id}`, false);
    handleClose();
  };

  let arr = [...props.data.result];
  arr.slice(isCheckBox);

  return (
    <>
      <div className="grid w-[100%] border">
        <Box sx={{ width: "100%", overflow: "hidden" }}>
          <Paper sx={{ width: "100%" }}>
            <TablePagination
              component="div"
              count={props.data.result.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <TableContainer className="rounded">
              <Table size="small">
                <TableHead>
                  <TableRow
                    sx={{
                      "& th": {
                        paddingY: 1,
                        backgroundColor: "#F1F1F1",
                      },
                    }}
                  >
                    <TableCell>
                      <span className="text-black font-bold whitespace-nowrap">
                        Actions
                      </span>
                    </TableCell>
                    {headers.map((header, index) => (
                      <TableCell
                        className="whitespace-nowrap"
                        sx={{ fontWeight: "bold" }}
                        key={index}
                      >
                        {header}
                      </TableCell>
                    ))}
                    <TableCell>
                      <span className="text-black font-bold whitespace-nowrap">
                        Active
                      </span>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {(rowsPerPage > 0
                    ? props.data.result.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : props.data.result
                  ).map((row, index) => {
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "& td": {
                            paddingY: 0.5,
                          },
                        }}
                      >
                        {props.data.actions.length > 0 ? (
                          <TableCell className="px-4 py-1 flex whitespace-nowrap ">
                            <div className="flex gap-4">
                              {editAction ? (
                                <a
                                  href="##"
                                  value="click"
                                  className="text-blue-500 mr-1"
                                >
                                  <DriveFileRenameOutlineIcon
                                    color="action"
                                    onClick={(e) => {
                                      props.setOpen(true);
                                      props.editRow(row);
                                    }}
                                  />
                                </a>
                              ) : (
                                ""
                              )}

                              {deleteAction ? (
                                <a
                                  href="##"
                                  value="click"
                                  className="text-red-500 mr-3"
                                >
                                  <DeleteOutlineOutlinedIcon
                                    onClick={() => props.deleteRow(row)}
                                  />
                                </a>
                              ) : (
                                ""
                              )}
                            </div>
                          </TableCell>
                        ) : (
                          ""
                        )}
                        {headers &&
                          headers.map((header, index) => (
                            <>
                              <TableCell
                                className="whitespace-nowrap"
                                key={index}
                              >
                                {row[header]}
                              </TableCell>
                            </>
                          ))}
                        <TableCell className="whitespace-nowrap">
                          <div>
                            <fieldset
                              onChange={() => {
                                handleOpen(row);
                              }}
                            >
                              <CheckBoxField
                                control={control}
                                defaultValue={true}
                                name={`selectOptions${row.id}`}
                              />
                            </fieldset>

                            {getCheckboxVal === true ? (
                              <Modal
                                open={open}
                                sx={{
                                  "& .MuiBackdrop-root": {
                                    backgroundColor: "rgba(0,0,0,0.2)",
                                  },
                                }}
                              >
                                <Box sx={{ ...style }}>
                                  <div className="flex justify-end cursor-pointer -mt-4 m-1 text-red-600">
                                    <CancelPresentationIcon
                                      onClick={handleFalseValUser}
                                    />
                                  </div>
                                  <div className="border border-black p-5 bg-white">
                                    <Typography
                                      id="modal-modal-title"
                                      sx={{
                                        fontSize: "25px",
                                        fontWeight: "700",                                        
                                      }}
                                      className="text-center"
                                    >
                                      <ErrorOutlineRoundedIcon
                                        sx={{
                                          fontSize: "25px",
                                          fontWeight: "700",
                                          marginTop: "-5px",
                                          color: "red",
                                          marginLeft:"5px"
                                        }}
                                      />
                                      Alert
                                    </Typography>
                                    <Typography
                                      sx={{ mt: 2 }}
                                      className="font-extrabold text-5xl text-center"
                                    >
                                      Do you want to Active user ?
                                    </Typography>
                                    <div className="gap-10 flex justify-center mt-6">
                                      <div className="">
                                        <Button
                                          sx={{ textTransform: "none" }}
                                          variant="contained"
                                          size="small"
                                          onClick={handleSetUserActive}
                                        >
                                          Yes
                                        </Button>
                                      </div>
                                      <div>
                                        <Button
                                          sx={{ textTransform: "none" }}
                                          variant="contained"
                                          size="small"
                                          color="inherit"
                                          onClick={handleFalseValUser}
                                        >
                                          No
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </Box>
                              </Modal>
                            ) : (
                              <Modal
                                open={open}
                                sx={{
                                  "& .MuiBackdrop-root": {
                                    background: "gray",
                                    backgroundColor: "rgba(0,0,0,0.2)",
                                  },
                                }}
                              >
                                <Box sx={{ ...style }}>
                                  <div className="flex justify-end cursor-pointer -mt-4 m-1 text-red-600">
                                    <CancelPresentationIcon
                                      onClick={handleFalseVal}
                                    />
                                  </div>
                                  <div className="border border-black p-5 bg-white">
                                    <Typography
                                      id="modal-modal-title"
                                      sx={{
                                        fontSize: "25px",
                                        fontWeight: "700",
                                      }}
                                      className=" text-center"
                                    >
                                      <ErrorOutlineRoundedIcon
                                        sx={{
                                          fontSize: "25px",
                                          fontWeight: "700",
                                          marginTop: "-5px",
                                          color: "red",
                                        }}
                                      />
                                      Alert
                                    </Typography>
                                    <Typography
                                      id="modal-modal-description"
                                      sx={{ mt: 2 }}
                                      className="font-extrabold text-5xl text-center"
                                    >
                                      Do you want to deactive user ?
                                    </Typography>
                                    <div className="gap-10 flex justify-center mt-6">
                                      <div className="">
                                        <Button
                                          sx={{ textTransform: "none" }}
                                          variant="contained"
                                          size="small"
                                          onClick={handleSetValue}
                                        >
                                          Yes
                                        </Button>
                                      </div>
                                      <div>
                                        <Button
                                          sx={{ textTransform: "none" }}
                                          variant="contained"
                                          size="small"
                                          color="inherit"
                                          onClick={handleFalseVal}
                                        >
                                          No
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </Box>
                              </Modal>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </div>
    </>
  );
}
