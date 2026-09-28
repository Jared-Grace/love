import { web_assets_url_unstamped } from "./web_assets_url_unstamped.mjs";
export function bible_word_voice_path_url(path) {
  "$plain path";
  "Where a browser fetches one Bible word clip, given where it sits under the assets folder.";
  "NO STAMP IS PUT ON THE END, unlike every other asset, because the file is named after the word it says: the same address can only ever hand back the same sound, so a phone may keep it for good and a new recording elsewhere never makes this one stale.";
  "A stamp would change every one of tens of thousands of addresses whenever any asset anywhere changed, and a reader would download the whole Bible again to hear one word.";
  let url = web_assets_url_unstamped(path);
  return url;
}
