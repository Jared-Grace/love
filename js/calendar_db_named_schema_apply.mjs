import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_db_named_execute } from "./calendar_db_named_execute.mjs";
import { calendar_db_schema } from "./calendar_db_schema.mjs";
export async function calendar_db_named_schema_apply(database_name) {
  arguments_assert(arguments, 1);
  ("Sends the whole calendar schema to one named Cloudflare D1 database - calendar for the live Worker, calendar_test for the test one. Every statement is IF NOT EXISTS, so running it again changes nothing and tables already there keep their rows.");
  ("It adds no column to a table that exists already - CREATE TABLE IF NOT EXISTS leaves such a table as it was.");
  let sql = calendar_db_schema();
  let printed = await calendar_db_named_execute(database_name, sql);
  return printed;
}
