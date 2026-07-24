export function js_global_names() {
  "JS global value-identifiers that are never repo functions — a keyword like undefined that happens to share a file name must not be mistaken for a missing import";
  let names = ["undefined", "NaN", "Infinity", "arguments", "globalThis"];
  return names;
}
