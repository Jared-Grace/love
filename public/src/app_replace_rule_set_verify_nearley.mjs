import { log_json } from "../../../love/public/src/log_json.mjs";
export function app_replace_rule_set_verify_nearley(fn) {
  const grammarText = `
bits -> bits di {% (d) => ({
  left: 'bits',
  right: d
}) %}

bits -> di {% (d) => ({
  left: 'bits',
  right: d
}) %}

di -> "0" {% (d) => {
  const val = d.flat(Infinity)[0];
  return { left: "di", right: [val] };
} %}

di -> "1" {% (d) => {
  const val = d.flat(Infinity)[0];
  return { left: "di", right: [val] };
} %}
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
