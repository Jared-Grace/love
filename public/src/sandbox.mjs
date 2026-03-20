import { undefined } from "../../../love/public/src/undefined.mjs";
import { log } from "../../../love/public/src/log.mjs";
import nearley from "nearley";
export async function sandbox() {
  let v2 = ["sn -> i se", "i -> di g", 'di -> "0"', 'di -> "1"'];
  let v = nearley.Grammar.fromCompiled(v2);
  const parser = new nearley.Parser(v);
  parser.feed("0.e1");
  console.log(parser.results);
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
}
