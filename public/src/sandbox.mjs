import { log_json } from "../../../love/public/src/log_json.mjs";
import nearley from "nearley";
import compile from "nearley/lib/compile.js";
import generate from "nearley/lib/generate.js";
import grammarParser from "nearley/lib/nearley-language-bootstrapped.js";
export async function sandbox() {
  const grammarText = `
main -> bits {% (d, location, reject) => d[0] %}

bits -> bits di {% ([b,d], location) => ({
  value: b.value,
  start: b.start,
  end: location,
  steps: [...b.steps, d]
}) %}
     | di {% (d, location) => ({
  value: d.value,
  start: location - 1,
  end: location,
  steps: [{ rule: "di", value: d, start: location-1, end: location }]
}) %}

di -> "0" {% (d, location) => ({ rule: "di", value: "0", start: location-1, end: location }) %}
   | "1" {% (d, location) => ({ rule: "di", value: "1", start: location-1, end: location }) %}
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
