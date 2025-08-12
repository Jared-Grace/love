import { list_single } from "./list_single.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_visit_match(ast, search) {
  let matches = list_adder((la) => {
    js_visit(ast, (v) => {
      let { node } = v;
      if (node === search) {
        la(v);
      }
    });
  });
  let v_match = list_single(matches);
  return v_match;
}
