import { function_eachify_transform } from "./function_eachify_transform.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
export async function function_eachify(fn_name) {
  let output = await function_eachify_transform(
    fn_name,
    each_name_get,
    f_name_multiple_get,
  );
  return output;
  function each_name_get(async_is) {
    let each_name = async_is ? each_async.name : each.name;
    return each_name;
  }
  function f_name_multiple_get(unaliased) {
    let f_name_multiple = function_name_combine(unaliased, "multiple");
    return f_name_multiple;
  }
}
