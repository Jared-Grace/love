import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
export function bible_word_article_offers_recent_split(offers, recent) {
  "The articles offered for a tapped word, split in two: those on a site the reader has chosen before, the site chosen last first, and the rest in the order the sites are listed.";
  "$plain offers";
  "$plain recent";
  "the offers are each a site and one of its articles; the recent names are site names, the one chosen last first. Both are data and none runs.";
  "A READER WHO KEEPS CHOOSING ONE SITE FINDS IT FIRST - someone who reads the Catholic Encyclopedia each time sees it at the top - without losing sight of the other sites below it.";
  "Articles of one site keep the order the site gave them, because the sort is by the site alone and a stable sort keeps the rest.";
  function lambda(o) {
    let r2 = recent.includes(o.site.name);
    return r2;
  }
  let chosen = offers.filter(lambda);
  function lambda2(a, b) {
    let left = recent.indexOf(a.site.name);
    let right = recent.indexOf(b.site.name);
    let difference = subtract(left, right);
    return difference;
  }
  chosen.sort(lambda2);
  function lambda3(o) {
    let b2 = recent.includes(o.site.name);
    let n = not(b2);
    return n;
  }
  let others = offers.filter(lambda3);
  let r = {
    recent: chosen,
    others,
  };
  return r;
}
