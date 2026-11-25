import { app_shared_bible_verses_shown_hash_key } from "./app_shared_bible_verses_shown_hash_key.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
export function app_next_url_from_hash(hash) {
  "This page's own address carrying the hash given, with how far the passage was extended left off: a passage somebody receives opens at the size chosen for a message, never at the size one reader pressed it out to.";
  "The hash is changed in place, so a caller that must keep its own copy hands over a copy.";
  let key = app_shared_bible_verses_shown_hash_key();
  property_delete_if_exists(hash, key);
  let h = hash_to_url(hash);
  let url = html_url_without_hash();
  url += h;
  return url;
}
