import axios from 'axios';

export const addProduct = (productData, history) => (dispatch) => {
    axios.post('/product', productData)
    .then(res =>{
        console.log("imprime datos");
        console.log(res.data);
        history.push("/");
    })
    .catch(err => {
        console.log("imprime errores");
        console.log(err);
        history.push("/");
    })
}

export const editProduct = (productData, history) => (dispatch) => {
    axios.post('/edit', productData)
    .then(res =>{
        console.log("imprime datos");
        console.log(res.data);
        history.push("/");
    })
    .catch(err => {
        console.log("imprime errores");
        console.log(err);
        history.push("/");
    })
}

