import { arguments_assert } from "./arguments_assert.mjs";
import { list_new } from "./list_new.mjs";
export function app_music_song_pictures_new() {
  "The rows a song's drawings sit in, gathered as they are made, together with whether the reader currently wants to see them and whether they have already been fetched.";
  "IT HOLDS ROWS AND NOT DRAWINGS, because a drawing and the passages it was drawn from are shown and hidden together - the passages are the drawing's own, and a caret captioned the first picture with no picture beside it is worse than nothing.";
  "IT EXISTS BECAUSE A BUTTON AT THE TOP HAS TO REACH A DRAWING FURTHER DOWN. The page draws a couplet at a time and each couplet makes its own row, so at the moment the buttons are made none of them exist yet - the buttons cannot hold a list of what to hide, they can only hold the thing the rows will later be put into.";
  "IT ALSO CARRIES THE ANSWER FORWARD. A reader who hides the pictures and then opens another song, or another verse that had not been drawn yet, should not have to press hide again; the row asks this what the reader last said and arrives that way.";
  "WHETHER THEY HAVE BEEN FETCHED IS A THIRD THING AND NOT THE SAME AS WHETHER THEY ARE SHOWN. A reader may hide pictures already on the device and show them again a moment later, and the second showing owes nobody a second download.";
  arguments_assert(arguments, 0);
  let r = {
    rows: list_new(),
    hidden: false,
    warmed: false,
  };
  return r;
}
