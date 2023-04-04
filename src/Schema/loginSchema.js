import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string()
    .required("")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "This field cannot contain white space and special character"
    )
    .min(6, "Mininum 6 characters")
    .max(20, "Maximum 20 characters"),
  password: Yup.string()
    .required("")
    .matches(
      // eslint-disable-next-line
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}$/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
