import { js_selects_span_move_after } from "../../js/js_selects_span_move_after.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
export const example = {
  fn: js_selects_span_move_after.name,
  select: js_find_declaration_named.name,
  select_args_multiple: ["parsed", "checked", "opened"],
  args: [],
  kind: "transform",
  title: "Move a run of lines to sit after another line",
  note: [
    "Three addresses rather than two, named exactly the same way — where the run starts, where it ends, and the line it should follow. Nothing about the seam had to change to reach three: one selector runs once per name, so the count of names is the count of nodes.",
    " ",
    { fn: js_selects_span_move_after.name },
    " is the one-line move with the run left whole instead of cut to a single line, and it inherits that verb's guard unchanged — the same question asked of every line in the run at once: does it cross anything it reads, or anything that reads it.",
    " Two lines that belong together are lifted out from behind an unrelated one and put where they are used.",
  ],
  before: `export function f(source) {
  let parsed = js_parse(source);
  let checked = js_check(parsed);
  let opened = file_open(source);
  return [opened, checked];
}`,
  after: `export function f(source) {
  let opened = file_open(source);
  let parsed = js_parse(source);
  let checked = js_check(parsed);
  return [opened, checked];
}`,
};
