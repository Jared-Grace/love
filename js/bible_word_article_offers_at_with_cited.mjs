import { bible_word_article_sites_published } from "./bible_word_article_sites_published.mjs";
import { bible_word_article_offers_at } from "./bible_word_article_offers_at.mjs";
import { list_get } from "./list_get.mjs";
import { bible_word_article_cited_at } from "./bible_word_article_cited_at.mjs";
import { equal } from "./equal.mjs";
import { bible_word_articles_with_cited } from "./bible_word_articles_with_cited.mjs";
import { bible_word_articles_same_name_cited } from "./bible_word_articles_same_name_cited.mjs";
export async function bible_word_article_offers_at_with_cited(
  words,
  index,
  chapter_code,
  verse_number,
) {
  "Every article to offer for a tapped word: those matched by its spelling, and those that cite the tapped verse and print the word. Sites keep their usual order, and within a site the spelling matches come first.";
  "$plain words";
  "$plain index";
  "$plain chapter_code";
  "$plain verse_number";
  "the words are the bare words of the tapped verse and the index says which was tapped; the code and number say where the verse stands. They are looked up, and nothing in them runs.";
  "THE LIST OF CITATIONS IS ASKED FOR ONCE, here, rather than once per site; so is the list of sites, which is fetched so a site added later needs no rebuild.";
  let sites = await bible_word_article_sites_published();
  let offers = await bible_word_article_offers_at(
    words,
    index,
    chapter_code,
    verse_number,
    sites,
  );
  let word = list_get(words, index);
  let cited = await bible_word_article_cited_at(
    word,
    chapter_code,
    verse_number,
  );
  let r = [];
  for (let site of sites) {
    function own(offer) {
      let same = equal(offer.site.name, site.name);
      return same;
    }
    function article_of(offer) {
      let article = offer.article;
      return article;
    }
    let articles = offers.filter(own).map(article_of);
    let table = await site.table();
    let rows = bible_word_articles_with_cited(
      articles,
      table,
      site.name,
      cited,
    );
    let merged = bible_word_articles_same_name_cited(rows, cited, site.name);
    for (let article of merged) {
      r.push({
        site,
        article,
      });
    }
  }
  return r;
}
