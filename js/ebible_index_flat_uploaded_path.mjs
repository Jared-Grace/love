export function ebible_index_flat_uploaded_path() {
  "Where the record of which bibles have a flat index of their own is kept.";
  let folder = findings_folder();
  let path = path_join([folder, "ebible_index_flat_uploaded.json"]);
  return path;
}
