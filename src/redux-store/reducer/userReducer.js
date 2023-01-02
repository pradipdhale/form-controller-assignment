import { INITIALIZE_USERS } from "../actions/userAction";

const initialState = {loading:true,data:[]};

const userReducer = (state = initialState,action) => {
    if(action.type === INITIALIZE_USERS){
      return{
          data:action.payload,
          loading:false,
      }
    }else{
      return state;
    }
  }

  export default userReducer;