import { word_picture_note_path } from "./word_picture_note_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { word_picture_wordings } from "./word_picture_wordings.mjs";
import { word_picture_folder } from "./word_picture_folder.mjs";
import { folder_attempts_numbered } from "./folder_attempts_numbered.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_constant_json_write } from "./function_constant_json_write.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function word_pictures_drawn_known_write() {
  ("Count what is actually in the word picture folders and write ",
    fn_name("word_pictures_drawn_known"),
    " from it, so the table the review screen reads says what the disk says.");
  ("IT ASKS EVERY WORD rather than only the one just drawn, which is what makes it safe to run at any moment. A picture deleted by hand, a folder copied in, a draw that died halfway - all of them are answered the same way, by looking, and none of them needs anybody to have remembered to say so.");
  ("WORDS WITH NOTHING DRAWN ARE LEFT OUT rather than written as empty lists, because an entry saying nothing has been drawn says exactly what no entry says and is longer to read.");
  ("EACH ATTEMPT CARRIES THE WORDING THAT MADE IT, read back out of the note written beside it, rather than the word's wording as it stands now. A wording is revised precisely because an attempt came out wrong, so the current wording is the one attempt that has NOT been drawn yet - and a screen printing it under an older picture says the picture was asked for in words that would not have produced it. That is worse than printing nothing, because it is the reading a reviewer would use to decide the wording was fine and the generator was at fault.");
  let wordings = word_picture_wordings();
  let words = object_property_names(wordings);
  let known = {};
  for (let word of words) {
    let folder = word_picture_folder(word);
    let attempts = await folder_attempts_numbered(folder, ".png");
    if (list_empty_not_is(attempts)) {
      let drawn = [];
      for (let attempt of attempts) {
        let note_path = word_picture_note_path(word, attempt);
        let note = await file_read_json(note_path);
        let wording = property_get(note, "wording");
        drawn.push({
          attempt,
          wording,
        });
      }
      known[word] = drawn;
    }
  }
  let f_name = fn_name("word_pictures_drawn_known");
  let f_name2 = fn_name("word_pictures_drawn_known_write");
  let first = text_combine_multiple([
    "Which attempts exist for each taught word, as a plain table written out by ",
    f_name2,
    " and never edited by hand.",
  ]);
  let prose = [
    first,
    "THE FOLDER IS THE TRUTH ABOUT WHAT HAS BEEN DRAWN, and this is a copy of it for the one reader that cannot count files: the review screen runs in a browser and decides what to draw in a single pass with nothing to wait for. A screen that had to ask the disk mid-render would have to become asynchronous all the way up for a fact that only changes when somebody runs a draw.",
    "IT IS GENERATED AND NOT KEPT BY HAND for the usual reason - a hand-kept list disagrees with the folder silently, and the disagreement shows up as a picture that will not load rather than as an error.",
  ];
  await function_constant_json_write(f_name, prose, known);
  return known;
}
