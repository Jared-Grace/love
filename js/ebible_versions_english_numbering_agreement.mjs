import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { list_map_async_record_try } from "./list_map_async_record_try.mjs";
import { ebible_version_numbering_agreement } from "./ebible_version_numbering_agreement.mjs";
export async function ebible_versions_english_numbering_agreement() {
  "How far every English bible this repo can download numbers its verses the way the one everything is read in does, one answer per bible.";
  "This is the reading the search index is built on top of, kept as a command of its own so the split it draws can be looked at rather than only trusted.";
  let bible_folders = await ebible_versions_english_downloadable_cache();
  let found = await list_map_async_record_try(
    bible_folders,
    ebible_version_numbering_agreement,
  );
  return found;
}
