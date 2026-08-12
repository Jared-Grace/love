import { ebible_language_codes } from "./ebible_language_codes.mjs";
import { ebible_language_code_apart_maximum } from "./ebible_language_code_apart_maximum.mjs";
import { texts_nearest } from "./texts_nearest.mjs";
export function ebible_language_code_suggestions(code) {
  "The real language codes closest in spelling to one a link named and this repo does not have - what to offer somebody whose link will not open.";
  "It may come back empty, and an empty answer is an answer: nothing here is spelled anything like what the link says, so there is nothing honest to offer and the page should say so rather than name its least unlike language.";
  let codes = ebible_language_codes();
  let apart_maximum = ebible_language_code_apart_maximum();
  let suggestions = texts_nearest(codes, code, apart_maximum);
  return suggestions;
}
