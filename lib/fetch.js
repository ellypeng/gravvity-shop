export const fetcher = (...args) => {
  // console.log('fetcher args = ', args[0], args[1], args[2]);
  return fetch(...args).then(async (res) => {
    let payload;
    try {
      if (res.status === 204) return null; // 204 does not have body
      payload = await res.json();
    } catch (e) {
      /* noop */
    }
    // console.log('fetcher res = ', JSON.stringify(payload));
    if (res.ok) {
      return payload;
    } else {
      return Promise.reject(payload.error || new Error('Something went wrong'));
    }
  });
};
