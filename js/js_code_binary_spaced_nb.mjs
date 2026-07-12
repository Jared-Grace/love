import { js_code_binary_spaced_nb_generic } from "./js_code_binary_spaced_nb_generic.mjs";
import { list_between_space_nb } from "./list_between_space_nb.mjs";
export function js_code_binary_spaced_nb(left, operator, right) {
  let mapper = list_between_space_nb;
  let combined = js_code_binary_spaced_nb_generic(
    mapper,
    left,
    operator,
    right,
  );
  return combined;
}
