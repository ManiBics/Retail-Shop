const fetchApigee = async (path, options = {}) => {
  const host = process.env.APIGEE_HOST;
  const base = process.env.APIGEE_BASE;
  const apiKey = process.env.APIGEE_X_KEY;

  const url = `${host}${base}${path}`;

  const headers = {
    ...options.headers,
    "x-api-key": apiKey,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const data = await response.json();
  return data;
};

export default fetchApigee;
