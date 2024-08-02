import mongoose from "mongoose"
import bcrypt from "bcrypt"

const UsersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [false, "First name is required!"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [false, "Last name is required!"],
      trim: true,
    },
    email: {
      type: String,
      required: [false, "email is required!"], // Email is not mandatory
      trim: true,
    },
    password: {
      type: String,
      required: [false, "password is required!"], // Password is not mandatory
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
)
UsersSchema.pre("save", async function (next) {
  try {
    const savedPassword = await bcrypt.hash(this.password as unknown as any, 5)
    this.password = savedPassword
    next()
  } catch (error){
  return error
  }
})


const Users = mongoose.models.User ||mongoose.model("User", UsersSchema)

export default Users
