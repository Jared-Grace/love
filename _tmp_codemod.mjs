import { readFileSync, writeFileSync, readdirSync } from "fs";
import path from "path";
import * as acorn from "acorn";

const SRC = "/home/j/repos/love/public/src";
const DRY_RUN = process.argv.includes("--dry-run");
const ONLY = process.argv.find((a) => a.startsWith("--only="));
const onlyFile = ONLY ? ONLY.slice("--only=".length) : null;

const EXCLUDE = new Set([
  "arguments_assert.mjs",
  "assert_json_get.mjs",
  "assert_message_get.mjs",
  "each.mjs",
  "each_index.mjs",
  "equal.mjs",
  "equal_assert.mjs",
  "error.mjs",
  "error_json.mjs",
  "error_json_lamba.mjs",
  "json_format_to.mjs",
  "json_to.mjs",
  "list_reduce.mjs",
  "list_reduce_index.mjs",
  "not.mjs",
  "properties_get.mjs",
  "property_get.mjs",
  "text_combine.mjs",
  "text_combine_multiple.mjs",
]);

function flatten(node) {
  if (node.type === "BinaryExpression" && node.operator === "+") {
    return [...flatten(node.left), ...flatten(node.right)];
  }
  return [node];
}

function isLeadingStringSafe(leaf) {
  return (
    (leaf.type === "Literal" && typeof leaf.value === "string") ||
    leaf.type === "TemplateLiteral"
  );
}

function looksNumericLiteral(leaf) {
  if (leaf.type === "Literal" && typeof leaf.value === "number") return true;
  if (
    leaf.type === "UnaryExpression" &&
    (leaf.operator === "-" || leaf.operator === "+") &&
    leaf.argument &&
    leaf.argument.type === "Literal" &&
    typeof leaf.argument.value === "number"
  )
    return true;
  return false;
}

// returns { candidates: [{node,start,end,leaves,safe}], skippedUnsafe: [...] }
function collectCandidates(ast) {
  const candidates = [];
  const skipped = [];

  function visit(node, parent) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      for (const item of node) visit(item, parent);
      return;
    }
    if (typeof node.type !== "string") return;

    if (node.type === "BinaryExpression" && node.operator === "+") {
      const parentIsPlusChain =
        parent &&
        parent.type === "BinaryExpression" &&
        parent.operator === "+";
      if (!parentIsPlusChain) {
        const leaves = flatten(node);
        let safe = false;
        if (leaves.length === 2) safe = true;
        else if (leaves.length >= 3) safe = !looksNumericLiteral(leaves[0]);
        if (safe) {
          candidates.push({ node, start: node.start, end: node.end, leaves });
        } else {
          skipped.push({ node, start: node.start, end: node.end, leaves });
        }
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
  return { candidates, skipped };
}

function buildFinalText(source, candidates) {
  // parent-candidate containment among safe candidates
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
    const leafTexts = c.leaves.map((leaf) =>
      renderRange(leaf.start, leaf.end, c.children),
    );
    if (c.leaves.length === 2) {
      c.finalText = `text_combine(${leafTexts[0]}, ${leafTexts[1]})`;
      c.uses = "text_combine";
    } else {
      c.finalText = `text_combine_multiple([${leafTexts.join(", ")}])`;
      c.uses = "text_combine_multiple";
    }
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
  const importLine = `import { ${fnName} } from "../../../love/public/src/${fnName}.mjs";\n`;
  const re = new RegExp(`import\\s*\\{\\s*${fnName}\\s*\\}\\s*from`);
  if (re.test(text)) return text;
  // insert after the last top-level import statement, or at top if none
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

let totalSafe2 = 0;
let totalSafe3plus = 0;
let totalSkipped = 0;
let filesChanged = 0;
let filesErrored = [];
const skippedSamples = [];

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
  const { candidates, skipped } = collectCandidates(ast);
  if (candidates.length === 0 && skipped.length === 0) continue;

  for (const s of skipped) {
    totalSkipped++;
    if (skippedSamples.length < 40) {
      skippedSamples.push({
        file: f,
        text: source.slice(s.start, Math.min(s.end, s.start + 120)),
      });
    }
  }
  if (candidates.length === 0) continue;

  for (const c of candidates) {
    if (c.leaves.length === 2) totalSafe2++;
    else totalSafe3plus++;
  }

  const { text: newBody, roots } = buildFinalText(source, candidates);
  let finalText = newBody;
  const usesCombine = roots.some((r) => r.uses === "text_combine") ||
    candidates.some((c) => c.uses === "text_combine");
  const usesMultiple = candidates.some((c) => c.uses === "text_combine_multiple");
  if (usesCombine) finalText = ensureImport(finalText, "text_combine");
  if (usesMultiple) finalText = ensureImport(finalText, "text_combine_multiple");

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
console.log("Safe 2-operand chains converted:", totalSafe2);
console.log("Safe 3+ operand chains converted:", totalSafe3plus);
console.log("Skipped (3+ chain, no leading string literal):", totalSkipped);
console.log("Parse errors:", filesErrored.length);
if (filesErrored.length) console.log(filesErrored.slice(0, 20));
if (DRY_RUN && !onlyFile) {
  console.log("\n--- sample skipped chains ---");
  for (const s of skippedSamples) {
    console.log(s.file, ":", JSON.stringify(s.text));
  }
}
