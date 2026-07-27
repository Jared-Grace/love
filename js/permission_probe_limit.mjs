export function permission_probe_limit() {
  "How many rules to put to a decider at the same time";
  "Every probe starts a program and then waits for it, so asking one at a time leaves this machine idle for almost the whole audit - six hundred rules at a twentieth of a second each is half a minute of waiting. A ceiling is kept anyway because the audit runs beside the rest of the gate, and taking the whole machine for it would only move the delay somewhere else";
  let limit = 16;
  return limit;
}
