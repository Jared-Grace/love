export async function gotquestions_word_articles_fetched() {
  "The table of GotQuestions.org articles, loaded from its own file only when it is first asked for.";
  "THE TABLE IS ITS OWN DOWNLOAD. It holds a few hundred names, and a reader who never taps a word never needs one, so the bible reader's first load does not carry it - the same way the picture Bible loads its meanings tables.";
  let tables = await import("./gotquestions_word_articles.mjs");
  let r = tables.gotquestions_word_articles();
  return r;
}
