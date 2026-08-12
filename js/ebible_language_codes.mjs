import { ebible_languages } from "./ebible_languages.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function ebible_language_codes() {
  "Every short code a link may name a language by, and the whole of what a link is allowed to say.";
  let languages = ebible_languages();
  let property_name = language_code_key();
  let codes = list_map_property(languages, property_name);
  return codes;
}
