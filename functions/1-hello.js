// domain/.netlify/functions/1-hello
exports.handler = async (event,context) => {        
    console.log(event)
    return {
        statusCode:200,
        body:'Our Firs Netlify fucntion example'
    }
}