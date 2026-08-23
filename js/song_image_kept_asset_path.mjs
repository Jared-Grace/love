import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplets_hash_name } from "./song_image_couplets_hash_name.mjs";
import { text_combine } from "./text_combine.mjs";
import { web_assets_song_path } from "./web_assets_song_path.mjs";
export function song_image_kept_asset_path(n) {
  "$plain n";
  "Where one couplet's chosen picture sits under the assets folder, which is also where a browser fetches it from.";
  "IT IS NAMED BY THE COUPLET AND NEVER BY WHICH ATTEMPT WAS CHOSEN. Choosing a different attempt then overwrites one file instead of publishing a second one, so the address a reader already has goes on working and the repo carries one copy of each picture rather than one per time anybody changed their mind. The attempt number stays where it belongs, in the folder of everything ever drawn.";
  "The couplet is asked through the same key the drawing goes through, so a repeated line that was given an emblem of its own is published under its own name and one that was not shares the earlier couplet's file rather than a second copy of it.";
  arguments_assert(arguments, 1);
  let key = song_image_couplet_key(n);
  let song_name = song_image_couplets_hash_name();
  let left = String(key);
  let img_name = text_combine(left, ".png");
  let path = web_assets_song_path(song_name, img_name);
  return path;
}
