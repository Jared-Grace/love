export async function file_read(file_path) {
  let fs = await import("fs");
  return await fs.promises.readFile(file_path, "utf-8");
}
