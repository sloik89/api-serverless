
const items = require('../assets/data')

exports.handler = async(event,constex)=>{
    return{
        statusCode:200,
        body:JSON.stringify(items)
    }

}