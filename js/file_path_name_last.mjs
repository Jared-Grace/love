import { subtract } from "./subtract.mjs";
export function file_path_name_last(file_path) {
  "the last part of a file path, which is the name of the file itself with whatever folders led to it dropped";
  "it splits on the forward slash only, so it answers for the paths this repo writes and reads rather than for every shape a path can take on every machine";
  let parts = file_path.split("/");
  let last = parts[subtract(parts.length, 1)];
  return last;
}
