import { reply_on_match_property_multiple_lambda } from "./reply_on_match_property_multiple_lambda.mjs";
import { reply_on_match_output_multiple_lambda } from "./reply_on_match_output_multiple_lambda.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function reply_on_match_outputs_codes_multiple(fn_a, outputs, codes) {
  arguments_assert(arguments, 3);
  let on_match_outputs = reply_on_match_output_multiple_lambda(outputs);
  let property_name = "codes";
  let on_match_codes = reply_on_match_property_multiple_lambda(
    property_name,
    codes,
  );
  let fn = reply_on_match(fn_a, [on_match_outputs, on_match_codes]);
  return fn;
}
