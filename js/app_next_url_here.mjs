import { object_copy } from "./object_copy.mjs";
import { app_next_url_from_hash } from "./app_next_url_from_hash.mjs";
export function app_next_url_here(hash) {
  "The link to the passage on the screen now, written as this page's own address. It is what one of the two copy buttons carries, for somebody who wants to send the passage they are looking at rather than the way on to the next one.";
  "The hash is copied first, because the link onward is written from the same hash afterwards and must find it as the page read it.";
  "How far the passage was extended is left off, the same way the link onward leaves it off: the passage somebody receives opens at the size chosen for a message.";
  let copy = object_copy(hash);
  let url = app_next_url_from_hash(copy);
  return url;
}
