import { reply_on_match_outputs_codes_multiple } from "../../../love/public/src/reply_on_match_outputs_codes_multiple.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reply_on_match_output_code(fn_a, outputs, codes) {
  marker("1");
  let fn = reply_on_match_outputs_codes_multiple(fn_a, outputs, codes);
  return fn;
}
