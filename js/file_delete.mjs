export async function file_delete(file_path) {
  let fs = await import("fs");
  await fs.promises.unlink(file_path);
}
