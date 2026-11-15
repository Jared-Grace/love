import { reply_approved_messages } from "./reply_approved_messages.mjs";
import { english_words_lookup } from "./english_words_lookup.mjs";
import { reply_non_english_stretches } from "./reply_non_english_stretches.mjs";
import { greater_than } from "./greater_than.mjs";
export async function reply_non_english_stretches_approved() {
  "Every approved reply sample in which a stretch of another language is found, with the stretches found. Every approved sample was read by a rule and passed, so the honest answer is mostly empty: a stretch here is either a word the rules forgive (a misspelled name) or a fault in how foreign words are found.";
  let messages = await reply_approved_messages();
  let lookup = await english_words_lookup();
  let found = [];
  for (let message of messages) {
    let stretches = reply_non_english_stretches(message, lookup);
    if (greater_than(stretches.length, 0)) {
      function lambda(s) {
        let r = s.words.join(" ");
        return r;
      }
      let held = stretches.map(lambda);
      found.push({
        message,
        stretches: held,
      });
    }
  }
  return found;
}
