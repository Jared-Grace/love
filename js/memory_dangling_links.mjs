import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { file_read } from "./file_read.mjs";
import { path_join } from "./path_join.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { memory_wikilink_tokens } from "./memory_wikilink_tokens.mjs";
let TYPE_PREFIXES = ["feedback_", "project_", "reference_", "user_"];
export async function memory_dangling_links() {
  ("Report only PREFIX-TYPO dangling wikilinks: an unresolved double-bracket");
  ("link type_rest whose rest matches an EXISTING file under a DIFFERENT type");
  ("prefix - e.g. a project_dev_x link when reference_dev_x is the real file.");
  ("This is the narrow high-signal check the memory notes call for: a naive");
  ("all-unresolved sweep is noisy because peers write code names and bare");
  ("bracket syntax examples that are not links at all. Each result carries the");
  ("suggested existing target. Read-only; third of the memory-integrity trio.");
  let folder = memory_folder();
  let file_names = await folder_read_files(folder);
  function is_md(name) {
    let ew = text_ends_with(name, ".md");
    return ew;
  }
  let md_names = list_filter(file_names, is_md);
  function stem_of(name) {
    let s = text_suffix_without(name, ".md");
    return s;
  }
  let on_disk = list_map(md_names, stem_of);
  async function read_text(name) {
    let path = path_join([folder, name]);
    let text = await file_read(path);
    return text;
  }
  let texts = await list_map_unordered_async(md_names, read_text);
  let joined = texts.join("\n");
  let all_links = memory_wikilink_tokens(joined);
  let results = [];
  for (let link of all_links) {
    let resolved = list_includes(on_disk, link);
    if (resolved) {
      continue;
    }
    for (let prefix of TYPE_PREFIXES) {
      let has_prefix = text_starts_with(link, prefix);
      if (has_prefix) {
        let rest = text_prefix_without(link, prefix);
        for (let other of TYPE_PREFIXES) {
          let candidate = other + rest;
          let exists = list_includes(on_disk, candidate);
          if (exists) {
            list_add(results, {
              link,
              suggestion: candidate,
            });
          }
        }
      }
    }
  }
  return results;
}
