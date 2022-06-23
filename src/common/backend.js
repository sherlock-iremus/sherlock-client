export const authenticatedRequest = async (url, method, body) => {
  let request = {
    method: method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      //This bearer is useful in a development context, but is sent as cookie in production.
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbnRvaW5lIExlYnJ1biIsIm5iZiI6MTY1NTk3NjI1OCwicm9sZXMiOltdLCJpc3MiOiJzaGVybG9jayIsIm9yY2lkIjoiMDAwMC0wMDAzLTIwNDgtOTM3OSIsImV4cCI6MTY1NTk3OTg1OCwiaWF0IjoxNjU1OTc2MjU4LCJ1dWlkIjoiNzBhYjIwNzYtMDIxOC00N2I4LTlkOGMtNzU1ZjM0NzFlMTQ1In0.0ESJ7SJxbkDLgihO7JWVJinY3_oqrPO_z_GCumzhaX4'
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

export const postE13 = async (p140_assigned_attribute_to, p141_assigned, p177_assigned_property_type, p141_type) => {
  return await authenticatedRequest("/sherlock/api/e13", "POST", JSON.stringify({
    "p140_assigned_attribute_to": p140_assigned_attribute_to,
    "p177_assigned_property_type": p177_assigned_property_type,
    "p141_type": p141_type,
    "p141_assigned": p141_assigned,
  }));
}