import { reply_countries_names } from "./reply_countries_names.mjs";
import { reply_countries_aliases } from "./reply_countries_aliases.mjs";
import { reply_countries_authored } from "./reply_countries_authored.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_countries() {
  "One country, matched against every country there is, plus the other names people use for them.";
  "★ THIS HELD TWO WORDS UNTIL NOW, AND THEY WERE TWO REAL CORRESPONDENTS' COUNTRIES. Written beside a town, a street and a name that were equally short, they were part of an identification rather than a vocabulary. The three lists this now reads were written on 2026-09-07 and left unwired for eleven days, so a complete list sat unused next to a list of two.";
  "The three stay apart because each is checked a different way, the same argument the names join makes: the spellings can be quoted back to one source word for word, the aliases are a claim about what else people say, and the authored handful is somebody's judgement and can be argued with.";
  "Sorted and said once, so a person reading a change to the list sees a name next to the names they would look for.";
  let names = reply_countries_names();
  let aliases = reply_countries_aliases();
  let authored = reply_countries_authored();
  let sources = [names, aliases, authored];
  let all = list_concat_multiple(sources);
  let sorted = list_unique_sorted(all);
  let countries = reply_choice(sorted);
  return countries;
}
