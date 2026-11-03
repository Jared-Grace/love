import { file_path_deciding_refuse } from "./file_path_deciding_refuse.mjs";
export async function folder_delete(folder_path) {
  await file_path_deciding_refuse(folder_path);
  let fs = await import("fs");
  await fs.promises.rm(folder_path, {
    recursive: true,
    force: true,
  });
}
