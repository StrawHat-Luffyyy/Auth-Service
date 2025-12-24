import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'


export const protect = async (req , res , next) => {
  const authHeader = req.headers.authorization
  if(!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  const token = authHeader.split(" ")[1]
  if(!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const user = await User.findById(decoded.userId)
    if(!user) {
      return res.status(401).json({ message: "Unauthorized" })
    }
    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" })
  }
}

// Role based admin routes protection
export const adminProtect = async (req, res, next) => {
  const user = await User.findById(req.user._id)
  if(!user) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  if(user.roles.includes("admin")) {
    return res.status(403).json({ message: "Forbidden" })
  }
  next()
}