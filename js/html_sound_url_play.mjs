import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function html_sound_url_play(url) {
  "$plain url";
  "Plays one sound file, now, from wherever it sits on the web.";
  "★ IT IS QUIET ABOUT A SOUND THAT WILL NOT PLAY, AND THAT IS THE RIGHT ANSWER HERE RATHER THAN A LAZY ONE. The two ways this fails are a recording that has not been made yet and a phone that has decided not to play sound; neither is anything the reader can act on, and neither should stop the page they are reading. What they see is a word that did not speak, which is the same thing they would see from a complaint they cannot read.";
  "Nothing is kept between plays. A sound this small arrives in one go, and the phone's own store hands the same file back the second time it is asked for, so holding one open here would only be a way of getting it wrong.";
  arguments_assert(arguments, 1);
  let audio = new Audio(url);
  async function lambda() {
    await audio.play();
  }
  await catch_null_async(lambda);
  return audio;
}
