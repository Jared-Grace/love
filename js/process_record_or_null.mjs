import fs from "fs";
import { path_join } from "./path_join.mjs";
export function process_record_or_null(pid, name) {
  "One of the things the machine keeps about a running process, read as text, or nothing when there is no such process or it is not ours to look at.";
  "The machine keeps these as files under a folder named after the process, so reading one is reading a file - but a file that can stop existing between deciding to read it and reading it, because the process it describes is free to end at any moment. Answering nothing is therefore the ordinary case, not the broken one, and every caller here already had to handle it.";
  "It is the same three lines under each of these readings - build the path, read it, give up quietly - and each reading differs only in which record it wants and how it takes that record apart. Written out once, a reading is only its own part.";
  let path = path_join(["/proc", pid, name]);
  function read() {
    let text = fs.readFileSync(path, "utf-8");
    return text;
  }
  let contents = null;
  try {
    contents = read();
  } catch (e) {
    return null;
  }
  return contents;
}
