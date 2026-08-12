import { js_assigned_names } from "./js_assigned_names.mjs";
import { js_statements_declared_names } from "./js_statements_declared_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
export function js_statements_outer_assign_assert(statements, f_name_new) {
  "$plain f_name_new";
  "Refuses a run of lines that gives a new value to a name it did not itself bring into being, and lets every other run through";
  "Such a name belongs to the block the run is leaving. Moved into a function of its own the writing lands on a parameter, which is a copy that dies with the call, and everything behind goes on reading the value the name held before the run - the failure with no error, because the lines come out looking exactly right.";
  "Measured, before this stood: a mark walking through a pool of people was brought into being above a loop, moved along inside the run that was cut, and read at the top of every turn round. The cut left the mark standing still, so every turn drew from the top of the pool, the same faces were met again in plant after plant, and the count of people placed fell from two hundred and forty three to two hundred and thirty four. Nothing went red. It was caught by comparing a run of the whole thing against one written down beforehand, which is not a thing anybody does twice.";
  "This is the mirror of the question about what a run hands back, and the two look alike enough to be mistaken for each other. That one asks which names the run brings into being that the lines behind still read; this one asks which names the run reaches back into. A name that was never born in the run cannot be found by asking what the run gives birth to, which is exactly why the first question could not see this and a second one had to be asked.";
  "Every such write is refused rather than only the ones that turn out to matter, because whether it matters cannot be settled by reading the lines behind. A run inside a loop reaches its own first line again on the next turn round, so the reading is not behind the run at all - and that is the case that was measured. A refusal costs a message and a second choice of ends; being wrong here costs a change nobody sees.";
  "Writing through a dot counts as writing to the name before the dot, because that is how the gathering it asks answers. That refuses a little more than it must - changing a field of an object bound above needs no handing back, since the object is shared already - and refusing too much is loud and mendable while refusing too little is silent.";
  let born = js_statements_declared_names(statements);
  let written = list_map_concat_multiple(statements, js_assigned_names);
  let carried = list_difference(written, born);
  list_empty_is_assert_json(carried, {
    hint: "this run of lines gives a new value to a name that was brought into being above it, and a function of its own would give that value to a copy instead - so the lines behind would carry on with the old one. Would you like to choose ends that hold the line where that name was brought into being, or to hand the name back by hand once the run is out?",
    f_name_new,
  });
}
