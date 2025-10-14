import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    // value:0
    items:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

export const addToCard= createSlice({
    name:'card',
    initialState,

    
    // reducers:{
    //     addItem:(state)=>{
    //         state.value +=1
    //     },
    //     removeItem: (state) => {
    //         if (state.value > 0) {
    //             state.value -= 1;
    //         }
    //     },
    //     clearItem:(state)=>{
    //         state.value=0
    //     }
    // }

    reducers:{
        addItem:(state,actions)=>{
            console.log("addItem")
            state.items.push(actions.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))
        },

        removeItem:(state,actions)=>{
            const cartData=state.items.filter(item=>item.id!=actions.payload.id)
            state.items=cartData;
            localStorage.setItem('cart',JSON.stringify(cartData))
        },
        clearItem:(state)=>{
            state.items=[]
        }
    }

})

export const {addItem, removeItem,clearItem} = addToCard.actions

export default addToCard.reducer