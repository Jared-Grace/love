import { equal } from "./equal.mjs";
export function bible_word_articles_same_name_cited(rows, cited, site_name) {
  "One site's articles for a tapped word, with the articles of one name narrowed to those the tapped verse is cited by, when it is cited by some of them.";
  "$plain rows";
  "$plain cited";
  "$plain site_name";
  "the rows are articles of one site, each a word, about, file and sometimes person; the cited are pairs of site name and file, and sometimes a title, citing the tapped verse; the site name says whose rows they are. They are read, and nothing in them runs.";
  "A DICTIONARY CAN HOLD TWO ARTICLES OF ONE NAME - Smith's has a Bethany near Jerusalem and a Bethany beyond the Jordan - and two buttons both saying Bethany look like one article listed twice, reported by the human 2026-11-07. The verse decides between them: John 1:28 is cited by the article on the Bethany beyond the Jordan, so a tap there offers that one alone.";
  "A VERSE CITED BY NONE OF THEM KEEPS THEM ALL, because nothing here says which is meant and dropping one could drop the right one.";
  let files = new Set();
  for (let [cited_site, cited_file] of cited) {
    if (equal(cited_site, site_name)) {
      files.add(cited_file);
    }
  }
  let by_name = new Map();
  for (let row of rows) {
    let name = row[1];
    let group = by_name.get(name) ?? [];
    group.push(row);
    by_name.set(name, group);
  }
  function kept(row) {
    let group = by_name.get(row[1]);
    if (equal(group.length, 1)) {
      return true;
    }
    function cited_is(other) {
      let yes = files.has(other[2]);
      return yes;
    }
    let some = group.some(cited_is);
    if (equal(some, false)) {
      return true;
    }
    let r2 = files.has(row[2]);
    return r2;
  }
  let r = rows.filter(kept);
  return r;
}
