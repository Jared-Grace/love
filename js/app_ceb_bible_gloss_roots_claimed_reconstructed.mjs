import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
export async function app_ceb_bible_gloss_roots_claimed_reconstructed() {
  "Every Cebuano explanation naming a root that is written with an asterisk in front of it - the notation for a word nobody ever recorded, worked back to from the languages descended from it - said with the word, the chapter and how many places it is stored.";
  "★ NOTHING HERE IS A FAULT IN THE STORE. An asterisk in front of a form is how linguists write a reconstruction, and an explanation reaching back to Proto-Austronesian for the origin of a Cebuano word is doing scholarship rather than making a mistake. What is a fault is anything downstream treating one of these as a Cebuano word: the readers of roots hand the asterisk straight through, so a form nobody has ever spoken can be carried into a queue of words to look up, and a dictionary asked for it will answer nothing for the rest of time.";
  "The asterisk is what makes this askable without judgment. Every other reading over these roots has to decide whether a spelling is ordinary Cebuano or an invention, and that decision belongs to somebody who knows the language. This one decides nothing - the notation is in the text, put there deliberately by whoever wrote the sentence, and it means exactly one thing.";
  "Every root a sentence names is asked about and not only the first, because a sentence reaching back through two languages names the nearer form first and the reconstructed one after it, which is the order that puts a reconstruction out of reach of every reading that takes the first root and stops.";
  "The forms themselves are handed back beside the sightings, because what a queue of words to look up needs is the list of spellings to refuse, and that list is shorter than the list of words carrying them.";
  "The word is read off the entry with the reader that throws when it is absent, and that is this reading's own choice rather than the shared walk's: the walk hands the whole entry over precisely so that each reading keeps the reader it had.";
  arguments_assert(arguments, 0);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let strict_total = 0;
  let roots_total = 0;
  let rows = [];
  let seen = {};
  let forms = [];
  let star = "*";
  function entry_read(found) {
    let chapter_code = property_get(found, "chapter_code");
    let entry = property_get(found, "entry");
    let explain = property_get(found, "explain");
    let claimed = property_get(found, "claimed");
    let claimed_count = list_size(claimed);
    let empty = equal(claimed_count, 0);
    if (empty) {
      return;
    }
    strict_total = add(strict_total, 1);
    let word = property_get(entry, word_key);
    function root_read(read) {
      roots_total = add(roots_total, 1);
      let made = text_starts_with(read, star);
      if (not(made)) {
        return;
      }
      let held = list_includes(forms, read);
      if (not(held)) {
        list_add(forms, read);
      }
      let key = text_combine_multiple([word, " ", read]);
      let before = property_get_or_null(seen, key);
      let first = null_is(before);
      if (first) {
        let row = {
          word,
          read,
          chapter: chapter_code,
          sightings: 1,
          explain,
        };
        property_set(seen, key, row);
        list_add(rows, row);
        return;
      }
      let met = property_get(before, "sightings");
      let after = add(met, 1);
      property_set(before, "sightings", after);
    }
    each(claimed, root_read);
  }
  let walked = await gloss_chapters_roots_claimed_entries_generic(
    app_ceb_bible_gloss_generate,
    entry_read,
  );
  list_sort_number_mapper_reverse(rows, gloss_row_sightings);
  let sightings = 0;
  function sightings_add(row) {
    let met = property_get(row, "sightings");
    sightings = add(sightings, met);
  }
  each(rows, sightings_add);
  let r = {
    chapters: property_get(walked, "chapters"),
    strict_total,
    roots_total,
    reconstructed_words: list_size(rows),
    reconstructed_sightings: sightings,
    forms,
    rows,
  };
  return r;
}
