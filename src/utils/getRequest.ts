export const getRequest = async ( url: string ) => {
  const res = await fetch(url);
  const body = await res.json();

  return body;
}