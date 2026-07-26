export function permission_grant_rule(unaliased) {
  "the allow rule that auto-approves running one dispatcher function, with any arguments, on Claude's seam";
  "the full function name, never an alias key — a rule is matched as literal text, so an alias grants whatever it points at later";
  let rule = "Bash(node scripts/ai.mjs " + unaliased + ":*)";
  return rule;
}
