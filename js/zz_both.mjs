import { zz_keeper } from "./zz_keeper.mjs";
import { zz_loser } from "./zz_loser.mjs";
export function zz_both(y) {
  let a = zz_keeper(y);
  let b = zz_loser(y);
  return b;
}
