export function node_module_import_markers() {
  "Text that appears only where a function reaches for a Node built-in, static or dynamic.";
  "A browser bundle that runs one of these throws at that line, so they mark node-only code.";
  let markers = [
    'from "fs"',
    'from "fs/promises"',
    'from "child_process"',
    'import("fs")',
    'import("fs/promises")',
    'import("child_process")',
  ];
  return markers;
}
