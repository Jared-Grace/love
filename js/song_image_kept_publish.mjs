import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { list_add } from "./list_add.mjs";
import { song_image_couplet_kept } from "./song_image_couplet_kept.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_drawn_path } from "./song_image_drawn_path.mjs";
import { song_image_kept_asset_path } from "./song_image_kept_asset_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
export async function song_image_kept_publish() {
  "Copies every couplet's chosen picture out of the folder of attempts and into the assets folder, which is where the upload reads from and where a reader's browser ends up fetching it.";
  "IT FINDS ITS OWN SET rather than being handed one, so it cannot be run against a stale list. Every couplet is asked which attempt it settled on, and the ones that have settled on none are simply not copied - which is also what makes it safe to run at any moment, part way through choosing.";
  "COPYING IS NOT PUBLISHING. This only puts the file where the uploader will find it; nothing a reader can reach changes until the assets are uploaded. The two are apart on purpose, because the copy is cheap and reversible and the upload is neither.";
  "THE ATTEMPTS STAY WHERE THEY ARE, all of them, kept out of the repo's history. Only the chosen ones are copied in, because those are the ones a cut has actually used - which is the line the folder of attempts was drawn along in the first place.";
  arguments_assert(arguments, 0);
  let couplets = song_image_couplets();
  let published = [];
  let unchosen = [];
  for (let couplet of couplets) {
    let n = couplet.n;
    let kept = song_image_couplet_kept(n);
    let none = equal(kept, 0);
    if (none) {
      list_add(unchosen, n);
      continue;
    }
    let key = song_image_couplet_key(n);
    let drawn = song_image_drawn_path(key, kept);
    let asset_path = song_image_kept_asset_path(n);
    let destination = web_assets_folder_join(asset_path);
    await file_copy_overwrite(drawn, destination);
    list_add(published, asset_path);
  }
  let result = {
    published,
    unchosen,
  };
  return result;
}
