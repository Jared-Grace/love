import { list_empty_is } from "./list_empty_is.mjs";
export function list_empty_not_is(body_block) {
  const ne = !list_empty_is(body_block);
  return ne;
}
