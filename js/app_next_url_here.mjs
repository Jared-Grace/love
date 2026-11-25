import { object_copy } from "./object_copy.mjs";
import { app_shared_bible_verses_shown_hash_key } from "./app_shared_bible_verses_shown_hash_key.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
export function app_next_url_here(hash) {
  "The link to the passage on the screen now, written as this page's own address. It is what the large form copies in place of the link onward: somebody shown the passage big wants to send the passage they are looking at, and the way on to the next one is a button on the page rather than a line in the message.";
  "How far the passage was extended is left off, the same way the link onward leaves it off: the passage somebody receives opens at the size chosen for a message.";
  let copy = object_copy(hash);
  let key = app_shared_bible_verses_shown_hash_key();
  property_delete_if_exists(copy, key);
  let h = hash_to_url(copy);
  let url = html_url_without_hash();
  url += h;
  return url;
}
