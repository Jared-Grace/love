import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { equal } from "./equal.mjs";
import { claude_transcripts_folder } from "./claude_transcripts_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { p_command_of_line } from "./p_command_of_line.mjs";
export async function p_commands_repeated() {
  "Rank the `p ` shorthand commands the user re-pasted across this project's";
  "session transcripts, most-repeated first, count 2+. These are automation";
  "candidates that never surfaced as a permission prompt - a re-run build, a";
  "re-typed workflow. The permission-prompt reports cover the prompt-sourced";
  "half; this covers repetition in the command stream itself. Read-only.";
  let folder = claude_transcripts_folder();
  let names = await folder_read_files(folder);
  function is_jsonl(name) {
    let ew = text_ends_with(name, ".jsonl");
    return ew;
  }
  let jsonl_names = list_filter(names, is_jsonl);
  async function commands_of(name) {
    let path = path_join([folder, name]);
    let lines = await file_read_lines(path);
    let cmds = [];
    for (let line of lines) {
      let cmd = p_command_of_line(line);
      let empty = equal(cmd, "");
      if (not(empty)) {
        list_add(cmds, cmd);
      }
    }
    return cmds;
  }
  let per_file = await list_map_unordered_async(jsonl_names, commands_of);
  let counts = new Map();
  for (let cmds of per_file) {
    for (let cmd of cmds) {
      let seen = counts.has(cmd);
      if (not(seen)) {
        counts.set(cmd, {
          command: cmd,
          count: 0,
        });
      }
      let row = counts.get(cmd);
      row.count = row.count + 1;
    }
  }
  let rows = [];
  for (let row of counts.values()) {
    let many = greater_than(row.count, 1);
    if (many) {
      list_add(rows, row);
    }
  }
  function by_count(row) {
    let n = row.count;
    return n;
  }
  let ranked = list_sort_number_mapper_reverse(rows, by_count);
  return ranked;
}
