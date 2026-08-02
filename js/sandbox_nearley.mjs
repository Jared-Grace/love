import { nearley_grammar_text_parser } from "./nearley_grammar_text_parser.mjs";
import { log_json } from "./log_json.mjs";
export function sandbox_nearley() {
  let grammarText =
    '\nbits -> bits di {% (d) => ({\n  left: \'bits\',\n  right: d\n}) %}\n\nbits -> di {% (d) => ({\n  left: \'bits\',\n  right: d\n}) %}\n\ndi -> "0" {% (d) => {\n  const val = d.flat(Infinity)[0];\n  return { left: "di", right: [val] };\n} %}\n\ndi -> "1" {% (d) => {\n  const val = d.flat(Infinity)[0];\n  return { left: "di", right: [val] };\n} %}\n';
  let parser = nearley_grammar_text_parser(grammarText);
  parser.feed("001");
  log_json(parser.results);
}
