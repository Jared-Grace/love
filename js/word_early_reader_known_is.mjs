import { list_includes } from "./list_includes.mjs";
import { text_suffix_without_try } from "./text_suffix_without_try.mjs";
import { text_size } from "./text_size.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_add } from "./list_add.mjs";
import { text_last } from "./text_last.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function word_early_reader_known_is(word, known_words) {
  "Whether one word is reachable from the early-reader list, counting the ordinary endings English adds to a word it already has.";
  "THE LIST HOLDS BASE FORMS AND SPEECH DOES NOT. Covered, asked, smiling and tries are the shapes a word actually turns up in, and a plain membership test calls every one of them unknown - which is how a filter over four hundred words hands back three hundred and says nothing. Taking the ending off is the whole of the difference between a list that filters and a list that does not.";
  "IT IS DELIBERATELY CRUDE and it is allowed to be, because of where its answer goes. Nothing here fails a build: a yes drops a line out of a report and a no leaves one in for somebody to read past. So the cost of being wrong is one line either way, and a rule somebody can hold in their head is worth more here than a rule that is right more often.";
  "THE STEMS ARE GUESSED FOUR WAYS because English spells the same join four ways. Hope loses an e before d, stop doubles its p before ed, try turns its y to an i before es, and want does nothing at all. Rather than decide which happened, every shape is tried and any hit counts - over-reaching costs a line unread, and reaching too little was the fault being fixed.";
  "A stem shorter than three letters is refused. Otherwise the s comes off small words and lands on a letter the list keeps for its own sake - his becomes hi, as becomes a - and the filter starts agreeing with words on the strength of a single letter.";
  let there = list_includes(known_words, word);
  if (there) {
    return true;
  }
  let endings = ["ing", "est", "ed", "es", "er", "ly", "s", "d"];
  for (let ending of endings) {
    let shorter = text_suffix_without_try(word, ending);
    let cut = not_equal(shorter, word);
    if (cut) {
      let a = text_size(shorter);
      let long_enough = greater_than(a, 2);
      if (long_enough) {
        let stems = [shorter];
        let with_e = text_combine(shorter, "e");
        list_add(stems, with_e);
        let suffix = text_last(shorter);
        let shorter_still = text_suffix_without_try(shorter, suffix);
        list_add(stems, shorter_still);
        let without_i = text_suffix_without_try(shorter, "i");
        let with_y = text_combine(without_i, "y");
        list_add(stems, with_y);
        for (let stem of stems) {
          let known = list_includes(known_words, stem);
          if (known) {
            return true;
          }
        }
      }
    }
  }
  return false;
}
