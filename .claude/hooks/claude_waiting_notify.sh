#!/bin/sh
# Push a desktop toast when THIS Claude is blocked on a permission prompt.
#
# Wired to Notification only, never Stop. A turn ends hundreds of times a day
# across a dozen parallel sessions, so a toast per turn-end would be muted within
# the hour — and muting it would cost the rare blocked session its only signal
# that reaches the human while they are looking at some other window.
#
# The tmux window name is the body, so the toast says WHICH Claude to go to.
# Always exits 0: no notifier, or no desktop at all, must never block a session.
command -v notify-send >/dev/null || exit 0
where=$(basename "$PWD")
if [ -n "$TMUX_PANE" ]; then
  where=$(tmux display-message -p -t "$TMUX_PANE" "#W")
fi
notify-send -u critical "Claude needs permission" "$where"
exit 0
