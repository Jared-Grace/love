export async function catch_ignore_async(lambda) {
  let r = null;
  try {
    r = await lambda();
  } catch (e) {}
  return r;
}
