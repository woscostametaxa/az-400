module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const succeed = req.body && req.body.succeed;
   
    if(succeed==true){
        context.res = {
            status: 200, 
            body: "all fine"
        };
    }else{
        context.res = {
            status: 425, 
            body: "too early"
        };
    }

}