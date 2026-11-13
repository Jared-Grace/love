import { arguments_assert } from "./arguments_assert.mjs";
import { dev_message_log_path } from "./dev_message_log_path.mjs";
import { dev_log_add } from "./dev_log_add.mjs";
export async function dev_message_log_add(message, where) {
  arguments_assert(arguments, 2);
  ("Writes down one message sent from the message box of a page served on the local address, which never reaches the real inbox.");
  ("where is the address of the page that sent it.");
  let f_path = dev_message_log_path();
  let line = {
    message,
    where,
  };
  await dev_log_add(f_path, line);
  let r = {
    written: true,
  };
  return r;
}
