import { command_line_read } from "./command_line_read.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_shared_delete_confirm(name) {
  let prompt = text_combine_multiple([
    'Do you really want to delete the app "',
    name,
    '"? If so, type "yes, delete": ',
  ]);
  let answer = await command_line_read(prompt);
  let confirmed = answer === "yes, delete";
  return confirmed;
}
