import { text_frozen } from "./text_frozen.mjs";
export function ebible_offline_database_name() {
  "the name of the browser database holding the bibles somebody chose to keep for reading with no internet.";
  "the word must not move once a reader is holding a copy under it: their browser looks under this and under nothing else, and a database is not renamed by renaming code. the marker around it says so and a gate watches it.";
  let name = text_frozen("ebible_offline");
  return name;
}
