import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_song_verses_get } from "./app_music_song_verses_get.mjs";
import { promise_start_unawait } from "./promise_start_unawait.mjs";
export function app_music_song_verses_start(song) {
  "$plain song";
  "Sets this song's built-ahead scripture travelling and hands back the promise of it, without waiting.";
  "IT IS CALLED BEFORE THE SONG IS DRAWN AND WAITED FOR AFTER. Which passages the song rests on is fixed before anybody opens the page, so nothing about the drawing is needed in order to ask - and asking at the end meant the whole drawing sat between the page arriving and the request going out. Started here, the file is on its way while the words are being written onto the screen. The drawing is quick, so on a good connection this is worth tens of milliseconds and no more; what makes it worth doing is that the ask no longer sits behind however much the drawing grows to be.";
  "IT IS HONESTLY A SMALL SAVING AND IS WRITTEN DOWN AS ONE. It was first put in to cure a page that took sixteen seconds to reach its scripture, and that measurement turned out to be an artefact of the browser it was taken in rather than anything this code did. The change survives because it is right on its own terms, not because of the number that prompted it - and the number is recorded here as wrong so that nobody reads a small saving as a proven large one.";
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
