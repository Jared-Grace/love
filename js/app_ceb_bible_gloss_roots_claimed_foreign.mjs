import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_names_apart } from "./bible_words_names_apart.mjs";
import { property_get } from "./property_get.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { set_includes } from "./set_includes.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_chapters_roots_claimed_rows_generic } from "./gloss_chapters_roots_claimed_rows_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_claimed_foreign() {
  "Every root an explanation states outright that is neither a word the Cebuano bible writes nor a word the dictionary on this disk has heard of, gathered by the root so one habit of writing shows as one row.";
  "The same two vocabularies the reading of the widened roots asks, put to the roots it refuses to look at. That reading walks away from every entry whose sentence names a root outright, and writes the reason down: where the sentence says the word root, the person has said what they mean, so a wrong answer there is theirs rather than the reading's. Three sentences in the store disprove that. Moawit is explained as built on awit, the root to sing - correct, in that order - and the reader that takes the piece after the words is the root comes back with to sing. So a stated root can be wrong without anybody having written anything wrong, and the pool nobody looks at is the pool where that happens.";
  "★ THIS IS A CLASS TO READ AND NOT A FAULT LIST. The reading of the widened roots measured its own noise and says two in three of what it names is sound: a root that is bound, rare and never looked up is missing from both vocabularies while being perfectly correct, and tapay under tinapay is the shape of that. Nothing is filtered here for the same reason, and the sightings are carried beside each root so that a row can be weighed rather than counted.";
  "Every root a sentence names is asked about and not only the first, which is where this parts company with the reading it mirrors. A sentence naming two roots names the second one for a reason, and a reading that stops at the first cannot see it. The count of roots is handed back beside the count of entries so the difference is visible rather than assumed.";
  "Two vocabularies are asked and a root has to be missing from both. The bible's own words are asked first, because a root that is a word of the language will normally stand somewhere in sixty-six books; the dictionary is asked second, because a bound root need never stand alone and the first test on its own would accuse it wrongly. An English word is in neither.";
  "Nothing is written and nothing is asked of the site.";
  "The two vocabularies are read before the store is walked rather than after, because the walk now carries the reading with it and a reading cannot ask a vocabulary that has not arrived. Neither read writes anything, so which of them goes first is a matter of what the next line needs.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_cebuano();
  let apart = await bible_words_names_apart(bible_folder);
  let common = property_get(apart, "common");
  let vocabulary = list_unique_set(common);
  let known = await binisaya_words_known();
  let listed = [];
  let foreign_sightings = 0;
  function root_read(row) {
    let root = property_get(row, "stated_root");
    let written = set_includes(vocabulary, root);
    if (written) {
      return;
    }
    let held = binisaya_words_known_get(known, root);
    let missing = null_is(held);
    let looked_up = not(missing);
    if (looked_up) {
      return;
    }
    let sightings = property_get(row, "sightings");
    foreign_sightings = add(foreign_sightings, sightings);
    list_add(listed, row);
  }
  let gathered = await gloss_chapters_roots_claimed_rows_generic(
    app_ceb_bible_gloss_generate,
    root_read,
  );
  list_sort_number_mapper_reverse(listed, gloss_row_sightings);
  let r = {
    chapters: property_get(gathered, "chapters"),
    strict_total: property_get(gathered, "entries_claiming"),
    roots_total: property_get(gathered, "roots_total"),
    foreign_roots: list_size(listed),
    foreign_sightings,
    listed,
  };
  return r;
}
