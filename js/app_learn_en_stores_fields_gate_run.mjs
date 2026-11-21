import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_en_stores_fields_missing } from "./app_learn_en_stores_fields_missing.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_learn_en_stores_fields_gate_run() {
  "Gate: every language the English-learning app offers carries every field any of them carries, none of its text blank, so no language is half added.";
  "Against zero rather than a baseline: a language missing its own name or its question is broken for every reader of it, and the repair is always one line in that language's own function.";
  arguments_assert(arguments, 0);
  let missing = app_learn_en_stores_fields_missing();
  list_empty_is_assert_json(missing, {
    hint: "these languages lack fields the others have - add each named field to that language's own function (app_learn_en_store_<language>)",
  });
}
