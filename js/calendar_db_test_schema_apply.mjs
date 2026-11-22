import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_db_named_schema_apply } from "./calendar_db_named_schema_apply.mjs";
export async function calendar_db_test_schema_apply() {
  arguments_assert(arguments, 0);
  ("Sends the whole calendar schema to the test Worker's own database, calendar_test, leaving the live one alone.");
  let printed = await calendar_db_named_schema_apply("calendar_test");
  return printed;
}
