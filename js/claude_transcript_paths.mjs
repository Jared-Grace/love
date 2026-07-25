import fs from "fs";
import { path_join } from "./path_join.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { claude_project_folder } from "./claude_project_folder.mjs";
export function claude_transcript_paths() {
  "Every session transcript Claude Code has written for this repo, as full paths - one file per session, appended a line at a time. It is the only record of what each session actually did, including how long each tool call took to come back.";
  let folder = claude_project_folder();
  let names = fs.readdirSync(folder);
  function transcript_is(name) {
    let b = name.endsWith(".jsonl");
    return b;
  }
  let transcripts = list_filter(names, transcript_is);
  function full_path(name) {
    let p = path_join([folder, name]);
    return p;
  }
  let paths = list_map(transcripts, full_path);
  return paths;
}
