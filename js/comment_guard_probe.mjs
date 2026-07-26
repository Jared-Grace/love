export function comment_guard_probe() {
  "no comment here, so a rewrite loses nothing";
  let a = 1;
  let b = nested_call(other_call(a));
  return b;
}
