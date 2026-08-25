import { js_call_callee_name_set } from "../../../js/js_call_callee_name_set.mjs";
import { js_call_named_find } from "../../../js/js_call_named_find.mjs";
import { examples_data_write_fresh } from "../../../js/examples_data_write_fresh.mjs";
export const example = {
  fn: js_call_callee_name_set.name,
  select: js_call_named_find.name,
  select_args: ["examples_data_write"],
  args: ["examples_data_write_fresh"],
  kind: "transform",
  title: "Point a call at a different function, leaving the line where it is",
  note: [
    "A step becoming a step done differently is one call changing its mind about who answers it — here, ",
    { fn: examples_data_write_fresh.name },
    " asks for the same file to be written from a process that has loaded nothing yet. ",
    { fn: js_call_callee_name_set.name },
    " leaves the line, its name, and its arguments exactly as written and changes only which function runs. Saying it as a deletion and a new line would be two edits, either of which can land alone. The two functions are made to agree on how many arguments they take, because the arguments stay as they were: a swap to something taking one fewer would parse, print, read correctly, and be wrong from the first run.",
  ],
  before: `export async function f() {
  let written = await examples_data_write();
  return written;
}`,
  after: `export async function f() {
  let written = await examples_data_write_fresh();
  return written;
}`,
};
