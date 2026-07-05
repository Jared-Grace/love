import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_between_space_nb } from "../../../love/public/src/list_between_space_nb.mjs";
export function js_code_binary_spaced_nb(left, operator_js, right) {
  let mapper = list_between_space_nb;
  let parts = mapper([left, operator_js, right]);
  let combined = text_combine_multiple(parts);
  return combined;
}
