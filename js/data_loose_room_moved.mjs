import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { fn_name } from "./fn_name.mjs";
import { data_loose_paths_named } from "./data_loose_paths_named.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { data_file_room_move } from "./data_file_room_move.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function data_loose_room_moved() {
  "Move each file still loose in the data folder into the room it belongs to, one commit each, and name the ones nobody has said a room for.";
  "Which room a file belongs in is a judgment and so is written down here. Nothing in the shape of a file says whether it is a setting somebody may change or a word frozen because it has already left this repo; only somebody who knows why it was written can say, and a rule guessing from the name would put them in the same place and be wrong about half of them.";
  "What is still loose is asked of the repo rather than written down beside the rooms, so the two cannot drift. A file already moved falls out of the asking by itself, which is what makes running this again after an interruption do only what is left.";
  "A loose file with no room named for it is handed back rather than passed over. Passing it over would let this finish clean while leaving the folder exactly as unfinished as before, and a run that reports success on work it did not do is worse than one that fails.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let f_name = fn_name("commands_only_path");
  let f_name2 = fn_name("data_aliases_path");
  let f_name3 = fn_name("literals_frozen_path");
  let f_name4 = fn_name("storage_local_key_names_path");
  let f_name5 = fn_name("storage_local_key_words_path");
  let rooms = [
    [f_name, "settings"],
    [f_name2, "settings"],
    [f_name3, "frozen"],
    [f_name4, "frozen"],
    [f_name5, "frozen"],
  ];
  let loose = await data_loose_paths_named();
  let repo = folder_repo_love();
  let moved = [];
  let unroomed = [];
  let absent = [];
  for (let pair of loose) {
    let path_fn_name = list_first(pair);
    let spelled = list_last(pair);
    let full = path_join([repo, spelled]);
    let there = await file_exists(full);
    if (not(there)) {
      absent.push(pair);
      continue;
    }
    let room = "";
    for (let entry of rooms) {
      let named = list_first(entry);
      let same = equal(named, path_fn_name);
      if (same) {
        room = list_last(entry);
      }
    }
    let b = equal(room, "");
    let known = not(b);
    if (not(known)) {
      unroomed.push(pair);
      continue;
    }
    let args = [path_fn_name, room];
    await function_call_commit(data_file_room_move, args);
    moved.push([path_fn_name, room]);
  }
  let r = {
    moved,
    unroomed,
    absent,
  };
  return r;
}
