import { arguments_assert } from "./arguments_assert.mjs";
import { list_new } from "./list_new.mjs";
export function app_music_song_pictures_new() {
  "The rows a song's drawings sit in, gathered as they are made, together with whether the reader currently wants to see them and whether they have already been fetched.";
  "IT HOLDS ROWS AND NOT DRAWINGS, because a drawing and the passages it was drawn from are shown and hidden together - the passages are the drawing's own, and a caret captioned the first picture with no picture beside it is worse than nothing.";
  "IT EXISTS BECAUSE A BUTTON AT THE TOP HAS TO REACH A DRAWING FURTHER DOWN. The page draws a couplet at a time and each couplet makes its own row, so at the moment the buttons are made none of them exist yet - the buttons cannot hold a list of what to hide, they can only hold the thing the rows will later be put into.";
  "IT ALSO CARRIES THE ANSWER FORWARD. A reader who hides the pictures and then opens another song, or another verse that had not been drawn yet, should not have to press hide again; the row asks this what the reader last said and arrives that way.";
  "WHETHER THEY HAVE BEEN FETCHED IS A THIRD THING AND NOT THE SAME AS WHETHER THEY ARE SHOWN. A reader may hide pictures already on the device and show them again a moment later, and the second showing owes nobody a second download.";
  "THE PAGE OPENS WITH THEM OFF, AND THAT IS THE WHOLE OF WHAT MAKES THE BUTTON ABOVE THEM AN OFFER. A drawing on the page fetches itself the moment the reader scrolls near it, so opening with them on does not offer the download - it takes it, a couple of megabytes of it, from somebody who may be paying by the megabyte and was never asked. It was on, and it was reported as a fault by the first reader to open the song on a phone: the pictures arrived without anybody pressing anything. Nothing in the button was wrong; the answer it existed to ask for had already been given on the reader's behalf.";
  "OFF COSTS THE READER WHO WANTED THEM ONE PRESS ON EVERY OPENING, and that is the right way round of the two. A press spends a moment of somebody who has already decided they want the pictures; the other way spends the data of somebody who has not decided anything, and only one of those two can be given back.";
  arguments_assert(arguments, 0);
  let r = {
    rows: list_new(),
    hidden: true,
    warmed: false,
  };
  return r;
}
