import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_kept_url } from "./song_image_kept_url.mjs";
import { equal } from "./equal.mjs";
import { song_image_kept_large_asset_path } from "./song_image_kept_large_asset_path.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
export function song_image_kept_large_url(n) {
  "$plain n";
  "The address a reader's browser fetches the large copy of a couplet's picture from, when they tap the small one; the empty text when no picture has been settled on.";
  "IT ASKS THE SMALL PICTURE'S ADDRESS FIRST, so the two cannot disagree about whether a couplet has a picture at all: a couplet with no small picture is given no large one either.";
  arguments_assert(arguments, 1);
  let small = song_image_kept_url(n);
  if (equal(small, "")) {
    return small;
  }
  let path = song_image_kept_large_asset_path(n);
  let url = web_assets_url(path);
  return url;
}
