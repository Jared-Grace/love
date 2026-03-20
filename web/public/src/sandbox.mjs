import nearley from "nearley";
import compile from "nearley/lib/compile.js";
import generate from "nearley/lib/generate.js";
import grammarParser from "nearley/lib/nearley-language-bootstrapped.js";

export async function sandbox() {
  const grammarText = `
    main -> bits

    bits -> bits di {% ([b,d]) => b + d %}
         | di {% id %}

    di -> "0"
        | "1"
  `;

  // 1️⃣ Parse the grammar text to AST
  const parserGrammar = new nearley.Parser(
    nearley.Grammar.fromCompiled(grammarParser)
  );
  parserGrammar.feed(grammarText);
  const grammarAst = parserGrammar.results[0];

  // 2️⃣ Compile the AST into a grammar object
  const compiled = compile(grammarAst, {});

  // 3️⃣ Generate Node-compatible JS module string
  const jsModule = generate(compiled, "grammar", { output: "commonjs" });

  // 4️⃣ Evaluate the JS module safely (Node-compatible)
  const module = { exports: {} };
  eval(jsModule); // fills module.exports
  const grammar = module.exports;

  // 5️⃣ Create a parser
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  parser.feed("001");
  console.log(parser.results); // ["001"]
}