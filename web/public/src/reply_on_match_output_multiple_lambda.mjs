import { reply_on_match_property_multiple_lambda } from "../../../love/public/src/reply_on_match_property_multiple_lambda.mjs";
import { reply_property_outputs } from "../../../love/public/src/reply_property_outputs.mjs";
export function reply_on_match_output_multiple_lambda(items) {
  const property_name = reply_property_outputs();
  let v = reply_on_match_property_multiple_lambda(property_name, items);
  return v;
}
