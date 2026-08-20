export async function findings_from_data_moved() {
  "Move every file named as a finding out of the data folder, one commit each, and say which ones moved and which were already there.";
  "Each file is its own change and so gets its own commit, named after the mover and the two words it was given. Many hands edit this one folder at once, and a run that committed once at the end would hand the whole batch to whichever sweep reached it first, under a bare word that says nothing about what happened.";
  "Anything already out of the data folder is passed over rather than treated as a failure, so this can be run again after an interruption and does only what is left. That is also why the list it reads stays whole: the list says what a finding is, and the disk says what still has to move.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let named = findings_from_data_named();
  let repo = folder_repo_love();
  let data = data_folder();
  let moved = [];
  let already = [];
  for (let pair of named) {
    let name = list_first(pair);
    let path_fn_name = list_last(pair);
    let leaf = text_combine(name, ".json");
    let from = path_join([repo, data, leaf]);
    let there = await file_exists(from);
    if (not(there)) {
      already.push(name);
      continue;
    }
    let args = [name, path_fn_name];
    await function_call_commit(finding_from_data_move, args);
    moved.push(name);
  }
  let r = {
    moved,
    already,
  };
  return r;
}
