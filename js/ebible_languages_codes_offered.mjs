import { ebible_languages_curated_codes } from "./ebible_languages_curated_codes.mjs";
import { ebible_languages_more } from "./ebible_languages_more.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function ebible_languages_codes_offered() {
  "Every language this app already offers a reader, named the way eBible names it rather than the way this repo stores it - the set anything asking what is still missing has to be measured against.";
  "Both halves of the list, because either half alone answers the question wrongly. The hand-kept half is written in two-letter codes and the generated half in three, so neither can be compared with an eBible page as it is written - the hand-kept half is joined through the page of the folder each entry names, which is what puts the two into one spelling.";
  "A language carried from a source other than eBible has no eBible page to be joined through, so it does not appear here. That is a hole rather than a rule: it means a language already offered from elsewhere reads as missing, and whatever asks this has to be told so.";
  let curated = await ebible_languages_curated_codes();
  let more = ebible_languages_more();
  let property_name = language_code_key();
  let generated = list_map_property(more, property_name);
  let codes = list_concat(curated, generated);
  return codes;
}
