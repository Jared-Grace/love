import { file_written_add_try } from "./file_written_add_try.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { browser_is } from "./browser_is.mjs";
export async function file_delete(file_path) {
  if (browser_is()) {
    await file_overwrite(file_path, "");
    return;
  }
  let fs = await import("fs");
  await fs.promises.unlink(file_path);
  ("a file taken away is as much a change to commit as one written, and the note a commit reads is a note of changes rather than of writing — without this line the command that removed it could name everything it did except the removal");
  await file_written_add_try(file_path);
}
