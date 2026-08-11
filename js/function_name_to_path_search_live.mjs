export async function function_name_to_path_search_live(f_name) {
  "Looks in every repository here for the file a name would live in, asking the disk each time, and reports whether exactly one holds it, whether several do, and where it was found.";
  "Asking the disk rather than a list made earlier is the whole of what this one is for. Everybody works in the one folder at once, so a file can arrive or leave between two questions, and a caller working in the living folder needs the answer that is true now.";
  "It costs what it sounds like it costs. One question here is one look on disk per repository, so a sweep asking after every function asks nearly thirty-two thousand of them - measured at around two seconds, once per sweep, and there are a hundred and seventy-nine sweeps in the gate. Whoever is reading a folder that cannot change should ask through the caching one instead.";
  let f_path = function_name_to_path_relative(f_name);
  async function lambda(joined) {
    let present = await file_exists(joined);
    let v = {
      exists: present,
      f_path: joined,
    };
    return v;
  }
  let mapped = await repos_paths_names_map_unordered_combine(f_path, lambda);
  function lambda2(m) {
    let exists2 = property_path_get_2(m, "mapped", "exists");
    let ti = true_is(exists2);
    return ti;
  }
  let filtered = list_filter(mapped, lambda2);
  let multiple = list_multiple_is(filtered);
  let exists = list_size_1(filtered);
  let search = {
    f_name,
    exists,
    multiple,
  };
  if (exists) {
    let only = list_single(filtered);
    let only_mapped = property_get(only, "mapped");
    property_from(search, "f_path", only_mapped);
    property_from(search, "repo_name", only);
  }
  return search;
}
