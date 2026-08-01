import { permission_file_tools } from "./permission_file_tools.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function permission_file_tools_writing() {
  "the file tools that CHANGE a file, which is every file tool except the one that only reads";
  "written as a subtraction from the whole list rather than as a second list spelled out, so a file tool added there joins this one without anybody remembering to. That is the safe direction: a new tool that writes is exactly the case a gate must not miss, and a new tool that only reads is one word to exclude.";
  let tools = permission_file_tools();
  function lambda(tool) {
    let reads = equal(tool, "Read");
    let n = not(reads);
    return n;
  }
  let writing = list_filter(tools, lambda);
  return writing;
}
