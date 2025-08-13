import { log } from "./log.mjs";
export async function catch_only_async(lambda, message_fragment) {
  try {
    await lambda();
  } catch (e) {
    log({
      A: e.message,
    });
    if (!e.message.includes(message_fragment)) {
      throw e;
    }
  }
}
