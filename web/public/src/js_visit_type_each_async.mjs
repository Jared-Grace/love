import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export async function js_visit_type_each_async(ast, type, lambda) {
  function lambda2(la) {
    let v = js_visit_type(ast, type, la);
    return v;
  }
  let vs = list_adder(lambda2);
  await each_async(vs, lambda);
}
