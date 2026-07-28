import { repo_path_combine } from "./repo_path_combine.mjs";
import { file_read } from "./file_read.mjs";
import { text_bytes_size } from "./text_bytes_size.mjs";
import { claude_md_size_ceiling } from "./claude_md_size_ceiling.mjs";
import { claude_md_sections_longest } from "./claude_md_sections_longest.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function claude_md_size_gate_run() {
  "Fails when the instructions file has grown past the size it can be loaded whole at, and names the heaviest sections so the next reader knows where to cut.";
  "It guards the same silent failure the memory index gate guards, in the larger of the two files and the one that had no guard at all. Going over costs nothing at the moment it happens, which is exactly why it kept happening: the price is paid afterwards, by every session that loads the file, forever.";
  "The fix is never to raise the ceiling. Move the explanation into a file of its own and leave a line naming it - the shape the memory index already uses, where a short hook points and the note carries the weight.";
  let f_path = repo_path_combine("love", "CLAUDE.md");
  let text = await file_read(f_path);
  let size = text_bytes_size(text);
  let ceiling = claude_md_size_ceiling();
  let over = greater_than(size, ceiling);
  if (not(over)) {
    let fine = {
      size,
      ceiling,
      over: false,
    };
    return fine;
  }
  let heaviest = await claude_md_sections_longest(8);
  let named = [];
  for (let section of heaviest) {
    let heading = property_get(section, "heading");
    let bytes = property_get(section, "bytes");
    let entry = heading + " (" + bytes + ")";
    list_add(named, entry);
  }
  let listed = list_join_comma(named);
  let message = text_combine_multiple([
    "claude md size gate: the instructions are ",
    size,
    " bytes and may be ",
    ceiling,
    " - move a whole explanation into a file of its own and leave a line naming it, rather than raising the ceiling. Heaviest sections: ",
    listed,
  ]);
  throw new Error(message);
}
