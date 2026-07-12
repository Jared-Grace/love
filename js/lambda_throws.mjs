export function lambda_throws(lambda) {
  let throws = false;
  let result = null;
  try {
    lambda();
  } catch (e) {
    throws = true;
    result = e;
  }
  let r = {
    throws,
    result,
  };
  return r;
}
