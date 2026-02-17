import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
export function list_slice_end_curried_right(offset) {
  return function list_slice_end_curried_right_result(list) {
    return list_slice_end(list, offset);
  };
}
