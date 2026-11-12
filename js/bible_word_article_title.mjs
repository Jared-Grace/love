import { equal } from "./equal.mjs";
export function bible_word_article_title(site_name, page) {
  "The name an article gives itself, read off its own words, for an article no table of names lists - or null when the page does not say it in the way its site always does.";
  "$plain site_name";
  "$plain page";
  "the site name says whose article it is and the page is the article's fetched words. Both are read, and nothing in them runs.";
  "A GOTQUESTIONS ARTICLE OPENS WITH ITS QUESTION, then the word Answer: What is a holy convocation? Answer A convocation is.... Its summary of a book opens Summary of the Book of 1 John, or Summary of the Gospel of John, or Summary of the Song of Solomon, then Author:. A page opening neither way - an archive, a list, a form - gets null.";
  "A CATHOLIC ENCYCLOPEDIA PAGE OPENS WITH CATHOLIC ENCYCLOPEDIA: then its title, then Search:. A Church Fathers page, on the same site, opens the same way with CHURCH FATHERS: - CHURCH FATHERS: Homily 1 on Matthew (Chrysostom) Search:.";
  "AN INTERNATIONAL STANDARD BIBLE ENCYCLOPEDIA PAGE, on biblestudytools.com, opens with its title, then the site's sharing buttons: AARON Share Close Share Tweet Save.";
  "NULL MEANS THIS ARTICLE IS NOT OFFERED by a citation, because a button needs a name to say what it opens.";
  let opening = page.slice(0, 400);
  let match = null;
  if (equal(site_name, "GotQuestions.org")) {
    match =
      opening.match(/^(.{3,250}?) Answer /) ??
      opening.match(/^(Summary of the .{1,40}?) Author:/);
  }
  if (equal(site_name, "the Catholic Encyclopedia")) {
    match = opening.match(/^CATHOLIC ENCYCLOPEDIA: (.{1,250}?) Search:/);
  }
  if (equal(site_name, "the Church Fathers")) {
    match = opening.match(/^CHURCH FATHERS: (.{1,250}?) Search:/);
  }
  if (equal(site_name, "the International Standard Bible Encyclopedia")) {
    match = opening.match(/^(.{1,250}?) Share Close Share /);
  }
  if (equal(match, null)) {
    return null;
  }
  let title = match[1].trim();
  return title;
}
