import { reply_on_match_property_multiple_lambda } from "../../../love/public/src/reply_on_match_property_multiple_lambda.mjs";
import { reply_on_match_output_multiple_lambda } from "../../../love/public/src/reply_on_match_output_multiple_lambda.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export function reply_on_match_output_codes_multiple(fn_a, outputs, codes) {
  marker("1");
  assert_arguments(arguments, 3);
  let on_match_outputs = reply_on_match_output_multiple_lambda(outputs);
  const property_name = "codes";
  let on_match_codes = reply_on_match_property_multiple_lambda(
    property_name,
    codes,
  );
  let fn = reply_on_match(fn_a, [on_match_outputs]);
  return fn;
}
