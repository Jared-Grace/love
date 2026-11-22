import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_db_named } from "./calendar_db_named.mjs";
export async function calendar_db_remote() {
  arguments_assert(arguments, 0);
  ("The live calendar database from this machine, in the Worker's own shape; see ",
    fn_name("calendar_db_named"),
    ", which reaches either database.");
  ('It exists so a tool on this machine can act as the host without the host\'s sign-in: the reply tool makes a booking link for the person in a Messenger chat (human, 2026-11-21: "automation is safer"). Whoever can run this can already deploy the Worker, so it reaches nothing that machine could not reach before.');
  let db = calendar_db_named("calendar");
  return db;
}
