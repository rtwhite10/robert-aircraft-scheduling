export function updatedFlightOrderOnDrop(data) {
  return {
      type: 'UPDATE_COLUMN_ORDER',
      payload: data
    }
}

export function updatedRotationOrderOnDrop(data) {
  return {
      type: 'UPDATE_ROTATION_ORDER',
      payload: data
    }
}

export function addFlightToRotation(data) {
  return {
    type: 'ADD_FLIGHT_ROTATION',
    payload: data
  }
}

export function addRotationToFlights(data) {
  return {
    type: 'ADD_ROTATION_TO_FLIGHTS',
    payload: data
  }
}