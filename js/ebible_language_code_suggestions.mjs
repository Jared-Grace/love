import { ebible_language_codes } from "./ebible_language_codes.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
import { list_concat } from "./list_concat.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { ebible_language_code_apart_maximum } from "./ebible_language_code_apart_maximum.mjs";
import { texts_nearest } from "./texts_nearest.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_language_code_current } from "./ebible_language_code_current.mjs";
import { list_unique } from "./list_unique.mjs";
export function ebible_language_code_suggestions(code) {
  "The real language codes closest in spelling to one a link named and this repo does not have - what to offer somebody whose link will not open.";
  "It may come back empty, and an empty answer is an answer: nothing here is spelled anything like what the link says, so there is nothing honest to offer and the page should say so rather than name its least unlike language.";
  "A link written before the codes moved to ISO 639-3 misspells the old code, not the new one - ten for en - so the old codes are searched too, and each one found is offered under the code that names its language now.";
  let codes = ebible_language_codes();
  let renamed = ebible_language_codes_iso_639_3_renamed();
  let b = object_property_names(renamed);
  let spellings = list_concat(codes, b);
  let apart_maximum = ebible_language_code_apart_maximum();
  let nearest = texts_nearest(spellings, code, apart_maximum);
  let current = list_map(nearest, ebible_language_code_current);
  let suggestions = list_unique(current);
  return suggestions;
}
