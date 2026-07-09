import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
import { list_between_comma_space } from "../../../love/public/src/list_between_comma_space.mjs";
export function list_between_comma_space_before_after(before, list, after) {
  let mapped = list_between_comma_space(list);
  const lists = [before, mapped, after];
  let squashed = list_concat_multiple(lists);
  return squashed;
}
