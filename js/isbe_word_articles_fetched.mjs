export async function isbe_word_articles_fetched() {
  "The table of the International Standard Bible Encyclopedia's names, loaded from its own file only when it is first asked for.";
  "THE TABLE IS ITS OWN DOWNLOAD. It holds some ten thousand rows, and a reader who never taps a word never needs one, so the bible reader's first load does not carry it.";
  let tables = await import("./isbe_word_articles.mjs");
  let r = tables.isbe_word_articles();
  return r;
}
