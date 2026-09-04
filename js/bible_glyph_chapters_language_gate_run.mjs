import { bible_glyph_chapters_language_functions_found } from "./bible_glyph_chapters_language_functions_found.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_chapter_code } from "./property_get_chapter_code.mjs";
import { function_run } from "./function_run.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_list_map } from "./property_list_map.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapters_language_gate_run() {
  "Gate: every reveal-language function covers every picture chapter this Bible has written. Throws naming the language and the chapters it is short of.";
  "IT GUARDS A DRIFT THAT HAS ALREADY HAPPENED ONCE HERE, in the Rosetta bands next door: twelve chapters were on disk, the hand-kept list still named three, nothing threw and nothing went red, and the only symptom was a reader being shown less than the repo held. The reveal languages are written all at once by one command, so they cannot drift that way - they drift the other way, by a sixteenth chapter being authored and nobody re-running the command.";
  "AND THAT DRIFT IS INVISIBLE FROM THE PAGE. A verse whose band is missing renders as a verse with no translation offered, which is exactly what a chapter nobody has translated looks like. So the reader cannot report it, the author cannot see it, and the only thing that can tell the two apart is a count taken against the list of chapters that exist.";
  "THE LANGUAGES ARE ASKED FOR RATHER THAN SEARCHED FOR HERE, and what is asked refuses an empty answer on this gate's behalf. That guard is the failure this kind of gate dies of and it was carried word for word by the gate next door, so it is spelled in one place now.";
  "IT NAMES THE CHAPTERS RATHER THAN COUNTING THEM, because the repair is per chapter and a number does not say which. Re-running the writer for that language is the whole of the fix, and knowing it is short of one chapter rather than of fourteen says whether a chapter was authored yesterday or a language was written before half of them existed.";
  "A LANGUAGE THAT WILL NOT ANSWER IS SHORT OF EVERY CHAPTER AND NEVER THE END OF THE WALK. The set walked here is found by a search, so it grows as languages are added and nobody hands it over for review; a language function that throws while gathering is the same kind of event as a chapter being authored. Waited on plainly it carries that language's own complaint out of this gate in place of the gate's list, so every language after it goes unchecked and nothing in the answer names anybody. Caught, it is one named language at fault beside all the ones that were still counted.";
  "WHICH CHAPTERS A LANGUAGE IS SHORT OF IS ASKED AS ONE DIFFERENCE RATHER THAN WALKED BY HAND. Two loops here built a lookup and then asked it once per wanted chapter, which is what the repo's own difference already does - and does faster, since it turns the second list into a lookup once rather than walking it per question. Lifting it out is also what brought this back under the ceiling on how many lines of work one function may carry.";
  let names = await bible_glyph_chapters_language_functions_found();
  let chapters = bible_glyph_chapters();
  let wanted = list_map(chapters, property_get_chapter_code);
  let short = [];
  for (let name of names) {
    async function language_written() {
      let got = await function_run(name, []);
      return got;
    }
    let answered = await catch_message_async(language_written);
    let came = property_get(answered, "ok");
    if (not(came)) {
      list_add(short, {
        name,
        missing: wanted,
        refused: property_get(answered, "message"),
      });
      continue;
    }
    let had = property_list_map(answered, "value", property_get_chapter_code);
    let missing = list_difference(wanted, had);
    let complete = list_empty_is(missing);
    if (not(complete)) {
      list_add(short, {
        name,
        missing,
      });
    }
  }
  ("THE FUNCTION THIS POINTS A READER AT IS NAMED INSIDE THE HINT AND NEVER BESIDE IT. A failed gate's words are read back afterwards for function names, and every name found is taken as an accusation - so a name in its own field of the complaint holds an innocent function's app out of its deployment. The hint is dropped before the names are read, which is what lets a person be told where to look without anybody being blamed for it.");
  let f_name = fn_name("bible_glyph_chapter_bands_write");
  let hint_short = text_combine_multiple([
    "these reveal languages are short of chapters the picture Bible has already written, so a reader of that language meets those verses with no translation band at all - the whole repair for a chapter that was just authored is one run of ",
    f_name,
    " with the code of that chapter, which refetches every reveal language and writes the Rosetta band beside them; a language listed as short of every chapter at once refused to answer at all, and the words it refused with stand beside it",
  ]);
  list_empty_is_assert_json(short, {
    hint: hint_short,
    short,
  });
  let r = {
    languages: list_size(names),
    chapters: list_size(wanted),
  };
  return r;
}
