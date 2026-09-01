import { file_read_json } from "./file_read_json.mjs";
import { g_npc_nickname_index } from "./g_npc_nickname_index.mjs";
import { g_arc_written_person_assert } from "./g_arc_written_person_assert.mjs";
import { g_arc_feedback_person } from "./g_arc_feedback_person.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_line_address } from "./g_arc_line_address.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_split } from "./text_split.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { g_arc_line_write } from "./g_arc_line_write.mjs";
import { g_arc_write } from "./g_arc_write.mjs";
import { g_arc_noted_write } from "./g_arc_noted_write.mjs";
import { g_arc_feedback_clear } from "./g_arc_feedback_clear.mjs";
import { list_size } from "./list_size.mjs";
export async function g_arc_revise_file(answer_path, chapter_code, nickname) {
  "$plain chapter_code";
  "$plain answer_path";
  "$plain nickname";
  "Take the revised lines drafted as their own file, put each one back at the address it was written for, save the person over the version that was faulted, and drop the notes that asked for it.";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT CLOSES THE LOOP AND IS THE ONLY REASON THE LOOP IS WORTH HAVING. A note that never becomes changed writing is a reader's time spent twice - once finding the fault and once, later, finding it again. The prompt turns notes into an ask, and this turns the answer back into the store; without it the two halves are a report nobody can act on.";
  "IT REFUSES A LINE NOBODY FAULTED. The ask says plainly not to touch a line with no note under it, and a reviser that rewrites one anyway has quietly undone a reading that already happened - the human read that line, passed it, and would never be told it had moved. Refusing is louder than dropping the extra line, because an extra line is also what a reviser answering the wrong person looks like.";
  "IT REFUSES A FAULTED LINE LEFT UNANSWERED, for the opposite reason. Half an answer installed and then cleared leaves the unwritten fault gone from the queue with the line still wrong in the store, and nothing afterwards says so. Both checks run before anything is written, so a refusal leaves the store exactly as it was.";
  "THE OUTGOING VERSION IS KEPT, and it is kept by the store rather than here - a revision is the case that comparison was built for, and the one reader who has to judge whether a rewrite helped wants the lines that moved and not the arc.";
  "THE NOTES GO LAST. Cleared first, a refusal further down would throw away the only record of what was wrong while leaving the writing unchanged, and a fault found by a person cannot be found again by running anything.";
  "WHAT WAS ASKED IS KEPT BEFORE THE NOTES ARE DROPPED, and it is the only thing standing between a reader and being told nothing. A line may be answered by writing it back word for word - the checks above ask that every faulted address is given, never that its wording differs - and that is a real answer, because a reviser who reads a note and judges the line right is answering it. But it leaves no trace: the note is gone from the queue and the arc that was replaced says the line did not move, so the reader who filed it comes back to a page that mentions neither. Kept here, the addresses that were asked about sit beside the arc that was replaced, and the two together say which asks a rewrite answered and which were answered by leaving the line alone.";
  "IT IS WRITTEN AFTER THE ARC AND BEFORE THE NOTES for the reason the notes go last. Written first it would claim a wave that a refusal further down never installed; written after the clearing it would be lost with the notes if anything threw between the two.";
  "THE PERSON IS NAMED, and the name is turned into their pool number here. This is the step that writes over an arc, so reaching the wrong person costs a whole reading rather than a wasted run - and a name nobody in the pool answers to throws, where a number one too high installs somebody else's answers over writing that was never faulted.";
  let answer = await file_read_json(answer_path);
  let index = await g_npc_nickname_index(nickname);
  let found = await g_arc_written_person_assert(chapter_code, index);
  let standing = await g_arc_feedback_person(chapter_code, index);
  let faulted = [];
  for (let note of standing) {
    let turn = property_get(note, "turn");
    let field = property_get(note, "field");
    let address = g_arc_line_address(turn, field);
    let fresh = list_includes_not(faulted, address);
    if (fresh) {
      list_add(faulted, address);
    }
  }
  let given = object_property_names(answer);
  for (let key of given) {
    let asked_for = list_includes(faulted, key);
    assert_json(asked_for, {
      key,
      hint: "that line carries no note, so it was not asked for and must not be rewritten",
    });
  }
  for (let address of faulted) {
    let answered = list_includes(given, address);
    assert_json(answered, {
      address,
      hint: "that line carries a note and was not written again",
    });
  }
  for (let key of given) {
    let parts = text_split(key, ".");
    let number = number_from_text(parts[0]);
    let field = parts[1];
    let text = property_get(answer, key);
    g_arc_line_write(found, number, field, text);
  }
  let path = await g_arc_write(chapter_code, index, found);
  await g_arc_noted_write(chapter_code, index, faulted);
  let cleared = await g_arc_feedback_clear(chapter_code, index);
  let r = {
    path,
    chapter_code,
    index,
    revised: list_size(given),
    dropped: property_get(cleared, "dropped"),
  };
  return r;
}
