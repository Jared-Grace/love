import { app_shared_bible_languages_hash_value } from "./app_shared_bible_languages_hash_value.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { property_set } from "./property_set.mjs";
import { window_app_url } from "./window_app_url.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_search_bible_url(languages_chosen) {
  "The bible reader's own address, in the languages this page is already being read in, naming no chapter - somewhere to start rather than somewhere to land.";
  "It is for the reader this search cannot serve. The index holds English words only, so a reader typing Greek, Hebrew, Urdu, Chinese, Korean, Russian or Hindi gets nothing from the box, while the bible reader itself carries dozens of languages. Telling them that without handing them the way there would leave them to find it.";
  "THE LANGUAGES ARE PASSED STRAIGHT THROUGH AND DELIBERATELY NOT TURNED ROUND. A chosen list and the list an address names run opposite ways, and the opener reverses on the way out for exactly that reason - but what this page holds was read out of its own address to begin with, and the writer here is the same one that wrote it, so the two skip the turn together and the reader opens in the languages they were already reading in. Reversing here would swap the language read down the middle, which is invisible with one language chosen and wrong the moment there are two.";
  let l = app_shared_bible_languages_hash_value(languages_chosen);
  let hash = {};
  let property_name = app_shared_bible_language_hash_key();
  property_set(hash, property_name, l);
  let url = window_app_url(fn_name("app_bible"), hash);
  return url;
}
