import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_write_upload_path } from "./g_arc_write_upload_path.mjs";
import { g_content_backup_path } from "./g_content_backup_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function g_arc_backup_chapter(chapter_code) {
  "$plain chapter_code";
  "One chapter's arcs as the content backup repo last kept them, which is the oldest copy of them anybody can still read.";
  "THIS IS A SECOND-BEST BASE AND IT IS HERE BECAUSE THE BEST ONE IS OFTEN EMPTY. What a reviewer wants to be shown is the arc as they last read it, and that is only on record once they have marked one read. Before the first reading there is no such record and never will be for the arcs already written, so a page holding out for one would show nothing moved on exactly the arcs that have moved the most.";
  "NOT BACKED UP IS AN EMPTY LIST AND NOT A FAILURE, the same as nothing read yet. A chapter written since the last backup ran, or a person added to a chapter after it, simply has no older copy - which is a thing to say on the page rather than a thing to throw about.";
  "THE COPY IN THE BACKUP'S WORKING FOLDER IS READ, and not the copy in its last commit. The backup repo is written by copying storage down and committing it, so the folder is the newer of the two whenever they differ at all, and reading it needs no git.";
  arguments_assert(arguments, 1);
  let storage_path = g_arc_write_upload_path(chapter_code);
  let path = g_content_backup_path(storage_path);
  let exists = await file_exists(path);
  if (not(exists)) {
    let missing = [];
    return missing;
  }
  let chapter = await file_read_json(path);
  let arcs = property_get(chapter, "arcs");
  return arcs;
}
