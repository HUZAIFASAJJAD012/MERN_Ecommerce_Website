import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Eamil is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    cartItems: [
      {
        quantity: {
          type: Number,
          default: 1,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// pre-save hook to hash password before saving to database
userSchema,pre("save",async function(next){
    if(!this.isModified("password")) return next();
   try {
    const salt=await bcrypt.genSalt(10); //Generates a salt (random string) with 10 rounds of complexity
    this.password=await bcrypt.hash(this.password,salt);
    next();// The next() function in Mongoose middleware is used to move to the next step in the process
   } catch (error) {
    next(error);
   }
})
// static method to check if password is correct
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}
export default User;