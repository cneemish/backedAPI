//Roting the endpoints 

const routes = (app) =>{
    app.route('/contact')
    .get((req,res) =>
        res.send('200 Sucessful')
    ) //get request with status

    .post((req,res)=>
        res.send('200 requested created sucessfully')
    ) //create request with status

    app.route('/contact/:contactID')
    .put ((req,res)=>
    res.send('200 requested update sucessfully')
    )   // update request with status for specific ID

    .delete ((req,res)=>
    res.send('200 requested deleted sucessfully')
    )   //delete request with status for specific ID

    //For details 
    app.route('/details')
    .get((req,res)=>
        res.send('Details created')
    )

    .post((req,res)=>
    res.send('200 requested created sucessfully')
    )

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