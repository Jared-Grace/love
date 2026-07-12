import { text_combine } from "./text_combine.mjs";
export function py_exe_name() {
  let p = "python.exe";
  p = "./venv/bin/python";
  let n = text_combine(p, " ");
  return n;
}
