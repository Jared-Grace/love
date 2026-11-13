import { arguments_assert } from "./arguments_assert.mjs";
import { dev_message_log_path } from "./dev_message_log_path.mjs";
import { dev_log_recent } from "./dev_log_recent.mjs";
export async function dev_message_log_recent(count) {
  arguments_assert(arguments, 1);
  ("The newest messages sent from pages served on the local address, newest last.");
  let f_path = dev_message_log_path();
  let r = await dev_log_recent(f_path, count);
  return r;
}
