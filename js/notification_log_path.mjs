export function notification_log_path() {
  "Where the notification hook records each moment a session blocked. The hook itself cannot import this - a hook has to stand alone, since it runs as a bare process - so the literal appears twice, and the checker that exercises the hook asserts the two agree rather than trusting them to.";
  let p = "/tmp/claude-1000/-home-j-repos-love/notifications.jsonl";
  return p;
}
