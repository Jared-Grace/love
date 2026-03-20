import nearley from "nearley";
import compile from "nearley/lib/compile.js";
import generate from "nearley/lib/generate.js";
import grammarParser from "nearley/lib/nearley-language-bootstrapped.js";
import { log_json } from "../../../love/public/src/log_json.mjs";
export async function sandbox() {
  const grammarText = `
main -> bits {% d => d[0] %}

bits -> bits di {% ([b,d]) => ({
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
  value: d.flat(Infinity)[0],
  start: location - 1,
  end: location
}) %}
   | "1" {% (d, location) => ({
  rule: "di",
  value: d.flat(Infinity)[0],
  start: location - 1,
  end: location
}) %}
`;
  let v = nearley.Grammar.fromCompiled(grammarParser);
  const parserGrammar = new nearley.Parser(v);
  parserGrammar.feed(grammarText);
  const grammarAst = parserGrammar.results[0];
  const compiled = compile(grammarAst, {});
  const jsModule = generate(compiled, "grammar", {
    output: "commonjs",
  });
  const module = {
    exports: {},
  };
  eval(jsModule);
  const grammar = module.exports;
  let v2 = nearley.Grammar.fromCompiled(grammar);
  const parser = new nearley.Parser(v2);
  parser.feed("001");
  log_json(parser.results);
}
