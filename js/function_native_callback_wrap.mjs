import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
import { js_native_callback_imported_wrap } from "./js_native_callback_imported_wrap.mjs";
export async function function_native_callback_wrap(f_name) {
  arguments_assert(arguments, 1);
  ("in one function, hands each imported name given straight to a native array method as its callback to a lambda of one argument instead");
  ("it does not check what each callback takes - the repair that finds the functions does - so run by itself it is for a function whose callbacks are known to read nothing past their first argument");
  let output = await function_transform_auto(
    f_name,
    js_native_callback_imported_wrap,
  );
  return output;
}
