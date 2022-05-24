const postRequest = async (
  url: string,
  // postBody: {
  //   name: string,
  //   email: string,
  //   body: string
  // },
  postBody: any,
) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(postBody),
  });
  const body = await res.json();

  return body;
};

export default postRequest;
