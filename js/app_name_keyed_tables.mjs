import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_names } from "./app_shared_names.mjs";
import { app_shared_descriptions } from "./app_shared_descriptions.mjs";
import { app_shared_taglines } from "./app_shared_taglines.mjs";
import { app_shared_language_codes } from "./app_shared_language_codes.mjs";
export function app_name_keyed_tables() {
  arguments_assert(arguments, 0);
  ("Every table keyed by an app's short name. Each one takes nothing and binds its table to r, so a rename can ask it whether it holds the old name and then move that one key.");
  ("A key is written as a bare name, which a function rename never reaches - so an app renamed without this list keeps its words filed under a name no app answers to, and silently falls back to its short name.");
  let r = [
    app_shared_names,
    app_shared_descriptions,
    app_shared_taglines,
    app_shared_language_codes,
  ];
  return r;
}
