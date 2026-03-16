import { log } from "../../../love/public/src/log.mjs";
import nearley from "nearley";
export async function sandbox() {
  let v2 = `sn -> i se
i -> di g
di -> "0"
di -> "1"`.split("\n");
  let v = nearley.Grammar.fromCompiled(v2);
  const parser = new nearley.Parser(v);
  parser.feed("0.e1");
  console.log(parser.results);
}
