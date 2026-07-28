export function js_shorthand_rename_probe() {
  "A throwaway used to reproduce the shorthand-key rename bug, deleted once it has.";
  let mark_name = 1;
  let reader = 2;
  let out = {
    mark_name,
    missing: reader,
  };
  return out;
}
