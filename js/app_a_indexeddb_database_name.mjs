import { app_a } from "./app_a.mjs";
export function app_a_indexeddb_database_name() {
  "the name of the browser database this app keeps its files in - the same word as the app itself but a different thing entirely - and it can never change because every user's stored files are already filed under it";
  let v = app_a.name;
  return v;
}
