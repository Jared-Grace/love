export async function easton_word_articles_fetched() {
  "The table of Easton's Bible Dictionary entries, loaded from its own file only when it is first asked for.";
  "THE TABLE IS ITS OWN DOWNLOAD. It holds some four thousand entries, and a reader who never taps a word never needs one, so the bible reader's first load does not carry it.";
  let tables = await import("./easton_word_articles.mjs");
  let r = tables.easton_word_articles();
  return r;
}
