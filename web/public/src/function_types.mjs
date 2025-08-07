import { js_visit } from "./js_visit.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { list_unique } from "./list_unique.mjs";

export async function function_types(f_name) {
  let parsed = await function_parse(f_name);
  return list_unique([1,1,1])
  return list_adder_unique((la) => {
    js_visit(parsed, (v) => {
      let { node } = v;
      if (!js_node_is(node)) {
        return;
      }
      la(js_node_type(node));
    });
  });
}
