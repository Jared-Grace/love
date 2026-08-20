import { language_codes_rtl } from "./language_codes_rtl.mjs";
import { list_includes } from "./list_includes.mjs";
export function language_code_rtl_is(language_code) {
  "Whether the language named by this code is written from the right of the line to the left.";
  "Asked of the language and not of any words in it. A word borrowed from English sits in an Urdu sentence in Latin letters, and a screen pointed by the letters in front of it would turn round on that one word.";
  let codes = language_codes_rtl();
  let rtl = list_includes(codes, language_code);
  return rtl;
}
