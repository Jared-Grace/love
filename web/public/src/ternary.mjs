export function ternary(nn, on_true, on_false) {
  let label_rules_text = null;
  if (nn) {
    label_rules_text = on_true;
  } else {
    label_rules_text = on_false;
  }
  return label_rules_text;
}
