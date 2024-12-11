/* import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";
import { DetailsSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) =>{
    let newContact = new Contact(req.body);

    newContact.save((err,contact) => {
        if (err){
            res.send(err);
        }
        res.json(contact);
    })
}; */

import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";
import { DetailsSchema } from "../models/crmModel";


const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save(); // Await the result of save()
        res.json(savedContact); // Send the saved contact as JSON
    } catch (err) {
        res.status(500).send(err); // Send error with a status code
    }
};
