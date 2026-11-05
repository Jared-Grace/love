import { reply_countries_names } from "./reply_countries_names.mjs";
import { reply_countries_aliases } from "./reply_countries_aliases.mjs";
import { reply_countries_authored } from "./reply_countries_authored.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export function reply_countries_words() {
  "Every spelling of a country the rules read, from all three lists, sorted and said once.";
  let names = reply_countries_names();
  let aliases = reply_countries_aliases();
  let authored = reply_countries_authored();
  let sources = [names, aliases, authored];
  let all = list_concat_multiple(sources);
  let sorted = list_unique_sorted(all);
  return sorted;
}
