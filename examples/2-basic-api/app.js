const result = document.querySelector('.result')
 const fetchData = async(state,context) =>{
     try{
        const {data} = await axios.get('/api/basic-api')
        console.log(data)
        const products = data.map((elem) => {
            const {image:{url},name,price} = elem
            return `
            <article class="product">
                <img src="${url}"/>
                <div class="info">
                <h5> ${name} </h5>
                <h5 class="price">${price} </h5>
                </div>
            </article>
            `
        }).join('')
        result.innerHTML = products
     }
     catch(err){
         console.log(err)
     }
 }
 fetchData()