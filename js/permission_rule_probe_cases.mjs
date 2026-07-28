export function permission_rule_probe_cases() {
  "which allow rules yield which shell command to test them with, and which yield nothing at all. the audit built on this reading sweeps the live settings files, and every rule there is reachable today and should stay reachable, so a sweep that comes back empty says the same whether the reading worked or was never asked. these rules are written down instead of found, which is what lets a wrong answer show up as a failure rather than as silence.";
  "the three that must come back empty carry more weight than the rest. a reader that fell through to the rule text itself would hand the guard a tool grant as if it were a shell command, and the audit would report a prompt against a rule that never claimed to auto-approve one.";
  "the pair of folder rules is the other half. one alone cannot tell a reader that takes the last word of the prefix from one that takes the whole prefix, or the second word; they answer alike until a flag sits between the verb and the folder.";
  let cases = [
    {
      rule: "Bash(git status:*)",
      command: "git status probe_argument",
      why: "the shape nearly every rule takes - a prefix plus any arguments, and the arguments are supplied rather than left off. A trailing star says the rule covers the prefix WITH arguments, so a probe with none asks about a command the rule does not describe; the day a bare call to a function declaring parameters became a refusal of its own, that difference read as 273 grants that could never take effect",
    },
    {
      rule: "Bash(git stash list)",
      command: "git stash list",
      why: "a rule with no trailing arguments marker grants exactly one command, and that command is the whole of what sits inside the parentheses",
    },
    {
      rule: "Bash(mv /tmp/claude-1000/-home-j-repos-love/:*)",
      command:
        "mv /tmp/claude-1000/-home-j-repos-love/probe_leaf /tmp/claude-1000/-home-j-repos-love/probe_leaf_second",
      why: "a prefix ending in a separator names a folder, and a verb that moves rather than acts in place needs a second place to move to, so probing it with one path reports a prompt the real command never sees",
    },
    {
      rule: "Bash(mkdir -p /tmp/claude-1000/-home-j-repos-love/:*)",
      command:
        "mkdir -p /tmp/claude-1000/-home-j-repos-love/probe_leaf /tmp/claude-1000/-home-j-repos-love/probe_leaf_second",
      why: "the flag between the verb and the folder is the whole point of this one - the second place has to be built from the last word alone, or the verb and its flag land in the middle of the command",
    },
    {
      rule: "Read(/home/j/backup/love_claude_memory/memory/**)",
      command: "",
      why: "a grant for another tool names no shell command, and answering with its text would ask the guard about a path as though someone had typed it",
    },
    {
      rule: "WebFetch(domain:neon.com)",
      command: "",
      why: "the colon here belongs to the tool's own wording and marks no arguments, so a reader keying on the punctuation rather than the tool would take this for a command prefix",
    },
    {
      rule: "mcp__claude-in-chrome__read_page",
      command: "",
      why: "a bare tool name carries no parentheses at all, and a reader that only checked how a rule opens would still have to decide what to do with one that never closes",
    },
  ];
  return cases;
}
