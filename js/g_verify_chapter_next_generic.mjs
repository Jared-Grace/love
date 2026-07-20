import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
// "Where does this chapter stand?" for any approval-gated content kind. The three
// getters are what differs per kind: the ordered passage list, the authored store,
// and the approval store. The GATE is the shared part — the next passage is only
// offered once the latest one is approved, so exactly one passage is ever pending.
export async function g_verify_chapter_next_generic(
  chapter_code,
  passages_get,
  written_get,
  approval_get,
) {
  let ordered = list_map(
    await passages_get(chapter_code),
    g_sermon_passage_verses_key,
  );
  let written = list_map(
    property_get(await written_get(chapter_code), "passages"),
    g_sermon_passage_verses_key,
  );
  let approved = String(
    property_get(await approval_get(chapter_code), "approved") || "",
  );
  let latest_index = -1;
  ordered.forEach(function note_written(k, i) {
    if (list_includes(written, k)) latest_index = i;
  });
  let latest = latest_index >= 0 ? ordered[latest_index] : null;
  let next =
    latest_index < ordered.length - 1 ? ordered[latest_index + 1] : null;
  let action;
  if (latest_index >= ordered.length - 1) action = "done";
  else if (latest_index === -1) action = "write:" + ordered[0];
  else if (approved === ordered[latest_index])
    action = "write:" + ordered[latest_index + 1];
  else action = "wait";
  return { chapter: chapter_code, approved, latest, next, action };
}
