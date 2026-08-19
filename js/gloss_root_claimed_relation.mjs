import { equal } from "./equal.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_shared_run_longest } from "./text_shared_run_longest.mjs";
import { text_size } from "./text_size.mjs";
export function gloss_root_claimed_relation(root, claimed) {
  "How the root an explanation names stands to the root a dictionary gives: the same word spelled two ways, a word inside it, a word it sits inside, a word plainly built from the same stem, or a word apart from it altogether.";
  "It is called a spelling rather than the same word, because the two are never written the same - a pair written identically was never reported as disagreeing in the first place. What comes back here is the reading of a difference, and this one is a difference of spelling.";
  "Counting the letters between two roots says how far apart they are and not what kind of disagreement it is, and the two come apart badly. An explanation of nahigugma naming gugma where the dictionary writes higugma is two edits away and is not wrong at all - gugma is what higugma is built from, so the explanation went one step further back than the dictionary did. Read as a distance that looks the same as a made-up origin two letters off. Read as one word sitting inside the other, it is plainly a disagreement about how far back to stop.";
  "Deeper and shallower are told apart rather than lumped as one, because they are opposite faults and only one of them is a fault. Naming gugma under higugma tells a reader more than the dictionary does; naming paminaw under minaw hands them an affixed form as though it were the root, which is the thing these explanations exist to avoid.";
  "Everything is asked of the folded words rather than of the words as written, because Cebuano's two spellings of one sound would otherwise answer apart for a pair that is the same word - hangtod against hangtud, and every word built on bukid where the d has become an r.";
  "Kin is the answer where neither word holds the other and they still share a run of four letters or more. That happens because a letter changes where the piece and the root meet: pang and tudlo give panudlo, which holds neither tudlo nor its own root whole, and yet nobody reading udlo in both could call them unrelated. Four letters rather than three, because three is short enough for two unrelated Cebuano words to share by chance and four is not.";
  "A claim of nothing stands apart. Every word contains the empty word, so left unasked it would read as the deepest root there is.";
  "$plain root";
  "$plain claimed";
  "both name words to compare - one a dictionary's, one an explanation's. Neither names anything that runs.";
  let root_folded = gloss_word_folded(root);
  let claimed_folded = gloss_word_folded(claimed);
  let nothing = text_empty_is(claimed_folded);
  if (nothing) {
    let r = "apart";
    return r;
  }
  let same = equal(root_folded, claimed_folded);
  if (same) {
    let r2 = "spelling";
    return r2;
  }
  let deeper = text_includes(root_folded, claimed_folded);
  if (deeper) {
    let r3 = "deeper";
    return r3;
  }
  let shallower = text_includes(claimed_folded, root_folded);
  if (shallower) {
    let r4 = "shallower";
    return r4;
  }
  let run = text_shared_run_longest(root_folded, claimed_folded);
  let a = text_size(run);
  let kin = greater_than_equal(a, 4);
  if (kin) {
    let r5 = "kin";
    return r5;
  }
  let r6 = "apart";
  return r6;
}
