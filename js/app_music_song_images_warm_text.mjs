import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_music_song_images_warm_text(size) {
  "$plain size";
  "What the button that fetches a song's pictures all at once says.";
  "IT SAYS WHAT PRESSING IT WILL DO, and it counts the pictures, because how long a reader is agreeing to wait is the whole of what they are deciding. A button offering to load pictures without saying how many is asking somebody on a paid connection to guess.";
  arguments_assert(arguments, 1);
  let said = text_combine_multiple(["Load all ", size, " pictures now"]);
  return said;
}
