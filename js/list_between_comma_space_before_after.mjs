import { list_between_before_after_generic } from "./list_between_before_after_generic.mjs";
import { list_between_comma_space } from "./list_between_comma_space.mjs";
export function list_between_comma_space_before_after(before, list, after) {
  let mapper = list_between_comma_space;
  let concated = list_between_before_after_generic(mapper, list, before, after);
  return concated;
}
