import { ebible_versions_copyrights } from "./ebible_versions_copyrights.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_versions_commercial } from "./bible_versions_commercial.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { ebible_version_uploaded_is } from "./ebible_version_uploaded_is.mjs";
import { list_map_unordered_async_filter_null_not_is } from "./list_map_unordered_async_filter_null_not_is.mjs";
export async function ebible_versions_published_commercial_not() {
  "Every translation on this machine whose terms refuse us and which nevertheless has text sitting in public storage - named by folder alone.";
  "The whole question a licence check is for, asked of the place the text actually is. A list of what a reader is offered says what is meant to go out; storage says what went out, including whatever an older sweep sent under rules nobody was reading yet.";
  "The terms are asked first and storage second, because the terms are read from files already on this disk and storage costs a question over the network each time - so the reading that is nearly free narrows the one that is not.";
  let copyrights = await ebible_versions_copyrights();
  let property_name = bible_folder_key();
  let all = list_map_property(copyrights, property_name);
  let commercial = await bible_versions_commercial();
  let allowed = list_map_property(commercial, property_name);
  function refused_is(bible_folder) {
    let missing = list_includes_not(allowed, bible_folder);
    return missing;
  }
  let refused = list_filter(all, refused_is);
  async function published_or_null(bible_folder) {
    let uploaded = await ebible_version_uploaded_is(bible_folder);
    if (uploaded) {
      return bible_folder;
    }
    return null;
  }
  let published = await list_map_unordered_async_filter_null_not_is(
    refused,
    published_or_null,
  );
  return published;
}
