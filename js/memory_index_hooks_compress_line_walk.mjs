import { memory_index_hooks_compress_line_walk_line } from "./memory_index_hooks_compress_line_walk_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function memory_index_hooks_compress_line_walk(
  r2,
  lines,
  link_open,
  dash,
) {
  "Walk the lines of the memory index and shorten the long ones that end in a run of links, keeping every other line exactly as it stands, and note by how much each shortened one shrank.";
  "The index is read into every session and is cut off past a size, so a line that has grown costs the lines below it their place. What a grown line has usually grown is a sentence around its links; the links themselves are the part that has to survive, because they are how anything below is reached at all.";
  "So a line is only touched when all four things hold: it is an entry rather than a heading or a note, it is over the length, it has a link in it, and what stands in front of that link reads as a hook already followed by its separator. The fourth is the one that stops a sentence being cut off mid-clause - a head with no separator means the words run into the links rather than introducing them.";
  "Links are found in the line with its written-out code blanked first, so a pair of brackets quoted inside a note about the index is not mistaken for a link into it.";
  "A rewritten line that came out no shorter is dropped and the original kept, so a line can never grow here. That check is worth its lines because the head is tidied on the way through, and tidying can add a character as easily as remove one.";
  arguments_assert(arguments, 4);
  let kept = property_get(r2, "kept");
  let shortened = property_get(r2, "shortened");
  memory_index_hooks_compress_line_walk_line(
    r2,
    lines,
    link_open,
    kept,
    dash,
    shortened,
  );
  let r = {
    kept,
    shortened,
  };
  return r;
}
