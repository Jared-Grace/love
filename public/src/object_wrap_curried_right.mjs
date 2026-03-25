import { object_wrap } from "../../../love/public/src/object_wrap.mjs";
export function object_wrap_curried_right(property_name) {
  return function object_wrap_curried_right_result(goal) {
    return object_wrap(goal, property_name);
  };
}
