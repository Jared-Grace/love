import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
import { bible_word_articles_matching } from "./bible_word_articles_matching.mjs";
import { bible_word_articles_placed } from "./bible_word_articles_placed.mjs";
export async function bible_word_article_offers_at(
  words,
  index,
  chapter_code,
  verse_number,
) {
  "Every article any site has about the tapped word, placed for this verse, each with the site that holds it. Sites are asked in their usual order, so the offers keep that order.";
  let sites = bible_word_article_sites();
  let offers = [];
  for (let site of sites) {
    let table = await site.table();
    let matched = bible_word_articles_matching(table, words, index);
    let articles = bible_word_articles_placed(
      matched,
      chapter_code,
      verse_number,
    );
    for (let article of articles) {
      offers.push({
        site,
        article,
      });
    }
  }
  return offers;
}
