import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_roots_chapters_disagreeing } from "./app_ceb_bible_gloss_words_roots_chapters_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_words_known_folded_index } from "./binisaya_words_known_folded_index.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { binisaya_words_known_get_folded } from "./binisaya_words_known_get_folded.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_roots_pair_dictionary_verdict } from "./gloss_roots_pair_dictionary_verdict.mjs";
import { list_map } from "./list_map.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function app_ceb_bible_gloss_words_roots_apart_arbitrated() {
  "Every Cebuano word whose explanations name two roots with nothing in common, put to the dictionary rather than to a reader's judgment: one root turning out to be the other's root, both turning out to have the same root, the two turning out to have different roots, or the dictionary having nothing to say.";
  "The reading beside this one calls a pair apart when neither root holds the other and they share no run of four letters. That test is honest about what it measures and its own prose says where it misleads: Cebuano drops the vowel out of a root's last syllable when a suffix goes on, so kupot beside kuptan and dumot beside dumtan come back apart while being the same word at two depths. Read as faults they would be a false alarm, and there is no way to tell them from a real contradiction by looking at the letters, which is exactly why this asks something that already knows.";
  "★ NOTHING TO SAY IS NOT A LET-OFF AND NOT A FAULT, AND IT IS THE LARGEST ANSWER. The gathered dictionary holds an entry only for a word somebody has already asked about, and it stores a word it has never heard of exactly as it stores a word it has no breakdown for. So a pair it cannot settle is a pair nobody has looked up yet, and counting those as clean would be as wrong as counting them as broken. They are the queue for the next gather, and they are reported as their own number so that neither mistake can be made by reading past them.";
  "The four way judgment itself is not here. It sits on its own where a written case can be put to it, because the answer that matters most is the accusing one and this walk reaches it nought times: a nought is worth reading only while something outside the walk can still show that the branch behind it fires. Answering correctly and having stopped being able to answer at all look the same from here.";
  arguments_assert(arguments, 0);
  let reading = await app_ceb_bible_gloss_words_roots_chapters_disagreeing();
  let apart = property_get(reading, "apart");
  let known = await binisaya_words_known();
  let folded_index = binisaya_words_known_folded_index(known);
  function root_folded(root) {
    let bare = gloss_word_bare(root);
    let folded = gloss_word_folded(bare);
    return folded;
  }
  function dictionary_root_folded(root) {
    let held = binisaya_words_known_get_folded(known, folded_index, root);
    let missing = null_is(held);
    if (missing) {
      return null;
    }
    let analysed = property_get_or_null(held, "analysed");
    if (not(analysed)) {
      return null;
    }
    let named = property_get_or_null(held, "root");
    let unwritten = null_is(named);
    if (unwritten) {
      return null;
    }
    let bare = gloss_word_bare(named);
    let blank = text_empty_is(bare);
    if (blank) {
      return null;
    }
    let folded = gloss_word_folded(bare);
    return folded;
  }
  function row_arbitrated(row) {
    let roots = property_get(row, "roots");
    let word = property_get(row, "word");
    let sightings = property_get(row, "sightings");
    let chapters = property_get(row, "chapters");
    let first = list_get(roots, 0);
    let second = list_get(roots, 1);
    let first_folded = root_folded(first);
    let second_folded = root_folded(second);
    let first_root = dictionary_root_folded(first);
    let second_root = dictionary_root_folded(second);
    let verdict = gloss_roots_pair_dictionary_verdict(
      first_folded,
      second_folded,
      first_root,
      second_root,
    );
    let answer = {
      word,
      roots,
      verdict,
      dictionary_roots: [first_root, second_root],
      sightings,
      chapters,
    };
    return answer;
  }
  let arbitrated = list_map(apart, row_arbitrated);
  function depth_is(row) {
    let verdict_depth = property_equals(row, "verdict", "depth");
    return verdict_depth;
  }
  function shared_is(row) {
    let verdict_shared = property_equals(row, "verdict", "shared");
    return verdict_shared;
  }
  function contradiction_is(row) {
    let wrong = property_equals(row, "verdict", "contradiction");
    return wrong;
  }
  function unproved_is(row) {
    let verdict_unproved = property_equals(row, "verdict", "unproved");
    return verdict_unproved;
  }
  let depth = list_filter(arbitrated, depth_is);
  let shared = list_filter(arbitrated, shared_is);
  let contradiction = list_filter(arbitrated, contradiction_is);
  let unproved = list_filter(arbitrated, unproved_is);
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
