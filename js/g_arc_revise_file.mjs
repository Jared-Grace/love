import { list_includes_not } from "./list_includes_not.mjs";
import { g_arc_written_person_assert } from "./g_arc_written_person_assert.mjs";
import { g_arc_line_address } from "./g_arc_line_address.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { g_arc_feedback_person } from "./g_arc_feedback_person.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { text_split } from "./text_split.mjs";
import { g_arc_line_write } from "./g_arc_line_write.mjs";
import { g_arc_write } from "./g_arc_write.mjs";
import { g_arc_feedback_clear } from "./g_arc_feedback_clear.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function g_arc_revise_file(answer_path, chapter_code, index_text) {
  "$plain chapter_code";
  "$plain answer_path";
  "Take the revised lines drafted as their own file, put each one back at the address it was written for, save the person over the version that was faulted, and drop the notes that asked for it.";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT CLOSES THE LOOP AND IS THE ONLY REASON THE LOOP IS WORTH HAVING. A note that never becomes changed writing is a reader's time spent twice - once finding the fault and once, later, finding it again. The prompt turns notes into an ask, and this turns the answer back into the store; without it the two halves are a report nobody can act on.";
  "IT REFUSES A LINE NOBODY FAULTED. The ask says plainly not to touch a line with no note under it, and a reviser that rewrites one anyway has quietly undone a reading that already happened - the human read that line, passed it, and would never be told it had moved. Refusing is louder than dropping the extra line, because an extra line is also what a reviser answering the wrong person looks like.";
  "IT REFUSES A FAULTED LINE LEFT UNANSWERED, for the opposite reason. Half an answer installed and then cleared leaves the unwritten fault gone from the queue with the line still wrong in the store, and nothing afterwards says so. Both checks run before anything is written, so a refusal leaves the store exactly as it was.";
  "THE OUTGOING VERSION IS KEPT, and it is kept by the store rather than here - a revision is the case that comparison was built for, and the one reader who has to judge whether a rewrite helped wants the lines that moved and not the arc.";
  "THE NOTES GO LAST. Cleared first, a refusal further down would throw away the only record of what was wrong while leaving the writing unchanged, and a fault found by a person cannot be found again by running anything.";
  let answer = await file_read_json(answer_path);
  let index = number_from_text(index_text);
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
