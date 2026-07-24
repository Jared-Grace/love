#!/bin/sh
# Notification fires for TWO different states, and they deserve different colors:
#   "Claude needs your permission to use X" -> blocked on approval  -> RED
#   "Claude is waiting for your input"       -> idle, wants a prompt -> YELLOW
# Painting both red (the old behavior) made idle sessions look like pending
# approvals -- "red with nothing to approve". Claude Code currently omits the
# notification_type field for permission events (upstream bug), so the message
# text is the reliable discriminator.
#
# Each hook command gets its own copy of stdin, so consuming it here does not
# starve the sibling toast hook. Delegates the actual paint to tmux_window_mark.sh.
payload=$(cat)
if printf '%s' "$payload" | grep -q "needs your permission"; then
  sh /home/j/repos/love/.claude/hooks/tmux_window_mark.sh 'fg=white,bg=red,bold'
else
  sh /home/j/repos/love/.claude/hooks/tmux_window_mark.sh 'fg=black,bg=yellow,bold'
fi
exit 0
