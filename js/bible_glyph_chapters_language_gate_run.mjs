import { list_empty_is } from "./list_empty_is.mjs";
import { bible_glyph_chapters_language_functions } from "./bible_glyph_chapters_language_functions.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { function_run } from "./function_run.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_chapters_language_gate_run() {
  "Gate: every reveal-language function covers every picture chapter this Bible has written. Throws naming the language and the chapters it is short of.";
  "IT GUARDS A DRIFT THAT HAS ALREADY HAPPENED ONCE HERE, in the Rosetta bands next door: twelve chapters were on disk, the hand-kept list still named three, nothing threw and nothing went red, and the only symptom was a reader being shown less than the repo held. The reveal languages are written all at once by one command, so they cannot drift that way - they drift the other way, by a sixteenth chapter being authored and nobody re-running the command.";
  "AND THAT DRIFT IS INVISIBLE FROM THE PAGE. A verse whose band is missing renders as a verse with no translation offered, which is exactly what a chapter nobody has translated looks like. So the reader cannot report it, the author cannot see it, and the only thing that can tell the two apart is a count taken against the list of chapters that exist.";
  "IT REFUSES TO PASS ON AN EMPTY SET, which is the failure this kind of gate dies of. Finding the languages is a search for a sentence, and a search that stops matching answers with nothing rather than with an error - so a gate that only checked what it found would go green the moment it lost the ability to find anything, and would stay green forever. The looking is counted as well as the found.";
  "IT NAMES THE CHAPTERS RATHER THAN COUNTING THEM, because the repair is per chapter and a number does not say which. Re-running the writer for that language is the whole of the fix, and knowing it is short of one chapter rather than of fourteen says whether a chapter was authored yesterday or a language was written before half of them existed.";
  let names = await bible_glyph_chapters_language_functions();
  let mark = fn_name("bible_glyph_language_written_mark");
  list_empty_not_is_assert_json(names, {
    hint: "no reveal-language function was found at all, so this gate checked nothing and would have passed for that reason - has the sentence they are found by been reworded in one place and not the other?",
    mark,
  });
  let chapters = bible_glyph_chapters();
  let wanted = [];
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    list_add(wanted, chapter_code);
  }
  let short = [];
  for (let name of names) {
    let written = await function_run(name, []);
    let held = {};
    for (let entry of written) {
      let chapter_code = property_get(entry, "chapter_code");
      property_set(held, chapter_code, true);
    }
    let missing = [];
    for (let chapter_code of wanted) {
      let there = property_exists(held, chapter_code);
      if (not(there)) {
        list_add(missing, chapter_code);
      }
    }
    let complete = list_empty_is(missing);
    if (not(complete)) {
      list_add(short, {
        name,
        missing,
      });
    }
  }
  list_empty_is_assert_json(short, {
    hint: "these reveal languages are short of chapters the picture Bible has already written, so a reader of that language meets those verses with no translation band at all - re-run the language writer for each one named here",
    short,
  });
  let r = {
    languages: list_size(names),
    chapters: list_size(wanted),
  };
  return r;
}
