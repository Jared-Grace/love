import { log } from "./log.mjs";

export async function file_exists(file_path) {
  let fs = await import("fs");
  let { access } = fs.promises;
  let { constants } = fs;
  try {
    await access(file_path, constants.F_OK);
    return true;
  } catch (e){
    log(e)
    return false;
  }
}
