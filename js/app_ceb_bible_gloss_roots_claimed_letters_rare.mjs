import { app_ceb_bible_gloss_roots_claimed_letters_rare_bible_words_of } from "./app_ceb_bible_gloss_roots_claimed_letters_rare_bible_words_of.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_letters_counted } from "./bible_words_letters_counted.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export async function app_ceb_bible_gloss_roots_claimed_letters_rare() {
  "Every root an explanation states outright, filed under the least written letter it holds, with the letters put in the order the Cebuano bible itself writes them.";
  "A root that cannot be a word of the language is the one kind of wrong root that can be shown without knowing the language, and the showing is done by letters. What was missing was the list of letters, because a list of them written out here would be a claim about Cebuano that nobody in this repo can check. The bible's own words answer it instead, and the counting of them is asked for rather than repeated here.";
  "★ NO LINE IS DRAWN AND NONE SHOULD BE READ IN. Every root is filed, the letters run from the one the bible writes in twenty-two thousand words down to the one it writes in a single word, and where along that run a root stops being Cebuano is the reader's judgement and not this reading's. The break is plain enough in the counting to be seen rather than set: the letters fall away steadily to w in eighteen hundred words and then drop straight to c in four hundred, and nothing else in the run halves like that.";
  "★ A RARE LETTER IS MOST OFTEN A NAME AND NOT A FAULT. The four hundred words holding a c are Cristo and Corinto, and a gloss that names Efraim as the root of Efraimihanon is right. What the reading is for is the row underneath those, where a rare letter turns up in a root that is not anybody's name.";
  "Every root a sentence names is asked about and not only the first, and the sightings are carried so that a habit of writing shows as its true weight rather than as one row.";
  "Nothing is written and nothing is asked of the site.";
  "The letter counting is read before the store is walked rather than after, because the walk now carries the filing with it and a root cannot be filed under its rarest letter before the counting has arrived. Neither read writes anything, so which of them goes first is a matter of what the next line needs.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_cebuano();
  let counted = await bible_words_letters_counted(bible_folder);
  let letter_rows = property_get(counted, "letters");
  let letter_words = {};
  let r2 = await app_ceb_bible_gloss_roots_claimed_letters_rare_bible_words_of(
    letter_words,
    letter_rows,
  );
  let bible_words_of = property_get(r2, "bible_words_of");
  let gathered = property_get(r2, "gathered");
  let letters = property_get(r2, "letters");
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
