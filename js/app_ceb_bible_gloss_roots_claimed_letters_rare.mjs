import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_roots_claimed_gathered } from "./gloss_chapters_roots_claimed_gathered.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_letters_counted } from "./bible_words_letters_counted.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_split } from "./text_split.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export async function app_ceb_bible_gloss_roots_claimed_letters_rare() {
  "Every root an explanation states outright, filed under the least written letter it holds, with the letters put in the order the Cebuano bible itself writes them.";
  "A root that cannot be a word of the language is the one kind of wrong root that can be shown without knowing the language, and the showing is done by letters. What was missing was the list of letters, because a list of them written out here would be a claim about Cebuano that nobody in this repo can check. The bible's own words answer it instead, and the counting of them is asked for rather than repeated here.";
  "★ NO LINE IS DRAWN AND NONE SHOULD BE READ IN. Every root is filed, the letters run from the one the bible writes in twenty-two thousand words down to the one it writes in a single word, and where along that run a root stops being Cebuano is the reader's judgement and not this reading's. The break is plain enough in the counting to be seen rather than set: the letters fall away steadily to w in eighteen hundred words and then drop straight to c in four hundred, and nothing else in the run halves like that.";
  "★ A RARE LETTER IS MOST OFTEN A NAME AND NOT A FAULT. The four hundred words holding a c are Cristo and Corinto, and a gloss that names Efraim as the root of Efraimihanon is right. What the reading is for is the row underneath those, where a rare letter turns up in a root that is not anybody's name.";
  "Every root a sentence names is asked about and not only the first, and the sightings are carried so that a habit of writing shows as its true weight rather than as one row.";
  "Nothing is written and nothing is asked of the site.";
  arguments_assert(arguments, 0);
  let gathered = await gloss_chapters_roots_claimed_gathered(
    app_ceb_bible_gloss_generate,
  );
  let by_root = property_get(gathered, "by_root");
  let bible_folder = ebible_folder_cebuano();
  let counted = await bible_words_letters_counted(bible_folder);
  let letter_rows = property_get(counted, "letters");
  let letter_words = {};
  function letter_note(row) {
    let letter = property_get(row, "letter");
    let words = property_get(row, "words");
    property_set(letter_words, letter, words);
  }
  each(letter_rows, letter_note);
  let root_names = object_property_names(by_root);
  let by_letter = {};
  function root_file(name) {
    let row = property_get(by_root, name);
    let characters = text_split(name, "");
    let rarest = "";
    let fewest = -1;
    function character_weigh(character) {
      let held = property_get_or_null(letter_words, character);
      let unwritten = null_is(held);
      let words = held;
      if (unwritten) {
        words = 0;
      }
      let first = equal(fewest, -1);
      let rarer = less_than(words, fewest);
      let take = first;
      if (rarer) {
        take = true;
      }
      if (take) {
        fewest = words;
        rarest = character;
      }
    }
    each(characters, character_weigh);
    property_set(row, "rarest_letter", rarest);
    property_set(row, "letter_words", fewest);
    let listed = property_initialize_list(by_letter, rarest);
    list_add(listed, row);
  }
  each(root_names, root_file);
  let letters_used = object_property_names(by_letter);
  let letters = [];
  function letter_read_out(letter) {
    let listed = property_get(by_letter, letter);
    list_sort_number_mapper_reverse(listed, gloss_row_sightings);
    let held = property_get_or_null(letter_words, letter);
    let unwritten = null_is(held);
    let words = held;
    if (unwritten) {
      words = 0;
    }
    let row = {
      letter,
      bible_words: words,
      roots: list_size(listed),
      listed,
    };
    list_add(letters, row);
  }
  each(letters_used, letter_read_out);
  function bible_words_of(row) {
    let words = property_get(row, "bible_words");
    return words;
  }
  list_sort_number_mapper(letters, bible_words_of);
  let r = {
    chapters: property_get(gathered, "chapters"),
    strict_total: property_get(gathered, "entries_claiming"),
    roots_total: property_get(gathered, "roots_total"),
    roots_distinct: property_get(gathered, "roots_distinct"),
    letters,
  };
  return r;
}
