import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function app_g_dev_tools_open_verify_console_each(message, lines) {
  arguments_assert(arguments, 2);
  let type_word = message.type();
  let message_text = message.text();
  let line = text_combine_multiple([type_word, "  ", message_text]);
  list_add(lines, line);
}
