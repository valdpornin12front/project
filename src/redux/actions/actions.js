import { types } from "../../types";


export const addBascket = (card)=>{

    
   
    console.log(card );
    return{
    type: types.ADD_TO,
    payload:card
    
} 
}

export const PostTitle =(id) => {
    return async function (dispatch) {
        const options ={
            method:"POST" ,
            headers:{
                "Content-Type": "application-json"
            },
            body:JSON.stringify(id)
        }
        const response = await fetch('https://fakestoreapi.com/carts' , options)
        const data = await response.json();
        dispatch(addBascket(data))
    }
}
export const removeCards = ()=>({
    type: types.REMOVE_TO,
    payload: ''
})

// responsse = await fetch ('https://fakestoreapi.com/products/`${id}`')


