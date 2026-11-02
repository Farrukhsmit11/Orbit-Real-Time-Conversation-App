import { User } from "../models/User.js"
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).send({ message: "Please Fill all the fields" })
            return
        }

        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).send({ message: "user not found" })
            return
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            res.status(400).send({ message: "password does not match" })
            return
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email
        },
            process.env.JWT_SECRET_KEY
        )

        response.status(200).send({ message: "Login Successful", token })

    } catch (error) {
        console.error("Error during login", error)
        res.status(500).send({ message: "Internal Server Error" })
    }
}