export function js_shorthand_rename_probe() {
  ("A throwaway used to reproduce the shorthand-key rename bug, deleted once it has.");
  let marker = 1;
  let reader = 2;
  let out = {
    marker,
    missing: reader,
  };
  return out;
}
