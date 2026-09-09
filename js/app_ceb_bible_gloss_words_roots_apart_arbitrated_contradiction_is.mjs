import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_words_known_folded_index } from "./binisaya_words_known_folded_index.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { app_ceb_bible_gloss_words_roots_apart_arbitrated_row_arbitrated } from "./app_ceb_bible_gloss_words_roots_apart_arbitrated_row_arbitrated.mjs";
import { list_map } from "./list_map.mjs";
import { property_equals } from "./property_equals.mjs";
export async function app_ceb_bible_gloss_words_roots_apart_arbitrated_contradiction_is(
  apart,
) {
  arguments_assert(arguments, 1);
  let known = await binisaya_words_known();
  let folded_index = binisaya_words_known_folded_index(known);
  function root_folded(root) {
    let bare = gloss_word_bare(root);
    let folded = gloss_word_folded(bare);
    return folded;
  }
  let row_arbitrated =
    app_ceb_bible_gloss_words_roots_apart_arbitrated_row_arbitrated(
      known,
      folded_index,
      root_folded,
    );
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
  let r = {
    arbitrated,
    depth_is,
    shared_is,
    contradiction_is,
  };
  return r;
}
