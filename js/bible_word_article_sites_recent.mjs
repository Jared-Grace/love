import { bible_word_article_sites_recent_key } from "./bible_word_article_sites_recent_key.mjs";
import { storage_local_get_or_fresh } from "./storage_local_get_or_fresh.mjs";
import { null_is } from "./null_is.mjs";
export function bible_word_article_sites_recent() {
  "The names of the sites this reader has opened an article on, on this device, the one opened last first.";
  "Nothing chosen yet answers as an empty list, so a reader who has never opened an article sees the sites in their usual order.";
  function fresh() {
    let none = [];
    return none;
  }
  let key = bible_word_article_sites_recent_key();
  let kept = storage_local_get_or_fresh(
    bible_word_article_sites_recent,
    key,
    fresh,
  );
  if (null_is(kept)) {
    let none = [];
    return none;
  }
  return kept;
}
