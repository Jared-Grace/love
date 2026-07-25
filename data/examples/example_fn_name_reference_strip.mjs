import { js_fn_name_references_to_calls } from "../../js/js_fn_name_references_to_calls.mjs";
import { fn_name } from "../../js/fn_name.mjs";
import { list_size } from "../../js/list_size.mjs";
export const example = {
  fn: js_fn_name_references_to_calls.name,
  args: [],
  kind: "transform",
  title: "Strip a name-only dependency, for web bundling",
  note: [
    "By default a fn's name-as-a-string is written ",
    { code: "list_size.name" },
    " — clickable in the editor, but it imports ",
    { fn: list_size.name },
    " and so drags its whole dependency tree into any web bundle. When only the name is needed, ",
    { fn: js_fn_name_references_to_calls.name },
    " rewrites it to the dependency-free marker ",
    { fn: fn_name.name, call: true },
    ", then imports are auto-fixed: the unused ",
    { fn: list_size.name },
    " import is dropped and the marker's is added. Same rename-safety, no bundle bloat.",
  ],
  before: `import { list_size } from "./list_size.mjs";
export function label() {
  let name = list_size.name;
  return name;
}`,
  after: `import { fn_name } from "./fn_name.mjs";
export function label() {
  let name = fn_name("list_size");
  return name;
}`,
};
