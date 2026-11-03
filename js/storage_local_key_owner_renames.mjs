import { text_frozen } from "./text_frozen.mjs";
import { fn_name } from "./fn_name.mjs";
export function storage_local_key_owner_renames() {
  "Every rename of a function whose name people's browsers had already filed settings under: the name it had, and the name it answers to now. Read in the browser, so that settings filed under the old name are found under the new one.";
  "Written out whole from the record beside it by a rename, so it is never edited by hand: the record is the source.";
  "The old name is frozen, because it is a word sitting on disks this repo cannot reach. The new name is a reference, and every entry names the function as it is called today, so a function renamed twice needs no chain.";
  let r = [
    {
      before: text_frozen("app_privacy_policy"),
      after: fn_name("app_privacy"),
    },
    {
      before: text_frozen("app_apps_all"),
      after: fn_name("app_app"),
    },
    {
      before: text_frozen("app_designs_universal"),
      after: fn_name("app_design"),
    },
    {
      before: text_frozen("app_autopray"),
      after: fn_name("app_pray_auto"),
    },
    {
      before: text_frozen("app_emoji_bible_english_shown_get"),
      after: fn_name("app_bible_emoji_english_shown_get"),
    },
    {
      before: text_frozen("app_emoji_bible_key_shown_get"),
      after: fn_name("app_bible_emoji_key_shown_get"),
    },
    {
      before: text_frozen("app_emoji_bible_literal_shown_get"),
      after: fn_name("app_bible_emoji_literal_shown_get"),
    },
    {
      before: text_frozen("app_emoji_bible_offline_saved_get"),
      after: fn_name("app_bible_emoji_offline_saved_get"),
    },
    {
      before: text_frozen("app_emoji_bible_tradition_get"),
      after: fn_name("app_bible_emoji_tradition_get"),
    },
  ];
  return r;
}
