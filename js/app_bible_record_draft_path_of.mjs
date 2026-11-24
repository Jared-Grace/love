import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { path_base } from "./path_base.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_bible_record_draft_path_of(path) {
  "Where a take not sent yet is backed up, given where it would go once sent: the same chapter folder, inside a draft folder (human 2026-11-25: syncing, so every video reaches storage). Sending stays the approval - a sent take becomes a video posted with nobody looking again - so a backup must never sit where a sent take does. REJECTED: a draft folder before the project (bible_record/draft/...) - anything listing projects would read draft as one; a top folder of its own - storage only lets the owner write under bible_record, and widening that needs a deploy.";
  arguments_assert(arguments, 1);
  let name = path_base(path);
  let difference = subtract(path.length, name.length);
  let folder = path.slice(0, difference);
  let draft = text_combine_multiple([folder, "draft/", name]);
  return draft;
}
