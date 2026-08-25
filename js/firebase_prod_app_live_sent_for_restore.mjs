import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { file_name_app_chunk_is } from "./file_name_app_chunk_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_difference } from "./list_difference.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_prod_asset_restore_record } from "./firebase_prod_asset_restore_record.mjs";
import { list_add } from "./list_add.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_pop } from "./list_pop.mjs";
import { firebase_prod_asset_disk_read } from "./firebase_prod_asset_disk_read.mjs";
import { js_bundle_chunk_ids } from "./js_bundle_chunk_ids.mjs";
import { file_name_app_chunk } from "./file_name_app_chunk.mjs";
export async function firebase_prod_app_live_sent_for_restore(app_name, noted) {
  "$plain app_name";
  "$plain noted";
  "Puts back the page of one app and only those pieces of it the page actually sends for, walking outward from the page itself, and answers with a record for each piece it looked at.";
  "★ A PIECE BEING SERVED IS NOT A REASON TO WANT IT BACK. A piece left over from an older build sits in the folder that gets sent, so it rides out with everything else, and from that moment being live is proof of nothing except that it was once there. Fetching back whatever is live therefore hands a leftover a way of protecting itself: it is served, so it comes back, so the next sending serves it again. Measured on the 25th of August, three and a half megabytes came back down two minutes after being taken out, byte for byte the same file.";
  "So the served record says what may be fetched and the page says what is worth fetching. A piece the walk never reaches is left out of the answer altogether, which is what lets whoever asked take it off the disk.";
  "The walk has to fetch as it goes, because what a piece sends for can only be read out of the piece. That is why this puts things back rather than only saying what it would put back - and it is also why asking twice is cheap, since a piece already right on the disk is read from there and never fetched.";
  "The pieces that are not the app's own numbered scripts are put back without asking anything, because the page itself is what the walk starts from and there is nothing else that could vouch for it.";
  "An app whose page is not being served leaves the walk with nowhere to start, so none of its numbered scripts can be reached and none is put back. That is the honest answer rather than a fault: nothing there could send for them.";
  arguments_assert(arguments, 2);
  let file_names = object_property_names(noted);
  function chunk_lambda(file_name) {
    let chunk = file_name_app_chunk_is(file_name, app_name);
    return chunk;
  }
  let chunk_names = list_filter(file_names, chunk_lambda);
  let other_names = list_difference(file_names, chunk_names);
  let records = [];
  for (let other_name of other_names) {
    let wanted = property_get(noted, other_name);
    let record = await firebase_prod_asset_restore_record(other_name, wanted);
    list_add(records, record);
  }
  let entry_name = file_name_js(app_name);
  let entry_served = list_includes(other_names, entry_name);
  if (not(entry_served)) {
    return records;
  }
  let reached = [];
  let unread = [entry_name];
  while (list_empty_not_is(unread)) {
    let read_name = list_pop(unread);
    let text = await firebase_prod_asset_disk_read(read_name);
    let ids = js_bundle_chunk_ids(text);
    for (let chunk_id of ids) {
      let chunk_name = file_name_app_chunk(chunk_id, app_name);
      let seen = list_includes(reached, chunk_name);
      if (seen) {
        continue;
      }
      let served = list_includes(chunk_names, chunk_name);
      if (not(served)) {
        continue;
      }
      list_add(reached, chunk_name);
      let want = property_get(noted, chunk_name);
      let record = await firebase_prod_asset_restore_record(chunk_name, want);
      list_add(records, record);
      list_add(unread, chunk_name);
    }
  }
  return records;
}
