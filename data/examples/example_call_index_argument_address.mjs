import { js_find_call_argument } from "../../js/js_find_call_argument.mjs";
import { js_object_field_add } from "../../js/js_object_field_add.mjs";
import { js_find_call_index_argument } from "../../js/js_find_call_index_argument.mjs";
export const example = {
  fn: js_object_field_add.name,
  select: js_find_call_index_argument.name,
  select_args: ["list_add", "1", "2"],
  args: ["meaning", "entry", "meaning"],
  kind: "transform",
  title: "Reach a record written straight into a call",
  note: [
    "A record built inline as an argument is bound to no name, so the addresses ",
    "that work off a name cannot reach it at all. This one says where it is the ",
    "only way left: which call, then which thing that call is handed.",
    " ",
    { fn: js_find_call_argument.name },
    " asks the same question of a name called exactly once, and that is the rarer ",
    "half. A gathering function is called wherever something is gathered, so the ",
    "record a report is built out of is almost always handed to a name the file ",
    "already uses several times.",
    " ",
    "The two counts read differently on purpose. Which call is written order from ",
    "nothing, so ",
    { code: "1" },
    " is the second one; which argument is the way a person counts them out loud, ",
    "so ",
    { code: "2" },
    " is the record rather than the list it is going into.",
  ],
  before: `export function f(found) {
  let kept = [];
  for (let entry of found) {
    let names = [];
    list_add(names, entry.name);
    list_add(kept, { name: entry.name });
  }
  return kept;
}`,
  after: `export function f(found) {
  let kept = [];
  for (let entry of found) {
    let names = [];
    list_add(names, entry.name);
    list_add(kept, { name: entry.name, meaning: entry.meaning });
  }
  return kept;
}`,
};
