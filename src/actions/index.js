export const addTodo = (shop) => {
    
    return{
        type: "ADD_TODO",
        payload: {
            data: shop
        }
    }
}

export const deleteTodo = (id) => {
    console.log(id)
    return{
        type: "DELETE_TODO",
        payload: {
            id: id
        }
    }
}
