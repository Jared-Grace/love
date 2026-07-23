#!/bin/sh
# Push a desktop toast when THIS Claude is blocked on a permission prompt.
#
# Wired to Notification only, never Stop. A turn ends hundreds of times a day
# across a dozen parallel sessions, so a toast per turn-end would be muted within
# the hour — and muting it would cost the rare blocked session its only signal
# that reaches the human while they are looking at some other window.
#
# Two rules keep a burst of blocked sessions from burying the human in toasts
# they must dismiss by hand:
#   -r  replace the previous toast in place, so there is only ever ONE on screen
#       (id shared across all sessions via a fixed file — a burst collapses to the
#       latest, and the tmux window colours stay as the per-session record).
#   -t  expire after a few seconds, so none of them need dismissing at all. Safe
#       to auto-clear because the red tmux window is the durable pull-signal; the
#       toast is only the push that gets the human's eyes to the tmux bar.
#
# The tmux window name is the body, so the toast says WHICH Claude to go to.
# Always exits 0: no notifier, or no desktop at all, must never block a session.
command -v notify-send >/dev/null || exit 0
EXPIRE_MS=8000
ID_FILE=/tmp/claude-toast-id
where=$(basename "$PWD")
if [ -n "$TMUX_PANE" ]; then
  where=$(tmux display-message -p -t "$TMUX_PANE" "#W")
fi
last=$(cat "$ID_FILE" 2>/dev/null)
[ -n "$last" ] || last=0
id=$(notify-send -p -e -r "$last" -t "$EXPIRE_MS" -u critical "Claude needs permission" "$where")
echo "$id" >"$ID_FILE" 2>/dev/null
exit 0
