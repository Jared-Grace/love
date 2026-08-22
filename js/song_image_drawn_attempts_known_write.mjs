import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_drawn_attempts } from "./song_image_drawn_attempts.mjs";
import { function_constant_json_write } from "./function_constant_json_write.mjs";
export async function song_image_drawn_attempts_known_write() {
  ("count what is actually in the picture folders and write ",
    fn_name("song_image_drawn_attempts_known"),
    " from it, so the table the picker reads says what the disk says");
  ("it asks every couplet rather than only the one just drawn, because that is what makes it safe to run at any moment. A picture deleted by hand, a folder copied in, a draw that died halfway - all of them are answered the same way, by looking, and none of them needs anybody to have remembered to say so.");
  ("couplets with nothing drawn are left out rather than written as empty lists, because a table of thirty-two empty entries says exactly what no entry says and is longer to read");
  ("the file itself is built by ",
    fn_name("function_constant_json_write"),
    " and not here, because the export line and the prose lines and the return are the same for every counted table, and there is a second one of those now. What is left here is the counting, which is the only part that is about couplets.");
  let couplets = song_image_couplets();
  let known = {};
  for (let couplet of couplets) {
    let attempts = await song_image_drawn_attempts(couplet.n);
    if (list_empty_not_is(attempts)) {
      known[couplet.n] = attempts;
    }
  }
  let f_name = fn_name("song_image_drawn_attempts_known");
  let f_name2 = fn_name("song_image_drawn_attempts_known_write");
  let combined = text_combine_multiple([
    "which attempts exist for each couplet, as a plain table written out by ",
    f_name2,
    " and never edited by hand",
  ]);
  let prose = [
    combined,
    "the folder is the truth about what has been drawn, and this is a copy of it for the one reader that cannot count files: the picker runs in a browser, and every part of it decides what to draw in a single pass with nothing to wait for. A page that had to ask the disk mid-render would have to become asynchronous all the way up for a fact that only changes when somebody runs a draw.",
    "it is generated rather than kept by hand for the usual reason - a hand-kept list disagrees with the folder silently, and the disagreement shows up as a picture that will not load rather than as an error",
  ];
  await function_constant_json_write(f_name, prose, known);
  return known;
}
