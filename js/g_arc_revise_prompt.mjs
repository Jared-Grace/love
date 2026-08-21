import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { g_arc_feedback_person } from "./g_arc_feedback_person.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { g_arc_lines_addressed } from "./g_arc_lines_addressed.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine } from "./text_combine.mjs";
import { add_1 } from "./add_1.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function g_arc_revise_prompt(chapter_code, index) {
  "The whole of one written person laid out line by line with every standing note set against the line it faults, asking for those lines back and nothing else.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT ASKS FOR THE FAULTED LINES AND NOT A NEW PERSON, which is the whole reason it exists. Writing the person again from the top produces a stranger who shares nothing with the one already read - so every line has to be read again, and the reading is the expensive thing. Revised, the lines that were right are the same words they were, and a reader looks only at what changed.";
  "THE WHOLE ARC IS SHOWN AND ONLY SOME OF IT IS ASKED FOR. A line is written in a voice, and a voice is only visible in the lines around it; handed six faulted lines alone, a reviser writes them in its own register and the person comes apart. The cost of showing everything is tokens, which are cheap, against a person's reading, which is not.";
  "THE NOTE SAYS WHAT IS WRONG AND NEVER WHAT TO SAY, and the reviser picks the words. That is what makes reviewing cheap enough to keep doing: naming a defect takes one line and can be done by a machine, while writing the replacement takes the same care the original took. It also keeps the voice with whoever is holding the voice.";
  "THE TURN COUNT MUST NOT MOVE, and that is stated rather than hoped for. Every note is addressed by a turn number, so a reviser that splits one turn into two silently repoints every note filed after it - at a line nobody faulted, with nothing going red.";
  let arcs = await g_arc_written_chapter(chapter_code);
  let wanted = number_from_text(index);
  let found = g_arc_chapter_person_or_null(arcs, wanted);
  let missing = equal(found, null);
  let there = not(missing);
  assert_json(there, {
    chapter_code,
    index: wanted,
    hint: "no person of that number is written in this chapter",
  });
  let standing = await g_arc_feedback_person(chapter_code, index);
  let any_standing = list_empty_not_is(standing);
  assert_json(any_standing, {
    chapter_code,
    index: wanted,
    hint: "nothing is faulted against this person, so there is nothing to revise",
  });
  let lines = g_arc_lines_addressed(found);
  let said = [];
  list_add_multiple(said, [
    "Below is one person from a conversation game, written out line by line. Some lines have a note under them saying what is wrong with that line.",
    "Write those lines again. Write nothing else. A line with no note under it is already right and must not be touched.",
    "Keep the person's voice exactly as it is. The notes ask about words and about clearness, never about who this person is or how they talk.",
    "Do not add a turn and do not take one away. Every note is addressed by the number beside a line, so a line that moves takes every other note with it.",
    "Answer as a JSON object. Every key is the number and the field name joined by a full stop, exactly as they are written below - 6.before, 0.summary. Every value is the whole line written again.",
    "",
  ]);
  let revising = 0;
  for (let line of lines) {
    let number = property_get(line, "number");
    let field = property_get(line, "field");
    let text = property_get(line, "text");
    let address = property_get(line, "address");
    let shown = list_join_space([address, text]);
    list_add(said, shown);
    let faulted = false;
    for (let note of standing) {
      let note_turn = property_get(note, "turn");
      let note_field = property_get(note, "field");
      let turn_same = equal(note_turn, number);
      if (turn_same) {
        let field_same = equal(note_field, field);
        if (field_same) {
          faulted = true;
          let wrong = property_get(note, "note");
          let marked = text_combine("    WRONG: ", wrong);
          list_add(said, marked);
        }
      }
    }
    if (faulted) {
      revising = add_1(revising);
    }
  }
  let text = list_join_newline(said);
  let r = {
    chapter_code,
    index: wanted,
    lines: list_size(lines),
    notes: list_size(standing),
    revising,
    text,
  };
  return r;
}
