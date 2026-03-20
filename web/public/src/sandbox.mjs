import { log_json } from "../../../love/public/src/log_json.mjs";
import nearley from "nearley";
import compile from "nearley/lib/compile.js";
import generate from "nearley/lib/generate.js";
import grammarParser from "nearley/lib/nearley-language-bootstrapped.js";
export async function sandbox() {
  const grammarText = `
    main -> bits

    bits -> bits di
         | di

    di -> "0"
        | "1"
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
  log_json(parser.table);
}
