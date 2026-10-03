import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplets_hash_name } from "./song_image_couplets_hash_name.mjs";
import { web_assets_song_path } from "./web_assets_song_path.mjs";
export function song_image_kept_large_asset_path(n) {
  "$plain n";
  "Where the large copy of one couplet's chosen picture sits under the assets folder - the one that opens when a reader taps the small one - which is also where a browser fetches it from.";
  "IT SITS IN A FOLDER OF ITS OWN BESIDE THE SMALL ONES, under the same name, so the two copies of one picture are told apart by where they are and never by a second spelling of the couplet's name.";
  arguments_assert(arguments, 1);
  let key = song_image_couplet_key(n);
  let song_name = song_image_couplets_hash_name();
  let img_name = "large/" + String(key) + ".png";
  let path = web_assets_song_path(song_name, img_name);
  return path;
}
