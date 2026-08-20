import { arguments_assert } from "./arguments_assert.mjs";
import { object_merge } from "./object_merge.mjs";
import { property_get } from "./property_get.mjs";
export function ebible_chapter_outcome_reasons_merge(reading, outcome) {
  arguments_assert(arguments, 2);
  ("Puts the two words saying why a chapter gave nothing - that the bible holds no such chapter, and that it could not be told - beside a reading taken from that same asking.");
  ("The two travel together or not at all, which is the whole reason they have a name here. A chapter that is not there is a fact about a bible and worth writing down; an ask that never got an answer is a fact about a run, and a reader handed only the first writes a failure of this program into a record that reads as a property of somebody's bible.");
  ("Every reading of a chapter carries them on unchanged, however differently it reads what came back - one keeps the opening verses, another keeps only the numbers - so what is copied over is the same two words and the reading beside them is the caller's own.");
  ("They are merged onto the reading rather than handed back to be spread, because a caller that has to write them out again is a caller free to write out one of them and forget the other, which is the mistake this exists to make unwritable.");
  let absent = property_get(outcome, "absent");
  let unreachable = property_get(outcome, "unreachable");
  let reasons = {
    absent,
    unreachable,
  };
  object_merge(reading, reasons);
}
