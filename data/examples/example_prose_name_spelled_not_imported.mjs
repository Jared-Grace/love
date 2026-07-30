import { js_strings_add_reference_to_fn_names } from "../../js/js_strings_add_reference_to_fn_names.mjs";
import { fn_name } from "../../js/fn_name.mjs";
import { list_size } from "../../js/list_size.mjs";
export const example = {
  fn: js_strings_add_reference_to_fn_names.name,
  args: [],
  kind: "transform",
  title: "A function named in prose is spelled, not imported",
  note: [
    "A docstring that mentions another function should follow that function's renames, so ",
    { fn: js_strings_add_reference_to_fn_names.name },
    " turns the mention into something the rename machinery can see. It used to reach for the function and ask its name — ",
    { code: "list_size.name" },
    " — which works, but needs ",
    { fn: list_size.name },
    " imported, and an import is a road: everything that function can reach becomes reachable from here on account of a line of prose. One such line put a whole download chain inside a game screen's reach, and where two functions name each other in prose it built an import cycle whose back-reference read undefined at call time, so a screen never drew and said nothing about why.",
    " Now it writes the marker ",
    { fn: fn_name.name, call: true },
    " instead. The word is the same, renames still follow it, and no import is needed at all — the word is still checked, because the gate over spelled names refuses one that no function answers to.",
  ],
  before: `export function label() {
  "the count is asked of list_size";
  return 1;
}`,
  after: `import { fn_name } from "./fn_name.mjs";
export function label() {
  ("the count is asked of ", fn_name("list_size"));
  return 1;
}`,
};
