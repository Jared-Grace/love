import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_feedback_person } from "./g_arc_feedback_person.mjs";
import { g_arc_feedback_deferred_is } from "./g_arc_feedback_deferred_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function g_arc_feedback_person_standing(chapter_code, index) {
  "One person's notes that are waiting on this pass, leaving out the ones put off to the second, so that what a revision is obliged to answer is only what somebody meant it to answer.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, and it names the store the whole chapter's notes are kept in.";
  "$plain index";
  "the index is which person in the chapter, counting from zero, the same number the arc store files them under.";
  "IT IS THE OBLIGED SET AND NOT THE VISIBLE SET. Revising a person is all or nothing over their notes - every one must be written again in the same breath - and that rule is what stops a note being quietly lost between two passes. A note deliberately put off is exactly the case the rule was never meant to catch, so it is taken out here rather than the rule being loosened: what is asked of a revision shrinks, and nothing about how strictly it is asked changes.";
  "THE BENCH STILL SHOWS THE PUT-OFF ONES, because they are read from the whole chapter's notes and not from this. A note out of scope for the pass that is running is still a note the reviewer should see against the line, and hiding it would turn putting a note off into a way of losing it.";
  arguments_assert(arguments, 2);
  let notes = await g_arc_feedback_person(chapter_code, index);
  function note_now(note) {
    let deferred = g_arc_feedback_deferred_is(note);
    let now = not(deferred);
    return now;
  }
  let standing = list_filter(notes, note_now);
  return standing;
}
