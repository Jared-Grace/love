import { assert_json } from "./assert_json.mjs";
import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { command_line } from "./command_line.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function file_open_editor(filePath) {
  "Opens a file in the editor, and no path handed in can make the editor do anything but open it.";
  "THE PROOF THAT NO ARGUMENT ESCAPES. The line is split by the runner's own rule, not by a shell: it refuses every shell operator outright, and the only character that changes how it splits is the double quote. So a path with no double quote in it stays one argument between the two quotes written here, spaces and all. A path starting with a slash cannot be read as an option, because every option starts with a dash. Together that leaves the editor exactly one thing to do with the argument - open it. Before the two checks a path holding a double quote closed the quoting and could hand the editor flags of its own, such as one that installs an extension.";
  "A path given relative to the working folder is made whole first rather than refused, so every caller that hands one in keeps working.";
  let b = text_includes(filePath, '"');
  let b2 = not(b);
  assert_json(b2, {
    hint: "a path holding a double quote would end the quoting and hand the editor extra options, so it is not opened",
    filePath,
  });
  let whole = await path_resolve(filePath);
  let b3 = text_starts_with(whole, "/");
  assert_json(b3, {
    hint: "only a whole path from the root is opened, so nothing handed in can be read as an option",
    whole,
  });
  let command = text_combine_multiple(['code "', whole, '"']);
  await command_line(command);
}
