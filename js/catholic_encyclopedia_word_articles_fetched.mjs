export async function catholic_encyclopedia_word_articles_fetched() {
  "The table of Catholic Encyclopedia articles, loaded from its own file only when it is first asked for.";
  "THE TABLE IS ITS OWN DOWNLOAD, so the bible reader's first load does not carry it; a reader who never taps a word never needs it.";
  let tables = await import("./catholic_encyclopedia_word_articles.mjs");
  let r = tables.catholic_encyclopedia_word_articles();
  return r;
}
