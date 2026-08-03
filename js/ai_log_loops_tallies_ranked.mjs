import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_negative } from "./property_negative.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function ai_log_loops_tallies_ranked(spent, loops, longest, identical) {
  arguments_assert(arguments, 4);
  ("The ranking of steps built from the four tallies a walk over the log leaves behind - what was spent on each step, how many runs it had, its longest run, and what its identical reruns cost.");
  ("Cut out of the walk it used to end, because the walk was 82 lines of work and this is the half of it that reads a finished tally rather than building one. Both halves are shorter than the question they answer now.");
  let ranked = [];
  let steps = object_property_names(spent);
  for (let step of steps) {
    let commands_saved = property_get(spent, step);
    let times = property_get(loops, step);
    let run_longest = property_get(longest, step);
    let repeated = property_or_null(identical, step);
    let none = null_is(repeated);
    if (none) {
      repeated = 0;
    }
    list_add(ranked, {
      step,
      commands_saved,
      loops: times,
      longest: run_longest,
      repeated_identical: repeated,
    });
  }
  ("A step whose every run repeated the identical command has nothing to build, so it ranks at nothing - but it is still listed, because a poller spending a hundred thousand process starts is worth somebody seeing even though no sweep would touch it.");
  let steps_identical = object_property_names(identical);
  for (let step of steps_identical) {
    let ranked_already = property_exists(spent, step);
    if (ranked_already) {
      continue;
    }
    let repeated = property_get(identical, step);
    list_add(ranked, {
      step,
      commands_saved: 0,
      loops: 0,
      longest: 0,
      repeated_identical: repeated,
    });
  }
  function lambda_rank(record) {
    let ordered = property_negative(record, "commands_saved");
    return ordered;
  }
  list_sort_number_mapper(ranked, lambda_rank);
  return ranked;
}
