import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
export function app_ceb_bible_gloss_roots_claimed_before_misread_folded_of() {
  arguments_assert(arguments, 0);
  function folded_of(value) {
    let bare = gloss_word_bare(value);
    let lowered = text_lower_to(bare);
    let folded = gloss_word_folded(lowered);
    return folded;
  }
  return folded_of;
}
