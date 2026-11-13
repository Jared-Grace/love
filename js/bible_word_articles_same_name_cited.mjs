import { bible_word_articles_same_name_cited_survivors } from "./bible_word_articles_same_name_cited_survivors.mjs";
import { equal } from "./equal.mjs";
export function bible_word_articles_same_name_cited(rows, cited, site_name) {
  "One site's articles for a tapped word, with the articles of one name narrowed to those the tapped verse is cited by, when it is cited by some of them.";
  "$plain rows";
  "$plain cited";
  "$plain site_name";
  "the rows are articles of one site, each a word, about, file and sometimes person; the cited are pairs of site name and file, and sometimes a title, citing the tapped verse; the site name says whose rows they are. They are read, and nothing in them runs.";
  "A DICTIONARY CAN HOLD TWO ARTICLES OF ONE NAME - Smith's has a Bethany near Jerusalem and a Bethany beyond the Jordan - and two buttons both saying Bethany look like one article listed twice, reported by the human 2026-11-07. The verse decides between them: John 1:28 is cited by the article on the Bethany beyond the Jordan, so a tap there offers that one alone.";
  "A VERSE CITED BY NONE OF THEM KEEPS THEM ALL, because nothing here says which is meant and dropping one could drop the right one. Those kept are then told apart by number - Bethany, article 1 of 2 - so two buttons never read alike; the label is changed on a copy, never on the site's table.";
  let files = new Set();
  for (let [cited_site, cited_file] of cited) {
    if (equal(cited_site, site_name)) {
      files.add(cited_file);
    }
  }
  let survivors = bible_word_articles_same_name_cited_survivors(rows, files);
  let counts = new Map();
  for (let row of survivors) {
    counts.set(row[1], (counts.get(row[1]) ?? 0) + 1);
  }
  let seen = new Map();
  function labelled(row) {
    let total = counts.get(row[1]);
    if (equal(total, 1)) {
      return row;
    }
    let position = (seen.get(row[1]) ?? 0) + 1;
    seen.set(row[1], position);
    let copy = [...row];
    copy[1] = row[1] + ", article " + position + " of " + total;
    return copy;
  }
  let r = survivors.map(labelled);
  return r;
}
