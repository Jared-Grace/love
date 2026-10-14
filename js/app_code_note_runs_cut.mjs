import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { add } from "./add.mjs";
import { text_size } from "./text_size.mjs";
import { math_number_clamp } from "./math_number_clamp.mjs";
import { less_than } from "./less_than.mjs";
import { text_slice } from "./text_slice.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_note_runs_cut(runs, from, to) {
  arguments_assert(arguments, 3);
  ("the runs of a note, as ",
    fn_name("app_code_note_runs"),
    " cuts them, cut again wherever from or to falls inside one, so the characters from to to stand in runs of their own; each run is its text, colour and strength, and then whether it is inside");
  ("So a part of a note - the name in it, or its value - can be drawn as spans of its own, to be hidden and then arrived at, without the note being cut any other way than its colours already cut it.");
  let cut = [];
  let start = 0;
  for (let run of runs) {
    let text = list_get(run, 0);
    let right = text_size(text);
    let end = add(start, right);
    let inside2 = math_number_clamp(from, start, end);
    let inside3 = math_number_clamp(to, start, end);
    let points = [start, inside2, inside3, end];
    for (let i = 0; less_than(i, 3); i++) {
      let a = list_get(points, i);
      let index = add(i, 1);
      let b = list_get(points, index);
      let b2 = less_than(a, b);
      if (not(b2)) {
        continue;
      }
      let from2 = subtract(a, start);
      let to2 = subtract(b, start);
      let piece = text_slice(text, from2, to2);
      let b3 = less_than(a, from);
      let inside = not(b3) && not(less_than(to, b));
      let item = list_get(run, 1);
      let item2 = list_get(run, 2);
      list_add(cut, [piece, item, item2, inside]);
    }
    start = end;
  }
  return cut;
}
