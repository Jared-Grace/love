import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
export function function_name_family(f_name, app_names) {
  arguments_assert(arguments, 2);
  ("Which family a function name belongs to, given the names of the apps.");
  ("A family is meant to answer whether two names are near enough to each other");
  ("that a word written in both of them probably means the same thing, and the");
  ("first word of a name answers that everywhere except where it is needed most:");
  ("every app function begins with the same word, so that test puts a Bible");
  ("reader and a game in one family and calls a coincidence a match.");
  ("The apps know their own names, and some of them are named inside another - a");
  ("verifier living under a game is its own app, not part of the game - so the");
  ("longest name a function starts with is the one that owns it.");
  ("A name belonging to no app falls back to its first word, which is the right");
  ("answer outside the apps: nothing else nests.");
  let best = "";
  for (let app_name of app_names) {
    let prefix = text_combine(app_name, "_");
    let starts = f_name.startsWith(prefix);
    let longer = greater_than(prefix.length, best.length);
    if (starts && longer) {
      best = prefix;
    }
  }
  if (not_equal(best, "")) {
    return best;
  }
  let words = text_split(f_name, "_");
  let first = list_first(words);
  let family = text_combine(first, "_");
  return family;
}
