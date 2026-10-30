import { storage_local_key_owner_renames } from "./storage_local_key_owner_renames.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { null_is } from "./null_is.mjs";
import { storage_local_specify_set_text } from "./storage_local_specify_set_text.mjs";
export function storage_local_key_carried_get_json(storage_local_key) {
  "$plain storage_local_key";
  "What was filed in this browser under this key before its owner was renamed, copied across to the key as it is spelled now and then answered; null when nothing was filed under any old name.";
  "Asked only once the key itself has come back empty, so a device that already holds the new key is never overwritten from an old one. The copy is written before answering, so the next read finds it directly, and the old key is left where it is: a page still built under the old name, open in another tab, keeps working.";
  let renames = storage_local_key_owner_renames();
  for (let rename of renames) {
    let after = property_get(rename, "after");
    let before = property_get(rename, "before");
    if (equal(before, after)) {
      continue;
    }
    let prefix = text_combine(after, " ");
    let mine = text_starts_with(storage_local_key, prefix);
    if (not(mine)) {
      continue;
    }
    let rest = text_prefix_without(storage_local_key, prefix);
    let key_before = text_combine_multiple([before, " ", rest]);
    let text = localStorage.getItem(key_before);
    if (null_is(text)) {
      continue;
    }
    storage_local_specify_set_text(storage_local_key, text);
    return text;
  }
  return null;
}
