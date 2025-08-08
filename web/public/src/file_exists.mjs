export async function file_exists() {
  let fs = await import("fs");
  let { access } = fs.promises;
  let { constants } = fs;
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
