import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_db_named_execute_words } from "./calendar_db_named_execute_words.mjs";
export async function calendar_db_named_execute(database_name, sql) {
  arguments_assert(arguments, 2);
  ("Runs sql on the named calendar database and answers what wrangler printed, for a person to read.");
  let printed = await calendar_db_named_execute_words(database_name, [], sql);
  return printed;
}
