import { storage_session_specify_set } from "./storage_session_specify_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_set } from "./property_set.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
export function app_g_verify_home_choose(
  chapter_state_shown,
  approved_key,
  held,
  storage_key,
  passages,
  pending,
  open_passage,
  open_pending,
) {
  "Which verse the verify page opens on its own once it has drawn the list: the one just written if that is news, otherwise the one chosen last time, otherwise the first.";
  "A NEWLY WRITTEN VERSE IS ONLY JUMPED TO ONCE. The keeper remembers which one it already jumped to, so a look-again a few seconds later does not drag the reader off whatever they moved to since.";
  "A VERSE ALREADY APPROVED IS NOT NEWS, so it is not jumped to even when it is the latest one there is.";
  arguments_assert(arguments, 8);
  let latest = property_get(chapter_state_shown, "latest");
  let selected_key = property_get(held, "selected_key");
  let advanced_for = property_get(held, "advanced_for");
  let news =
    not_equal(latest, null) &&
    not_equal(latest, approved_key) &&
    not_equal(latest, advanced_for);
  if (news) {
    selected_key = latest;
    property_set(held, "selected_key", latest);
    storage_session_specify_set(storage_key, latest);
    property_set(held, "advanced_for", latest);
  }
  let initial = null;
  function passage_chosen(passage) {
    let left = g_sermon_passage_verses_key(passage);
    let same = equal(left, selected_key);
    if (same) {
      initial = passage;
    }
  }
  passages.forEach(passage_chosen);
  let found = not_equal(initial, null);
  if (found) {
    open_passage(initial);
    return;
  }
  let waiting = not_equal(pending, null) && equal(selected_key, pending);
  if (waiting) {
    open_pending(pending);
    return;
  }
  let first = list_first(passages);
  open_passage(first);
}
