//Roting the endpoints 
import { addNewContact, getContact} from "../controllers/crmControllers";
import { addNewDetails } from "../controllers/crmControllers";

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
    
    // update request with status for specific ID

    app.route('/contact/:contactID')
    .put ((req,res,next)=> {
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request method: ${req.method}`)
        next();
    },(req, res, next) => {
        res.send('200 requested update sucessfully')
    }
    
    )   

    .delete ((req,res)=>
    res.send('200 requested deleted sucessfully')
    )   //delete request with status for specific ID

    //For details 

    app.route('/details')
    .get((req,res)=>
        res.send('Details created')
    )

   /*  .post((req,res)=>
    res.send('200 requested created sucessfully')
    ) */

    .post(addNewDetails);

    app.route('/details/:detailID')
    .put((req, res) =>
    res.send('200 requested update sucessfully')    
    )

    .delete((req, res) => 
    res.send('200 requested deleted sucessfully')
    )

    .patch((req, res) =>
    res.send('Patched data')
    )

}

export default routes;