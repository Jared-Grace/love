import { undefined } from "../../../love/public/src/undefined.mjs";
import { log } from "../../../love/public/src/log.mjs";
import nearley from "nearley";
export async function sandbox() {
  const grammar = {
    Lexer: undefined,
    ParserRules: [
      {
        name: "main",
        symbols: ["di"],
        postprocess: function lambda(id) {
          let r = id[0];
          return r;
        },
      },
      {
        name: "di",
        symbols: [
          {
            literal: "0",
          },
        ],
        postprocess: function lambda2(id) {
          let r2 = id[0];
          return r2;
        },
      },
      {
        name: "di",
        symbols: [
          {
            literal: "1",
          },
        ],
        postprocess: function lambda3(id) {
          let r3 = id[0];
          return r3;
        },
      },
    ],
    ParserStart: "main",
  };
  let v = nearley.Grammar.fromCompiled(grammar);
  const parser = new nearley.Parser(v);
  parser.feed("0");
  console.log(parser.results);
}
