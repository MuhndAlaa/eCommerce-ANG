import { WishAction } from "./wishlist.action";

export function wishlistReducer(state = [], action: WishAction) {
    switch (action.type) {
        case "ADD_PRODUCT":
            if(checkProduct(state , action.payload)){
                let updatedState1 = state.filter((elem) => elem.id != action.payload.id)
                return updatedState1;
            }else{
                let updatedState = [...state];
                updatedState.push(action.payload);
                return updatedState;
            }
            
        case "REMOVE_PRODUCT":
            state = state.filter((elem) => elem.id != action.payload)
            return state;
        default:
            return state;
    }
}

function checkProduct(products , product){
    for(let elem of products){
        if(elem.id == product.id) return true
    }
    return false
}