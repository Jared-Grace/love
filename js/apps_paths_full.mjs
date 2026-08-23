export async function apps_paths_full() {
  "Every app page there is, named by the whole way to it on disk rather than by the last part of that way.";
  "the twin that answers with bare file names is the one to ask when the name is all that is wanted, and it is the older and more used of the two. This one exists because a name alone cannot be opened: two repos each hold a public folder, so the name says which page and nothing at all about where it is.";
  let fop = folder_public();
  let result = await repos_paths_map_unordered_combine_squash(
    fop,
    folder_read_paths_async,
  );
  let sufix = html_extension();
  let aps = list_filter_ends_with(result, sufix);
  return aps;
}
