import { fn_name } from "./fn_name.mjs";
export function app_a_indexeddb_database_name() {
  "The name of the browser database this app keeps its files in.";
  "It is the same word as the app itself and is not the same thing. A database is not";
  "renamed by renaming code: a browser that already holds somebody's files finds them";
  "under this exact word and under no other, so if the app is ever renamed this value";
  "has to stay behind.";
  "It cannot say so yet. Written as a plain word the canonicalizing pass promotes it to";
  "the app's own name, which both imports the app entry point here - measured at 410 KiB";
  "on the g bundle, because reading any file reaches this function - and restores the very";
  "coupling this file exists to break. The spelled form below avoids the import and keeps";
  "the coupling, so this name is where that risk now lives rather than being spread over";
  "the reader's memory.";
  let v = fn_name("app_a");
  return v;
}
