export async function file_executable_make(file_path) {
  "Lets a file be run as a command by whoever owns it, and read and run by everybody else. A script copied into place is only a file until this is done to it, and the failure without it reads as the command not existing at all.";
  let fs = await import("fs");
  await fs.promises.chmod(file_path, 0o755);
}
