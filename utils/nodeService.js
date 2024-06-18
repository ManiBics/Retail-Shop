const fetchNode = async (path, options = {}) => {
  const host = process.env.NODE_HOST;
  const base = process.env.NODE_BASE;

  const url = `${host}${base}${path}`;

  const headers = {
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const data = await response.json();
  return data;
};

export default fetchNode;
