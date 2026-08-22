import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { assert_json } from "./assert_json.mjs";
export async function g_arc_written_person_assert(chapter_code, index) {
  "One person's written arc, fetched out of the chapter it was written against, refusing outright if that chapter holds no arc for them.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT REFUSES WHERE THE LOOKUP BENEATH IT ANSWERS NOTHING, and both are right. The lookup serves the writer too, and the writer meets an unwritten person every time it writes a new one - so a refusal worded down there would refuse the ordinary case. Every caller that is READING a person, though, has nothing to read and the same thing to say about it, and that sentence was written out twice.";
  "THE NUMBER ARRIVES ALREADY A NUMBER, because the store spells it as one and text one never matches number one. That comparison does not fail, it simply finds nobody - which reads exactly like a person who was never written - so the turning of a command line's word into a number stays with the caller that has the word.";
  arguments_assert(arguments, 2);
  let arcs = await g_arc_written_chapter(chapter_code);
  let found = g_arc_chapter_person_or_null(arcs, index);
  let there = equal_not(found, null);
  assert_json(there, {
    chapter_code,
    index,
    hint: "no person of that number is written in this chapter",
  });
  return found;
}
