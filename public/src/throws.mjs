export function throws(lambda) {
  let success = null;
  try {
    lambda();
    success = false;
  } catch (e) {
    success = true;
  }
  return success;
}
