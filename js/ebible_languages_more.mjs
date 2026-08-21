import { ebible_languages_from_rows } from "./ebible_languages_from_rows.mjs";
import { ebible_languages_more_rows } from "./ebible_languages_more_rows.mjs";
export function ebible_languages_more() {
  "Every language eBible gives away on terms this repo may ship that the hand-written list does not already carry, one translation each.";
  "The languages themselves are stored next door in short form, three words to a language, and put back together into whole records here. This half of the pair is hand-written and stays; the file it reads is the generated one.";
  let rows = ebible_languages_more_rows();
  let languages = ebible_languages_from_rows(rows);
  return languages;
}
