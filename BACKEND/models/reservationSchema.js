import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3,"first name must contain at least 3 characters!"],
        maxlength: [20,"first name must contain at most 20 characters!"],
      },
      lastName: {
        type: String,
        required: true,
        minlength: [3,"last name must contain at least 3 characters!"],
        maxlength: [20,"last name must contain at most 20 characters!"],
      },
      email: {
        type: String,
        required: true,
        validate: [validator.isEmail,"provide a valid email!"],
      },
      Phone: {
        type: String,
        required: true,
        minlength: [10,"Phone number must contain 10 digits !"],
      },
      time: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);