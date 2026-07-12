import { readFileSync, writeFileSync, readdirSync } from "fs";
import path from "path";
import * as acorn from "acorn";

const SRC = "/home/j/repos/love/js";
const DRY_RUN = process.argv.includes("--dry-run");
const ONLY = process.argv.find((a) => a.startsWith("--only="));
const onlyFile = ONLY ? ONLY.slice("--only=".length) : null;

// the primitives themselves must keep raw operators (they ARE the implementation)
const EXCLUDE = new Set([
  "add.mjs",
  "subtract.mjs",
  "multiply.mjs",
  "divide.mjs",
  "mod.mjs",
]);

const OP_TO_FN = {
  "+": "add",
  "-": "subtract",
  "*": "multiply",
  "/": "divide",
  "%": "mod",
};

const NUMERIC_MATH_CALLS = new Set([
  "abs", "floor", "ceil", "round", "trunc", "min", "max", "sqrt", "cbrt",
  "pow", "sign", "random", "log", "log2", "log10", "exp", "hypot",
]);

function isNumericLiteral(node) {
  return node.type === "Literal" && typeof node.value === "number";
}

// static, conservative, no cross-statement flow tracking
function isProvablyNumeric(node) {
  if (!node) return false;
  if (isNumericLiteral(node)) return true;
  if (
    node.type === "UnaryExpression" &&
    (node.operator === "-" || node.operator === "+") &&
    isNumericLiteral(node.argument)
  )
    return true;
  if (
    node.type === "BinaryExpression" &&
    OP_TO_FN[node.operator] &&
    isProvablyNumeric(node.left) &&
    isProvablyNumeric(node.right)
  )
    return true;
  if (
    node.type === "MemberExpression" &&
    !node.computed &&
    node.property.type === "Identifier" &&
    node.property.name === "length"
  )
    return true;
  if (node.type === "CallExpression") {
    const callee = node.callee;
    if (
      callee.type === "MemberExpression" &&
      !callee.computed &&
      callee.object.type === "Identifier" &&
      callee.object.name === "Math" &&
      callee.property.type === "Identifier" &&
      NUMERIC_MATH_CALLS.has(callee.property.name)
    )
      return true;
    if (
      callee.type === "Identifier" &&
      (callee.name === "parseInt" || callee.name === "parseFloat" || callee.name === "Number")
    )
      return true;
  }
  return false;
}

function collectCandidates(ast) {
  const candidates = [];
  const skippedPlus = [];

  function visit(node, parent) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      for (const item of node) visit(item, parent);
      return;
    }
    if (typeof node.type !== "string") return;

    if (node.type === "BinaryExpression" && OP_TO_FN[node.operator]) {
      if (node.operator === "+") {
        if (isProvablyNumeric(node.left) && isProvablyNumeric(node.right)) {
          candidates.push({ node, start: node.start, end: node.end, operator: node.operator });
        } else {
          skippedPlus.push({ start: node.start, end: node.end });
        }
      } else {
        candidates.push({ node, start: node.start, end: node.end, operator: node.operator });
      }
    }

    for (const key of Object.keys(node)) {
      if (key === "type" || key === "start" || key === "end" || key === "loc" || key === "range")
        continue;
      const child = node[key];
      if (child && typeof child === "object") visit(child, node);
    }
  }
  visit(ast, null);
  return { candidates, skippedPlus };
}

function topLevelBoundNames(ast) {
  const names = new Set();
  for (const stmt of ast.body) {
    collectDeclNames(stmt, names);
  }
  return names;
}

function collectDeclNames(stmt, names) {
  if (!stmt) return;
  if (stmt.type === "FunctionDeclaration" && stmt.id) names.add(stmt.id.name);
  else if (stmt.type === "ClassDeclaration" && stmt.id) names.add(stmt.id.name);
  else if (stmt.type === "VariableDeclaration") {
    for (const decl of stmt.declarations) {
      collectPatternNames(decl.id, names);
    }
  } else if (stmt.type === "ImportDeclaration") {
    for (const spec of stmt.specifiers) {
      names.add(spec.local.name);
    }
  } else if (stmt.type === "ExportNamedDeclaration" && stmt.declaration) {
    collectDeclNames(stmt.declaration, names);
  } else if (stmt.type === "ExportDefaultDeclaration" && stmt.declaration) {
    collectDeclNames(stmt.declaration, names);
  }
}

function collectPatternNames(pat, names) {
  if (!pat) return;
  if (pat.type === "Identifier") names.add(pat.name);
  else if (pat.type === "ObjectPattern") {
    for (const p of pat.properties) {
      if (p.type === "RestElement") collectPatternNames(p.argument, names);
      else collectPatternNames(p.value, names);
    }
  } else if (pat.type === "ArrayPattern") {
    for (const el of pat.elements) collectPatternNames(el, names);
  } else if (pat.type === "AssignmentPattern") {
    collectPatternNames(pat.left, names);
  } else if (pat.type === "RestElement") {
    collectPatternNames(pat.argument, names);
  }
}

