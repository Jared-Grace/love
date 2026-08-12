import { arguments_assert } from "./arguments_assert.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { divide } from "./divide.mjs";
export async function path_touch(path) {
  "$plain path";
  arguments_assert(arguments, 1);
  ("Says a file is still current, and brings it into being if it was not there.");
  ("Nothing is written. Where a file's contents are beside the point and only the moment it was last seen matters, writing an empty string to say so is a change to the file - and every change that goes through the ordinary writing is noted for the commit that follows, so a thing touched five times a second while waiting would fill that note with a path no commit could ever want.");
  ("It is opened for appending rather than for writing, because opening for writing empties a file that was already there, and this is meant to leave contents alone.");
  let fs = await import("fs");
  let handle = fs.openSync(path, "a");
  let ms = date_now_milliseconds();
  let seconds = divide(ms, 1000);
  fs.futimesSync(handle, seconds, seconds);
  fs.closeSync(handle);
}
