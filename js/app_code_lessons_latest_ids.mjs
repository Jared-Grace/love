import { arguments_assert } from "./arguments_assert.mjs";
import { html_public_unlisted_folder } from "./html_public_unlisted_folder.mjs";
import { property_get } from "./property_get.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_uncached } from "./file_read_uncached.mjs";
import { list_empty_not_is_assert } from "./list_empty_not_is_assert.mjs";
export async function app_code_lessons_latest_ids() {
  arguments_assert(arguments, 0);
  ("the ids of every lesson latest has, read off latest's own built code, so a working copy can mark finished exactly what latest shows - asked for by the human, 2026-09-30, when marking the released list left lessons 194 to 202 open that latest already had");
  ("Read off the built file rather than off the lesson list, because latest is whatever was last built and sent, and the lesson list is whatever the source says now: a lesson added since is in the list and not on latest. Not picked: writing the ids to a file of their own each time latest is built, which is a second claim about the build beside the build itself, and a step the shared build would take for this one app.");
  ("The built file keeps the id table as each lesson's function name, a colon, and a call handed its id in quotes, because the id is frozen text the build must not rename. The pattern asks for that and nothing looser, so an id is never taken from anywhere else in the file; if a build ever writes the table another way nothing matches, and the assert says so rather than marking nothing in silence.");
  ("It reads the folder latest is copied to before it is sent, so a build copied there and not yet sent counts as latest. The one command that copies it also sends it, so the two only part if a sending fails.");
  let folders = await html_public_unlisted_folder("code");
  let to_folder = property_get(folders, "to_folder");
  let file_path = path_join([to_folder, "code.js"]);
  let built = await file_read_uncached(file_path);
  let pattern =
    /app_code_lesson_[a-z0-9_]+:\(0,[A-Za-z0-9_$.]+\)\("([a-z0-9_]+)"\)/g;
  let ids = [];
  for (let found of built.matchAll(pattern)) {
    ids.push(found[1]);
  }
  list_empty_not_is_assert(ids);
  return ids;
}
