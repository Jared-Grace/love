#!/bin/bash
# Move each newly opened window onto whichever workspace is being looked at,
# rather than letting the window manager carry an existing window over instead.
# Event driven: xprop -spy prints a line every time the window list changes,
# so nothing is polled and nothing is spent while the desktop sits still.

seen=" $(wmctrl -l | awk '{print $1}' | tr '\n' ' ')"

xprop -spy -root _NET_CLIENT_LIST | while read -r _; do
  current=$(wmctrl -d | awk '$2 == "*" { print $1 }')
  [ -n "$current" ] || continue
  while read -r id desk rest; do
    case "$seen" in *" $id "*) continue ;; esac
    seen="$seen$id "
    [ "$desk" = "-1" ] && continue
    [ "$desk" = "$current" ] && continue
    wmctrl -i -r "$id" -t "$current"
  done < <(wmctrl -l)
done
