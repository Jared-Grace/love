export async function throws(lambda) {
  let success = null;
  try {
    await lambda();
    success = true;
  } catch (e) {
    success = false;
  }
  return success;
}
