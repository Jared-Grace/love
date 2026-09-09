import { property_get } from "./property_get.mjs";
import { app_ceb_bible_gloss_words_roots_apart_arbitrated_depth } from "./app_ceb_bible_gloss_words_roots_apart_arbitrated_depth.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function app_ceb_bible_gloss_words_roots_apart_arbitrated() {
  "Every Cebuano word whose explanations name two roots with nothing in common, put to the dictionary rather than to a reader's judgment: one root turning out to be the other's root, both turning out to have the same root, the two turning out to have different roots, or the dictionary having nothing to say.";
  "The reading beside this one calls a pair apart when neither root holds the other and they share no run of four letters. That test is honest about what it measures and its own prose says where it misleads: Cebuano drops the vowel out of a root's last syllable when a suffix goes on, so kupot beside kuptan and dumot beside dumtan come back apart while being the same word at two depths. Read as faults they would be a false alarm, and there is no way to tell them from a real contradiction by looking at the letters, which is exactly why this asks something that already knows.";
  "★ NOTHING TO SAY IS NOT A LET-OFF AND NOT A FAULT, AND IT IS THE LARGEST ANSWER. The gathered dictionary holds an entry only for a word somebody has already asked about, and it stores a word it has never heard of exactly as it stores a word it has no breakdown for. So a pair it cannot settle is a pair nobody has looked up yet, and counting those as clean would be as wrong as counting them as broken. They are the queue for the next gather, and they are reported as their own number so that neither mistake can be made by reading past them.";
  "The four way judgment itself is not here. It sits on its own where a written case can be put to it, because the answer that matters most is the accusing one and this walk reaches it nought times: a nought is worth reading only while something outside the walk can still show that the branch behind it fires. Answering correctly and having stopped being able to answer at all look the same from here.";
  arguments_assert(arguments, 0);
  let r2 = await app_ceb_bible_gloss_words_roots_apart_arbitrated_depth();
  let depth = property_get(r2, "depth");
  let shared = property_get(r2, "shared");
  let contradiction = property_get(r2, "contradiction");
  let unproved = property_get(r2, "unproved");
  let apart = property_get(r2, "apart");
  let r = {
    apart_words: list_size(apart),
    depth_words: list_size(depth),
    shared_words: list_size(shared),
    contradiction_words: list_size(contradiction),
    unproved_words: list_size(unproved),
    contradiction_sightings: list_map_sum(contradiction, gloss_row_sightings),
    unproved_sightings: list_map_sum(unproved, gloss_row_sightings),
    contradiction,
    depth,
    shared,
    unproved,
  };
  return r;
}
