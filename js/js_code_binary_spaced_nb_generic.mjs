import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_binary_spaced_nb_generic(
  mapper,
  left,
  operator_js,
  right,
) {
  let parts = mapper([left, operator_js, right]);
  let combined = text_combine_multiple(parts);
  return combined;
}
