import { memory_frontmatter_name_mismatches } from "./memory_frontmatter_name_mismatches.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { property_get } from "./property_get.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { file_write } from "./file_write.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export async function memory_frontmatter_names_repair() {
  "Bring every memory file's header name back into agreement with its own file name, which is the identity the link checks already resolve against. Rewrites one line per file and returns what it changed.";
  "Only a header line is touched, and only the first one offering the name. A note about how memory files are written can quote a name line in its own prose, and rewriting that quotation would edit an example into a claim about the wrong file.";
  "The file name wins rather than the header, because the file name is what every link in the index already points at, so changing the file to match the header would break the links instead of the other way round.";
  let mismatches = await memory_frontmatter_name_mismatches();
  let folder = memory_folder();
  let fence = "---";
  let key = "name:";
  let repaired = [];
  for (let mismatch of mismatches) {
    let file = property_get(mismatch, "file");
    let expected = property_get(mismatch, "expected");
    let path = path_join([folder, file]);
    let text = await file_read(path);
    let lines = text.split("\n");
    let opens = equal(lines[0], fence);
    if (not(opens)) {
      ("a file with no header is not a header disagreeing with its file name - it is a different fault, and writing a name into prose would bury it rather than report it");
      continue;
    }
    let index = 1;
    let found = false;
    while (less_than(index, lines.length)) {
      let line = lines[index];
      let closes = equal(line, fence);
      if (closes) {
        break;
      }
      let trimmed = line.trim();
      let is_name = text_starts_with(trimmed, key);
      if (is_name) {
        lines[index] = key + " " + expected;
        found = true;
        break;
      }
      index = index + 1;
    }
    if (not(found)) {
      ("a header that never claimed a name gets one, at the top where every other file carries it");
      lines.splice(1, 0, key + " " + expected);
    }
    let joined = lines.join("\n");
    await file_write(path, joined);
    list_add(repaired, {
      file,
      expected,
    });
  }
  return repaired;
}
