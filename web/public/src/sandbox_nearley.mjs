import { log_json } from "../../../love/public/src/log_json.mjs";
import nearley from "nearley";
import compile from "nearley/lib/compile.js";
import generate from "nearley/lib/generate.js";
import grammarParser from "nearley/lib/nearley-language-bootstrapped.js";
export function sandbox_nearley() {
  const grammarText =
    '\nbits -> bits di {% (d) => ({\n  left: \'bits\',\n  right: d\n}) %}\n\nbits -> di {% (d) => ({\n  left: \'bits\',\n  right: d\n}) %}\n\ndi -> "0" {% (d) => {\n  const val = d.flat(Infinity)[0];\n  return { left: "di", right: [val] };\n} %}\n\ndi -> "1" {% (d) => {\n  const val = d.flat(Infinity)[0];\n  return { left: "di", right: [val] };\n} %}\n';
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
