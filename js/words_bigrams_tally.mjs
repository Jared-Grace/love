import { list_tally_add } from "./list_tally_add.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { text_punctuation_split_grouped } from "./text_punctuation_split_grouped.mjs";
import { each } from "./each.mjs";
export function words_bigrams_tally(texts) {
  "How often each word turns up across a body of writing, and how often each pair of words turns up standing next to each other in it.";
  "The two are counted together because they are read together. A question about one word on its own can be answered by the first tally; a question about whether the writer ever put two particular words side by side can only be answered by the second, and reading the whole body twice to get them is the same answer for twice the work.";
  "A pair is only counted where nothing but a space stood between the two words. A full stop or a quote mark between them means the writer never put them together, and counting that as a pair would let the tally testify to a sequence nobody wrote.";
  "A pair is spelled as the two words with one space between them, which is what the sequence looks like written down.";
  let words = {};
  let bigrams = {};
  function each_run(run) {
    list_tally_add(words, run);
    let pairs = [];
    let previous = null;
    for (let word of run) {
      if (null_not_is(previous)) {
        let pair = text_combine_multiple([previous, " ", word]);
        list_add(pairs, pair);
      }
      previous = word;
    }
    list_tally_add(bigrams, pairs);
  }
  function each_text(t) {
    let grouped = text_punctuation_split_grouped(t);
    each(grouped, each_run);
  }
  each(texts, each_text);
  let r = {
    words,
    bigrams,
  };
  return r;
}
