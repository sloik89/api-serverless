const result = document.querySelector('.result')
const fetchData = async() => {
    try{
        const data = await axios.get('/api/1-hello')
        console.log(data)
        result.textContent=data.data
    }catch(err){
        console.log(err)
    }
}
fetchData()