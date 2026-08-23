import { song_image_kept_asset_path } from "./song_image_kept_asset_path.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplet_kept } from "./song_image_couplet_kept.mjs";
import { equal } from "./equal.mjs";
export function song_image_kept_url(n) {
  "$plain n";
  "The address a reader's browser fetches a couplet's picture from, or the empty text when no picture has been settled on.";
  "THE ONE PLACE THE HOSTING ANSWER GOES, and it is answered now: storage, under the folder everything a browser fetches lives in. Before this it named the local server that hands out the whole folder the repos sit in, which was enough to read the page on this network and enough for nobody else. Nothing above here had to change, which is what the one place was for.";
  "IT NAMES NEITHER THE FOLDER OF ATTEMPTS NOR WHICH ATTEMPT WAS CHOSEN. Every attempt ever drawn stays out of the repo and off the network; the one settled on is copied under the assets folder, named after the couplet, and uploaded. So choosing differently changes what is behind an address rather than which address it is, and a reader holding an old link is not the one who pays for a change of mind.";
  "The couplet is asked for its picture through the same key the drawing goes through, so a repeated line that was given an emblem of its own shows that emblem and not the one belonging to the line it repeats.";
  "IT STILL ASKS WHETHER AN ATTEMPT WAS SETTLED ON, and answers with nothing when none was, even though the address it would build no longer holds the attempt number. Otherwise it would hand back a perfectly well-formed address for a picture that was never copied and never uploaded, and the page would show a broken picture where it currently shows none.";
  arguments_assert(arguments, 1);
  let kept = song_image_couplet_kept(n);
  let unchosen = equal(kept, 0);
  if (unchosen) {
    let r = "";
    return r;
  }
  let asset_path = song_image_kept_asset_path(n);
  let url = web_assets_url(asset_path);
  return url;
}
