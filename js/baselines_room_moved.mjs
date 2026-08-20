export async function baselines_room_moved() {
  "Move every ratchet record the data folder holds loose into the baselines room, one commit each, and say which ones moved and which were already there.";
  "Which files these are is worked out rather than written down. Every ratchet already names where it is kept in a function called after itself, and the sweep that gathers those names is the same one the writers sweep uses - so a ratchet added tomorrow is carried along by this without anybody remembering to add it, and a list typed here could disagree with the repo the day it was typed.";
  "Each file is its own change and so gets its own commit, named after the mover and the two words it was given. Many hands edit this folder at once, and a run that committed once at the end would hand the whole batch to whichever sweep reached it first, under a bare word saying nothing about what happened.";
  "Anything already in the room is passed over rather than treated as a failure, so this can be run again after an interruption and does only what is left.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let path_names = await baseline_paths_names();
  let given = data_given_folder();
  let room = "baselines";
  let inside = path_join([given, room]);
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
