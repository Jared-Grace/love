export function permission_grant_rule(unaliased, script) {
  "the allow rule that auto-approves running one dispatcher function, with any arguments, on Claude's seam";
  "the full function name, never an alias key — a rule is matched as literal text, so an alias grants whatever it points at later";
  "which seam is spelled out rather than assumed, because a rule is literal text and there is more than one seam Claude may run. A rule naming one of them says nothing about the others, so every seam a function is granted on has to have its own line - which is exactly the property that makes the file readable as what is allowed.";
  let rule = text_combine_multiple([
    "Bash(node ",
    script,
    " ",
    unaliased,
    ":*)",
  ]);
  return rule;
}
