import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_url } from "./html_url.mjs";
import { api_read } from "./api_read.mjs";
export async function app_shared_contact_send_local(message) {
  arguments_assert(arguments, 1);
  ("A message written on a page served from this network goes to the local dev server, which writes it down on this computer, rather than into the real inbox beside messages from real people.");
  let where = html_url();
  await api_read(fn_name("dev_message_log_add"), [message, where]);
}
