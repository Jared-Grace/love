import { folder_user_mounted_assert } from "./folder_user_mounted_assert.mjs";
export async function folder_exists_ensure(dir) {
  "Make a folder if it is not already there, and every folder above it that is missing too.";
  "When that fails it says why in the words of whoever is reading. The drive the human's files are on can be unplugged, and what the system reports then is that permission was denied - which reads as a permissions problem and is not one. The look at the disk happens only after a failure, so nothing is paid for it while it works.";
  let fs = await import("fs");
  try {
    await fs.promises.mkdir(dir, {
      recursive: true,
    });
  } catch (error_caught) {
    await folder_user_mounted_assert(dir);
    throw error_caught;
  }
}
