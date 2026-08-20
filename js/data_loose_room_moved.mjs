import { data_loose_rooms } from "./data_loose_rooms.mjs";
import { list_first_is } from "./list_first_is.mjs";
import { equal_not } from "./equal_not.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { data_loose_paths_named } from "./data_loose_paths_named.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { data_file_room_move } from "./data_file_room_move.mjs";
import { not } from "./not.mjs";
export async function data_loose_room_moved() {
  "Move each file still loose in the data folder into the room it belongs to, one commit each, and name the ones nobody has said a room for.";
  "Which room a file belongs in is a judgment, and it is asked for by name rather than written down here. This is about doing the moving; where each file goes is the other question, and it is easier to find and to disagree with standing under its own name.";
  "What is still loose is asked of the repo rather than written down beside the rooms, so the two cannot drift. A file already moved falls out of the asking by itself, which is what makes running this again after an interruption do only what is left.";
  "A loose file with no room named for it is handed back rather than passed over. Passing it over would let this finish clean while leaving the folder exactly as unfinished as before, and a run that reports success on work it did not do is worse than one that fails.";
  "One the mover will not touch is handed back too, and does not stop the rest. The mover refuses a function that builds its address out of parts, and refusing is the right answer there - but a refusal that ended the run left every file after it untouched for no reason of its own. Why one was refused is not carried here, because the mover says it plainly: ask it for that one name on its own and read what it says.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let rooms = data_loose_rooms();
  let loose = await data_loose_paths_named();
  let repo = folder_repo_love();
  let moved = [];
  let unroomed = [];
  let absent = [];
  let refused = [];
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
      let same = list_first_is(entry, path_fn_name);
      if (same) {
        room = list_last(entry);
      }
    }
    let known = equal_not(room, "");
    if (not(known)) {
      unroomed.push(pair);
      continue;
    }
    let args = [path_fn_name, room];
    async function lambda() {
      await function_call_commit(data_file_room_move, args);
      return true;
    }
    let done = await catch_null_async(lambda);
    if (not(done)) {
      refused.push(pair);
      continue;
    }
    moved.push([path_fn_name, room]);
  }
  let r = {
    moved,
    unroomed,
    absent,
    refused,
  };
  return r;
}
