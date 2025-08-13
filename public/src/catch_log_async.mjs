import { identity } from "./identity.mjs";
import { log } from "./log.mjs";
import { log_keep } from "./log_keep.mjs";
export async function catch_log_async(lambda) {
  try {
    await lambda();
  } catch (e) {
    log_keep(e);
  }
  return;
  let message = message_get(e);
  log_keep(message);
  message_get = identity;
}
