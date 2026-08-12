import { storage_rules_path } from "./storage_rules_path.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_split } from "./text_split.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function storage_rules_read_prefixes() {
  "The top folders the permission rules give away to anybody, read out of the rules themselves.";
  "They are read rather than written down again because a list typed here would go quietly out of date the day somebody grants a new folder, and a check standing on a stale list says nothing while looking like it says everything.";
  "Only a grant with no condition on it counts. The rules also hold grants that name a person, and one that gives everything away to nobody at all, and neither is a folder a page can simply read - so the line has to say exactly that reading is allowed and nothing more.";
  let path = storage_rules_path();
  let text = await file_read(path);
  let lines = text_split_newline(text);
  let prefixes = [];
  let matched = "";
  for (let line of lines) {
    let trimmed = text_trim(line);
    let names_folder = text_starts_with(trimmed, "match /");
    if (names_folder) {
      matched = trimmed;
      continue;
    }
    let gives_read = equal(trimmed, "allow read;");
    if (not(gives_read)) {
      continue;
    }
    let parts = text_split(matched, "/");
    let prefix = list_get(parts, 1);
    ("A folder named by a wildcard rather than by a word is every folder there is, which is not a place anything can be looked for.");
    let wildcard = text_starts_with(prefix, "{");
    if (wildcard) {
      continue;
    }
    list_add(prefixes, prefix);
  }
  return prefixes;
}
