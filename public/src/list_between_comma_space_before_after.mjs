import { list_concat_multiple_squash } from "../../../love/public/src/list_concat_multiple_squash.mjs";
import { list_between_comma_space } from "../../../love/public/src/list_between_comma_space.mjs";
export function list_between_comma_space_before_after(ds, before, after) {
  let mapped = list_between_comma_space(ds);
  const lists = [before, mapped, after];
  let squashed = list_concat_multiple_squash(lists);
  return squashed;
}
