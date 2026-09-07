import { arguments_assert } from "./arguments_assert.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_split } from "./text_split.mjs";
import { tally_number_add } from "./tally_number_add.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_words_letters_counted(bible_folder) {
  "$plain bible_folder";
  "Every letter one whole bible writes its words with, with how many different words hold it and how often it is written.";
  "What letters a language writes is normally answered by somebody saying so, and a said alphabet is a claim nobody in this repo can check. The translation itself can be asked instead: a letter the text writes in ten thousand words is a letter of the language, and a letter it writes in none is not, and neither of those is anybody's opinion. A reading that wants to say a word cannot belong to this language needs that list to have come from the language rather than from whoever wrote the reading.";
  "★ THIS COUNTS WHAT IS WRITTEN AND SAYS NOTHING ABOUT WHAT IS ALLOWED. A letter held by four words out of thirty thousand is a fact about those four words, and whether they are foreign names, a printer's slip or ordinary rare spelling is a further question this cannot reach. The two counts are handed back side by side because they answer different halves of it: a letter in one word written four hundred times is one word, and the word count is the one that says so.";
  "The words are put into small letters before their letters are counted, because a capital is the same letter of the same alphabet. What is a letter at all was already settled upstream by the reader the folder chooses, which is why a Cebuano dash survives to be counted here and an English one never arrives.";
  arguments_assert(arguments, 1);
  let written = await bible_words_written(bible_folder);
  let word_counts = {};
  let occurrence_counts = {};
  function word_read(word) {
    let lowered = text_lower_to(word);
    let characters = text_split(lowered, "");
    function character_note(character) {
      tally_number_add(occurrence_counts, character, 1);
    }
    each(characters, character_note);
    let held = list_unique(characters);
    function held_note(character) {
      tally_number_add(word_counts, character, 1);
    }
    each(held, held_note);
  }
  each(written, word_read);
  let names = object_property_names(word_counts);
  let letters = [];
  function name_read(name) {
    let words = property_get(word_counts, name);
    let occurrences = property_get(occurrence_counts, name);
    let row = {
      letter: name,
      words,
      occurrences,
    };
    list_add(letters, row);
  }
  each(names, name_read);
  function words_of(row) {
    let words = property_get(row, "words");
    return words;
  }
  list_sort_number_mapper_reverse(letters, words_of);
  let r = {
    words_written: list_size(written),
    letters_written: list_size(letters),
    letters,
  };
  return r;
}
