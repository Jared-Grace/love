import { greater_than_equal } from "./greater_than_equal.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_add } from "./list_add.mjs";
import { memory_index_lines } from "./memory_index_lines.mjs";
import { memory_index_path } from "./memory_index_path.mjs";
import { not } from "./not.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function memory_index_sections_braced() {
  "Marks each section of the memory index with a brace: the heading gains an opening one at its end, and the last entry under that heading gains a closing one. Answers how many sections were marked.";
  "The index is loaded whole up to a number of lines, and a blank line costs exactly what an entry costs while naming no note at all. A brace costs a character. So the braces buy back the eighteen lines the blank lines were spending, and the sections still have a visible start and a visible end - which is the whole of what the blanks were doing.";
  "It rewrites both marks every time rather than adding to what is there. That is what keeps it right after somebody else has edited the file: a new entry appended to a section would otherwise leave the old closing brace stranded in the middle of the group, and the mark would say the section ended where it no longer does. Stripping first and marking again cannot drift, and running it twice writes the same file.";
  "A line that is neither a heading nor blank counts as an entry. The italic note at the top of the file sits above every heading, so it belongs to no section and is left alone.";
  let lines = await memory_index_lines();
  let hash = "#";
  let open = " {";
  let close = " }";
  let bare = [];
  for (let line of lines) {
    let opened = text_ends_with(line, open);
    let closed = text_ends_with(line, close);
    let stripped = line;
    if (opened) {
      stripped = line.slice(0, -2);
    }
    if (closed) {
      stripped = line.slice(0, -2);
    }
    list_add(bare, stripped);
  }
  ("the closing brace goes on the last entry of a section, which is only known once the next heading arrives or the file ends - so the ends are collected first and the lines are written afterwards");
  let ends = [];
  let last = -1;
  let index = 0;
  let under_heading = false;
  for (let line of bare) {
    let heading = text_starts_with(line, hash);
    let blank = text_empty_is(line);
    if (heading) {
      if (greater_than_equal(last, 0)) {
        list_add(ends, last);
      }
      last = -1;
      under_heading = true;
    }
    let entry = not(heading) && not(blank);
    if (entry && under_heading) {
      last = index;
    }
    index = index + 1;
  }
  if (greater_than_equal(last, 0)) {
    list_add(ends, last);
  }
  let marked = [];
  let at = 0;
  for (let line of bare) {
    let heading = text_starts_with(line, hash);
    let written = line;
    if (heading) {
      written = line + open;
    }
    if (ends.includes(at)) {
      written = line + close;
    }
    list_add(marked, written);
    at = at + 1;
  }
  let rebuilt = marked.join("\n");
  let path = memory_index_path();
  await file_overwrite(path, rebuilt);
  let r = {
    sections: ends.length,
  };
  return r;
}
