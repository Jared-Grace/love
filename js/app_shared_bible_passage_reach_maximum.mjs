import { fn_name } from "./fn_name.mjs";
export function app_shared_bible_passage_reach_maximum() {
  "How many verses past the ones asked for a page may reach while it looks for the end of a sentence.";
  "It is a bound on a search that has no promise of ending rather than a judgment about how long a sentence is. It is here for the cases where the text cannot answer at all - a bible missing the verse that would have finished the thought, or a language that marks no endings.";
  "How far the carrying actually goes was counted rather than guessed, which this used to do. Across 312 places to stop in ten chapters of the English bible - narrative, poetry, a gospel and four letters - 256 finished the sentence where the counting stopped, 300 within one verse more, 308 within two, and the furthest any of them reached was three. The three-verse cases were in Romans, Ephesians and Colossians, which is where a long sentence would be expected; the psalm and Hebrews never carried at all.";
  "That is one bible, and one bible is not what the bound has to cover. The page waits until the sentence has finished in EVERY bible its reader chose, so what a reader of several is handed is the furthest of them. Counted the same way over all thirty-eight bibles here that mark their sentences: 93 of 286 places finished at once, half within two verses, but the furthest reached sixteen - and in Hebrews 1 there was no place at all where all of them had finished. Languages do agree far more than chance would give; thirty-eight texts each finishing four times in five would agree by luck three times in ten thousand, and they agree a third of the time. But nearly always is too strong, and the tail is what a bound is for.";
  "Three was English, and English is not every bible. Counted one bible at a time across all thirty-eight, a single bible on its own reaches nine. So the earlier reading of this - twenty-five being eight times the worst there is - was a fact about one language wearing the clothes of a fact about all of them.";
  "What every reader in between meets has now been counted too, by asking every possible reader of two, of three and of four bibles rather than picking some. The furthest any of them is carried goes 9, 13, 16, 16 - and sixteen is also where all thirty-eight together stop. So the far end is reached at three languages and does not move after that: adding a fourth, or a thirty-eighth, cannot hold a sentence open longer than three already can. A bound sized against sixteen is sized against every reader there is, not against the worst imaginable one.";
  "The middle moved gently while the end stood still. The share of places where the sentence simply finishes where the counting stopped runs 82, 73, 67 and 63 in every 100 as languages are added, and nine in ten readers of four are let go within two verses. What a reader actually meets is their own worst moment rather than the average one, and for a reader of three that is six verses at the middle and nine or less nineteen times in twenty.";
  "Twenty-five is nine clear of the sixteen that is now known to be the ceiling, and far short of a chapter, so hitting it still says the sentence was never going to end rather than that it was a long one.";
  ("The countings are commands of their own, ",
    fn_name("bible_sentence_gaps_measure"),
    ", ",
    fn_name("bible_sentence_gaps_languages_measure"),
    " and ",
    fn_name("bible_sentence_gaps_languages_curve_measure"),
    ", so this can be checked again rather than believed.");
  let reach = 25;
  return reach;
}
