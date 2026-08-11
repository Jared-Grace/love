import { list_size_equal } from "./list_size_equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split_new_line } from "./text_split_new_line.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function commits_function_nested_lift(folder) {
  "$plain folder";
  "Every time a function was moved out of another one to stand on its own, each answered with where it came from, what it was called inside, what it is called now, and the commit just before the move";
  "The history is the only record of what a lift was handed. The lifted function on disk says what it ended up as and never what it was moved out of, so a question about whether the move lost something can only be asked by standing the before and the after next to each other, and the before exists nowhere else";
  "It reads them out of the commit messages, which is possible only because a message here is the command and its real arguments rather than a description of them. Four words in a fixed order is a record, and it is free";
  "The commit given back is the one before the move rather than the move itself, because what the lift reached for is what was there beforehand";
  let lift_marker = fn_name("function_nested_lift");
  let grep = text_combine_multiple(["--grep=", lift_marker]);
  let words = ["log", "--all", "--format=%H %s", grep];
  let text = await git_folder_run(folder, words);
  let lines = text_split_new_line(text);
  let lifts = [];
  for (let line of lines) {
    let parts = text_split_space(line);
    let shaped = list_size_equal(parts, 5);
    if (not(shaped)) {
      continue;
    }
    let left = list_get(parts, 1);
    let named = equal(left, lift_marker);
    if (not(named)) {
      continue;
    }
    let commit = list_get(parts, 0);
    let before = text_combine_multiple([commit, "^"]);
    list_add(lifts, {
      commit,
      before,
      source: list_get(parts, 2),
      nested: list_get(parts, 3),
      lifted: list_get(parts, 4),
    });
  }
  return lifts;
}
