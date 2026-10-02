import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_is } from "./list_is.mjs";
import { not } from "./not.mjs";
import { number_is } from "./number_is.mjs";
export function lyric_video_document_times_none_is(document) {
  arguments_assert(arguments, 1);
  ("$plain document");
  ("Whether a timing document holds no moments anywhere, so that writing times into it can take nothing from anybody.");
  ("★ THIS IS THE THIRD WAY OF NOT BEING SOMEBODY'S WORK, AND IT WAS THE ONE NOTHING ASKED. A document drafted with an even spread is recognised by its arithmetic and a machine's work by the word it carries about itself, and between those two readings a document that has never been near the tapping desk at all fell through: it has no spread to read, so it is not a draft, and no mark, so it is read as a person's. Measured 2026-10-02: sixteen psalms sat that way - Psalm 90 through 104 and 136, forty one lines in one and eighty seven in another and nothing timed in any of them - and the only command able to listen to them refused every one, saying a person had timed it and their ear was better.");
  ("★ ASKING IT IS SAFE WHERE NARROWING THE GUARD GENERALLY IS NOT. The guard reads silence as a person's because the cost of guessing wrong that way is an evening of somebody's listening that nothing can reconstruct, against a minute of a machine's listening done twice. A document with no moments in it has no evening in it, so the costly side of that trade is empty and the trade stops being a trade. That is read off the guard's own reason rather than decided here.");
  ("A line left holding nothing where its moments would go counts the same as a line that never had the words for them, because what is being asked is what there is to lose and both have nothing. One line still carrying a moment is the opposite answer and not a small one - that is somebody's afternoon interrupted, which the spread reading already refuses for exactly this reason.");
  ("A document holding no lines at all answers no. It has no moments either, so the words of the question would say yes, and the answer is still no: a document with nothing in it is not the state this was written for, and where the question is which way to guess, the safe direction stays the safe direction.");
  let lines = document.lines;
  let listed = list_is(lines);
  if (not(listed)) {
    return false;
  }
  let empty = less_than(lines.length, 1);
  if (empty) {
    return false;
  }
  for (let line of lines) {
    let started = number_is(line.start);
    let ended = number_is(line.end);
    if (started || ended) {
      return false;
    }
  }
  return true;
}
