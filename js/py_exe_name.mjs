import { text_combine } from "./text_combine.mjs";
export function py_exe_name() {
  "The command that runs python here, ending in a space so a script name follows straight on the end of it.";
  let p = "python.exe";
  p = "./venv/bin/python";
  let n = text_combine(p, " ");
  return n;
}
