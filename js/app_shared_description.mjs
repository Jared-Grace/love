import { equal } from "./equal.mjs";
import { text_empty } from "./text_empty.mjs";
export function app_shared_description(app_name) {
  "$plain app_name";
  "One sentence saying what an app is, for the person who has only been handed a link and has not opened it yet.";
  "An app without one gets nothing rather than something vague, so a card is never built out of a guess.";
  if (equal(app_name, "replace")) {
    let r =
      "A puzzle where you rewrite a row of symbols one rule at a time, from a single letter up to a working function. The same moves a compiler makes.";
    return r;
  }
  let none = text_empty();
  return none;
}
