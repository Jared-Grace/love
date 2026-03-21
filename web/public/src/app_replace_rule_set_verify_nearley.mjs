import { js_code_wrap_brackets } from "../../../love/public/src/js_code_wrap_brackets.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { js_code_wrap_braces } from "../../../love/public/src/js_code_wrap_braces.mjs";
import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
import { js_code_arrow_args_body_expression } from "../../../love/public/src/js_code_arrow_args_body_expression.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { log_json } from "../../../love/public/src/log_json.mjs";
export function app_replace_rule_set_verify_nearley(rules) {
  log(app_replace_rule_set_verify_nearley.name, rules);
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
    let list = object_to_list(object);
    function lambda2(item) {
      let key = property_get(item, "key");
      let value = property_get(item, "value");
      let code_string = js_code_string(key);
      let code2 = js_code_wrap_brackets(inside);
      let combined = text_combine_multiple([key]);
    }
    let mapped2 = list_map(list, lambda2);
    let w = js_code_wrap_braces(inside2);
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
  return;
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
