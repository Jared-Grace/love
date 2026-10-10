export function js_flow_globals_machine() {
  "The outside names that hand over the machine itself - its files, its commands, its network, or the power to run text as code. A function reading one of these is treated as dangerous in every argument it takes, and whatever it hands back is treated as a tool rather than a value.";
  "Browser names such as document and window are left off on purpose: under node they are not there, and in a browser they reach only the page.";
  let names = [
    "process",
    "require",
    "module",
    "fetch",
    "globalThis",
    "global",
    "eval",
    "Function",
    "WebAssembly",
    "XMLHttpRequest",
    "WebSocket",
    "Worker",
    "Deno",
    "Bun",
  ];
  return names;
}
