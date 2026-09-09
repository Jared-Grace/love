import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known_get_folded } from "./binisaya_words_known_get_folded.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_roots_pair_dictionary_verdict } from "./gloss_roots_pair_dictionary_verdict.mjs";
export function app_ceb_bible_gloss_words_roots_apart_arbitrated_row_arbitrated(
  known,
  folded_index,
  root_folded,
) {
  arguments_assert(arguments, 3);
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
  return row_arbitrated;
}
