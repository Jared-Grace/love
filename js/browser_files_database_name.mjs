import { text_frozen } from "./text_frozen.mjs";
export function browser_files_database_name() {
  "The name of the browser database this app keeps its files in.";
  "It is the same word as the app itself and is not the same thing. A database is not";
  "renamed by renaming code: a browser that already holds somebody's files finds them";
  "under this exact word and under no other, so if the app is ever renamed this value";
  "has to stay behind.";
  "So it is written as a word that must not move. Left as a plain word the canonicalizing";
  "pass would promote it to the app's own name, which both imports the app entry point here";
  "- measured at 410 KiB on the g bundle, because reading any file reaches this function -";
  "and restores the very coupling this file exists to break.";
  "It matches the app's name today because that is where it came from. It is free to stop";
  "matching the moment the app is renamed, and it must.";
  let v = text_frozen("app_a");
  return v;
}
