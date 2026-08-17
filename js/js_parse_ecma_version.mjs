export function js_parse_ecma_version() {
  "Which year of the language the parser is told to accept. It is a ceiling on what may be read, never on what this repo writes: raising it only adds shapes that used to be a syntax error, so nothing that parsed before parses differently now.";
  "2024 rather than 2020 because the built bundles carry vendor code, and a class holding a field or a private name is a syntax error at 2020. Measured 2026-08-17 across every file under the dev folder, nine of them refused to parse at 2020 and all nine parse here, with no file changing its answer the other way.";
  let r = 2024;
  return r;
}
