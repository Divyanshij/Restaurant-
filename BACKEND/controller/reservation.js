import { request } from "express";
import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next)=>{
    const{firstName, lastName, email, Phone, time, date } = req.body;
    console.log(req.body);
    if(!firstName || !lastName || !email || !Phone || !date || !time ){
       return next(new ErrorHandler("please fill full reservation form",400));  
    }
    try{
        await Reservation.create({firstName, lastName, email, Phone, time, date });
        res.status(201).json({
              success: true,
              message: "reservation created successfully",
          });
    }catch(error){
        if(error.name === "ValidatioError"){
            const ValidatioErrors = Object.values(error.errors).map(
               (err)=> err.message
            );
            return next(new ErrorHandler(ValidatioErrors.join(', '),400));
        }
        return next(error);
    }
};