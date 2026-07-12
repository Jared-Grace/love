export async function folder_read_async(path_folder) {
  let fs = await import("fs/promises");
  let path = await import("path");
  let entries = await fs.readdir(path_folder, {
    withFileTypes: true,
  });
  function lambda(entry) {
    let v = entry.isFile();
    return v;
  }
  function lambda2(entry) {
    let v2 = entry.name;
    return v2;
  }
  let files = entries.filter(lambda).map(lambda2);
  return files;
}
