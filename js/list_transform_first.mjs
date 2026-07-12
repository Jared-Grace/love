import { list_transform_at } from "./list_transform_at.mjs";
export function list_transform_first(list, lambda2) {
  list_transform_at(list, 0, lambda2);
}
