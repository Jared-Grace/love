export async function catch_null_async(lambda) {
  let r = null;
  try {
    r = await lambda();
  } catch (e) {}
  return r;
}
