export async function function_rename_examples_check(
  f_name_before,
  f_name_after,
) {
  "The example corpus spells function names as plain text - the arguments of the command it shows, and the sources it declares before and after - and it names the transform it demonstrates in an import path as well. None of those files is a function, so no sweep over the tree of functions reaches them, and a rename that skips them leaves the corpus naming something that is gone. What the reader sees then is a red corpus check for a reason the rename never mentioned.";
  let paths = await examples_paths();
  async function lambda(f_path) {
    let changed = await file_identifier_replace(
      f_path,
      f_name_before,
      f_name_after,
    );
    return changed;
  }
  let changes = await list_map_unordered_async(paths, lambda);
  return changes;
}
