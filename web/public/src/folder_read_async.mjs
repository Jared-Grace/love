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
  const files = entries.filter(lambda);
  return files;
}
