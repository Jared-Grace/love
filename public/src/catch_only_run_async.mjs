import { marker } from "./marker.mjs";
import { not } from "./not.mjs";
import { json_to } from "./json_to.mjs";
export async function catch_only_run_async(lambda, message_fragment) {
  marker("1");
  try {
    await lambda();
  } catch (e) {
    let json = json_to(e);
    const message = e.message;
    let a = message.includes(message_fragment);
    let a2 = json.includes(message_fragment);
    if (not(a) && not(a2)) {
      throw e;
    }
  }
}
