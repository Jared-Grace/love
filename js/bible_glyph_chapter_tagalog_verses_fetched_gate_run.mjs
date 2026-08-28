import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { bible_glyph_chapter_tagalog_verses } from "./bible_glyph_chapter_tagalog_verses.mjs";
import { bible_glyph_chapter_tagalog_verses_fetched } from "./bible_glyph_chapter_tagalog_verses_fetched.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
export async function bible_glyph_chapter_tagalog_verses_fetched_gate_run() {
  "Gate: the sent-for Tagalog of every picture chapter is the Tagalog the repo holds for it. Read-only.";
  arguments_assert(arguments, 0);
  ("THE ADDRESS IT SENDS TO IS A STRING AND NOTHING FOLLOWS A STRING. The fetching neighbour names its module inside an import written out as text, which is what a bundler needs in order to split the file off, and it is also what a rename walks straight past. So the day somebody renames the function holding the whole Tagalog, every other reference to it moves and that one does not - and nothing goes red, because the address is only read when a reader opens the key.");
  ("IT ASKS RATHER THAN READS, which is the only way to catch that. Reading the source for the right text would pass on a file that cannot be loaded at all; sending for each chapter and comparing what came back against what the repo holds fails on exactly the thing that would fail in a browser.");
  ("THE VERSES THEMSELVES ARE COMPARED AND NOT HOW MANY THERE ARE. Two chapters of the same length are common, and a check on the counts alone would pass a wiring that handed back a different chapter's Tagalog under the asked-for name - which is the one failure that looks right on the page.");
  ("The count of chapters asked for travels out, because nothing wrong is also what this would say on the day its sweep stopped visiting anything.");
  let references = bible_glyph_chapter_references();
  let wrong = []; let carrying = [];
  for (let chapter of references) {
    let chapter_code = chapter.chapter_code;
    let held = bible_glyph_chapter_tagalog_verses(chapter_code);
    let sent = await bible_glyph_chapter_tagalog_verses_fetched(chapter_code);
    let carried = list_empty_not_is(held); if (carried) { list_add(carrying, chapter_code); } let same = json_equal(held, sent);
    if (same) {
      continue;
    }
    let held_count = list_size(held);
    let sent_count = list_size(sent);
    list_add(wrong, {
      chapter_code,
      held_count,
      sent_count,
    });
  }
  let clean = list_empty_is(wrong);
  assert_json(clean, {
    wrong,
    hint: "the Tagalog sent for one chapter at a time is not the Tagalog the repo holds for that chapter - the written-out module address in the fetching neighbour has most likely been left behind by a rename",
  });
  let fetched = list_size(references);
  let r = {
    fetched,
  };
  return r;
}
