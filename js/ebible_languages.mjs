import { ebible_languages_curated } from "./ebible_languages_curated.mjs";
import { ebible_languages_more } from "./ebible_languages_more.mjs";
import { list_concat } from "./list_concat.mjs";
import { ebible_languages_sort_speakers } from "./ebible_languages_sort_speakers.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine } from "./text_combine.mjs";
export function ebible_languages() {
  "Every language this app offers a reader, each carrying the one translation it offers them in - the ones chosen by hand joined to every one eBible gives away on terms this repo may ship.";
  "Two lists rather than one because they are maintained by different hands. The curated one is written by a person and holds codes readers' browsers are already storing, so nothing may rewrite it. The generated one is derived from what is on disk and is thrown away and written again whenever the licences or the choices change.";
  "Curated first, so that where both name the same language the reader keeps the entry they already had.";
  let right = fn_name("ebible_languages_add");
  text_combine("to add an entry, run: ", right);
  let curated = ebible_languages_curated();
  let more = ebible_languages_more();
  let languages = list_concat(curated, more);
  ("Rather than modifying this list, use: ");
  fn_name("ebible_languages_add");
  ("if you modify the above list, then run:");
  fn_name("ebible_languages_chapters_cache_refresh");
  ebible_languages_sort_speakers(languages);
  return languages;
}
