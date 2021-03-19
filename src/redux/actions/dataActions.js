import axios from 'axios'

export function getPlaneData() {
  return dispatch => {axios.get(`https://infinite-dawn-93085.herokuapp.com/aircrafts`)
    .then((res) => {
      const { data } = res.data
      console.log(data)
      dispatch({
        type: 'ADD_PLANE_DATA',
        payload: data
      })
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        type: 'ERROR',
        payload: err
      })
    })
  }
}

export function getFlightData() {
  return dispatch => {axios.get(`https://infinite-dawn-93085.herokuapp.com/flights `)
    .then((res) => {
      const { data } = res.data
      console.log(data)
      dispatch({
        type: 'ADD_FLIGHT_DATA',
        payload: data
      })
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        type: 'ERROR',
        payload: err
      })
    })
  }
}