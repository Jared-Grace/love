import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known_get_folded } from "./binisaya_words_known_get_folded.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
export function gloss_root_dictionary_named(known, folded_index, root) {
  "What the gathered dictionary holds about one root: the root it takes that word back to, and which of three positions it is in - never asked about, asked about and taken back to nothing, or asked about and taken back to a word.";
  "★ THE TWO WAYS OF KNOWING NOTHING HAVE DIFFERENT OWNERS AND MUST NOT BE ONE ANSWER. A word the dictionary has never been asked about is fetched by running the gather, and a word it holds a page for without a breakdown returns that same page however many times it is asked - one is work for a machine and the other is work for a person who knows Cebuano. A reading that hands back only the root leaves both of them as nothing, and a queue built on that nothing sends the second kind to be fetched again for as long as anybody keeps running it.";
  "Taken back to nothing covers both the entry marked unanalysed and the entry that was analysed and named no root, because asking again returns the same page either way. They are different facts about the dictionary and the same fact about what to do next, and this answers the second question.";
  "The root comes back folded, because the two spellings being set against each other come from two writers who write the same sound differently, and an unfolded comparison reports a disagreement about a letter as a disagreement about a word.";
  "$plain known";
  "$plain folded_index";
  "$plain root";
  "the first two are the gathered dictionary and the index that finds a word in it whichever way the sound is spelled, the third is the root to look up. None of them names anything that runs.";
  arguments_assert(arguments, 3);
  let held = binisaya_words_known_get_folded(known, folded_index, root);
  let missing = null_is(held);
  if (missing) {
    let absent = {
      holding: "absent",
      root: null,
    };
    return absent;
  }
  let analysed = property_get_or_null(held, "analysed");
  if (not(analysed)) {
    let unrooted = {
      holding: "unrooted",
      root: null,
    };
    return unrooted;
  }
  let named = property_get_or_null(held, "root");
  let unwritten = null_is(named);
  if (unwritten) {
    let unrooted = {
      holding: "unrooted",
      root: null,
    };
    return unrooted;
  }
  let bare = gloss_word_bare(named);
  let blank = text_empty_is(bare);
  if (blank) {
    let unrooted = {
      holding: "unrooted",
      root: null,
    };
    return unrooted;
  }
  let folded = gloss_word_folded(bare);
  let rooted = {
    holding: "rooted",
    root: folded,
  };
  return rooted;
}
