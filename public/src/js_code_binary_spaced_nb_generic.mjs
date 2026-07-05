import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function js_code_binary_spaced_nb_generic(left, operator_js, right) {
  let parts = mapper([left, operator_js, right]);
  let combined = text_combine_multiple(parts);
  return combined;
}
