import nearley from "nearley";
import compile from "nearley/lib/compile.js";
import generate from "nearley/lib/generate.js";
import grammarParser from "nearley/lib/nearley-language-bootstrapped.js";
import { log_json } from "../../../love/public/src/log_json.mjs";

export async function sandbox() {
  const grammarText = `
main -> bits {% d => d[0] %}

bits -> bits di {% ([b,d], location) => ({
  value: b.value + d.value,
  start: b.start,
  end: d.end,
  steps: [...b.steps, d]
}) %}
     | di {% (d) => ({
  value: d.value,
  start: d.start,
  end: d.end,
  steps: [d]
}) %}

di -> "0" {% (d, location) => ({
  rule: "di",
  value: Array.isArray(d[0]) ? d[0][0] : d[0],
  start: location - 1,
  end: location
}) %}
   | "1" {% (d, location) => ({
  rule: "di",
  value: Array.isArray(d[0]) ? d[0][0] : d[0],
  start: location - 1,
  end: location
}) %}
`;

  // Parse grammar string into AST
  const parserGrammar = new nearley.Parser(
    nearley.Grammar.fromCompiled(grammarParser)
  );
  parserGrammar.feed(grammarText);
  const grammarAst = parserGrammar.results[0];

  // Compile AST into grammar object
  const compiled = compile(grammarAst, {});
  const jsModule = generate(compiled, "grammar", { output: "commonjs" });
  
  // Eval in Node-safe environment
  const module = { exports: {} };
  eval(jsModule);
  const grammar = module.exports;

  // Create parser from compiled grammar
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  // Parse input
  parser.feed("001");

  // Log annotated parse result
  log_json(parser.results);
}