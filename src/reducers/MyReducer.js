// import { RECEIVE_API_DATA } from "../actions";

// export default (state = {}, { type, data }) => {
//   switch (type) {
//     case RECEIVE_API_DATA:
//       return data;
//     default:
//       return state;
//   }
// };



import { RECEIVE_API_DATA } from "../actions";

// export default (state = {},  action ) => {
//   switch (action.type) {
//     case RECEIVE_API_DATA:
//       console.log('payload data', action.payload)
//       return {...state,list:action.payload};
     
//     default:
//       return state;
//   }
// };



const IntState={

  infos:[]
}
const infos = (state = IntState, action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      console.log('payload data', action.payload)
          return {...state,infos : action.payload}
      default:
          return state
       
  } 
}
export default infos
