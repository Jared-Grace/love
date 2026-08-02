import nearley from "nearley";
import compile from "nearley/lib/compile.js";
import generate from "nearley/lib/generate.js";
import grammarParser from "nearley/lib/nearley-language-bootstrapped.js";
export function nearley_grammar_text_parser(grammar_text) {
  arguments_assert(arguments, 1);
  ("A parser ready to be fed, built from a grammar written out as text - the whole journey from the words a person writes to the thing that reads with them.");
  ("There are two grammars in play here and it is easy to read only one of them. The first is nearley's own, the one that knows what a grammar looks like; it is used to read the text handed in. What that reading produces is then compiled and written out as a module, and running that module gives the second grammar - the one the text was describing. Only then is there something to parse with.");
  ("The written-out module is run rather than imported, because it has never been a file: it is made here and wanted here, and there is nowhere to put it that is not a worse place than a name in this room.");
  ("So this runs code that came in with its arguments, in the plainest sense - a grammar carries its own instructions for what to build as each rule matches, and those are ordinary code. That is why the name is on the list of seams the guard shuts at its floor, and why nobody should ever be able to reach this by naming it on a command line.");
  let bootstrapped = nearley.Grammar.fromCompiled(grammarParser);
  let parser_grammar = new nearley.Parser(bootstrapped);
  parser_grammar.feed(grammar_text);
  let grammar_ast = parser_grammar.results[0];
  let compiled = compile(grammar_ast, {});
  let js_module = generate(compiled, "grammar", {
    output: "commonjs",
  });
  let module = {
    exports: {},
  };
  eval(js_module);
  let grammar = module.exports;
  let described = nearley.Grammar.fromCompiled(grammar);
  let parser = new nearley.Parser(described);
  return parser;
}
