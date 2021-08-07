const Airtable = require('airtable-node')
require('dotenv').config()
const airtable = new Airtable({
    apiKey:process.env.AIRTABLE_API_KEY
}).base('app1GlklnbvjLuJOU').table('products')

exports.handler = async(event,constex)=>{
    try{
        const {records} = await airtable.list()
        const products = records.map((elem)=>{
            const {id} = elem
            const {name,price,image} = elem.fields
            const url = image[0].url 
            return {id,name,url,price}
        })
    return{
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        statusCode:200,
        body:JSON.stringify(products)
    }
    }catch(err){
        return {
        statusCode:200,
        body:'Server  Error'
        }
    }
    

}