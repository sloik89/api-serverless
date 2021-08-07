const Airtable = require('airtable-node')
require('dotenv').config()
const airtable = new Airtable({
    apiKey:process.env.AIRTABLE_API_KEY
}).base('app1GlklnbvjLuJOU').table('products')
const id = 'rec1XZ7QIHK5Lp07J'
exports.handler = async(event,constex) => {
    const {id} = event.queryStringParameters
    console.log(id)
    if(id){
         try{
            const product = await airtable.retrieve(id)
            console.log(product)
            if(product.error){
                return{
                    statusCode:404,
                    body:`No product with id: ${id} `
                }
            }
                return{
                    headers:{
            'Access-Control-Allow-Origin':'*'
        },
                    statusCode:200,
                    body:JSON.stringify(product)
                }

         }
         catch(err){
            return{
                    statusCode:404,
                    body:`No product with id: ${id} `
                }
         }
        return{
        statusCode:400,
        body:'Please id'
    }
     }
        return{
        statusCode:400,
        body:'Please id'
    }
    
    
}