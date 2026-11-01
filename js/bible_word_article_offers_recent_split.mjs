import { fn_name } from "./fn_name.mjs";
import { list_recent_split_by_names } from "./list_recent_split_by_names.mjs";
export function bible_word_article_offers_recent_split(offers, recent) {
  "The articles offered for a tapped word, split in two: those on a site the reader has chosen before, the site chosen last first, and the rest in the order the sites are listed.";
  "$plain offers";
  "$plain recent";
  "the offers are each a site and one of its articles; the recent names are site names, the one chosen last first. Both are data and none runs.";
  "A READER WHO KEEPS CHOOSING ONE SITE FINDS IT FIRST - someone who reads the Catholic Encyclopedia each time sees it at the top - without losing sight of the other sites below it.";
  ("Articles of one site keep the order the site gave them, by ",
    fn_name("list_recent_split_by_names"),
    ".");
  function lambda(o) {
    let name = o.site.name;
    return name;
  }
  let names = offers.map(lambda);
  let r = list_recent_split_by_names(offers, names, recent);
  return r;
}
