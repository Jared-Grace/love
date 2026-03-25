import { object_wrap } from "../../../love/public/src/object_wrap.mjs";
export function object_wrap_curried_right(property_name) {
  let r = function object_wrap_curried_right_result(goal) {
    let r2 = object_wrap(goal, property_name);
    return r2;
  };
  return r;
}
