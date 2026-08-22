import { subtract } from "./subtract.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
export async function folder_attempts_numbered(folder, extension) {
  "$plain extension";
  "The numbers of the files already saved in one folder as numbered attempts, in order.";
  "THE FOLDER IS THE TALLY, and there is deliberately no other one. A count kept in a file beside the attempts can disagree with the attempts - a write that failed after the count went up leaves a gap, a file copied in by hand leaves one nobody counted - and the disagreement is silent both ways. Counting the files cannot be wrong about the files.";
  "A FOLDER NOBODY HAS WRITTEN TO ANSWERS WITH AN EMPTY LIST rather than refusing, because that is the ordinary state of everything before the first attempt and not a mistake to report.";
  "IT TAKES THE FOLDER AND NOT WHAT THE FOLDER IS FOR, which is what lets one counting serve every kind of attempt. What differs between a hymn couplet's pictures and a taught word's is where the folder is, and that is worked out by whoever knows.";
  "ANYTHING NOT NAMED AS A NUMBER AND THE EXTENSION IS PASSED OVER, so the wording written down beside a picture, or a note left by a person, does not become an attempt that was never drawn.";
  let names = await folder_read_files_exists_ensure(folder);
  function name_is_attempt(name) {
    let b = text_ends_with(name, extension);
    return b;
  }
  let attempts = names.filter(name_is_attempt);
  function name_to_number(name) {
    let difference = subtract(name.length, extension.length);
    let text = name.slice(0, difference);
    let n = Number(text);
    return n;
  }
  let numbers = list_map(attempts, name_to_number);
  list_sort_number(numbers);
  return numbers;
}
