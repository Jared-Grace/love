import { ebible_language_codes } from "./ebible_language_codes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function ebible_language_codes_unknown(codes) {
  "The codes in a link that name no language this repo has - empty when the link is asking for nothing but real languages.";
  "Asking this before the bibles are fetched is what turns a mistyped link from a stack trace into a sentence. Every reader of these codes downstream goes looking for the one language a code names and stops dead when it names none, and it stops inside the page's opening, so the reader is left looking at the words the page paints while it starts.";
  let known = ebible_language_codes();
  function unknown_is(code) {
    let named = list_includes(known, code);
    let unnamed = not(named);
    return unnamed;
  }
  let unknown = list_filter(codes, unknown_is);
  return unknown;
}
