import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_offenders_names_candidates } from "./gloss_offenders_names_candidates.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export async function app_ceb_bible_gloss_names_candidates() {
  "The proper names hiding in the Cebuano app's findings, commonest first: every word written with a capital everywhere it appears, the root the dictionary handed back for it, and whether the app itself already said in so many words that the word is a name.";
  "Most of these findings are not faults at all. A name has no Cebuano root, so the dictionary answers a question nobody asked and hands back whatever it can reach - Moises fetching isi, Galilea fetching lili, Gideon fetching dili, which means not. Left alone they sit in the pile forever, because no amount of reading the explanation can settle them: the explanation was right. What settles them is somebody marking the word a name, once, and that mark being kept.";
  "Read the declared column first. Where it is true the app's own sentence says the word is a name and says which word, so nothing else can have been meant and the row is proof. Where it is false the row is a candidate and not a verdict, because a word that opens every line it appears in is capitalised every time too.";
  "The silent column says how many of the sightings never reached the queue of words explained two ways, because the explanation named no root at all. Those are the ones nothing else in this app is looking at.";
  arguments_assert(arguments, 0);
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  let consulted = property_get(disagreeing, "consulted");
  let candidates = gloss_offenders_names_candidates(offenders);
  let words_total = list_size(candidates);
  let totals = {
    sightings: 0,
    declared_words: 0,
    silent: 0,
  };
  function candidate_add(row) {
    let row_sightings = property_get(row, "sightings");
    let seen = property_get(totals, "sightings");
    let seen_more = add(seen, row_sightings);
    property_set(totals, "sightings", seen_more);
    let row_silent = property_get(row, "silent");
    let quiet = property_get(totals, "silent");
    let quiet_more = add(quiet, row_silent);
    property_set(totals, "silent", quiet_more);
    let declared = property_get(row, "declared");
    if (declared) {
      let words = property_get(totals, "declared_words");
      let words_more = add(words, 1);
      property_set(totals, "declared_words", words_more);
    }
  }
  each(candidates, candidate_add);
  let sightings = property_get(totals, "sightings");
  let silent = property_get(totals, "silent");
  let declared_words = property_get(totals, "declared_words");
  let r = {
    consulted,
    words_total,
    sightings,
    silent,
    declared_words,
    candidates,
  };
  return r;
}
