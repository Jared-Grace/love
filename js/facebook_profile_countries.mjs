import { facebook_profile_places_lines } from "./facebook_profile_places_lines.mjs";
import { text_lines_countries } from "./text_lines_countries.mjs";
export async function facebook_profile_countries(profile_url) {
  "$plain profile_url";
  "The countries the facebook profile at profile_url says its person lives in or is from, as the reply rules spell them. Only the countries are answered: the page's other words, the person's name among them, stay on this machine.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let read = await facebook_profile_places_lines(profile_url);
  let countries = text_lines_countries(read.lines);
  let r = {
    profile_url,
    countries,
  };
  return r;
}
