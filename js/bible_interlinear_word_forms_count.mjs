import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
export async function bible_interlinear_word_forms_count() {
  "How many distinct word spellings the whole interlinear holds, counted per language, with how many letters they add up to.";
  "THE COUNT OF DISTINCT SPELLINGS IS WHAT A RECORDING RUN COSTS, not the count of words, because a word said once can be played everywhere it appears.";
  "The language is read off the letters themselves rather than off a list of books, so a book moved between lists cannot make the answer wrong.";
  let chapters = await bible_interlinear_chapters_words_cache();
  let counts = {};
  for (let code of object_property_names(chapters)) {
    for (let verse of chapters[code]) {
      for (let w of verse.words) {
        let form = hebrew_cantillation_strip(String(w.original)).replace(
          /[.,;·:?!\s]/g,
          "",
        );
        if (equal(form, "")) {
          continue;
        }
        let hebrew = /[֐-׿]/.test(form);
        let language = hebrew ? "hebrew" : "greek";
        if (not(counts[language])) {
          counts[language] = {
            words: 0,
            forms: new Set(),
          };
        }
        counts[language].words += 1;
        counts[language].forms.add(form);
      }
    }
  }
  let result = {};
  for (let language of object_property_names(counts)) {
    let forms = [...counts[language].forms];
    let letters = 0;
    for (let form of forms) {
      letters += [...form].length;
    }
    result[language] = {
      words: counts[language].words,
      distinct_forms: forms.length,
      letters_of_distinct_forms: letters,
    };
  }
  return result;
}
