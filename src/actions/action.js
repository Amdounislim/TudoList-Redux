export const ADD_TODO = "ADD_TODO";
export const addtodo = (text) => {
    return ({
        type: ADD_TODO,
        text
    })
}  