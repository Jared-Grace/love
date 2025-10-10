export async function folder_read_async(path_folder) {
  const fs = await import("fs/promises");
  const path = await import("path");
  const entries = await fs.readdir(path_folder, {
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
  const files = entries.filter(lambda).map(lambda2);
  return files;
}
