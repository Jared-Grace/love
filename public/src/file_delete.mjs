import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function file_delete(file_path) {
  if (browser_is()) {
  }
  let fs = await import("fs");
  await fs.promises.unlink(file_path);
}
