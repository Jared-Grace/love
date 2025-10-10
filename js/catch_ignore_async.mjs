export async function catch_ignore_async(lambda) {
  try {
    await lambda();
  } catch (e) {}
}
