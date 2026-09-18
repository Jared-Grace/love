import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_picture_credit_line } from "./lyric_video_picture_credit_line.mjs";
import { add } from "./add.mjs";
export function lyric_video_pictures_credit_line(paintings, drawn) {
  "The one sentence that says where the pictures behind the words came from, for a video that may hold paintings people painted, pictures an image model drew, or both.";
  "★ IT IS WRITTEN FROM THE COUNTS RATHER THAN CHOSEN BY HAND, so it cannot go on saying what was true of the video before a picture in it was swapped. A swap is the ordinary way one of these videos is improved - a drawing is replaced by a painting the moment a good one is found - and a disclosure a person has to remember to rewrite afterwards is a disclosure that will one day be false.";
  "★ A VIDEO WITH NO PAINTING IN IT IS HANDED STRAIGHT TO THE OLDER SENTENCE, which says which model drew the pictures and that no painting by a person was used. That claim is true of exactly that case and false of every other one, which is why it is reached through a count here instead of being written under every video.";
  "★ WHERE BOTH KINDS ARE IN ONE VIDEO, BOTH NUMBERS ARE SAID. Naming only the paintings would leave a watcher thinking a person painted all of it, and naming only the model would throw away the painters' names, which are the part somebody may want to go and look up.";
  "The painters are not named here. There may be twenty of them, and this sentence has to be short enough to sit at the top of a description where it cannot be cut off; the list of them goes at the foot, where length costs nothing.";
  arguments_assert(arguments, 2);
  let none = equal(paintings, 0);
  if (none) {
    let drawn_line = lyric_video_picture_credit_line();
    return drawn_line;
  }
  let all = equal(drawn, 0);
  let total = add(paintings, drawn);
  if (all) {
    let paintings_line =
      "All " +
      total +
      " pictures in this video are public domain paintings. Each painter and painting is named at the end of this description.";
    return paintings_line;
  }
  let line =
    paintings +
    " of the " +
    total +
    " pictures in this video are public domain paintings, named at the end of this description. The other " +
    drawn +
    " were made by an image model - not painted by a person, and not photographed.";
  return line;
}
