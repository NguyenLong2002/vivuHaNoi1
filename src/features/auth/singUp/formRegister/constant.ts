import * as yup from "yup";

export const schema = yup
.object({
  fullName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .test(
      "contains-number-and-character",
      "error",
      (value) => {
        if (!value) return false; // Return false if the value is empty

        const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])/;
        const containsCharacterAndNumber = regex.test(value);

        return containsCharacterAndNumber;
      }
    )
    .required(),
  re_password: yup
    .string()
    .test(
      "repeat-password",
      "error",
      (value, schema: any) => {
        const { password } = schema["from"][0]["value"];
        if (!value) return false; // Return false if the value is empty

        return value === password;
      }
    )
    .required(),
})

export type FormData = yup.InferType<typeof schema>;