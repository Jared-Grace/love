export function js_flow_packages_pure() {
  "The packages that only work on values handed to them, so importing one says nothing about reaching the machine: path joins text, luxon reads dates, the rest parse, print or encode.";
  let names = ["path", "luxon", "lz-string", "uuid", "acorn", "astring", "url"];
  return names;
}
