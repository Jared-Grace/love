import { path_join } from "./path_join.mjs";
import { text_combine } from "./text_combine.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { memory_wikilink_tokens } from "./memory_wikilink_tokens.mjs";
import { memory_frontmatter_field } from "./memory_frontmatter_field.mjs";
import { file_read } from "./file_read.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function g_design_notes() {
  "Every memory note describing the design of the g game, as name, description and full text, in reading order with the map first.";
  "The MAP note is the enumerator rather than a list kept here, for the same reason the #index directory reads the route registry: the map exists to name the whole cluster, so reading its links is the one way this cannot drift from what memory actually holds. A link naming a note nobody has written yet is skipped, since writing the link before the note is how a next note gets marked.";
  "This runs where the notes are - they live outside this repo and are never bundled, so a browser reaches it through the dev api and a built page simply has no design screen to reach.";
  let folder = memory_folder();
  async function note_text(stem) {
    let name = text_combine(stem, ".md");
    let file_path = path_join([folder, name]);
    let present = await file_exists(file_path);
    if (not(present)) {
      let missing = null;
      return missing;
    }
    let text = await file_read(file_path);
    return text;
  }
  let map_stem = "project_g_map";
  let map_text = await note_text(map_stem);
  let linked = memory_wikilink_tokens(map_text);
  let stems = list_concat([map_stem], linked);
  let notes = [];
  for (let stem of stems) {
    let text = await note_text(stem);
    if (not(text)) {
      continue;
    }
    let description = memory_frontmatter_field(text, "description");
    let note = {
      name: stem,
      description,
      text,
    };
    list_add(notes, note);
  }
  return notes;
}
