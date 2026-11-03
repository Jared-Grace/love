import { arguments_assert } from "./arguments_assert.mjs";
import { reply_cities_names } from "./reply_cities_names.mjs";
import { reply_cities_wikidata_names } from "./reply_cities_wikidata_names.mjs";
export function reply_cities_names_all() {
  arguments_assert(arguments, 0);
  ("Every town the reply rules can read: the capitals and big cities, and the longer list of smaller cities. No name is in both, because the longer list is written without the ones the shorter list holds.");
  let names = [...reply_cities_names(), ...reply_cities_wikidata_names()];
  return names;
}
