import { error } from "./error.mjs";

export async function file_copy(file_path_old, file_path_new) {
  if (await file_exists(file_path_new)) {
    error();
  }
  let fs = await import("fs");
  await fs.promises.copyFile(file_path_old, file_path_new);
}
