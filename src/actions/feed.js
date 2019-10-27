export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';

export const FETCH_CALL_DETAILS = 'FETCH_CALL_DETAILS';
export const RECEIVE_CALL_DETAILS = 'RECEIVE_CALL_DETAILS';

export function fetchActivities() {
  return { type: FETCH_ACTIVITIES };
}

export function receiveActivities(payload) {
  return {
    type: RECEIVE_ACTIVITIES,
    payload,
  };
}

export function fetchCallDetails() {
  return { type: FETCH_CALL_DETAILS };
}

export function receiveCallDetails(payload) {
  return {
    type: RECEIVE_CALL_DETAILS,
    payload,
  };
}
