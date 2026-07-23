import { list_multiple_is } from "./list_multiple_is.mjs";
export function app_search_none_found_text(words) {
  ("say why nothing came back, then offer the way forward as a question, so a search that found nothing still feels like an invitation to keep looking");
  let several = list_multiple_is(words);
  if (several) {
    let together =
      "No single verse holds all of those words together. Would fewer words, or a different spelling, find the verse you have in mind?";
    return together;
  }
  let alone =
    "No verse holds that word. Would a different spelling, or a related word, find the verse you have in mind?";
  return alone;
}
