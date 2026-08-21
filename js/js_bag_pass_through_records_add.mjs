import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_bag_unpacked_kept } from "./js_bag_unpacked_kept.mjs";
import { js_record_name_entries_try } from "./js_record_name_entries_try.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_find_property_get_or } from "./list_find_property_get_or.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_bag_pass_through_records_add(
  decls,
  unpacked,
  producers,
  found,
) {
  arguments_assert(arguments, 4);
  ("Adds to the list given it every record written out here that is mostly names lifted straight out of one other record, said as the record it drew from, the names that went through, and the names put in on the way.");
  ("A record is asked about once per record it drew from. One being built out of two others is two joins and not one, and each of them can be answered differently, so rolling them together would lose whichever answer was the less convenient.");
  ("Fewer than three names carried through is passed over. Two names passed on is as likely to be a body that wanted them as a join, and a list saying so about half the repo is a list nobody reads.");
  ("The maker of the record drawn from is named where there is one to name, and nothing where the name was handed in from outside. Whether the join can go turns on what that maker hands back, so leaving it out would mean walking the whole repo a second time to find it.");
  for (let decl of decls) {
    let init = property_get(decl, "init");
    let entries = js_record_name_entries_try(init);
    if (null_is(entries)) {
      continue;
    }
    let keys = list_map_property(entries, "key");
    let kept = js_bag_unpacked_kept(unpacked, keys);
    let bags = list_map_property_unique(kept, "bag");
    for (let bag of bags) {
      let from = list_filter_property(kept, "bag", bag);
      let taken = list_map_property_unique(from, "name");
      let enough_is = list_size_greater_than(taken, 2);
      if (not(enough_is)) {
        continue;
      }
      let added = list_without_multiple(keys, taken);
      let producer = list_find_property_get_or(
        producers,
        "name",
        bag,
        "producer",
        null,
      );
      let record = property_get(decl, "name");
      list_add(found, {
        record,
        bag,
        producer,
        keys,
        taken,
        added,
      });
    }
  }
}
