import { function_eachify_transform } from "./function_eachify_transform.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { assert_message } from "./assert_message.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
export async function function_eachify_unordered(fn_name) {
  let output = await function_eachify_transform(
    fn_name,
    each_name_get,
    f_name_multiple_get,
  );
  return output;
  function each_name_get(async_is) {
    assert_message(
      async_is,
      "function_eachify_unordered requires an async function: unordering a synchronous function is meaningless - make the function async or use function_eachify",
    );
    let each_name = each_unordered_async.name;
    return each_name;
  }
  function f_name_multiple_get(unaliased) {
    let f_name_multiple = function_name_combine_multiple([
      unaliased,
      "multiple",
      "unordered",
    ]);
    return f_name_multiple;
  }
}
