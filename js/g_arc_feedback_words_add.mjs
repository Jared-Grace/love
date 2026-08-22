import { g_npc_nickname_index } from "./g_npc_nickname_index.mjs";
import { g_arc_written_person_assert } from "./g_arc_written_person_assert.mjs";
import { words_early_reader_outside_untaught } from "./words_early_reader_outside_untaught.mjs";
import { g_arc_feedback_checked_add } from "./g_arc_feedback_checked_add.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_lines_addressed } from "./g_arc_lines_addressed.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { text_combine } from "./text_combine.mjs";
import { add_1 } from "./add_1.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function g_arc_feedback_words_add(chapter_code, nickname) {
  "Read one written person line by line, and file a note against every line saying a word a child of the settled reading age would not have - naming the words and asking for nothing.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS THE FIRST CHECK TO FILE RATHER THAN PRINT, and that is the change it is really making. A report is read by a person, who then has to carry what they read to wherever the fixing happens; a note is already there when the fixing starts. The same finding costs a person a reading in the first shape and nothing at all in the second.";
  "SO WHAT A PERSON IS LEFT WITH IS WHAT THIS COULD NOT SEE. Run before anybody opens the arc, it takes the whole vocabulary question off their desk, and every check written after it takes another one - until what is left needs a person because no rule could have caught it.";
  "IT NAMES THE WORDS AND ASKS FOR NOTHING, in the shape every note here is written in. Saying which words are too hard leaves the sentence with whoever writes sentences; saying what the line should say instead has written the line, and then the next line needs writing too. A word may also be perfectly fair - a dyer says dye - so a note that had demanded a replacement would have demanded a worse line.";
  "IT DOES NOT CLEAR FIRST, so running it twice files everything twice. Clearing is a separate command on purpose: the notes it would drop include a person's, and a check has no business throwing away a reading it cannot reproduce. The clear that drops only what a check filed is the one to run before running this again.";
  "ITS FIRST RUN FAULTED THIRTY-SEVEN OF FIFTY-THREE LINES, and the repair was a second list rather than a softer rule. The accepted list of a child's words deliberately carries no word from the faith, so god, sinned, cross and confess all read as outside it - and those are the words the game is FOR. A word outside a child's vocabulary is two different things wearing one shape: one a writer reached for when a plainer word was there, and one the game means to teach. What tells them apart is intent, written down once as an accepted list, and never any measure of how rare a word is - frequency would have dropped ACTUALLY too, which is the one this caught unaided that a person had already faulted by hand.";
  "$plain nickname";
  let wanted = await g_npc_nickname_index(nickname);
  let found = await g_arc_written_person_assert(chapter_code, wanted);
  let lines = g_arc_lines_addressed(found);
  let filed = 0;
  let words_named = [];
  for (let line of lines) {
    let text = property_get(line, "text");
    let outside = await words_early_reader_outside_untaught(text);
    let any = list_empty_not_is(outside);
    if (any) {
      let number = property_get(line, "number");
      let field = property_get(line, "field");
      let joined = list_join_comma_space(outside);
      let note = text_combine(
        "a child that age would not have these words: ",
        joined,
      );
      await g_arc_feedback_checked_add(
        chapter_code,
        wanted,
        number,
        field,
        note,
      );
      filed = add_1(filed);
      list_add_multiple(words_named, outside);
    }
  }
  let r = {
    chapter_code,
    nickname,
    lines: list_size(lines),
    filed,
    words: list_size(words_named),
  };
  return r;
}
