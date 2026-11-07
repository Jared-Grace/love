import { equal } from "./equal.mjs";
export function bible_word_article_title(site_name, page) {
  "The name an article gives itself, read off its own words, for an article no table of names lists - or null when the page does not say it in the way its site always does.";
  "$plain site_name";
  "$plain page";
  "the site name says whose article it is and the page is the article's fetched words. Both are read, and nothing in them runs.";
  "A GOTQUESTIONS ARTICLE OPENS WITH ITS QUESTION, then the word Answer: What is a holy convocation? Answer A convocation is.... A page with no Answer near its start is not a question - an archive, a form - and gets null.";
  "A CATHOLIC ENCYCLOPEDIA PAGE OPENS WITH CATHOLIC ENCYCLOPEDIA: then its title, then Search:.";
  "NULL MEANS THIS ARTICLE IS NOT OFFERED by a citation, because a button needs a name to say what it opens.";
  let opening = page.slice(0, 400);
  let match = null;
  if (equal(site_name, "GotQuestions.org")) {
    match = opening.match(/^(.{3,250}?) Answer /);
  }
  if (equal(site_name, "the Catholic Encyclopedia")) {
    match = opening.match(/^CATHOLIC ENCYCLOPEDIA: (.{1,250}?) Search:/);
  }
  if (equal(match, null)) {
    return null;
  }
  let title = match[1].trim();
  return title;
}
