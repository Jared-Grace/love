import { folder_attempts_numbered } from "./folder_attempts_numbered.mjs";
import { song_image_drawn_folder } from "./song_image_drawn_folder.mjs";
export async function song_image_drawn_attempts(number) {
  "the numbers of the attempts already drawn for one couplet, in the order they were drawn";
  "the folder is the tally, and there is deliberately no other one. A count kept in a file beside the pictures can disagree with the pictures - a draw that failed after the count went up leaves a gap, a picture copied in by hand leaves a picture nobody counted - and the disagreement is silent both ways. Counting the files cannot be wrong about the files.";
  "a couplet nobody has drawn yet answers with an empty list rather than refusing, because that is the ordinary state of thirty-two couplets at the start and not a mistake to report";
  "THE COUNTING ITSELF IS NOT WRITTEN HERE, because it is the same counting for every kind of numbered attempt and this one only knows where the folder is. It was written here once, and a second kind of picture would have copied all of it to change one line.";
  let folder = song_image_drawn_folder(number);
  let numbers = await folder_attempts_numbered(folder, ".png");
  return numbers;
}
