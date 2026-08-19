import { arguments_assert } from "./arguments_assert.mjs";
import { function_inside_shapes } from "./function_inside_shapes.mjs";
import { functions_inside_duplicates_size } from "./functions_inside_duplicates_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
export async function functions_inside_shapes_shared(names_comma) {
  "$plain names_comma";
  "The runs of work that every one of these functions holds - the shared code itself, written out with the private names taken away.";
  "The sweep that finds groups says who has met and not what they have in common, and the report that prints the run prints every group in the repo along with it. Asked of the names of one group, this is the one thing a person judging that group needs: two functions sharing four lines is a finding only once the four lines are in front of you.";
  "A run has to be held by all of them rather than by some, because that is what made them a group in the first place.";
  arguments_assert(arguments, 1);
  let size = functions_inside_duplicates_size();
  async function shapes_of(f_name) {
    let shapes = await function_inside_shapes(f_name, size);
    return shapes;
  }
  let every = await text_split_comma_map_async(names_comma, shapes_of);
  let first = list_first(every);
  let shared = [];
  for (let shape of first) {
    function holds_is(shapes) {
      let held = list_includes(shapes, shape);
      return held;
    }
    let all_hold = list_all_is(every, holds_is);
    if (all_hold) {
      list_add(shared, shape);
    }
  }
  return shared;
}
