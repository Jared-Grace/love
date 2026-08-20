import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_drawn_attempts } from "./song_image_drawn_attempts.mjs";
export async function song_image_drawn_attempts_known_write() {
  ("count what is actually in the picture folders and write ",
    fn_name("song_image_drawn_attempts_known"),
    " from it, so the table the picker reads says what the disk says");
  ("it asks every couplet rather than only the one just drawn, because that is what makes it safe to run at any moment. A picture deleted by hand, a folder copied in, a draw that died halfway - all of them are answered the same way, by looking, and none of them needs anybody to have remembered to say so.");
  ("couplets with nothing drawn are left out rather than written as empty lists, because a table of thirty-two empty entries says exactly what no entry says and is longer to read");
  let couplets = song_image_couplets();
  let known = {};
  for (let couplet of couplets) {
    let attempts = await song_image_drawn_attempts(couplet.n);
    if (list_empty_not_is(attempts)) {
      known[couplet.n] = attempts;
    }
  }
  let json = json_format_to(known);
  let source =
    text_combine_multiple([
      "export function ",
      fn_name("song_image_drawn_attempts_known"),
      "() {\n",
    ]) +
    text_combine_multiple([
      '  "which attempts exist for each couplet, as a plain table written out by ',
      fn_name("song_image_drawn_attempts_known_write"),
      ' and never edited by hand";\n',
    ]) +
    '  "the folder is the truth about what has been drawn, and this is a copy of it for the one reader that cannot count files: the picker runs in a browser, and every part of it decides what to draw in a single pass with nothing to wait for. A page that had to ask the disk mid-render would have to become asynchronous all the way up for a fact that only changes when somebody runs a draw.";\n' +
    '  "it is generated rather than kept by hand for the usual reason - a hand-kept list disagrees with the folder silently, and the disagreement shows up as a picture that will not load rather than as an error";\n' +
    "  let known = " +
    json +
    ";\n" +
    "  return known;\n" +
    "}\n";
  let folder = folder_repo_love();
  let path = path_join([
    folder,
    "js",
    text_combine_multiple([fn_name("song_image_drawn_attempts_known"), ".mjs"]),
  ]);
  await file_overwrite(path, source);
  return known;
}
