import { property_list_includes } from "./property_list_includes.mjs";
import { list_sorted_text_is } from "./list_sorted_text_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { baselines_known_holding } from "./baselines_known_holding.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_replace } from "./list_replace.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_get } from "./property_get.mjs";
export async function baselines_name_rename(name_before, name_after) {
  "$plain name_before";
  "$plain name_after";
  arguments_assert(arguments, 2);
  ("Carry one renamed name across every ratchet's record at once, and say which records it moved in.");
  ("A ratchet records a name, so renaming the thing behind it breaks the record in two places at the same moment: the old name goes stale and the new one arrives looking like a fresh offence. The writers cannot absorb that themselves - they are guarded against growth, and a rename is indistinguishable to them from a real new offence, which is exactly what that guard exists to refuse. So the rename has to be told to the records rather than derived by them.");
  ("Every record is read before any is written. A rename half done is worse than one not started - some ratchets would then name the thing one way and the rest the other, with nothing to say which set was right - so the one thing that can stop it stops it while nothing has been touched.");
  ("A record already holding the new name is what stops it. Substituting there would put the same name in twice, and writing that back would leave the record one name shorter with nothing anywhere saying an entry had gone. Two names being merged into one is a real decision, not a rename, and it belongs to whoever is doing it.");
  ("A record already in text order is put back in order after the substitution, because a name that changed almost never sorts where the old one did. A record held in some other order is left exactly where it was: the lesson ids are kept in the order a learner meets them, and sorting those would throw away the one thing that file is for while reporting a clean rename.");
  let found = await baselines_known_holding(name_before);
  let holders = property_get(found, "holders");
  let unread = property_get(found, "unread");
  let clashes = [];
  for (let holder of holders) {
    let taken = property_list_includes(holder, "known", name_after);
    if (taken) {
      let f_name = property_get(holder, "f_name");
      list_add(clashes, f_name);
    }
  }
  list_empty_is_assert_json(clashes, {
    hint: "these records already hold the name being renamed to, so the rename would merge two entries into one and shrink the record - decide what the merged entry means and edit those records yourself",
    name_before,
    name_after,
  });
  let renamed = [];
  for (let holder of holders) {
    let known = property_get(holder, "known");
    let path = property_get(holder, "path");
    let ordered = list_sorted_text_is(known);
    let index = list_index_of(known, name_before);
    list_replace(known, index, name_after);
    if (ordered) {
      list_sort_text(known);
    }
    let recorded = await baseline_known_write(known, path);
    let f_name = property_get(holder, "f_name");
    list_add(renamed, {
      f_name,
      recorded,
    });
  }
  let r = {
    renamed,
    unread,
  };
  return r;
}
