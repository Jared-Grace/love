import { equal } from "./equal.mjs";
import { command_line_read } from "./command_line_read.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function apps_delete_confirm(name) {
  let prompt = text_combine_multiple([
    'Do you really want to delete the app "',
    name,
    '"? If so, type "yes, delete": ',
  ]);
  let answer = await command_line_read(prompt);
  let confirmed = equal(answer, "yes, delete");
  return confirmed;
}
