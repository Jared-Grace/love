import { log } from "../../../love/public/src/log.mjs";
import nearley from "nearley";
export async function sandbox() {
  let v = nearley.Grammar.fromCompiled(`sn -> i se
i -> di g
di -> "0"
di -> "1"`);
  const parser = new nearley.Parser(v);
  parser.feed("0.e1");
  console.log(parser.results);
}
