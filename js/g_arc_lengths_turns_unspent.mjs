import { arguments_assert } from "./arguments_assert.mjs";
import { g_sermon_chapter_lines } from "./g_sermon_chapter_lines.mjs";
import { g_passage_match_count } from "./g_passage_match_count.mjs";
import { multiply_divide_round } from "./multiply_divide_round.mjs";
import { subtract } from "./subtract.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { less_than } from "./less_than.mjs";
import { math_min } from "./math_min.mjs";
import { list_add } from "./list_add.mjs";
export async function g_arc_lengths_turns_unspent(chapter, settings) {
  arguments_assert(arguments, 2);
  let lines = await g_sermon_chapter_lines(chapter);
  let matches = g_passage_match_count(lines);
  let question_turns = multiply_divide_round(
    matches,
    settings.question_matches_percent,
    100,
  );
  let arc_turns = subtract(matches, question_turns);
  let cap = divide_floor(arc_turns, 4);
  let shortest = settings.conversation_turns_low;
  let step = settings.conversation_turns_mean;
  let lengths = [];
  let remaining = arc_turns;
  let length = cap;
  for (let emitted = 0; less_than(emitted, arc_turns); emitted++) {
    if (less_than(remaining, shortest)) {
      break;
    }
    let take = math_min(length, remaining);
    list_add(lengths, take);
    remaining = subtract(remaining, take);
    length = subtract(length, step);
    if (less_than(length, shortest)) {
      length = cap;
    }
  }
  ("Whatever is left is under the shortest conversation, so it cannot be an arc. It goes to the question pool, which has no length floor because a question is one turn.");
  let turns_unspent = remaining;
  let r = {
    lines,
    matches,
    question_turns,
    arc_turns,
    cap,
    shortest,
    lengths,
    turns_unspent,
  };
  return r;
}
