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
  "Redraws every couplet's chosen picture in a few colours and writes it into the assets folder, which is where the upload reads from and where a reader's browser ends up fetching it.";
  "IT FINDS ITS OWN SET rather than being handed one, so it cannot be run against a stale list. Every couplet is asked which attempt it settled on, and the ones that have settled on none are simply not written - which is also what makes it safe to run at any moment, part way through choosing.";
  "IT REDRAWS RATHER THAN COPIES, and the reason is a phone on a house network. Copied whole, the set was thirteen megabytes and the person it was drawn for watched the pictures paint downwards a line at a time. Cut to the colours they are actually made of, the same set is under two, and the panes come out flatter than they went in. The saving is worth naming: seven times, on pictures nobody can tell apart from the originals.";
  "THE CUT HAPPENS HERE AND NOT WHERE THE PICTURES ARE DRAWN, so every attempt ever drawn is kept exactly as it arrived. Only what is published is reduced, which means a different attempt can be chosen later and cut afresh, and nothing that was drawn is ever thrown away to make a page load faster.";
  "WRITING IS NOT PUBLISHING. This only puts the file where the uploader will find it; nothing a reader can reach changes until the assets are uploaded. The two are apart on purpose, because this half is cheap and reversible and the upload is neither.";
  "THE ATTEMPTS STAY WHERE THEY ARE, all of them, kept out of the repo's history. Only the chosen ones are written in, because those are the ones a cut has actually used - which is the line the folder of attempts was drawn along in the first place.";
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
    let colors_most = song_image_palette_colors();
    await ffmpeg_palette_write(drawn, colors_most, destination);
    list_add(published, asset_path);
  }
  let result = {
    published,
    unchosen,
  };
  return result;
}
