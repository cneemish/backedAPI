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

//To create data 

export const addNewContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save(); // Await the result of save()
        res.json(savedContact); // Send the saved contact as JSON
    } catch (err) {
        res.status(500).send(err); // Send error with a status code
    }
};

/* export const getContact = (req, res) =>{
    Contact.find({}, (err, contact) => {
        if(err){
            res.send(err);
        }
        res.json(contact);
    }
    )
} */

//To find data 

export const getContact = async (req, res) => {
    try {
        const contact = await Contact.find();
        res.json(contact);
        
    } catch (err) {
        res.status(422).send(err); // Send error with a status code

    }
};

// to find a specific contact 

export const getContactbyID = async(req, res) =>{
    try {
        const contact = await Contact.findById(req.params.contactID);
        res.json(contact);
        
    } catch (err) {
        res.status(404).send(err); // Send error with a status code

    }
}; 

// update data 


 export const updateContact = async(req, res) =>{
    try {
        const contact = await Contact.findOneAndUpdate({_id: req.params.contactID}, req.body, { new: true});
        res.json(contact);
    } catch (error) {
        res.status(402).send(err);
    }
 };

 export const deleteContactByID = async(req, res) => {
    try {
        const contact = await Contact.findOneAndDelete({_id: req.params.contactID});
        res.json({ message: "Deleted the data"});
    } catch (err) {
        res.status(402).send(err);

    }
 };

/* export const getContactbyID = (req, res) =>{
    Contact.findById(req.params.contactId, (err, contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    })
}; */

/* export const getContactByID = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId);

        if (!contact) {
            return res.status(404).send({ message: "Contact not found" }); // Handle "not found" explicitly
        }

        res.json(contact); // Send the contact data as JSON
    } catch (err) {
        res.status(500).send(err); // Internal server error
    }
}; */

// To declare anything related to details schema

const Details = mongoose.model('Details', DetailsSchema);

//To create data 

export const addNewDetails = async (req, res) => {
    try {
        const newDetails = new Details(req.body);
        const savedDetails = await newDetails.save();
        res.json(savedDetails);
    } catch (error) {
        res.status(500).send(err); // Send error with a status code
    }
};

//To find data 

export const getDetails = async(req, res) =>{
    try {
        const details = await Details.find();
        res.json(details);

    } catch (err) {
                res.status(422).send(err); // Send error with a status code

    }
};

export const getDetailsByID = async(req, res) =>{
    try {
        const details = await Details.findById(req.params.detailID);
        res.json(details);
    } catch (error) {
        res.status(404).send(err); // Send error with a status code

    }
};

export const updateDetails = async(req, res) =>{
    try {
        const details = await Details.findOneAndUpdate({_id: req.params.detailID}, req.body, {new: true});
        res.json(details);
    } catch (err) {
        res.status(402).send(err);
    }
};

export const deleteDetailsByID = async(req, res) =>{
    try {
        const details = await Details.findOneAndDelete({_id: req.params.detailID} );
        res.json({message: "Deleted data"});
    } catch (err) {
        res.status(402).send(err);

    }
};