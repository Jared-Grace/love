export async function file_read_buffer(file_path) {
  let fs = await import("fs");
  let v = await fs.promises.readFile(file_path, "utf-8");
  return v;
}
