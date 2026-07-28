import { text_frozen } from "./text_frozen.mjs";
export function browser_files_database_name() {
  "The name of the one browser database every app here keeps its files in.";
  "Named for what it holds. It was called after the app that happened to write it first,";
  "which read as a mistake from inside any other app and tied a database to a name that";
  "code is free to rename - a database is not renamed by renaming code, so a browser that";
  "already holds somebody's files would have gone on looking under a word no longer";
  "written anywhere.";
  "One database rather than one per app, because what it holds is a file system keyed by";
  "path and most of what is in it - the bible texts above all - is the same files read by";
  "several apps. Splitting it would download them again once per app.";
  "The word must not move now, since it is what a browser already holding a user's files";
  "looks under; the marker around it says so and a gate watches it.";
  let v = text_frozen("files");
  return v;
}
