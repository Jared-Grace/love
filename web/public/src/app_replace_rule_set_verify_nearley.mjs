import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
import { app_replace_rule_set_strings_simple } from "../../../love/public/src/app_replace_rule_set_strings_simple.mjs";
import { js_code_object } from "../../../love/public/src/js_code_object.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
import { js_code_arrow_args_body_expression } from "../../../love/public/src/js_code_arrow_args_body_expression.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { log_json } from "../../../love/public/src/log_json.mjs";
import nearley from "nearley";
import compile from "nearley/lib/compile.js";
import generate from "nearley/lib/generate.js";
import grammarParser from "nearley/lib/nearley-language-bootstrapped.js";
export function app_replace_rule_set_verify_nearley() {
  let r2 = app_replace_rule_set_strings_simple();
  let rules = app_replace_rule_set_rules_get(r2);
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
  return { left: "di", right: d };
} %}

di -> "1" {% (d) => {
  const val = d.flat(Infinity)[0];
  return { left: "di", right: d };
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
  function lambda(rule) {
    let left = property_get(rule, "left");
    let only = list_single(left);
    let right = property_get(rule, "right");
    let joined = list_join_space(right);
    let identifier = "d";
    let object = {
      left: js_code_string(only),
      right: identifier,
    };
    let w = js_code_object(object);
    let w2 = js_code_wrap_parenthesis(w);
    let code = js_code_arrow_args_body_expression(identifier, w2);
    let r = `${only} -> ${joined} {% ${code}
    
    (d) => ({
  left: '${only}',
  right: d
}) %}`;
    return r;
  }
  let mapped = list_map(rules, lambda);
  return mapped;
}
