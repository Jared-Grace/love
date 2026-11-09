import { equal } from "./equal.mjs";
import { reply_countries_words } from "./reply_countries_words.mjs";
import { reply_cities_names_all } from "./reply_cities_names_all.mjs";
import { facebook_profile_places_lines } from "./facebook_profile_places_lines.mjs";
export async function facebook_profile_places_lines_masked(profile_url) {
  "$plain profile_url";
  "The lines of the places page of the facebook profile at profile_url with every word masked as * except the page's own labels, countries and listed cities - enough to see how the page is laid out, never who the person is.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ FOR FINDING WHY A COUNTRY WAS MISSED: names and anything else personal are words no list here holds, so they come out as stars.";
  let labels = [
    "lives",
    "in",
    "from",
    "current",
    "city",
    "hometown",
    "places",
    "lived",
    "no",
    "to",
    "show",
    "moved",
    "about",
    "overview",
    "work",
    "education",
    "contact",
    "and",
    "basic",
    "info",
    "family",
    "relationships",
    "details",
    "life",
    "events",
    "see",
    "all",
    "friends",
    "photos",
    "posts",
    "more",
    "intro",
    "followers",
    "following",
    "reels",
    "videos",
    "check",
    "ins",
    "log",
    "into",
    "facebook",
  ];
  let sorted = reply_countries_words();
  let names = reply_cities_names_all();
  let v = labels.concat(sorted).concat(names);
  let known = new Set(v);
  function mask(word) {
    let key = word
      .normalize("NFD")
      .toLowerCase()
      .replace(/[^a-z]/g, "");
    if (equal(key.length, 0) || known.has(key)) {
      return word;
    }
    let r2 = "*";
    return r2;
  }
  let read = await facebook_profile_places_lines(profile_url);
  function lambda(l) {
    let r3 = l.split(/\s+/).map(mask).join(" ");
    return r3;
  }
  let lines = read.lines.map(lambda);
  let r = {
    places: read.places,
    lines,
  };
  return r;
}
