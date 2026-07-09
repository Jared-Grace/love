import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
export function list_between_before_after_generic(mapper, list, before, after) {
  let mapped = mapper(list);
  const lists = [before, mapped, after];
  let concated = list_concat_multiple(lists);
  return concated;
}
