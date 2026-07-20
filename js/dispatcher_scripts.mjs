export function dispatcher_scripts() {
  "the node scripts that take a function name as their third word, so `node <script> <fn> <args>` runs that function";
  ("mirrors NODE_DISPATCHER_SCRIPTS in .claude/hooks/bash-command-guard.py — anything keyed on \"which function is being run\" must accept all of them, or the others route around it");
  return ["scripts/r.mjs", "scripts/rl.mjs", "scripts/ai.mjs", "scripts/g.mjs"];
}
