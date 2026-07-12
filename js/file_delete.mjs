import { file_overwrite } from "./file_overwrite.mjs";
import { browser_is } from "./browser_is.mjs";
export async function file_delete(file_path) {
  if (browser_is()) {
    await file_overwrite(file_path, "");
    return;
  }
  let fs = await import("fs");
  await fs.promises.unlink(file_path);
}
