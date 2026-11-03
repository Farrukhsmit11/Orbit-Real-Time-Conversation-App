import jwt from "jsonwebtoken"
import { User } from "../models/User.js"

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split[" "][1]

        if (!token) {
            res.status(400).send({ message: "token is required" })
            return
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const user = await User.findById(decoded.id).select("-password")

        if (!user) {
            res.status(400).send({ message: "user not found" })
            return
        }

        response.status(200).json({ message: "User authenticated sucessfully", user })
    } catch (error) {
        console.error("Error authenticating user", error)
    }
}