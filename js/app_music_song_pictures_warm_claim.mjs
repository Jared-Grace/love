import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
export function app_music_song_pictures_warm_claim(pictures) {
  "Ask whether the pictures still need fetching, and say so once: the first caller is told yes and every caller after it is told no.";
  "DECIDING AND DOING ARE SPLIT BECAUSE THE BUTTONS HAVE TO KNOW BEFORE THE FETCH FINISHES. The show button switches itself off the moment there is nothing left for it to do, and the fetch takes a minute on a slow connection - so if the answer were only settled inside the fetch, the button would stay lit for the whole of it, and a reader pressing it again would watch nothing happen. Asked here, the answer is already true when the buttons look.";
  "IT IS ASKED AND ANSWERED IN ONE GO ON PURPOSE. A caller that looked first and marked it afterwards would leave a gap between the two, and two presses landing in that gap would both be told yes and both start the same fetch.";
  arguments_assert(arguments, 1);
  let unwarmed = not(pictures.warmed);
  pictures.warmed = true;
  return unwarmed;
}
