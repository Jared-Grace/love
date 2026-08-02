import { property_negative } from "./property_negative.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_bytes_size } from "./text_bytes_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_take } from "./list_take.mjs";
export async function claude_md_sections_longest(top) {
  "Which headed parts of the instructions file carry the most weight, heaviest first.";
  "The size gate can only say the file is too big, which tells a reader to shorten something without saying what. This says where the weight actually is, and that is the whole difference between a complaint and a place to start.";
  "Counted by heading rather than by line, because the way down is to move a whole explanation into a file of its own and leave a line pointing at it. A ranking of single lines would point at the longest sentences, which are not the same thing at all and are usually the ones worth keeping.";
  let f_path = repo_path_combine("love", "CLAUDE.md");
  let text = await file_read(f_path);
  let lines = text_split_newline(text);
  let sections = [];
  let heading = "(before the first heading)";
  let bytes = 0;
  function section_close() {
    let record = {
      heading,
      bytes,
    };
    list_add(sections, record);
  }
  for (let line of lines) {
    let headed = text_starts_with(line, "#");
    if (headed) {
      section_close();
      heading = line;
      bytes = 0;
    }
    let weight = text_bytes_size(line);
    bytes = bytes + weight;
  }
  section_close();
  function lambda_rank(record) {
    let ordered = property_negative(record, "bytes");
    return ordered;
  }
  list_sort_number_mapper(sections, lambda_rank);
  let taken = list_take(sections, top);
  return taken;
}
