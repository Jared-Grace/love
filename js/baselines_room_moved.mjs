import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { text_split_last } from "./text_split_last.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { baseline_paths_names } from "./baseline_paths_names.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
import { function_run } from "./function_run.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { data_file_room_move } from "./data_file_room_move.mjs";
export async function baselines_room_moved() {
  "Move every ratchet record the data folder holds loose into the baselines room, one commit each, and say which ones moved and which were already there.";
  "Which files these are is worked out rather than written down. Every ratchet already names where it is kept in a function called after itself, and the sweep that gathers those names is the same one the writers sweep uses - so a ratchet added tomorrow is carried along by this without anybody remembering to add it, and a list typed here could disagree with the repo the day it was typed.";
  "Each file is its own change and so gets its own commit, named after the mover and the two words it was given. Many hands edit this folder at once, and a run that committed once at the end would hand the whole batch to whichever sweep reached it first, under a bare word saying nothing about what happened.";
  "Anything already in the room is passed over rather than treated as a failure, so this can be run again after an interruption and does only what is left.";
  "Where the room is comes from the one function that says so, and the word for it is taken off the end of that answer rather than written out again here. This was the last place in the repo still spelling the room, and it is the one a sweep could never have found: the other fifty wrote the whole address out as one word, while this built it from a word and a join, so nothing looking for the address ever saw it. A room that moved would have left this pointing at where the room used to be, and the only sign would have been every record being moved a second time into a room that was no longer anybody's.";
  "That the room is a room of the given folder is checked rather than assumed, because the mover is told a word and joins it under given itself. If the room ever sat somewhere else, the word alone would still name something under given, and the file would be moved to an address the room is not at. So the two are required to agree here, where saying so costs one line, instead of being found out by a file that has gone missing.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let path_names = await baseline_paths_names();
  let given = data_given_folder();
  let inside = data_given_baselines_folder();
  let room = text_split_last(inside, "/");
  let right = path_join([given, room]);
  let under_given = equal(inside, right);
  assert_json(under_given, {
    hint: "the baselines room is no longer a room of the given folder, so the mover would put each record at an address the room is not at - either move the room back under given, or teach the mover to take a whole address rather than a word",
    inside,
    given,
    room,
  });
  let moved = [];
  let already = [];
  for (let path_fn_name of path_names) {
    let spelled = await function_run(path_fn_name, []);
    let there = text_starts_with(spelled, inside);
    if (there) {
      already.push(path_fn_name);
      continue;
    }
    let args = [path_fn_name, room];
    await function_call_commit(data_file_room_move, args);
    moved.push(path_fn_name);
  }
  let r = {
    moved,
    already,
  };
  return r;
}
