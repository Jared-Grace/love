#!/bin/sh
# Paint this Claude's tmux window so the human can see, at a glance across the
# whole status bar, which sessions are waiting on them.
#
# Driven by Claude Code's own events rather than tmux's monitor-activity or
# monitor-silence: those cannot tell "finished, waiting for you" apart from
# "thinking quietly", which is exactly the distinction being asked for.
#   Stop              -> idle, wants the next prompt
#   Notification      -> blocked on a permission prompt
#   UserPromptSubmit  -> cleared
#
# $1 is a tmux style, or empty to clear. Always exits 0: a Claude running outside
# tmux is normal, and a marker failing must never block the session.
[ -n "$TMUX_PANE" ] || exit 0
command -v tmux >/dev/null || exit 0
if [ -n "$1" ]; then
  tmux set-option -w -t "$TMUX_PANE" window-status-style "$1"
  tmux set-option -w -t "$TMUX_PANE" window-status-current-style "$1"
else
  tmux set-option -w -t "$TMUX_PANE" -u window-status-style
  tmux set-option -w -t "$TMUX_PANE" -u window-status-current-style
fi
exit 0
