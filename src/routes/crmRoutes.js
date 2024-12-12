//Roting the endpoints 
import { addNewContact, getContact, getContactbyID, updateContact, deleteContactByID } from "../controllers/crmControllers";
import { addNewDetails, getDetails, getDetailsByID, updateDetails, deleteDetailsByID } from "../controllers/crmControllers";
//import { upload, uploadFile } from "../controllers/crmControllers";

const routes = (app) =>{
app.route('/contact')

    //get request with status

    .get((req,res, next) => {
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    },  getContact) 
    /* (req, res, next) =>{
    res.send('200 Sucessful')
    })  */
    
   // .get(getContact)

    //create request with status

   /*  .post((req,res, next)=> {
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, (req, res, next)=>{
        res.send('200 requested created sucessfully')
    }) */
    .post(addNewContact);
    
    // Action for specific ID

app.route('/contact/:contactID')

    // to get data was previously created 

    .get(getContactbyID)

    .put(updateContact)   

    .delete (deleteContactByID)   //delete request with status for specific ID

//For details 

app.route('/details')

    .get(getDetails)

   /*  .post((req,res)=>
    res.send('200 requested created sucessfully')
    ) */

    .post(addNewDetails);

app.route('/details/:detailID')

    .get(getDetailsByID)

    .put(updateDetails)

    .delete(deleteDetailsByID)

    .patch((req, res) =>
    res.send('Patched data')
    )

    /* app.post('/upload', upload.single('file'), (req, res) => {
        res.send('File uploaded successfully!');
    }); */

}
// File upload 


// Define the upload route
//router.post('/public', upload.single('file'), uploadFile);


export default routes;