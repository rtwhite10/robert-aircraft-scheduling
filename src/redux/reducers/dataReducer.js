
const initialState = {
  plane_data: null,
  flight_data: null,
  loading: null
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PLANE_DATA':{ 
      return {
        ...state,
        plane_data: action.payload,
        loading: false
      }}
    case 'ADD_FLIGHT_DATA':{ 
      return {
        ...state,
        flight_data: action.payload,
        loading: false
      }}
    case 'ERROR':{ 
      return {
        ...state,
        error: action.payload,
        loading: false
      }}
    default: 
      return state;
  }
}