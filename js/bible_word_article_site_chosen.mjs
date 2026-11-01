import { not_equal } from "./not_equal.mjs";
import { bible_word_article_sites_recent } from "./bible_word_article_sites_recent.mjs";
import { bible_word_article_sites_recent_key } from "./bible_word_article_sites_recent_key.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function bible_word_article_site_chosen(site_name) {
  "Write down that the reader opened an article on one site, putting that site first among the sites they have chosen.";
  "$plain site_name";
  "the name is one site's name as the list of sites spells it; it is kept and compared, and nothing in it runs.";
  let kept = bible_word_article_sites_recent();
  function lambda(n) {
    let neq = not_equal(n, site_name);
    return neq;
  }
  let others = kept.filter(lambda);
  let recent = [site_name, ...others];
  let key = bible_word_article_sites_recent_key();
  storage_local_set(bible_word_article_sites_recent, key, recent);
}
