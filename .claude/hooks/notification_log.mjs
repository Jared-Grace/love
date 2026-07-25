/* Notification hook: record every moment a session blocked, so "did the human
get interrupted?" stops being an inference.

Why this exists: from inside a session, an approved prompt and a silent
auto-approve are indistinguishable - the tool returns its result either way.
The workaround was latency in the transcript (tool_use -> tool_result gap),
which only proves the NEGATIVE: under a second, no human was involved. A long
gap is ambiguous, because a slow command looks exactly like a waiting human.
This event is not ambiguous. It fires precisely when a session blocks, and it
carries the session id, so a wait can be attributed instead of guessed at.

Notification covers TWO states and Claude Code currently omits the
notification_type field for permission events (upstream bug), so the message
text is the only discriminator - same reason tmux_notification_mark.sh keys off
it to pick a colour. Both are recorded; only one means "approve something".

The log lives in /tmp, like the other hook log here: one append per block is a
few dozen lines a day, O_APPEND is atomic so a dozen parallel sessions cannot
interleave a torn line, and losing it at reboot costs nothing - the transcripts
remain the durable record, and this only has to cover the recent window a
report reads. Never blocks a session: no output, no nonzero exit, no throw. */

import { appendFileSync, readFileSync } from "node:fs";

const log_path = "/tmp/claude-1000/-home-j-repos-love/notifications.jsonl";

function kind_of(message) {
  if (typeof message !== "string") return "unknown";
  if (message.includes("needs your permission")) return "permission";
  if (message.includes("waiting for your input")) return "idle";
  return "other";
}

function text_or_empty(value) {
  return typeof value === "string" ? value : "";
}

function main() {
  let payload = null;
  try {
    payload = JSON.parse(readFileSync(0, "utf8"));
  } catch {
    return;
  }
  const message = payload.message;
  const line = JSON.stringify({
    at: new Date().toISOString(),
    kind: kind_of(message),
    session: text_or_empty(payload.session_id),
    cwd: text_or_empty(payload.cwd),
    message: text_or_empty(message),
  });
  try {
    appendFileSync(log_path, `${line}\n`);
  } catch {
    /* Recording is diagnostic only - never let it disturb the session. */
  }
}

main();
