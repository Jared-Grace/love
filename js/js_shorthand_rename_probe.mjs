export function js_shorthand_rename_probe() {
  "A throwaway used to reproduce the shorthand-key rename bug, deleted once it has.";
  let mark_name = 1;
  let book = 2;
  let out = {
    marker: mark_name,
    missing: book,
  };
  return out;
}
