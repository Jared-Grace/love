import { g_sermon_generate_chapter_passages_get } from "./g_sermon_generate_chapter_passages_get.mjs";
import { g_sermon_write_read } from "./g_sermon_write_read.mjs";
import { g_verify_approval_read } from "./g_verify_approval_read.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
// The single source of truth for "where does this chapter stand?" — reused by the
// loop (loop_check_all) and available to the app's auto-advance. Returns
// { chapter, approved, latest, next, action } where action is
// "write:<key>" | "wait" | "done".
export async function g_verify_chapter_next(chapter_code) {
  let ordered = list_map(
    await g_sermon_generate_chapter_passages_get(chapter_code),
    g_sermon_passage_verses_key,
  );
  let written = list_map(
    property_get(await g_sermon_write_read(chapter_code), "passages"),
    g_sermon_passage_verses_key,
  );
  let approved = String(
    property_get(await g_verify_approval_read(chapter_code), "approved") || "",
  );
  let latest_index = -1;
  ordered.forEach(function note_written(k, i) {
    if (list_includes(written, k)) latest_index = i;
  });
  let latest = latest_index >= 0 ? ordered[latest_index] : null;
  let next = latest_index < ordered.length - 1 ? ordered[latest_index + 1] : null;
  let action;
  if (latest_index >= ordered.length - 1) action = "done";
  else if (latest_index === -1) action = "write:" + ordered[0];
  else if (approved === ordered[latest_index]) action = "write:" + ordered[latest_index + 1];
  else action = "wait";
  return { chapter: chapter_code, approved, latest, next, action };
}
