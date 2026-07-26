import { permission_grant_context } from "./permission_grant_context.mjs";
import { permission_rule_grant_checked_context } from "./permission_rule_grant_checked_context.mjs";
export async function permission_rule_grant_checked(unaliased) {
  "grant one dispatcher function an allow rule, but only when nothing disqualifies it — the whole loop in one command: already granted, safe to grant, write it, ask the guard what it now says";
  "one name asked on its own has nothing worked out beforehand to draw on, so this makes the shared answers fresh and then does exactly what the ranking does to each of its names";
  let context = await permission_grant_context();
  let r = await permission_rule_grant_checked_context(unaliased, context);
  return r;
}
