import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_db_named_execute_words } from "./calendar_db_named_execute_words.mjs";
import { json_from } from "./json_from.mjs";
export async function calendar_db_named_execute_json(database_name, sql) {
  arguments_assert(arguments, 2);
  ("Runs sql on the named calendar database and answers wrangler's answers as data: one per statement, each with its results and meta.");
  let printed = await calendar_db_named_execute_words(
    database_name,
    ["--json"],
    sql,
  );
  let answers = json_from(printed);
  return answers;
}
