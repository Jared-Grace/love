export async function examples_paths() {
  "Every file of the example corpus, as a path that can be read and written. The corpus is data rather than functions, so a sweep over the tree of functions never sees these - anything that wants to reach them asks here.";
  let folder = examples_folder();
  let names = await folder_read(folder);
  function mjs_is(name) {
    let ew = text_ends_with(name, ".mjs");
    return ew;
  }
  let mjs = list_filter(names, mjs_is);
  function to_path(name) {
    let joined = path_join([folder, name]);
    return joined;
  }
  let paths = list_map(mjs, to_path);
  return paths;
}
