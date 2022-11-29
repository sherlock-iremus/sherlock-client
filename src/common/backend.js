export const authenticatedRequest = async (url, method, body) => {
  let request = {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: body,
    cache: 'no-cache'
  }
  return fetch(process.env.REACT_APP_SHERLOCK_BACKEND_ENDPOINT + url, request);
}

export const getUserDetails = async () => {
  return authenticatedRequest("/sherlock/api/user/config", "GET");
}

export const sendUserDetails = async (emoji, color) => {
  return authenticatedRequest("/sherlock/api/user/config", "PUT", JSON.stringify({emoji, color}));
}

export const postE13 = async (p140_assigned_attribute_to, p141_assigned, p177_assigned_property_of_type, p141_type) => {
  return await authenticatedRequest("/sherlock/api/e13", "POST", JSON.stringify({
    "p140_assigned_attribute_to": p140_assigned_attribute_to,
    "p177_assigned_property_of_type": p177_assigned_property_of_type,
    "p141_type": p141_type,
    "p141_assigned": p141_assigned,
  }));
}