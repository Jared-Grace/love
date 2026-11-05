import { bible_word_article_citations_path } from "./bible_word_article_citations_path.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
import { http_json_browser_quiet } from "./http_json_browser_quiet.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function bible_word_article_cited_at(
  word,
  chapter_code,
  verse_number,
) {
  "The articles that cite this verse and print this word, as pairs of site name and file. An empty list when there are none, and when the list could not be fetched.";
  "$plain word";
  "$plain chapter_code";
  "$plain verse_number";
  "the word is one tapped word, the code a chapter's name like MRK05, and the number a verse in it; together they look up a list, and nothing in them runs.";
  "NOT REACHING THE LIST MUST NOT COST THE READER THE CARD: the articles matched by spelling, the search and the question are all still there, so a failed fetch only means fewer offers.";
  "IT ASKS ONCE AND QUIETLY, because the ordinary fetch tries three times at eight seconds each with a loading mark over the page, and a reader offline would wait that long for a card that does not need this list.";
  "ONE CHAPTER IS FETCHED, not the whole Bible, so a tap downloads only what its own chapter needs.";
  let asset_path = bible_word_article_citations_path(chapter_code);
  let url = web_assets_url(asset_path);
  async function chapter_fetch() {
    let fetched = await http_json_browser_quiet(url);
    return fetched;
  }
  let chapter = await catch_null_async(chapter_fetch);
  let verse = chapter?.[verse_number];
  let pairs = verse?.[word] ?? [];
  return pairs;
}
