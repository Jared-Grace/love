export function permission_file_tools() {
  "the tools whose permission rules name a file path rather than a command, so a rule granting one of them is probed with a path and judged by the file-path hook rather than by the bash guard";
  let tools = ["Read", "Edit", "Write", "NotebookEdit", "MultiEdit"];
  return tools;
}
