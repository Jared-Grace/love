import { function_current_get } from "./function_current_get.mjs";
import { function_identifier_replace_lambda } from "./function_identifier_replace_lambda.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_identifier_replace(
  identifier_name,
  replacement,
) {
  "Two arguments, because the function edited is the current one rather than one you name. A third argument means the twin that takes the function name was wanted, and without this check that third word is dropped in silence and the edit lands in whichever file someone else made current.";
  arguments_assert(arguments, 2);
  let f_name = await function_current_get();
  let lambda2 = function_identifier_replace_lambda(identifier_name, replacement);
  let v2 = await function_transform(f_name, lambda2);
  return v2;
}
