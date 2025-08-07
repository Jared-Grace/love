import { js_visit } from "./js_visit.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_node_is } from "./js_node_is.mjs";

export async function function_types(f_name) {
  let parsed = await function_parse(f_name);
  js_visit(parsed, (v) => {
    let { node } = v;
    if (!js_node_is(node)) {
      return;
    }
  });
}
