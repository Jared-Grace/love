import { identity } from "../../../love/public/src/identity.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export async function catch_log_async(lambda) {
  let message_get = identity;
  try {
    await lambda();
  } catch (e) {
    let message = message_get(e);
    log_keep(message);
  }
}
