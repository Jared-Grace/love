export async function catch_ignore_async(lambda) {
  try {
    let r = null;
    r = await lambda();
  } catch (e) {}
}
