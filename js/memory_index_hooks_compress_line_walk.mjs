import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { memory_index_hooks_compress_line_short } from "./memory_index_hooks_compress_line_short.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export function memory_index_hooks_compress_line_walk(
  r2,
  lines,
  link_open,
  dash,
) {
  "Walk the lines of the memory index and shorten the long ones that end in a run of links, keeping every other line exactly as it stands, and note by how much each shortened one shrank.";
  "The index is read into every session and is cut off past a size, so a line that has grown costs the lines below it their place. What a grown line has usually grown is a sentence around its links; the links themselves are the part that has to survive, because they are how anything below is reached at all.";
  "WHETHER A LINE IS TOUCHED AT ALL, AND WHAT IT BECOMES, IS DECIDED NEXT DOOR, and nothing back from there means keep the line as it stands. All this holds is the two lists - the lines that came through and the note of what each shortened one cost before and after - because that is the part the whole walk has to remember and the rest is one line at a time.";
  arguments_assert(arguments, 4);
  let kept = property_get(r2, "kept");
  let shortened = property_get(r2, "shortened");
  let r3 = property_get(r2, "r3");
  let opener = property_get(r3, "opener");
  let ceiling = property_get(r3, "ceiling");
  for (let line of lines) {
    let short = memory_index_hooks_compress_line_short(
      line,
      opener,
      ceiling,
      link_open,
      dash,
    );
    let left = null_is(short);
    if (left) {
      list_add(kept, line);
      continue;
    }
    list_add(kept, short);
    let record = {
      was: line.length,
      now: short.length,
    };
    list_add(shortened, record);
  }
  let r = {
    kept,
    shortened,
  };
  return r;
}
