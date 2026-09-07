import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_offenders_roots_silent_words } from "./gloss_offenders_roots_silent_words.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_names_apart } from "./bible_words_names_apart.mjs";
import { gloss_words_rows_names_apart } from "./gloss_words_rows_names_apart.mjs";
import { gloss_names_filter_checked } from "./gloss_names_filter_checked.mjs";
export async function app_ceb_bible_gloss_names_filter_checked() {
  "Checks the names the Cebuano queue quietly drops against the app's own sentences: which of them a written explanation actually proves is a name, which rest on the vocabulary test alone, and which proven names the test failed to drop.";
  "The queue of words whose glosses say nothing about their root takes proper names off itself before anybody reads it, because a name has no Cebuano root and the dictionary invents one - Moises comes back as mo- plus isi plus -s. That removal is a kindness and it is also unchecked. It rests on one question, whether the word is ever met in small letters in the sixty-six books, and the account of that test names two rows it got wrong and one it loses to a single small-letter spelling. Nothing was reading the rows it took.";
  "This reads them. The evidence it reads them with is authored rather than counted: an explanation that says the word is a name, and names which word. Where the two agree the row is settled twice over; where they disagree the row is worth a person's minute.";
  "Silence proves nothing here, and the unproven list is the larger one for that reason alone - most explanations of a name never use the word name. So the proven count is a floor on how much of the removal is sound, never a verdict on the rest.";
  arguments_assert(arguments, 0);
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  let consulted = property_get(disagreeing, "consulted");
  let silent_words = gloss_offenders_roots_silent_words(offenders);
  let bible_folder = ebible_folder_cebuano();
  let bible_apart = await bible_words_names_apart(bible_folder);
  let common_words = property_get(bible_apart, "common");
  let apart = gloss_words_rows_names_apart(silent_words, common_words);
  let names_taken = property_get(apart, "names");
  let checked = gloss_names_filter_checked(offenders, names_taken);
  let taken_total = property_get(checked, "taken_total");
  let declared_total = property_get(checked, "declared_total");
  let proven_total = property_get(checked, "proven_total");
  let unproven_total = property_get(checked, "unproven_total");
  let missed_total = property_get(checked, "missed_total");
  let proven = property_get(checked, "proven");
  let unproven = property_get(checked, "unproven");
  let missed = property_get(checked, "missed");
  let r = {
    consulted,
    taken_total,
    declared_total,
    proven_total,
    unproven_total,
    missed_total,
    proven,
    unproven,
    missed,
  };
  return r;
}
