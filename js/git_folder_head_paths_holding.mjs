import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_size } from "./text_size.mjs";
export async function git_folder_head_paths_holding(folder, words) {
  "$plain folder";
  arguments_assert(arguments, 2);
  ("Which of the files the current commit holds have any of the given words somewhere inside them.");
  ("This is the list a rewrite is proved against. A rewrite that takes words out is allowed to change a file that holds one of them and nothing else, so what has to be known beforehand is which files those are - and it has to be known from the present rather than from what came out, or the proof is reading the answer it is checking.");
  ("The words are looked for as plain runs of letters rather than as whole words, on purpose, and that is what makes this safe to prove against. It finds every file a whole-word sweep could touch and some it will not, so a file that changed and is not here is a real fault, while a file here that did not change is nothing at all. A narrower question asked here would let a real fault through.");
  ("Nothing found is an answer and not a failure. The tool says so by refusing rather than by printing an empty list, so the refusal is caught and read as the empty list it means.");
  let asked = ["grep", "-l", "-F"];
  for (let word of words) {
    list_add_multiple(asked, ["-e", word]);
  }
  list_add(asked, "HEAD");
  async function lambda() {
    let out = await git_folder_run(folder, asked);
    return out;
  }
  let printed = await catch_null_async(lambda);
  let nothing = null_is(printed);
  if (nothing) {
    let r = [];
    return r;
  }
  let paths = [];
  let mark = "HEAD:";
  for (let line of text_split_newline(printed)) {
    let blank = text_empty_is(line);
    if (blank) {
      continue;
    }
    let skip_count = text_size(mark);
    let path = text_skip(line, skip_count);
    list_add(paths, path);
  }
  return paths;
}
