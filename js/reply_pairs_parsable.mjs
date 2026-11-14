import { object_property_names } from "./object_property_names.mjs";
import { reply_approved_messages } from "./reply_approved_messages.mjs";
import { english_words_system_lookup } from "./english_words_system_lookup.mjs";
import { words_bigrams_tally } from "./words_bigrams_tally.mjs";
export async function reply_pairs_parsable() {
  "Two dictionary words side by side that do read as English together, because somebody wrote them that way in a message a reviewer approved.";
  "★ NOTHING HERE IS JUDGED, SO NOTHING HERE IS STORED. An approved sample is English by the reviewer's own verdict, so every pair of dictionary words inside it reads as English - and asking again whenever the samples grow keeps this list exactly as wide as they are.";
  "Only pairs of two dictionary words are kept, because only those ever need asking about; a pair with a name or an unknown word in it is never what makes a dictionary word count as English. A pair is only taken where nothing but a space stood between the two words.";
  let messages = await reply_approved_messages();
  function lambda(m) {
    let r = m.toLowerCase();
    return r;
  }
  let lowered = messages.map(lambda);
  let lookup = await english_words_system_lookup();
  let words = lookup.words;
  let tally = words_bigrams_tally(lowered);
  let pairs = [];
  for (let pair of object_property_names(tally.bigrams)) {
    let [left, right] = pair.split(" ");
    if (left in words && right in words) {
      pairs.push(pair);
    }
  }
  pairs.sort();
  return pairs;
}
