export function zzz_out1(first_step, ast, middle_step) {
  let a = first_step(ast);
  let b = middle_step(a);
  return b;
}
