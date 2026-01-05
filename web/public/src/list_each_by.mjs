import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
export function list_each_by(list, lambda, chunk_size) {
  let position = 0;
  while (list_index_is(list, position)) {
    lambda(position);
    position += chunk_size;
  }
  return position;
}
