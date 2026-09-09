import { app_ceb_bible_gloss_words_roots_unproved_holdings_person_is } from "./app_ceb_bible_gloss_words_roots_unproved_holdings_person_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_roots_apart_arbitrated } from "./app_ceb_bible_gloss_words_roots_apart_arbitrated.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
export async function app_ceb_bible_gloss_words_roots_unproved_holdings() {
  "Every Cebuano word whose two claimed roots the dictionary could not settle, split by what would actually settle it: nothing at all because the two roots are one word wearing an accent, a run of the gather because the dictionary has never been asked, or a person who knows Cebuano because it has been asked and holds no breakdown.";
  "The arbitration beside this one answers unproved for forty of sixty words and says plainly that unproved is neither a fault nor a let-off. That is true and it is where the reading stopped, and a queue of forty words with one label on it hides that its rows are owed to three different people. This splits them.";
  "★ THE ACCENT ROWS ARE NOT A QUEUE AT ALL AND THEY ARE THE ONES THAT LOOK MOST LIKE ONE. Kini beside kiní and tamay beside támay reach the arbitration as two different roots, because the folding that lets two writers spell a sound differently does not touch accent marks. So they arrive unproved, they are counted among the words nobody has looked up, and every one of them would be sent off to be fetched a second time under a spelling no dictionary is keyed by. There is nothing to fetch and nothing to decide: it is the same word twice.";
  "Only a root the dictionary has never heard of is worth putting to the gather, and a pair is worth gathering when either half is unheard of - one half is enough to settle the pair whenever the dictionary takes that half back to the other. Where both halves are held without a breakdown the gather can do nothing, however many times it is run, and saying so is the whole reason those rows are counted apart.";
  "The words to fetch are handed back already lowered and deduplicated, in the shape the gather takes, so that nothing between here and there has to be typed out by hand.";
  arguments_assert(arguments, 0);
  let arbitrated = await app_ceb_bible_gloss_words_roots_apart_arbitrated();
  let r2 =
    await app_ceb_bible_gloss_words_roots_unproved_holdings_person_is(
      arbitrated,
    );
  let person_is = property_get(r2, "person_is");
  let gather_is = property_get(r2, "gather_is");
  let accent_is = property_get(r2, "accent_is");
  let owed_rows = property_get(r2, "owed_rows");
  let unproved = property_get(r2, "unproved");
  let accent = list_filter(owed_rows, accent_is);
  let gather = list_filter(owed_rows, gather_is);
  let person = list_filter(owed_rows, person_is);
  function row_unheard(row) {
    let unheard = property_get(row, "unheard");
    return unheard;
  }
  let named = list_map_concat_multiple(gather, row_unheard);
  let gather_words = list_map_unique(named, text_lower_to);
  let r = {
    unproved_words: list_size(unproved),
    accent_words: list_size(accent),
    gather_words_count: list_size(gather),
    person_words: list_size(person),
    accent_sightings: list_map_sum(accent, gloss_row_sightings),
    gather_sightings: list_map_sum(gather, gloss_row_sightings),
    person_sightings: list_map_sum(person, gloss_row_sightings),
    gather_words,
    accent,
    gather,
    person,
  };
  return r;
}
