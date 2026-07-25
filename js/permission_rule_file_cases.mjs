export function permission_rule_file_cases() {
  "which allow rules name which tool, and which concrete path stands in for their glob when the real hook is asked about them. the audit built on these two readings sweeps the live settings files, where no file rule is dead today and none should become dead, so it comes back with no offenders whether the readings work or were never reached. these rules are written down instead of found, which is what lets a wrong answer show up as a failure rather than as silence.";
  "the audit skips a rule twice before it ever asks the hook - once when the tool is not a file tool, once when no path could be built - so a reading that answered nothing for everything would empty the sweep without changing a line of it. the cases that must yield a path are what stand against that, and they matter here as much as the cases that must yield none.";
  "the star cases are the pair that has to be kept together. a trailing star names a folder and becomes a leaf inside it, while a star anywhere else resolves nowhere, so probing it would ask the hook about a path no one can hold and read the abstention as if the rule had earned it.";
  let cases = [
    {
      rule: "Read(/home/j/backup/love_claude_memory/memory/**)",
      tool: "Read",
      path: "/home/j/backup/love_claude_memory/memory/probe_leaf.md",
      why: "the deep glob is the shape most file rules take, and the folder it names is the only real thing in it, so the probe has to put a leaf inside that folder",
    },
    {
      rule: "Read(/media/j/JPM/user/storage/*)",
      tool: "Read",
      path: "/media/j/JPM/user/storage/probe_leaf.md",
      why: "a flat glob names a folder just as a deep one does, and a reader that only knew the deep spelling would quietly skip every rule written the shorter way",
    },
    {
      rule: "Edit(.claude/settings.json)",
      tool: "Edit",
      path: ".claude/settings.json",
      why: "a rule naming one file needs no probe built for it, because the file it grants is already a path the hook can be asked about",
    },
    {
      rule: "Bash(git checkout *)",
      tool: "Bash",
      path: "",
      why: "a star that is not at the end resolves to nowhere, and asking the hook about a path holding a star would read its abstention as the rule's own failing rather than the probe's",
    },
    {
      rule: "mcp__claude-in-chrome__read_page",
      tool: "",
      path: "",
      why: "a bare tool name has no parentheses to read a path out of, and it is also the first thing the sweep discards, so both readings have to agree that there is nothing here",
    },
    {
      rule: "Read(/home/j/backup/love_claude_memory/memory/**",
      tool: "Read",
      path: "",
      why: "a rule that opens and never closes names a tool plainly enough while naming no path at all, which is what keeps the two readings from being written as one",
    },
    {
      rule: "WebFetch(domain:neon.com)",
      tool: "WebFetch",
      path: "domain:neon.com",
      why: "the reading of a path is not the judgment of whether the tool takes one - this yields text, and the sweep drops it a step earlier because the tool is not a file tool, which is the division of labour the audit depends on",
    },
  ];
  return cases;
}