function buildFinalText(source, candidates) {
  const sorted = [...candidates].sort((a, b) => (a.end - a.start) - (b.end - b.start));
  for (const c of sorted) {
    let parentCand = null;
    for (const other of candidates) {
      if (other === c) continue;
      if (other.start <= c.start && other.end >= c.end) {
        if (!parentCand || (other.end - other.start) < (parentCand.end - parentCand.start)) {
          parentCand = other;
        }
      }
    }
    c.parentCand = parentCand;
    c.children = [];
  }
  for (const c of candidates) {
    if (c.parentCand) c.parentCand.children.push(c);
  }

  function renderRange(start, end, kids) {
    const within = kids
      .filter((k) => k.start >= start && k.end <= end)
      .sort((a, b) => a.start - b.start);
    let result = "";
    let cursor = start;
    for (const k of within) {
      result += source.slice(cursor, k.start) + k.finalText;
      cursor = k.end;
    }
    result += source.slice(cursor, end);
    return result;
  }

  for (const c of sorted) {
    const fnName = OP_TO_FN[c.operator];
    const leftText = renderRange(c.node.left.start, c.node.left.end, c.children);
    const rightText = renderRange(c.node.right.start, c.node.right.end, c.children);
    c.finalText = `${fnName}(${leftText}, ${rightText})`;
    c.fnName = fnName;
  }

  const roots = candidates.filter((c) => !c.parentCand);
  roots.sort((a, b) => a.start - b.start);
  let result = "";
  let cursor = 0;
  for (const r of roots) {
    result += source.slice(cursor, r.start) + r.finalText;
    cursor = r.end;
  }
  result += source.slice(cursor);
  return { text: result, roots };
}

function ensureImport(text, fnName) {
  const importLine = `import { ${fnName} } from "../../../love/js/${fnName}.mjs";\n`;
  const re = new RegExp(`import\\s*\\{[^}]*\\b${fnName}\\b[^}]*\\}\\s*from`);
  if (re.test(text)) return text;
  const lines = text.split("\n");
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^import\s/.test(lines[i])) lastImportIdx = i;
  }
  if (lastImportIdx === -1) {
    return importLine + text;
  }
  lines.splice(lastImportIdx + 1, 0, importLine.trimEnd());
  return lines.join("\n");
}

const files = readdirSync(SRC)
  .filter((f) => f.endsWith(".mjs"))
  .filter((f) => !EXCLUDE.has(f))
  .filter((f) => (onlyFile ? f === onlyFile : true));

let totalConverted = 0;
let totalSkippedPlus = 0;
let totalSkippedConflict = 0;
let filesChanged = 0;
let filesErrored = [];
const skippedPlusSamples = [];
const conflictSamples = [];

for (const f of files) {
  const full = path.join(SRC, f);
  const source = readFileSync(full, "utf8");
  let ast;
  try {
    ast = acorn.parse(source, { ecmaVersion: "latest", sourceType: "module" });
  } catch (e) {
    filesErrored.push({ file: f, error: e.message });
    continue;
  }
  const { candidates: allCandidates, skippedPlus } = collectCandidates(ast);

  for (const s of skippedPlus) {
    totalSkippedPlus++;
    if (skippedPlusSamples.length < 40) {
      skippedPlusSamples.push({ file: f, text: source.slice(s.start, Math.min(s.end, s.start + 100)) });
    }
  }

  if (allCandidates.length === 0) continue;

  const topNames = topLevelBoundNames(ast);
  const candidates = [];
  for (const c of allCandidates) {
    const fnName = OP_TO_FN[c.operator];
    if (topNames.has(fnName)) {
      // already bound at top level (e.g. an existing import of the same fn is fine;
      // a genuinely different top-level binding would collide) -- only allow if it's
      // an import of exactly this canonical function
      const importOk = new RegExp(
        `import\\s*\\{[^}]*\\b${fnName}\\b[^}]*\\}\\s*from\\s*"[^"]*${fnName}\\.mjs"`,
      ).test(source);
      if (!importOk) {
        totalSkippedConflict++;
        if (conflictSamples.length < 40) {
          conflictSamples.push({ file: f, fnName, text: source.slice(c.start, Math.min(c.end, c.start + 100)) });
        }
        continue;
      }
    }
    candidates.push(c);
  }

  if (candidates.length === 0) continue;
  totalConverted += candidates.length;

  const { text: newBody, roots } = buildFinalText(source, candidates);
  let finalText = newBody;
  const usedFns = new Set(candidates.map((c) => OP_TO_FN[c.operator]));
  for (const fnName of usedFns) {
    finalText = ensureImport(finalText, fnName);
  }

  filesChanged++;
  if (!DRY_RUN) {
    writeFileSync(full, finalText, "utf8");
  } else if (onlyFile) {
    console.log("--- transformed preview for", f, "---");
    console.log(finalText);
  }
}

console.log("Files scanned:", files.length);
console.log("Files with changes:", filesChanged);
console.log("Operator expressions converted:", totalConverted);
console.log("Skipped + (not provably numeric):", totalSkippedPlus);
console.log("Skipped (top-level name conflict):", totalSkippedConflict);
console.log("Parse errors:", filesErrored.length);
if (filesErrored.length) console.log(filesErrored.slice(0, 20));
if (DRY_RUN && !onlyFile) {
  console.log("\n--- sample skipped + chains ---");
  for (const s of skippedPlusSamples.slice(0, 15)) {
    console.log(s.file, ":", JSON.stringify(s.text));
  }
  console.log("\n--- sample conflicts ---");
  for (const s of conflictSamples.slice(0, 15)) {
    console.log(s.file, s.fnName, ":", JSON.stringify(s.text));
  }
}
