import { buffer_text_to } from "./buffer_text_to.mjs";
import { http } from "./http.mjs";
import { wolff_dictionary_url } from "./wolff_dictionary_url.mjs";
export async function wolff_dictionary_text() {
  "Ask Project Gutenberg for Wolff's Dictionary of Cebuano Visayan and hand back the page as it came, still unread.";
  "The page arrives whole and unparsed for the same reason every other reader here does it that way: what a caller wants out of a dictionary differs - one wants the roots, another the affixes, another the senses - and each of those can be had from the page while none of them can be had from another's reading of it.";
  "Nothing here waits its turn or steps carefully, because there is nothing to be careful of: this is one asking for one static file from a large archive, not a sweep over a small community's site.";
  let url = wolff_dictionary_url();
  let buffer = await http(url);
  let text = buffer_text_to(buffer);
  return text;
}
