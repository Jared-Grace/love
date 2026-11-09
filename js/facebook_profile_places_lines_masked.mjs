import { fn_name } from "./fn_name.mjs";
import { facebook_profile_places_lines } from "./facebook_profile_places_lines.mjs";
import { text_lines_words_masked } from "./text_lines_words_masked.mjs";
export async function facebook_profile_places_lines_masked(profile_url) {
  "$plain profile_url";
  "The lines of the places page of the facebook profile at profile_url with every word masked as * except the page's own labels and countries - enough to see how the page is laid out, never who the person is.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  ("★ FOR FINDING WHY A COUNTRY WAS MISSED: the masking - and what it lets through - lives in `",
    fn_name("text_lines_words_masked"),
    "`.");
  let read = await facebook_profile_places_lines(profile_url);
  let r = {
    places: read.places,
    lines: text_lines_words_masked(read.lines),
  };
  return r;
}
