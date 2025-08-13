import { json_to } from "./json_to.mjs";
import { log } from "./log.mjs";
export async function catch_only_async(lambda, message_fragment) {
  try {
    await lambda();
  } catch (e) {
    let message = json_to({
      A: e,
    });
    log(message);
    if (!e.message.includes(message_fragment)) {
      throw e;
    }
  }
}
