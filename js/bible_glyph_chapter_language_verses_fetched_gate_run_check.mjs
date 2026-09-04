import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_glyph_chapter_language_verses_fetched_gate_run_check(
  language,
  f_name,
  verses_held,
  verses_sent_for,
) {
  "$plain language";
  "$plain f_name";
  "the language is the word for this translation as a person says it, and f_name is the name of the sending-for function, for the record a failure leaves behind. Both are words to print and neither runs.";
  arguments_assert(arguments, 4);
  ("Checks, for one language, that the text sent for one chapter at a time is the text the repo holds for that chapter, and answers with how many chapters had text to compare. Read-only.");
  ("IT IS ONE CHECK FOR EVERY LANGUAGE BECAUSE THE FAILURE IS THE SAME FAILURE. Each language is a whole translation in a single function with a sending-for neighbour, and what can go wrong between them does not vary by language - so a second copy of this walk would be a second place to fix every time the reasoning below improves, and the language that got the older copy would be the one nobody was reading.");
  ("THE ADDRESS THE SENDING GOES TO IS A STRING AND NOTHING FOLLOWS A STRING. The fetching neighbour names its module inside an import written out as text, which is what a bundler needs in order to split the file off, and it is also what a rename walks straight past. So the day somebody renames the function holding a whole translation, every other reference to it moves and that one does not - and nothing goes red, because the address is only read when a reader opens the key.");
  ("IT ASKS RATHER THAN READS, which is the only way to catch that. Reading the source for the right text would pass on a file that cannot be loaded at all; sending for each chapter and comparing what came back against what the repo holds fails on exactly the thing that would fail in a browser.");
  ("THE VERSES THEMSELVES ARE COMPARED AND NOT HOW MANY THERE ARE. Two chapters of the same length are common, and a check on the counts alone would pass a wiring that handed back a different chapter's text under the asked-for name - which is the one failure that looks right on the page.");
  ("THE NUMBER HANDED BACK IS HOW MANY CHAPTERS HAD TEXT TO COMPARE, not how many were asked for. A chapter nobody has translated yet is empty on both sides and agrees with itself, so counting those would let the answer stay reassuringly at the full number of chapters while the evidence behind it fell to nothing.");
  ("A CHAPTER THAT REFUSES IS COLLECTED TOO, AND THAT IS WHAT MAKES THE PROMISE ABOVE TRUE. The sending is a written-out import and a code nobody has written an address for throws rather than answering empty, so letting the refusal out of the walk ends the walk - the first bad chapter is the only one ever looked at, and every chapter after it goes unasked while the answer reads as one fault.");
  ("THE REFUSAL IS CARRIED BACK IN ITS OWN WORDS RATHER THAN COUNTED, because the two things that make a send refuse want opposite repairs. A code with no address written for it is a line to add in the fetching neighbour; a translation file that throws while loading itself is a fault inside that file and adding an address would not touch it. A catch that only says whether it worked reports the second as the first, in a sentence confident enough to be acted on.");
  ("THE OFFENDERS ARE WRITTEN UNDER list AND EACH ONE NAMES THE FUNCTION AT FAULT. A failed gate is read back afterwards for who it is about, and a gate naming nobody cannot be shown to be about somewhere else, so it holds every app in the repo out of a deployment. A chapter code alone would be worse than nothing: it matches no app's reach, so the gate would be set aside for every app instead of blocking the one it is really about.");
  let references = bible_glyph_chapter_references();
  let wrong = [];
  let carrying = [];
  for (let chapter of references) {
    let chapter_code = chapter.chapter_code;
    let held = verses_held(chapter_code);
    let carried = list_empty_not_is(held);
    if (carried) {
      list_add(carrying, chapter_code);
    }
    async function chapter_sent_for() {
      let got = await verses_sent_for(chapter_code);
      return got;
    }
    let answered = await catch_message_async(chapter_sent_for);
    let came = property_get(answered, "ok");
    if (not(came)) {
      list_add(wrong, {
        fn: f_name,
        asked_for: chapter_code,
        refused: property_get(answered, "message"),
      });
      continue;
    }
    let sent = property_get(answered, "value");
    let same = json_equal(held, sent);
    if (same) {
      continue;
    }
    let held_count = list_size(held);
    let sent_count = list_size(sent);
    list_add(wrong, {
      fn: f_name,
      asked_for: chapter_code,
      held_count,
      sent_count,
    });
  }
  let clean = list_empty_is(wrong);
  assert_json(clean, {
    list: wrong,
    hint: text_combine_multiple([
      "the ",
      language,
      " sent for one chapter at a time is not the ",
      language,
      " the repo holds for that chapter, asked of ",
      f_name,
      ". A line with a refused on it did not come at all, and the words there are the sending's own reason - usually a code with no address written for it, sometimes something wrong inside the translation file. A line with counts on it arrived carrying different verses, and the written-out module address has most likely been left behind by a rename",
    ]),
  });
  let fetched = list_size(carrying);
  let r = {
    fetched,
  };
  return r;
}
