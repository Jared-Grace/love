import { gotquestions_word_articles } from "./gotquestions_word_articles.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { gotquestions_article_url } from "./gotquestions_article_url.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_map_async_filter_null_not_is } from "./list_map_async_filter_null_not_is.mjs";
export async function gotquestions_word_articles_unavailable() {
  "The GotQuestions.org addresses the word table offers that the site no longer answers - each one a link a reader would tap and find nothing behind.";
  "It finds its own list, so it needs no addresses handed in and cannot drift from the table: every article file the table names is asked once, one at a time so the site is not hammered.";
  "★ EACH ARTICLE IS FETCHED WHOLE, NOT ASKED BY A HEAD REQUEST. Measured 2026-10-31: the site refused the head request for all three hundred and twenty seven articles, saying who was asking or not, while the full fetch of a refused one came back with its page - so a head request here reports every link dead.";
  let rows = gotquestions_word_articles();
  function lambda$row(row) {
    let file = row[2];
    return file;
  }
  let list = list_map(rows, lambda$row);
  let files = list_unique(list);
  let urls = list_map(files, gotquestions_article_url);
  async function lambda$url(url) {
    let text = await http_text_or_null(url);
    let absent = null_is(text);
    if (absent) {
      return url;
    }
    return null;
  }
  let unavailable = await list_map_async_filter_null_not_is(urls, lambda$url);
  let r = {
    asked: urls.length,
    unavailable,
  };
  return r;
}
