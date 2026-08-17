import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_lengths_turns_unspent } from "./g_arc_lengths_turns_unspent.mjs";
import { property_get } from "./property_get.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
export async function g_arc_lengths_next(chapter, settings) {
  arguments_assert(arguments, 2);
  let r2 = await g_arc_lengths_turns_unspent(chapter, settings);
  let turns_unspent = property_get(r2, "turns_unspent");
  let lengths = property_get(r2, "lengths");
  let shortest = property_get(r2, "shortest");
  let cap = property_get(r2, "cap");
  let arc_turns = property_get(r2, "arc_turns");
  let question_turns = property_get(r2, "question_turns");
  let matches = property_get(r2, "matches");
  let lines = property_get(r2, "lines");
  ("Now nudge the lengths, so a cast does not read as an arithmetic sequence. Each nudge picks two arcs and moves ONE turn between them, which conserves the budget exactly and cannot change how many people there are - the two properties the descent had and would be a shame to lose. A move that would push either arc outside the range is simply skipped, which is why the count is a number of ATTEMPTS rather than a promise.");
  ("Seeded on the chapter code, so this chapter always lands the same way. Authored content is worked out once and reused by every playthrough, so a run that differed each time would make a change in the output impossible to read.");
  let next = random_seed_generator_from_text(chapter);
  let r = {
    turns_unspent,
    lengths,
    shortest,
    cap,
    arc_turns,
    question_turns,
    matches,
    lines,
    next,
  };
  return r;
}
