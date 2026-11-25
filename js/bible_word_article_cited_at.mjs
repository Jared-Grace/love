import { null_is } from "./null_is.mjs";
import { bible_word_article_citations_path } from "./bible_word_article_citations_path.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
import { http_json_browser_quiet_memoized_on_success } from "./http_json_browser_quiet_memoized_on_success.mjs";
import { property_or_null } from "./property_or_null.mjs";
export async function bible_word_article_cited_at(
  word,
  chapter_code,
  verse_number,
) {
  "The articles that cite this verse and print this word, then those on the whole chapter, as pairs of site name and file. An empty list when there are none, and when the list could not be fetched.";
  "$plain word";
  "$plain chapter_code";
  "$plain verse_number";
  "the word is one tapped word, the code a chapter's name like MRK05, and the number a verse in it; together they look up a list, and nothing in them runs.";
  "NOT REACHING THE LIST MUST NOT COST THE READER THE CARD: the articles matched by spelling, the search and the question are all still there, so a failed fetch only means fewer offers.";
  "IT ASKS ONCE AND QUIETLY, because the ordinary fetch tries three times at eight seconds each with a loading mark over the page, and a reader offline would wait that long for a card that does not need this list.";
  "ONE CHAPTER IS FETCHED, not the whole Bible, so a tap downloads only what its own chapter needs.";
  "A WORD WHOSE CHAPTER IS NOT KNOWN HAS NO LIST TO ASK FOR: asking anyway fetched a file named null, which does not exist, and the failure is never kept, so every tap asked again.";
  if (null_is(chapter_code)) {
    let none = [];
    return none;
  }
  let asset_path = bible_word_article_citations_path(chapter_code);
  let url = web_assets_url(asset_path);
  ("ONE FETCH PER CHAPTER PER VISIT: every word of a chapter reads the same list, so tapping words one after another must not ask for it again.");
  let chapter = await http_json_browser_quiet_memoized_on_success(
    bible_word_article_cited_at,
    chapter_code,
    url,
  );
  let verse = property_or_null(chapter, verse_number);
  let pairs = property_or_null(verse, word) ?? [];
  ("AN ARTICLE ON THE WHOLE CHAPTER IS OFFERED FOR EVERY WORD OF IT - the Catena Aurea comments chapter by chapter - so the chapter's own list follows the word's.");
  let whole = property_or_null(chapter, "chapter") ?? [];
  let r = [...pairs, ...whole];
  return r;
}
