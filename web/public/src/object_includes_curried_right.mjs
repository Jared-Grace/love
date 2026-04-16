import { object_includes } from "../../../love/public/src/object_includes.mjs";
export function object_includes_curried_right(item) {
  let r = function object_includes_curried_right_result(object) {
    let e = object_includes(object, item);
    return e;
  };
  return r;
}
