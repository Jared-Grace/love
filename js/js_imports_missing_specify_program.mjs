import { js_imports_missing_specify } from "./js_imports_missing_specify.mjs";
export function js_imports_missing_specify_program(ast, candidates) {
  "the candidate functions this module references but never imports, asked of a file that need not export a single function - a script, or a module with several.";
  "It asks the twin without the suffix rather than answering a second way, because the twin now asks the whole module too. What the suffix once meant was that the other one looked only inside the exported declaration, so a name referenced at the top of a file was invisible to it; that was widened, and from then on the two were the same question answered by two readings that had drifted apart.";
  "The reading here was the one that had gone wrong. It counted every word in the tree, and a word after a dot looks exactly like a name a file reads. So a file writing console.log was told it was missing an import of log, and Math.abs an import of abs - both real functions here, and both offered as candidates whenever the caller hands over every name, which the caller above it does. Measured on two files in this repo before the change: each was told log, and the only log in either is console.log.";
  let imports_missing = js_imports_missing_specify(ast, candidates);
  return imports_missing;
}
