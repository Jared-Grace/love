export async function folders_function_named_orphaned_wait() {
  arguments_assert(arguments, 0);
  "Move every folder of stored data left behind under a dead name into the place where things wait for somebody to decide about them.";
  "The gate on those folders can be cleared two ways and only one of them is available to whoever meets it. Moving the data onto the live name is right when a rename walked away from it, and needs somebody who knows which live name that was; deleting it is right when nothing was ever reading it, and needs somebody who knows nobody was. A Claude finding one usually knows neither, and the honest third answer is that it should probably go and somebody who is sure should be the one to make it go.";
  "It asks for its own set rather than being handed one, so it cannot drift from what is actually left behind, and it can be run again after somebody has looked without anybody working out what has already moved.";
  "The date it arrived is written into the path here and nowhere else, which is what lets how long it has waited be read rather than believed.";
  let spellings = await folders_function_named_orphaned();
  let root = folder_waiting_to_be_deleted_root();
  let today = date_today_iso();
  let waiting = [];
  for (let spelled of spellings) {
    let before = await folders_function_named_orphaned_spelled_path(spelled);
    let unknown = null_is(before);
    if (unknown) {
      continue;
    }
    let after = path_join([root, today, spelled]);
    let moved = await folder_moved_ensure(before, after);
    list_add(waiting, moved);
  }
  let r = {
    waiting: list_size(waiting),
    moved: waiting,
  };
  return r;
}
