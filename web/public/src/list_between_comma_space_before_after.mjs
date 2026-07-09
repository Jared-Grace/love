import { list_between_before_after_generic } from "../../../love/public/src/list_between_before_after_generic.mjs";
import { list_between_comma_space } from "../../../love/public/src/list_between_comma_space.mjs";
export function list_between_comma_space_before_after(before, list, after) {
  let mapper = list_between_comma_space;
  let squashed = list_between_before_after_generic(mapper, list, before, after);
  return squashed;
}
