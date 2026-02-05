export async function folder_delete(folder_path) {
  let fs = await import("fs");
  await fs.promises.rm(folder_path, {
    recursive: true,
    force: true,
  });
}
