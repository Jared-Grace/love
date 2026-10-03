import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function app_message_private_relative_is(relative) {
  "Whether a file under the messages folder is a message: one folder per person, one JSON file per message, so exactly two steps deep and ending in .json.";
  ("The same folder also holds things that are not messages. Phone photos sit two steps deep as pictures, and receipts sit four steps deep with JSON of their own. Reading every file as a message threw on the first picture and stopped the whole reading, which turned ",
    fn_name("messages_real_quoted_gate_run"),
    " red and blocked every deploy.");
  arguments_assert(arguments, 1);
  let parts = text_split(relative, "/");
  let two = list_size_2(parts);
  if (not(two)) {
    return false;
  }
  let json = text_ends_with(relative, ".json");
  return json;
}
