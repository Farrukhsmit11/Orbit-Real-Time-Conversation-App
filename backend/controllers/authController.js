import { User } from "../models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.status(400).send({ message: "Please Fill all the Fields" })
            return
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(400).send({ message: "Sorry a user already exist with this email" })
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            message: "Account Created Successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        console.error("Error registering user", error)
        return res.status(500).json({ message: "Unable to create account" })
    }
}


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

        return res.status(200).json({ message: "Login Successful", token })

    } catch (error) {
        console.error("Error during login", error)
        res.status(500).send({ message: "Internal Server Error" })
    }
}

export const getProfile = async (req, res) => {
    try {
        const data = await User.findById(req.user.id).select("-password")

        response.status(200).json({ message: "User fetched Sucessfully", data })
    } catch (error) {
        console.error("Error fetching user details", error)
    }
}