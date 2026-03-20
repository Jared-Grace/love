import { undefined } from "../../../love/public/src/undefined.mjs";
import { log } from "../../../love/public/src/log.mjs";
import nearley from "nearley";
export async function sandbox() {
  const grammar = {
    Lexer: undefined,
    ParserRules: [
      {
        name: "main",
        symbols: ["i"],
      },
      {
        name: "i",
        symbols: ["di"],
      },
      {
        name: "di",
        symbols: [
          {
            literal: "0",
          },
        ],
      },
      {
        name: "di",
        symbols: [
          {
            literal: "1",
          },
        ],
      },
    ],
    ParserStart: "main",
  };
  let v = nearley.Grammar.fromCompiled(grammar);
  const parser = new nearley.Parser(v);
  parser.feed("0");
  console.log(parser.results);
}
