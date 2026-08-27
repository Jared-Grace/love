import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_language_functions } from "./bible_glyph_chapters_language_functions.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_language_write_arguments() {
  arguments_assert(arguments, 0);
  ("The three things the reveal-language writer has to be handed, worked out for every language this repo has already written a reveal band in, so re-running it for all of them needs no list and no memory of what was typed the first time.");
  ("IT EXISTS BECAUSE THE WRITER IS THE ONLY PLACE THOSE THREE WORDS EVER LIVED. The command takes a code, a function name and a word for the prose, and the file it leaves behind records none of them - so a later run had to be reconstructed by a person reading the written file, guessing the language, and then finding the code in a table where it is deliberately not spelled the way eBible spells it. That reconstruction was done by hand once and was one wrong guess away from writing a bible in the wrong language over a good one.");
  ("IT DERIVES FORWARD RATHER THAN PARSING BACKWARD. The written name is the language's own name lower-cased behind a fixed prefix, so going from a language to its file is exact arithmetic, while going from a file back to a language is a guess about where a name was cut. Every language in the table is asked what its file would be called, and the ones whose file is actually there are the reveal languages.");
  ("WHAT DID NOT MATCH COMES BACK RATHER THAN BEING DROPPED. A reveal file named something the table cannot produce is not an error - somebody may have written one by hand - but it is a file this cannot re-run, and a caller re-running everything needs to be told which languages it left alone rather than quietly covering fewer than it was asked for.");
  ("A LANGUAGE NAMED TWICE IS TAKEN ONCE. The table is two lists joined, curated first, and where both name the same language the curated entry wins - so the second sighting would hand the writer the same file with the other list's code and let the loser overwrite the winner.");
  let names = await bible_glyph_chapters_language_functions();
  let languages = ebible_languages();
  let written = [];
  let matched = [];
  for (let language of languages) {
    let language_word = property_get(language, "name");
    let language_code = property_get(language, "language_code");
    let lower = text_lower_to(language_word);
    let written_name = text_combine("bible_glyph_chapters_", lower);
    let there = list_includes(names, written_name);
    let fresh = list_includes_not(matched, written_name);
    if (there && fresh) {
      list_add(matched, written_name);
      list_add(written, {
        language_code,
        written_name,
        language_word,
      });
    }
  }
  let unmatched = [];
  for (let name of names) {
    let missed = list_includes_not(matched, name);
    if (missed) {
      list_add(unmatched, name);
    }
  }
  let r = {
    written,
    unmatched,
  };
  return r;
}
