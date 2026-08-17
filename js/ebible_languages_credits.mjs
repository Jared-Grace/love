import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { ebible_version_credit } from "./ebible_version_credit.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function ebible_languages_credits() {
  "The credit for every translation this app ships, ready to show a reader.";
  "Several of these translations are given on terms that ask to be credited by name, and the app owes that whether or not anybody checks. So this is gathered from the same list the reader chooses a language from - a translation that is offered cannot then be missing from the page that credits it.";
  "The languages the original scriptures are in are left out, because they are not somebody's translation and have nobody to credit.";
  "A translation not yet downloaded contributes nothing rather than an empty credit, so this can be read while a download is still running.";
  let bible_folders = await ebible_languages_without_original_bible_folders();
  let read = await list_map_async(bible_folders, ebible_version_credit);
  let credits = list_filter_null_not_is(read);
  return credits;
}
