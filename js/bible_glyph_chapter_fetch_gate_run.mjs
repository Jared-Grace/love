import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapter_fetch } from "./bible_glyph_chapter_fetch.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_glyph_chapter_fetch_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every chapter the picture Bible has written can be sent for on its own, and what comes back is the chapter that was asked for.");
  ("IT ASKS RATHER THAN READS, and that is the whole of why it is worth having. ",
    fn_name("bible_glyph_chapter_fetch"),
    " is twenty five addresses written out by hand, and the two mistakes it invites are a chapter nobody added and a code wired to the wrong file. Reading the addresses beside the list catches the first and is blind to the second, because a wrong address is spelled exactly as correctly as a right one.");
  ("So each chapter is sent for and asked what it is. A code pointing at another chapter's file comes back calling itself that other chapter, which is a mismatch nothing else in this repo would ever notice - the page would simply show the wrong Scripture under the right heading.");
  ("EVERY CHAPTER IS SENT FOR RATHER THAN A FEW, because the failure being guarded against is one chapter out of twenty five and a sample is exactly the wrong instrument for that. There are twenty five of them and they are already on this disk, so asking for all of them costs nothing worth saving.");
  ("It walks the light list rather than the chapters themselves, because the light list is what every page here believes. A chapter that exists and is missing from that list is a different fault with its own gate beside this one, and this gate would only report it twice.");
  ("EVERY MISMATCH IS COLLECTED BEFORE ANYTHING IS SAID, rather than stopping at the first. A wrong address usually arrives with its opposite - two codes swapped - and stopping at the first shows one half of a pair, which reads as a single wrong line and gets repaired into a worse state.");
  let references = bible_glyph_chapter_references();
  let read = list_size(references);
  assert_json(read, {
    hint: "the light list of chapters is empty, and this Bible has chapters written - so every address below is being passed without being asked for at all",
  });
  let wrong = [];
  for (let chapter of references) {
    let chapter_code = chapter.chapter_code;
    let stored = await bible_glyph_chapter_fetch(chapter_code);
    let same = equal(stored.chapter_code, chapter_code);
    if (same) {
      continue;
    }
    list_add(wrong, {
      asked_for: chapter_code,
      came_back: stored.chapter_code,
    });
  }
  let clean = list_empty_is(wrong);
  let f_name = fn_name("bible_glyph_chapter_fetch");
  assert_json(clean, {
    wrong,
    hint: text_combine_multiple([
      "a chapter code in ",
      f_name,
      " is wired to another chapter's file, so that chapter of the picture Bible shows the wrong Scripture under the right heading. Each line says which code was asked for and which chapter answered; the address under the asked_for code is the one to correct",
    ]),
  });
  let r = {
    fetched: read,
  };
  return r;
}
