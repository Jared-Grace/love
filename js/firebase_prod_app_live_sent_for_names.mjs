import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { file_name_app_chunk_is } from "./file_name_app_chunk_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_difference } from "./list_difference.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_pop } from "./list_pop.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_prod_asset_text } from "./firebase_prod_asset_text.mjs";
import { js_bundle_chunk_ids } from "./js_bundle_chunk_ids.mjs";
import { file_name_app_chunk } from "./file_name_app_chunk.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat } from "./list_concat.mjs";
export async function firebase_prod_app_live_sent_for_names(app_name, noted) {
  "$plain app_name";
  "$plain noted";
  "Of the pieces one app is being served, the ones its page actually sends for - the page itself and whatever sits beside it, and then the numbered scripts found by walking outward from the page.";
  "★ A PIECE BEING SERVED IS NOT A REASON TO WANT IT BACK. A script left over from an older build sits in the folder that gets sent, so it rides out with everything else, and from that moment being live is proof of nothing except that it was once there. Treating what is live as the list of what is wanted therefore hands a leftover a way of protecting itself: it is served, so it is put back, so the next sending serves it again. Measured on the 25th of August, three and a half megabytes came back down two minutes after being taken out, byte for byte the same file.";
  "So the served record says what may be asked for and the page says what is worth asking for. A piece the walk never reaches is left out of the answer altogether, which is what lets whoever asked take it off the disk instead of fetching it.";
  "The walk has to read as it goes, because what a piece sends for can only be found inside the piece. Where the disk already holds the served copy that reading costs nothing; where it does not, that piece comes down here to be read and comes down again to be written, and only pieces that have actually changed are ever read twice.";
  "The pieces that are not this app's own numbered scripts are kept without asking anything. The page is where the walk starts and so cannot be judged by it, and there is nothing else beside it that a page ever sends for by name.";
  "An app whose page is not among the served pieces leaves the walk with nowhere to start, so none of its numbered scripts is kept. That is the honest answer rather than a fault - with no page there, nothing could send for any of them.";
  arguments_assert(arguments, 2);
  let file_names = object_property_names(noted);
  function chunk_lambda(file_name) {
    let chunk = file_name_app_chunk_is(file_name, app_name);
    return chunk;
  }
  let chunk_names = list_filter(file_names, chunk_lambda);
  let other_names = list_difference(file_names, chunk_names);
  let entry_name = file_name_js(app_name);
  let entry_served = list_includes(other_names, entry_name);
  if (not(entry_served)) {
    return other_names;
  }
  let reached = [];
  let unread = [entry_name];
  while (list_empty_not_is(unread)) {
    let read_name = list_pop(unread);
    let want = property_get(noted, read_name);
    let text = await firebase_prod_asset_text(read_name, want);
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
      list_add(unread, chunk_name);
    }
  }
  let names = list_concat(other_names, reached);
  return names;
}
