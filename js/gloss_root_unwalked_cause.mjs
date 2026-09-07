import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { binisaya_words_known_get_folded } from "./binisaya_words_known_get_folded.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { equal } from "./equal.mjs";
export function gloss_root_unwalked_cause(known, folded_index, root) {
  "Why a dictionary took no step on from the root it gave: unasked where it has never seen the word, spelled_otherwise where it has it under another spelling, unanalysed where it has the word and never took it apart, rootless where it took it apart and named no further root, and walked where it did take a step and there is no silence to explain.";
  "Four fifths of the disagreements gathered so far end with the dictionary saying nothing, and a pile that size is read as one thing and worked on as one thing. It is not one thing. Two of these answers close by asking the dictionary again and two of them never will, and a plan built on the count alone spends its effort on the half that cannot move.";
  "unanalysed is the answer worth knowing and the one nothing else reports. The dictionary carries a breakdown on some of its entries and not on others, so a word it holds perfectly well can have no root on its page - and asking a second time fetches the same page and changes nothing. Measured over the sightings gathered so far, roughly half the silence is this, which is to say roughly half of it is words somebody has to know rather than words anybody can fetch.";
  "spelled_otherwise is the answer that costs nothing to act on. The dictionary has the word, under one of the spellings Cebuano gives it, and was asked in the other - so the answer is already on the machine and no one has to go anywhere for it.";
  "A root the dictionary did take a step on from comes back as walked, which is not a cause of silence but the absence of one. It is answered rather than refused because a reading that threw on it would have to be guarded at every call site by the very question it exists to answer, and because a caller whose walk and whose cause disagree has found something worth seeing rather than an error to be stopped at.";
  "This says why the walk did not happen and never why it went where it went. Where it did happen, nothing here reads it.";
  "$plain known";
  "$plain folded_index";
  "$plain root";
  "the first names a gathered dictionary, the second the same dictionary gathered under folded spellings, the third the root a dictionary gave. None of them names anything that runs.";
  arguments_assert(arguments, 3);
  let bare = gloss_word_bare(root);
  let held = binisaya_words_known_get(known, bare);
  let missing = null_is(held);
  if (missing) {
    let otherwise = binisaya_words_known_get_folded(known, folded_index, bare);
    let b = null_is(otherwise);
    let elsewhere = not(b);
    if (elsewhere) {
      let spelled_otherwise = "spelled_otherwise";
      return spelled_otherwise;
    }
    let unasked = "unasked";
    return unasked;
  }
  let analysed = property_get(held, "analysed");
  if (not(analysed)) {
    let unanalysed = "unanalysed";
    return unanalysed;
  }
  let named = property_get(held, "root");
  let further = gloss_word_bare(named);
  let nothing = text_empty_is(further);
  let itself = equal(further, bare);
  if (nothing || itself) {
    let rootless = "rootless";
    return rootless;
  }
  let walked = "walked";
  return walked;
}
