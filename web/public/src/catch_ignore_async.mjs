export async function catch_ignore_async(lambda) {
  try {
    let r = await lambda();
  } catch (e) {}
}
