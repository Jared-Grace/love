import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { bible_glyph_chapter_fetch } from "./bible_glyph_chapter_fetch.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
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
  ("A CHAPTER THAT REFUSES IS COLLECTED TOO, AND THAT IS WHAT MAKES THE PROMISE ABOVE TRUE. The fetching does not answer with nothing when a code has no address - it refuses, and a refusal let out of this walk ends the walk. So the gate that says it collects everything was stopping at the first fault after all, for the commonest fault there is: measured on the first of September 2026, one missing address ended the walk on the first chapter of the list and the other thirty three were never asked.");
  ("THE OFFENDERS ARE WRITTEN UNDER list AND EACH ONE NAMES THE FUNCTION AT FAULT, which is not decoration. A red gate whose complaint names nobody cannot be shown to be about code some app does not carry, so it holds EVERY app out of a deployment. This gate was one of two doing exactly that. Naming ",
    fn_name("bible_glyph_chapter_fetch"),
    " holds out the apps that actually reach it and lets every other app past, which is the true answer rather than the safe one.");
  ("The chapter code sits beside the name rather than instead of it, because a code is what a person needs to repair this and a function name is what the deployment reader needs to place it. Neither is the other's substitute, and a code alone reads to that reader as naming nobody all over again.");
  let references = bible_glyph_chapter_references();
  let read = list_size(references);
  assert_json(read, {
    hint: "the light list of chapters is empty, and this Bible has chapters written - so every address below is being passed without being asked for at all",
  });
  let f_name = fn_name("bible_glyph_chapter_fetch");
  let wrong = [];
  for (let chapter of references) {
    let chapter_code = chapter.chapter_code;
    async function chapter_sent_for() {
      let got = await bible_glyph_chapter_fetch(chapter_code);
      return got;
    }
    let stored = await catch_null_async(chapter_sent_for);
    let refused = null_is(stored);
    if (refused) {
      list_add(wrong, {
        fn: f_name,
        asked_for: chapter_code,
        refused: true,
      });
      continue;
    }
    let same = equal(stored.chapter_code, chapter_code);
    if (same) {
      continue;
    }
    list_add(wrong, {
      fn: f_name,
      asked_for: chapter_code,
      came_back: stored.chapter_code,
    });
  }
  let clean = list_empty_is(wrong);
  assert_json(clean, {
    list: wrong,
    hint: text_combine_multiple([
      "a chapter code in ",
      f_name,
      " is either wired to another chapter's file or has no address at all. A line saying refused is a code with nothing behind it - write the address. A line saying came_back is a code wired to that other chapter's file, so that chapter shows the wrong Scripture under the right heading - correct the address under the asked_for code",
    ]),
  });
  let r = {
    fetched: read,
  };
  return r;
}
