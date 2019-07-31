import { ADD_TODO } from "../actions/action"

const initialState = {
    articles: []
  };

const reducer = (state=initialState, action) => {
      switch (action.type){
          case ADD_TODO:
              console.log(action.text)
              return Object.assign({}, state, {
                  articles: state.articles.concat(action.text)
              })
      }
      return state
  }

  export default reducer