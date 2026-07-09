import { list_between_space } from "../../../love/public/src/list_between_space.mjs";
import { list_between_before_after_generic } from "../../../love/public/src/list_between_before_after_generic.mjs";
export function list_between_space_before_after(before, list, after) {
  let mapper = list_between_space;
  let concated = list_between_before_after_generic(mapper, list, before, after);
  return concated;
}
