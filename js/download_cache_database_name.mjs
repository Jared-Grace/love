import { text_frozen } from "./text_frozen.mjs";
export function download_cache_database_name() {
  ("the name of the browser database holding what has already been downloaded, so a return visit reads it off the disk instead of waiting on the network.");
  ("its own database rather than a store beside the reader's files or their downloaded bibles, because everything in here is a copy of something still on the internet - so it can be thrown away whole, at any moment, and the only cost is one slow read. mixing it in with either of those would make emptying it a thing nobody dares do.");
  ("the word must not move once a browser is holding a copy under it: that browser looks under this and under nothing else, and a database is not renamed by renaming code. the marker around it says so and a gate watches it.");
  let v = text_frozen("download_cache");
  return v;
}
