import { list_adder } from "./list_adder.mjs";
import { each_async } from "./each_async.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export async function js_visit_type_each_async(ast, type, lambda) {
  let vs = list_adder((la) => js_visit_type(ast, type, la));
  await each_async(vs, lambda);
}
