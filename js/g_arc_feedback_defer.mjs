import { arguments_assert } from "./arguments_assert.mjs";
import { g_npc_nickname_index } from "./g_npc_nickname_index.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { g_arc_feedback_chapter } from "./g_arc_feedback_chapter.mjs";
import { property_equals } from "./property_equals.mjs";
import { and } from "./and.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { assert_json } from "./assert_json.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { g_arc_feedback_notes_write } from "./g_arc_feedback_notes_write.mjs";
export async function g_arc_feedback_defer(
  chapter_code,
  nickname,
  turn,
  field,
) {
  "Put the note standing at one line of one person's arc off to the second pass, so that a fault worth keeping stops obliging the pass that is running to answer it.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, and it names the store the whole chapter's notes are kept in.";
  "$plain nickname";
  "the nickname is what the person is called in the chapter, like Abi, and it is turned into their number in the pool.";
  "$plain turn";
  "the turn is which turn of that person's arc the note is against, counting from one.";
  "$plain field";
  "the field is which part of the turn the note is against, like after, and it is the same word the note was filed under.";
  "PUTTING A NOTE OFF IS A DECISION AND NOT A TIDY-UP. Arcs are read in one pass and revisited in a second, so a fault found while the first pass is running is often a real fault that this pass is deliberately not the place to fix. The only two things that could be done with it before were answering it now, which is the treadmill the two passes exist to avoid, and dropping it, which loses the finding. This is the third.";
  "IT REFUSES AN ADDRESS NOTHING STANDS AT, because putting off a note that is not there would report success at having queued a fault that no longer exists anywhere. The most likely way to get here is a turn number from a reading taken before the arc was revised, and answering that silently would leave somebody sure a finding is queued when nothing is.";
  "EVERY NOTE AT THE ADDRESS IS PUT OFF AND NOT ONLY THE FIRST. More than one note may stand against the same line, and they were filed separately because they say different things; putting off the first and leaving the rest would still oblige the running pass to answer that line, which is the whole of what this was for.";
  "IT IS SAFE TO RUN TWICE. A note already put off is written the same way again, so a second run over the same address changes nothing and says the same number.";
  arguments_assert(arguments, 4);
  let index = await g_npc_nickname_index(nickname);
  let person = number_from_text(index);
  let line = number_from_text(turn);
  let notes = await g_arc_feedback_chapter(chapter_code);
  function note_wanted(note) {
    let theirs = property_equals(note, "index", person);
    let lined = property_equals(note, "turn", line);
    let fielded = property_equals(note, "field", field);
    let placed = and(theirs, lined);
    let wanted = and(placed, fielded);
    return wanted;
  }
  let matched = list_filter(notes, note_wanted);
  let count = list_size(matched);
  let exists = greater_than(count, 0);
  assert_json(exists, {
    chapter_code,
    nickname,
    turn,
    field,
    hint: "no note stands at that address, so there is nothing to put off to the second pass",
  });
  function note_defer(note) {
    property_set(note, "deferred", true);
  }
  each(matched, note_defer);
  let path = await g_arc_feedback_notes_write(chapter_code, notes);
  let r = {
    path,
    chapter_code,
    nickname,
    turn: line,
    field,
    deferred: count,
  };
  return r;
}
