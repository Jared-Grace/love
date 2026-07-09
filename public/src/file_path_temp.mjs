import { random } from "../../../love/public/src/random.mjs";
export function file_path_temp(file_path) {
  let suffix = random();
  let temp_path = `${file_path}.tmp.${process.pid}.${suffix}`;
  return temp_path;
}
