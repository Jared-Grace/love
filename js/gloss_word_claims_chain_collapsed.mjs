import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { gloss_word_root_chain } from "./gloss_word_root_chain.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
export function gloss_word_claims_chain_collapsed(known, claims) {
  "Several roots claimed for one word, sorted into the ones the dictionary shows are the same path read further down and the ones left standing apart.";
  "A word explained as pangita in one chapter and as kita in another looks like two answers to one question, and it is not one. Asked about pangita the dictionary answers kita, so both explanations name steps on a single path and neither is wrong; the only thing between them is how far down the path the explanation went. That is a matter of taste, and putting it in a queue of faults spends a person's reading on a decision nobody has to make.";
  "A claim is folded in under another only when the second stands on the first's chain and the first does not stand on the second's. Where two claims name each other, the dictionary is disagreeing with itself and there is no deeper reading to prefer, so both stay. Nothing here can empty the answer.";
  "The two spellings Cebuano gives one sound are folded together before anything is compared, on the chain as well as on the claims, because a claim reached by one spelling has to be found under the other. Measured on the corpus gathered so far this folding changes nothing at all: the same six pairs are found with it and without it, so the exact lookup the walk already does is enough here and nothing is owed to the folded one.";
  "The spelling handed back is the first one given for each claim. A claim written two ways is one claim, and picking the first keeps a real spelling in front of a reader rather than the folded form, which is often not a word.";
  "$plain known";
  "$plain claims";
  "the first names a gathered dictionary to read, the second the roots claimed for one word. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  let bared = list_map(claims, gloss_word_bare);
  let seen = [];
  let distinct = [];
  function claim_keep(bare) {
    let key = gloss_word_folded(bare);
    let fresh = list_includes_not(seen, key);
    if (fresh) {
      list_add(seen, key);
      list_add(distinct, bare);
    }
  }
  each(bared, claim_keep);
  function claim_chain(bare) {
    let walked = gloss_word_root_chain(known, bare);
    let answer = list_map(walked, gloss_word_folded);
    return answer;
  }
  let chains = list_map(distinct, claim_chain);
  let kept = [];
  let collapsed = [];
  let size = list_size(distinct);
  let index = 0;
  while (less_than(index, size)) {
    let bare = list_get(distinct, index);
    let key = list_get(seen, index);
    let mine = list_get(chains, index);
    let under = null;
    let other = 0;
    while (less_than(other, size)) {
      let b = equal(other, index);
      let apart = not(b);
      if (apart) {
        let theirs = list_get(chains, other);
        let below = list_includes(theirs, key);
        let their_key = list_get(seen, other);
        let above = list_includes(mine, their_key);
        let deeper = below && not(above);
        let unclaimed = null_is(under);
        if (deeper && unclaimed) {
          under = list_get(distinct, other);
        }
      }
      other = add(other, 1);
    }
    let standing = null_is(under);
    if (standing) {
      list_add(kept, bare);
    }
    if (not(standing)) {
      let folded_in = {
        claim: bare,
        under,
      };
      list_add(collapsed, folded_in);
    }
    index = add(index, 1);
  }
  let r = {
    kept,
    collapsed,
  };
  return r;
}
