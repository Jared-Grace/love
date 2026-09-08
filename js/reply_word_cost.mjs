import { not } from "./not.mjs";
import { reply_typo_budget } from "./reply_typo_budget.mjs";
import { reply_typo_ends } from "./reply_typo_ends.mjs";
export function reply_word_cost(word) {
  "One written-out word, matched allowing for the ways it gets typed, and keeping a running note of what the allowance cost.";
  "★ IT TURNS ONE POSSIBILITY INTO SEVERAL, WHERE THE LEAF IT REPLACES TURNED ONE INTO ONE. That is the only structural change the whole tolerance asks for. A word read with a letter missing finishes one step earlier in the message than the same word read whole, so there is no single place to carry on from, and choosing between them here - before the rest of the message has been read - would be guessing. Each ending is answered as its own possibility and the reading that survives to the end of the message decides.";
  "Every fork gets its own outputs and its own codes and shares the tokens, so a reply written down one branch cannot appear on another. Nothing already in the list is changed.";
  "A possibility that has already failed is dropped rather than revived, and a word that cannot be read here at all answers with nothing - which is what the surrounding pruning already expects from a leaf that did not match.";
  let allowed = reply_typo_budget(word);
  let fn = async function reply_word_cost_matches(possibilities) {
    let out = [];
    for (let possibility of possibilities) {
      if (not(possibility.matches)) {
        continue;
      }
      let ends = reply_typo_ends(
        word,
        possibility.tokens,
        possibility.index,
        allowed,
      );
      for (let [ti, cost] of ends) {
        let so_far = possibility.cost || 0;
        let fork = {
          ...possibility,
        };
        fork.index = ti;
        fork.cost = so_far + cost;
        fork.outputs = possibility.outputs.slice();
        fork.codes = possibility.codes.slice();
        out.push(fork);
      }
    }
    return out;
  };
  return fn;
}
