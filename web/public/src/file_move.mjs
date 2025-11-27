export async function file_move(old_path, new_path) {
  const fs = await import("fs");
  await fs.promises.rename(old_path, new_path);
}
