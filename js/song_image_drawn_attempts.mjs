import { subtract } from "./subtract.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { song_image_drawn_folder } from "./song_image_drawn_folder.mjs";
export async function song_image_drawn_attempts(number) {
  "the numbers of the attempts already drawn for one couplet, in the order they were drawn";
  "the folder is the tally, and there is deliberately no other one. A count kept in a file beside the pictures can disagree with the pictures - a draw that failed after the count went up leaves a gap, a picture copied in by hand leaves a picture nobody counted - and the disagreement is silent both ways. Counting the files cannot be wrong about the files.";
  "a couplet nobody has drawn yet answers with an empty list rather than refusing, because that is the ordinary state of thirty-two couplets at the start and not a mistake to report";
  let folder = song_image_drawn_folder(number);
  let names = await folder_read_files_exists_ensure(folder);
  function name_is_picture(name) {
    let b = text_ends_with(name, ".png");
    return b;
  }
  let pictures = names.filter(name_is_picture);
  function name_to_number(name) {
    let difference = subtract(name.length, ".png".length);
    let text = name.slice(0, difference);
    let n = Number(text);
    return n;
  }
  let numbers = list_map(pictures, name_to_number);
  list_sort_number(numbers);
  return numbers;
}
