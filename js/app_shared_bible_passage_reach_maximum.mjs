export function app_shared_bible_passage_reach_maximum() {
  "How many verses past the ones asked for a page may reach while it looks for the end of a sentence.";
  "It is a bound on a search that has no promise of ending rather than a judgment about how long a sentence is. Most sentences finish within a verse or two of where the counting stopped, so this is almost never spent; it is here for the cases where the text cannot answer at all - a bible missing the verse that would have finished the thought, or a language that marks no endings.";
  "Twenty-five is far past any sentence and far short of a chapter, so hitting it says the sentence was never going to end rather than that it was a long one.";
  let reach = 25;
  return reach;
}
