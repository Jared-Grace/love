export function throws(lambda) {
  let success = true;
  let result = null;
  try {
    lambda();
    success = false;
  } catch (e) {
    result = e;
  }
  return e;
}
