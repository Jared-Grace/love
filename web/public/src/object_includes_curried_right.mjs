import { object_includes } from "../../../love/public/src/object_includes.mjs";
export function object_includes_curried_right(clicked_coordinates) {
  let r = function object_includes_curried_right_result(npc) {
    let e = object_includes(npc, clicked_coordinates);
    return e;
  };
  return r;
}
