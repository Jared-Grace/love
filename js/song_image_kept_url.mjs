import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplet_kept } from "./song_image_couplet_kept.mjs";
import { song_image_drawn_url } from "./song_image_drawn_url.mjs";
import { equal } from "./equal.mjs";
export function song_image_kept_url(n) {
  "$plain n";
  "The address a reader's browser fetches a couplet's picture from, or the empty text when no picture has been settled on.";
  "THE ONE PLACE THE HOSTING ANSWER GOES. The pictures are deliberately kept out of git, which is why they are reachable today only through the local server that hands out the whole folder the repos sit in. That is enough to read the page on this network and not enough for anybody else, so somewhere they have to be put where a stranger's browser can reach them - and when that is decided this is the only function that changes.";
  "The couplet is asked for its picture through the same key the drawing goes through, so a repeated line that was given an emblem of its own shows that emblem and not the one belonging to the line it repeats.";
  arguments_assert(arguments, 1);
  let kept = song_image_couplet_kept(n);
  let unchosen = equal(kept, 0);
  if (unchosen) {
    let r = "";
    return r;
  }
  let key = song_image_couplet_key(n);
  let url = song_image_drawn_url(key, kept);
  return url;
}
