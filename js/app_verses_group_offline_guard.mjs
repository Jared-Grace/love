import { arguments_assert } from "./arguments_assert.mjs";
import { browser_online_is } from "./browser_online_is.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { uplifting_package_get } from "./uplifting_package_get.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_shared_message_overlay } from "./app_shared_message_overlay.mjs";
export async function app_verses_group_offline_guard(
  offline_notified,
  languages_chosen,
) {
  "Whether asking for verses has to stop here because there is no connection and nothing to read from the phone either, together with whether the person has been told about it yet.";
  "BEING OFF THE INTERNET IS NOT ON ITS OWN A REASON TO STOP: the languages a person chose may already have their uplifting verses saved on the phone, and if any of them do, the asking goes ahead as normal.";
  "THE GENTLE MESSAGE IS SHOWN ONCE PER STRETCH OFF THE INTERNET, so nudging the count while offline does not stack one overlay on another.";
  "HAVING BEEN TOLD IS HANDED BACK RATHER THAN WRITTEN HERE, because the same stretch off the internet spans many askings and only the caller lives long enough to remember it.";
  "COMING BACK ONLINE FORGETS THAT THE PERSON WAS TOLD, so the next time they lose the connection they are told again rather than left with a screen that does nothing.";
  arguments_assert(arguments, 2);
  let online = browser_online_is();
  if (online) {
    let r = {
      handled: false,
      offline_notified: false,
    };
    return r;
  }
  let property_name = bible_folder_key();
  let folders = list_map_property(languages_chosen, property_name);
  let packages = await list_map_unordered_async(folders, uplifting_package_get);
  let loaded = list_filter_null_not_is(packages);
  let nothing_loaded = list_empty_is(loaded);
  if (nothing_loaded) {
    if (offline_notified) {
      let r2 = {
        handled: true,
        offline_notified: true,
      };
      return r2;
    }
    let emoji_text = emoji_pray();
    app_shared_message_overlay(
      emoji_text,
      "It looks like you are not connected to the internet right now. Please reconnect, then choose your verses again — they will be waiting for you.",
    );
    let r3 = {
      handled: true,
      offline_notified: true,
    };
    return r3;
  }
  let r4 = {
    handled: false,
    offline_notified,
  };
  return r4;
}
