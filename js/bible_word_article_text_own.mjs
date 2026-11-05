import { greater_than_equal } from "./greater_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function bible_word_article_text_own(text) {
  "The words an article itself says, once the site's links around it are taken off a fetched page's text.";
  "$plain text";
  "the text is a page fetched from an article site, already without its tags; it is cut and nothing in it runs.";
  "THE NEIGHBOURS ARE NOT THE ARTICLE: Easton's and Smith's print the names of two unrelated entries above each entry, under PREVIOUS and NEXT, and a name printed there is not a name the article speaks of. The Catholic Encyclopedia prints its menu and a request for support above each article and its publisher's notes below.";
  "A page without these marks is already only the article, so it comes back whole.";
  let share = " Share Close Share Tweet Save PREVIOUS ";
  let nav = text.indexOf(share);
  if (greater_than_equal(nav, 0)) {
    let title = text.slice(0, nav);
    let next = text.indexOf(" NEXT ", nav);
    let start = text.indexOf(title, next);
    let end = text.lastIndexOf(" Bibliography Information");
    if (greater_than_equal(start, 0) && greater_than(end, start)) {
      let dictionary = text.slice(start, end);
      return dictionary;
    }
  }
  let support = "all for only $19.99...";
  let opens = text.indexOf(support);
  let closes = text.lastIndexOf(" About this page");
  if (greater_than_equal(opens, 0) && greater_than(closes, opens)) {
    let encyclopedia = text.slice(opens + support.length, closes);
    return encyclopedia;
  }
  return text;
}
