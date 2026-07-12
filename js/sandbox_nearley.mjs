import { log_json } from "./log_json.mjs";
import nearley from "nearley";
import compile from "nearley/lib/compile.js";
import generate from "nearley/lib/generate.js";
import grammarParser from "nearley/lib/nearley-language-bootstrapped.js";
export function sandbox_nearley() {
  let grammarText =
    '\nbits -> bits di {% (d) => ({\n  left: \'bits\',\n  right: d\n}) %}\n\nbits -> di {% (d) => ({\n  left: \'bits\',\n  right: d\n}) %}\n\ndi -> "0" {% (d) => {\n  const val = d.flat(Infinity)[0];\n  return { left: "di", right: [val] };\n} %}\n\ndi -> "1" {% (d) => {\n  const val = d.flat(Infinity)[0];\n  return { left: "di", right: [val] };\n} %}\n';
  let v = nearley.Grammar.fromCompiled(grammarParser);
  let parserGrammar = new nearley.Parser(v);
  parserGrammar.feed(grammarText);
  let grammarAst = parserGrammar.results[0];
  let compiled = compile(grammarAst, {});
  let jsModule = generate(compiled, "grammar", {
    output: "commonjs",
  });
  let module = {
    exports: {},
  };
  eval(jsModule);
  let grammar = module.exports;
  let v2 = nearley.Grammar.fromCompiled(grammar);
  let parser = new nearley.Parser(v2);
  parser.feed("001");
  log_json(parser.results);
}
