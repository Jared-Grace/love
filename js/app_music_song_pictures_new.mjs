import { arguments_assert } from "./arguments_assert.mjs";
import { list_new } from "./list_new.mjs";
export function app_music_song_pictures_new() {
  "The drawings on one song's page, gathered as they are made, together with whether the reader currently wants to see them.";
  "IT EXISTS BECAUSE A BUTTON AT THE TOP HAS TO REACH A DRAWING FURTHER DOWN. The page draws a couplet at a time and each couplet makes its own drawing, so at the moment the buttons are made none of them exist yet - the buttons cannot hold a list of what to hide, they can only hold the thing the drawings will later be put into.";
  "IT ALSO CARRIES THE ANSWER FORWARD. A reader who hides the pictures and then opens another song, or another verse that had not been drawn yet, should not have to press hide again; the drawing asks this what the reader last said and arrives that way.";
  arguments_assert(arguments, 0);
  let r = {
    items: list_new(),
    hidden: false,
  };
  return r;
}
