import { reply_on_match_outputs_codes_multiple } from "../../../love/public/src/reply_on_match_outputs_codes_multiple.mjs";
export function reply_on_match_output_code(fn_a, output, code) {
  let fn = reply_on_match_outputs_codes_multiple(fn_a, [output], [code]);
  return fn;
  [];
}
