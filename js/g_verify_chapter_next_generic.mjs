import { property_list_map } from "./property_list_map.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
('"Where does this chapter stand?" for any approval-gated content kind. The three');
("getters are what differs per kind: the ordered passage list, the authored store,");
("and the approval store. The GATE is the shared part — the next passage is only");
("offered once the latest one is approved, so exactly one passage is ever pending.");
export async function g_verify_chapter_next_generic(
  chapter_code,
  passages_get,
  written_get,
  approval_get,
) {
  let list = await passages_get(chapter_code);
  let ordered = list_map(list, g_sermon_passage_verses_key);
  let object = await written_get(chapter_code);
  let written = property_list_map(
    object,
    "passages",
    g_sermon_passage_verses_key,
  );
  let object2 = await approval_get(chapter_code);
  let approved = String(property_get(object2, "approved") || "");
  let latest_index = -1;
  function note_written(k, i) {
    if (list_includes(written, k)) {
      latest_index = i;
    }
  }
  ordered.forEach(note_written);
  let latest = greater_than_equal(latest_index, 0)
    ? ordered[latest_index]
    : null;
  let b = subtract(ordered.length, 1);
  let next = less_than(latest_index, b) ? ordered[latest_index + 1] : null;
  let action = null;
  let b2 = subtract(ordered.length, 1);
  if (greater_than_equal(latest_index, b2)) {
    action = "done";
  } else if (equal(latest_index, -1)) {
    action = "write:" + ordered[0];
  } else if (equal(approved, ordered[latest_index])) {
    action = "write:" + ordered[latest_index + 1];
  } else action = "wait";
  let r = {
    chapter: chapter_code,
    approved,
    latest,
    next,
    action,
  };
  return r;
}
