import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
export function ebible_verse_gap_name(chapter_code, number) {
  "$plain chapter_code";
  "$plain number";
  "One name for a verse a chapter leaves out, so that everything asking about the same gap spells it the same way.";
  arguments_assert(arguments, 2);
  ("A gap is a pair - which chapter, and which number inside it - and a pair cannot be looked up in a list. Joining the two into one word is what lets a known-and-answered gap be recognised by membership rather than by a comparison written out again at every place that asks.");
  ("The chapter code is left exactly as the pages spell it, padding and all, because the only thing this name has to do is agree with itself. PSA029 and PSA29 would be two names for one chapter, and choosing between them here would make this the place that decides how chapters are spelled, which is not its business.");
  let name = list_join_colon([chapter_code, number]);
  return name;
}
