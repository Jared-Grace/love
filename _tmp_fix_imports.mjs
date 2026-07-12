import { readFileSync, writeFileSync, readdirSync } from "fs";
import path from "path";
import * as acorn from "acorn";

const REPOS_ROOT = "/home/j/repos";
const REPO_NAMES = ["love", "karate_code", "portfolio_qa", "p_np"];
const JS_DIRS = REPO_NAMES.map((r) => path.join(REPOS_ROOT, r, "js"));

const dict = new Map();
for (const dir of JS_DIRS) {
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".mjs")) continue;
    dict.set(f.slice(0, -4), path.join(dir, f));
  }
}

let filesScanned = 0;
let filesChanged = 0;
let importsFixed = 0;
let parseErrors = [];

for (const dir of JS_DIRS) {
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".mjs")) continue;
    const full = path.join(dir, f);
    filesScanned++;
    const source = readFileSync(full, "utf8");
    let ast;
    try {
      ast = acorn.parse(source, { ecmaVersion: "latest", sourceType: "module" });
    } catch (e) {
      parseErrors.push({ file: full, error: e.message });
      continue;
    }
    const edits = [];
    for (const node of ast.body) {
      if (node.type !== "ImportDeclaration") continue;
      for (const spec of node.specifiers) {
        if (spec.type !== "ImportSpecifier") continue;
        const target = dict.get(spec.imported.name);
        if (!target) continue;
        let rel = path.relative(dir, target).split(path.sep).join("/");
        if (!rel.startsWith(".")) rel = "./" + rel;
        if (rel !== node.source.value) {
          edits.push({ start: node.source.start, end: node.source.end, newText: JSON.stringify(rel) });
        }
      }
    }
    if (edits.length) {
      edits.sort((a, b) => b.start - a.start);
      let text = source;
      for (const e of edits) {
        text = text.slice(0, e.start) + e.newText + text.slice(e.end);
      }
      writeFileSync(full, text, "utf8");
      filesChanged++;
      importsFixed += edits.length;
    }
  }
}

console.log(JSON.stringify({ filesScanned, filesChanged, importsFixed, parseErrors }, null, 2));
