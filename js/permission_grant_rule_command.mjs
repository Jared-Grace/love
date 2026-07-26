export function permission_grant_rule_command(command, unaliased) {
  "the allow rule that auto-approves one entry-point command acting on one named function, with any arguments after it";
  "the command and the function are separate words on purpose. A rule naming only the command would auto-approve it for every function at once, which hands back in one line whatever the per-function grants were being careful about - so the guard folds a fourth word into the verb for exactly these commands, and this is the rule shape that fold makes matchable.";
  "the full function name, never an alias key - a rule is matched as literal text, so an alias grants whatever it points at later";
  let rule = text_combine_multiple([
    "Bash(node scripts/ai.mjs ",
    command,
    " ",
    unaliased,
    ":*)",
  ]);
  return rule;
}
