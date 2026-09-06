import { gloss_root_word_own_is } from "./gloss_root_word_own_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_includes } from "./text_includes.mjs";
export function gloss_explain_root_judged(word, root, explain) {
  "One explanation set beside the root an outside dictionary takes its word back to: the roots the sentence names in so many words, whether it agrees with the dictionary, and which of the two kinds of not-agreeing it is - naming a different root, or naming none at all.";
  "Nothing is judged where the dictionary's root is the word's own spelling, and that is said by answering with nothing rather than with agreement. There the dictionary is offering no origin to disagree with, so a sentence saying nothing about a root is not at fault and a sentence naming one cannot be checked.";
  "A claim is compared with the dash taken out of both sides, because a dictionary writes a doubled root with one where an explanation writes it without - balhin-balhin against balhinbalhin.";
  "An explanation that names a root in so many words is judged on the root it names, and only one claiming none falls back to asking whether the root stands anywhere in its wording. Asking the weaker question of every sentence is blind wherever the dictionary's root is a piece of the word itself: an explanation of luboa claiming the root luba passes, because the quoted word carries the letters of the true root lubo along with it.";
  "The judgment lives here rather than inside the sweep that first needed it, because a second sweep now asks the same question of words the first one never reached, and two spellings of one judgment would let the two disagree about what a wrong root is.";
  let self_rooted = gloss_root_word_own_is(word, root);
  if (self_rooted) {
    return null;
  }
  let explain_lower = text_lower_to(explain);
  let root_lower = text_lower_to(root);
  let claimed = gloss_explain_roots_claimed(explain_lower);
  let claimed_any = list_empty_not_is(claimed);
  let claimed_bare = list_map(claimed, gloss_word_bare);
  let item = gloss_word_bare(root);
  let agreed = claimed_any
    ? list_includes(claimed_bare, item)
    : text_includes(explain_lower, root_lower);
  let kind = claimed_any ? "claimed" : "silent";
  let r = {
    claimed,
    kind,
    agreed,
  };
  return r;
}
