import { json_to } from "./json_to.mjs";
import { log } from "./log.mjs";
export async function catch_only_async(lambda, message_fragment) {
  try {
    await lambda();
  } catch (e) {
    let json = json_to(e);
    const message = e.message;
    if (
      !message.includes(message_fragment) &&
      !json.includes(message_fragment)
    ) {
      throw e;
    }
  }
}
