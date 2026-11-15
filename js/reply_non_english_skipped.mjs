import { equal } from "./equal.mjs";
import { english_words_lookup } from "./english_words_lookup.mjs";
import { not } from "./not.mjs";
import { reply_non_english_stretches } from "./reply_non_english_stretches.mjs";
import { reply_property_cost } from "./reply_property_cost.mjs";
import { reply_possibility_number } from "./reply_possibility_number.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
export function reply_non_english_skipped() {
  "Reads past the rest of a stretch written in some other language, from any word inside it to its end, charging a hundred for every word it passes over.";
  "★ A HUNDRED A WORD IS DEARER THAN ANY TYPO READING. A typo costs one to three, so whenever a rule can read the same words as English, even with every letter it is allowed to forgive, that reading is cheaper and wins. This step only decides a message nothing else can read.";
  "It may start from any word of the stretch, not only its first, because a rule's own word can be the first of a stretch: in start me advantage milta hai, the advert rule reads advantage and this step carries on with milta hai.";
  "Positions count only the characters the rules read, so the words of a stretch sit end to end and each one starts where the one before it stops.";
  "The word list is read once, the first time any message reaches this step, and each message's stretches are found once however many possibilities ask. A page that cannot fetch the list - offline, say - skips nothing, and the message goes unread as it would have before this step existed.";
  let lookup = null;
  let stretches_by_message = {};
  let fn = async function reply_non_english_skipped_matches(possibilities) {
    if (equal(lookup, null)) {
      lookup = await english_words_lookup();
    }
    let out = [];
    if (equal(lookup, null)) {
      return out;
    }
    for (let possibility of possibilities) {
      if (not(possibility.matches)) {
        continue;
      }
      let message = possibility.message;
      if (not(message in stretches_by_message)) {
        stretches_by_message[message] = reply_non_english_stretches(
          message,
          lookup,
        );
      }
      for (let stretch of stretches_by_message[message]) {
        let position = stretch.start;
        let remaining = stretch.words.length;
        for (let word of stretch.words) {
          if (equal(position, possibility.index)) {
            let name = reply_property_cost();
            let so_far = reply_possibility_number(possibility, name);
            let fork = {
              ...possibility,
            };
            fork.index = stretch.end;
            fork.cost = so_far + multiply(100, remaining);
            fork.outputs = possibility.outputs.slice();
            fork.codes = possibility.codes.slice();
            out.push(fork);
          }
          position = position + word.length;
          remaining = subtract(remaining, 1);
        }
      }
    }
    return out;
  };
  return fn;
}
