import { less_than } from "../../../love/public/src/less_than.mjs";
export function less_than_by(a, b, mapper) {
  const mb = mapper(b);
  const ma = mapper(a);
  let l = less_than(ma, mb);
  return l;
}
