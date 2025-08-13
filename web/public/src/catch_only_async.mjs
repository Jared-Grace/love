export async function catch_only_async(lambda, message_fragment) {
  try {
    await lambda();
  } catch (e) {
    if (!e.message.includes(message_fragment)) {
      throw e;
    }
  }
}
