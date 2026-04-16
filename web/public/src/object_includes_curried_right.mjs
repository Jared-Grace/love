import { object_includes } from "../../../love/public/src/object_includes.mjs";
export function object_includes_curried_right(clicked_coordinates) {
  return function object_includes_curried_right_result(npc) {
    return object_includes(npc, clicked_coordinates);
  };
}
