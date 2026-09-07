import { arguments_assert } from "./arguments_assert.mjs";
import { html_input_file_accept } from "./html_input_file_accept.mjs";
export function html_input_file_media(parent, on_file) {
  "$plain parent";
  "$plain on_file";
  "A box for choosing one sound or one video off the machine the page is being read on, which hands the chosen file straight to whoever asked for it.";
  "IT OFFERS BOTH BECAUSE A SCREEN THAT FOLLOWS A SONG DOES NOT CARE WHICH ONE IT IS GIVEN. The seconds are the same seconds whether they come from the sung recording or from the film made out of it, so a reviewer who has not rendered anything yet can still play the song and be walked through the pictures - and a picker that asked for a video would have told them, wrongly, that they had to render first.";
  "NOTHING IS SENT ANYWHERE. A rendered psalm is a few hundred megabytes, so a page that uploaded one before it could be played would put minutes between pressing the button and hearing the first line.";
  arguments_assert(arguments, 2);
  let component = html_input_file_accept(parent, "audio/*,video/*", on_file);
  return component;
}
