import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const nbr = req.query.nbr || (req.body && req.body.nbr);
    const responseMessage = nbr
        ? nbr * 2
        : 'This HTTP triggered function executed successfully. Pass a nbr in the query string or in the request body for a response.';

    context.res = {
        body: responseMessage,
    };
};

export default httpTrigger;
