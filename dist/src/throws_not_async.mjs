export async function throws_not_async(lambda) {
  let success = null;
  try {
    await lambda();
    success = true;
  } catch (e) {
    success = false;
  }
  return success;
}
