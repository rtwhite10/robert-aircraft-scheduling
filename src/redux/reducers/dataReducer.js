
const initialState = {
  plane_data: null,
  flight_data: null,
  rotation: [],
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
    case 'UPDATE_COLUMN_ORDER': {
      const {destination, source, droppableId} = action.payload
      const data = state[droppableId === 'flights' ? 'flight_data' : 'rotation']
      const removedItem = data.splice(source.index, 1)
      data.splice(destination.index, 0, removedItem[0])
      return {
        ...state,
        flight_data: data
      }
    }
    case 'ADD_FLIGHT_ROTATION': {
      const {destination, source} = action.payload
      const flight_data = state.flight_data
      const rotation = state.rotation
      const removedFlight = flight_data.splice(source.index, 1)
      rotation.splice(destination.index, 0, removedFlight[0])

      return {
        ...state,
        flight_data,
        rotation
      }
    }
    case 'ADD_ROTATION_TO_FLIGHTS': {
      const {destination, source} = action.payload
      const flight_data = state.flight_data
      const rotation = state.rotation
      const removedFlight = rotation.splice(source.index, 1)
      flight_data.splice(destination.index, 0, removedFlight[0])
      return {
        ...state,
        flight_data,
        rotation
      }
    }
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