import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
export function bible_word_articles_with_cited(
  articles,
  table,
  site_name,
  cited,
) {
  "One site's articles for a tapped word: those matched by spelling, then those that cite the tapped verse and print the word, each article once.";
  "$plain articles";
  "$plain table";
  "$plain site_name";
  "$plain cited";
  "the articles and the table are rows of word, about, file and sometimes person; the site name says whose; the cited are pairs of site name and file. They are read, and nothing in them runs.";
  "SPELLING COMES FIRST because an article named after the tapped word is the surest answer. An article already offered by spelling is not offered twice.";
  "A cited file with no row in the site's table is left out, because a button needs the article's name and the table is where it is.";
  let r = [...articles];
  let v = articles.map(file_of);
  let files = new Set(v);
  function file_of(row) {
    let file = row[2];
    return file;
  }
  for (let [cited_site, cited_file] of cited) {
    let wanted =
      equal(cited_site, site_name) && equal(files.has(cited_file), false);
    if (wanted) {
      function row_is(article_row) {
        let same = equal(article_row[2], cited_file);
        return same;
      }
      let row = table.find(row_is);
      if (not_equal(row, undefined)) {
        r.push(row);
        files.add(cited_file);
      }
    }
  }
  return r;
}
