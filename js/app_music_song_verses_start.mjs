import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_song_verses_get } from "./app_music_song_verses_get.mjs";
import { promise_start_unawait } from "./promise_start_unawait.mjs";
export function app_music_song_verses_start(song) {
  "$plain song";
  "Sets this song's built-ahead scripture travelling and hands back the promise of it, without waiting.";
  "IT IS CALLED BEFORE THE SONG IS DRAWN AND WAITED FOR AFTER. Drawing a song is quick but it is not free of consequence: it puts thirty-six drawings on the page, and every one of them is a request that goes out ahead of anything asked for later. Asked for after the drawing, the scripture queued behind all of them and landed sixteen seconds in. Asked for here, it is already on its way while the words are being written onto the screen, and the reader waits for whichever of the two is slower rather than for both one after the other.";
  "THE JOB IS HANDED OVER RATHER THAN CALLED PLAINLY, because a call that nothing waits for reads exactly like a forgotten wait, and the auto pass cannot tell those apart - left plain it would write the wait in, and then make this function wait, and walk out to the two pages that call it and make them wait too. The pages would then stop for the scripture before drawing a word, which is the delay this exists to remove, and nothing would go red.";
  "IT IS A FUNCTION OF ITS OWN RATHER THAN THE SAME FOUR LINES ON EACH PAGE. Both songs are drawn the same way - everything first, passages after - so both want this, and the shape that keeps it safe from the auto pass is subtle enough that a second copy is a second chance to write it plainly by mistake.";
  arguments_assert(arguments, 1);
  async function app_music_song_verses_starting() {
    let got = await app_music_song_verses_get(song);
    return got;
  }
  let r = promise_start_unawait(app_music_song_verses_starting);
  return r;
}
