import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_db_named_schema_apply } from "./calendar_db_named_schema_apply.mjs";
export async function calendar_db_remote_schema_apply() {
  arguments_assert(arguments, 0);
  ("Sends the whole calendar schema to the live Cloudflare D1 database, calendar, so a table added to it since (proofs, 2026-11-20) is made there too. Every statement is IF NOT EXISTS, so running it again changes nothing and tables already there keep their rows.");
  let printed = await calendar_db_named_schema_apply("calendar");
  return printed;
}
