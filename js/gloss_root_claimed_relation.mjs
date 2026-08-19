import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { equal } from "./equal.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_includes } from "./text_includes.mjs";
export function gloss_root_claimed_relation(root, claimed) {
  "How the root an explanation names stands to the root a dictionary gives: the same word, a word inside it, a word it sits inside, or a word apart from it altogether.";
  "Counting the letters between two roots says how far apart they are and not what kind of disagreement it is, and the two come apart badly. An explanation of nahigugma naming gugma where the dictionary writes higugma is two edits away and is not wrong at all - gugma is what higugma is built from, so the explanation went one step further back than the dictionary did. Read as a distance that looks the same as a made-up origin two letters off. Read as one word sitting inside the other, it is plainly a disagreement about how far back to stop.";
  "Deeper and shallower are told apart rather than lumped as one, because they are opposite faults and only one of them is a fault. Naming gugma under higugma tells a reader more than the dictionary does; naming paminaw under minaw hands them an affixed form as though it were the root, which is the thing these explanations exist to avoid.";
  "A claim of nothing stands apart. Every word contains the empty word, so left unasked it would read as the deepest root there is.";
  "$plain root";
  "$plain claimed";
  "both name words to compare - one a dictionary's, one an explanation's. Neither names anything that runs.";
  let root_bare = gloss_word_bare(root);
  let claimed_bare = gloss_word_bare(claimed);
  let nothing = text_empty_is(claimed_bare);
  if (nothing) {
    let r = "apart";
    return r;
  }
  let same = equal(root_bare, claimed_bare);
  if (same) {
    let r2 = "same";
    return r2;
  }
  let deeper = text_includes(root_bare, claimed_bare);
  if (deeper) {
    let r3 = "deeper";
    return r3;
  }
  let shallower = text_includes(claimed_bare, root_bare);
  if (shallower) {
    let r4 = "shallower";
    return r4;
  }
  let r5 = "apart";
  return r5;
}
