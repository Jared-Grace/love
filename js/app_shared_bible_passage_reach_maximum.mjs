import { fn_name } from "./fn_name.mjs";
export function app_shared_bible_passage_reach_maximum() {
  "How many verses past the ones asked for a page may reach while it looks for the end of a sentence.";
  "It is a bound on a search that has no promise of ending rather than a judgment about how long a sentence is. It is here for the cases where the text cannot answer at all - a bible missing the verse that would have finished the thought, or a language that marks no endings.";
  "How far the carrying actually goes was counted rather than guessed, which this used to do. Across 312 places to stop in ten chapters of the English bible - narrative, poetry, a gospel and four letters - 256 finished the sentence where the counting stopped, 300 within one verse more, 308 within two, and the furthest any of them reached was three. The three-verse cases were in Romans, Ephesians and Colossians, which is where a long sentence would be expected; the psalm and Hebrews never carried at all.";
  "Twenty-five is far past that and far short of a chapter, so hitting it says the sentence was never going to end rather than that it was a long one. Eight times the furthest measured is a wide margin on purpose: the count is a sample of ten chapters and the bible is twelve hundred, so the bound has to cover the sentence nobody looked at.";
  ("The counting is a command of its own, ",
    fn_name("bible_sentence_gaps_measure"),
    ", so this can be checked again rather than believed.");
  let reach = 25;
  return reach;
}
