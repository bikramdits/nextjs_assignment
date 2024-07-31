import mongoose from "mongoose"
import bcrypt from "bcrypt"

const UsersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required!"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required!"], // Email is not mandatory
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required!"], // Password is not mandatory
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
    const savedPassword = await bcrypt.hash(this.password, 5)
    this.password = savedPassword
    next()
  } catch {
    next(error)
  }
})

// UsersSchema.pre('findOneAndUpdate', async function (next) {
//     try {
//         const update = this.getUpdate();

//         if (update.password) {
//             const hashed = await bcrypt.hash(update.password, 10);
//             update.password = hashed;
//         }

//         next();
//     } catch (err) {
//         next(err);
//     }
// });

const Users = mongoose.model("User", UsersSchema)
export default Users
