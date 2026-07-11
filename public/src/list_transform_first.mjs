import { list_transform_at } from "../../../love/public/src/list_transform_at.mjs";
export function list_transform_first(list, lambda) {
  list_transform_at(list, 0, lambda);
}
