import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
export function function_name_app_try(f_name, app_names) {
  arguments_assert(arguments, 2);
  ("Which app owns a name given the names of the apps - or nothing at all when no");
  ("app does.");
  ("Some apps are named inside another - a verifier living under a game is its own");
  ("app rather than part of the game - so the longest name a function starts with");
  ("is the one that owns it.");
  ("Nothing is a real answer here and the reason this is separate from the family");
  ("test beside it. Shared code and plain infrastructure belong to no app, and");
  ("that is exactly what a check for reaching into one app needs to be told; a");
  ("test that falls back to the first word answers app for all of them and finds");
  ("every shared unit guilty of importing its own neighbours.");
  let best = "";
  for (let app_name of app_names) {
    let same = equal(f_name, app_name);
    let prefix = text_combine(app_name, "_");
    let under = f_name.startsWith(prefix);
    let owns = same || under;
    let longer = greater_than(app_name.length, best.length);
    if (owns && longer) {
      best = app_name;
    }
  }
  return best;
}
