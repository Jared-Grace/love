// The one tmux session that every restored Claude window lives in.
//
// Named in a single place so the restore that CREATES the session and the
// restart that KILLS it can never drift apart — a mismatch would leave the old
// session alive and the restore refusing to start.
export function claude_tmux_session_name() {
  return "claude";
}
