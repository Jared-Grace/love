import { not_equal } from "./not_equal.mjs";
import { gotquestions_article_files_all } from "./gotquestions_article_files_all.mjs";
import { catholic_encyclopedia_article_files_all } from "./catholic_encyclopedia_article_files_all.mjs";
import { bible_word_article_sites } from "./bible_word_article_sites.mjs";
import { bible_word_article_bodies_fetch_site } from "./bible_word_article_bodies_fetch_site.mjs";
export async function bible_word_article_bodies_fetch_all(limit_per_site) {
  "Fetches the words of every article of the whole of each site that publishes a list of all of them - not only the articles a bible word names - so an article can be offered on the verses it cites whatever its title is.";
  "$plain limit_per_site";
  "the limit is how many articles of each site to fetch in this run, written as a number; it only counts, and nothing in it runs.";
  "THE WORDS GO IN THE SAME FOLDER AS THE ARTICLES A WORD NAMES, so an article on both lists is fetched once.";
  let limit = Number(limit_per_site);
  let wholes = {
    "GotQuestions.org": gotquestions_article_files_all,
    "the Catholic Encyclopedia": catholic_encyclopedia_article_files_all,
  };
  let report = [];
  for (let site of bible_word_article_sites()) {
    let whole = wholes[site.name];
    if (not_equal(whole, undefined)) {
      let files = await whole();
      let row = await bible_word_article_bodies_fetch_site(site, files, limit);
      report.push(row);
    }
  }
  return report;
}
