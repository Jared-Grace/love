import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function file_modified_ms(file_path) {
  arguments_assert(arguments, 1);
  ("$plain file_path");
  ("When a file was last written, as a count of milliseconds, read straight off the disk.");
  ("★ THE ANSWER IS THE RAW COUNT AND NOT A DAY OR A DATE, BECAUSE EVERY CALLER WANTS A DIFFERENT ONE OF THOSE AND THEY ARE ALL ONE STEP AWAY. A caller comparing two files wants to subtract; a caller writing a year and a month on a page wants a local day; a caller deciding whether something is stale wants a difference against now. Handing back a day would throw away the time of it and make the comparing caller re-read the disk, and handing back a date object would make the comparing caller unwrap it again.");
  ("It sits beside the reader of a file's size and is written the same way, because the two facts come out of the one answer the disk gives and a caller wanting both should not have to learn two shapes to ask.");
  ("A file that is not there stops this rather than answering with nothing, in the same way asking its size does. There is no count that means absent, and a nothing handed back would be read as the beginning of 1970.");
  let fs = await import("fs");
  let promises = property_get(fs, "promises");
  let stat = await promises.stat(file_path);
  let ms = property_get(stat, "mtimeMs");
  return ms;
}
