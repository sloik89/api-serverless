const result = document.querySelector('.result')
const fetchData = async() => {
    try{
        const {data} = await axios.get('/api/airtable')
        console.log(data)
        const products = data.map((elem) => {
            const {id,url,name,price} = elem
            return `
            <a href="product.html?id=${id}" class="product">
            <img src="${url}" />
            <div class="info">
                <h5> ${name} </h5>
                <h5 class="price">${price} </h5>
            </div>
            </a>
            `
        }).join('')
        result.innerHTML=products
    }catch(err){
        console.log(err)
    }
}
fetchData()