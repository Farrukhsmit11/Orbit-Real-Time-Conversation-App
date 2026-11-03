import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required(),
    password: Yup.string().min(8, "Password must be atleast 8 characters").required()
})