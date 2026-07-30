import { arguments_assert } from "./arguments_assert.mjs";
import { js_assert_json_get_lambda_collapse } from "./js_assert_json_get_lambda_collapse.mjs";
import { greater_than_equal_assert_json } from "./greater_than_equal_assert_json.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_assert_json_get_lambda_collapse(f_name) {
  arguments_assert(arguments, 1);
  ("unwraps one function's hand-written lazy payload onto the eager check, and refuses a function that had none to unwrap");
  ("The refusal is why this is a command of its own rather than a line inside the");
  ("sweep. Named by hand it can be pointed at the wrong function, and a function with");
  ("nothing to unwrap would otherwise be rewritten byte-for-byte and committed under a");
  ("message saying a wrapper had been removed.");
  let moved = 0;
  function lambda(ast) {
    moved = js_assert_json_get_lambda_collapse(ast);
    greater_than_equal_assert_json(moved, 1, {
      hint: "nothing in this function hands a wrapper to the lazy check whose whole body is one record of plain names — is the wrapper computing something? then the waiting is the point of it and it should stay",
      f_name,
    });
  }
  let r = await function_transform(f_name, lambda);
  let told = {
    f_name,
    moved,
  };
  return told;
}
