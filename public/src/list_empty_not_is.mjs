import { list_empty_is } from "./list_empty_is.mjs";
export function list_empty_not_is(list) {
  const ne = !list_empty_is(list);
  return ne;
}
