export function permission_rule_path_allowed_cases() {
  "Which allow rules grant which tool which file, written down so the reading a hook acts on can be asked every case at once instead of one arranged write at a time.";
  "The paths here are made up rather than taken from this machine, because what is being checked is the reading of a rule and not the shape of anybody's disk. A real path would also have to be kept true after every move, and would make the corpus fail for a reason that has nothing to do with the reading.";
  "The cases that must answer no matter as much as the ones that must answer yes, and more of them are written down: this reading is what a hook says yes on, and every no it gets wrong is a write nobody granted. Every no here is also safe to be wrong about in the other direction - the hook then says nothing and the ordinary permission engine decides, exactly as it did before this existed.";
  let cases = [
    {
      rule: "Edit(/a/b/**)",
      tool: "Edit",
      path: "/a/b/c.md",
      allowed: true,
      why: "a folder named with a deep glob is the shape almost every file rule is written in, and a file inside it is the whole point of the rule",
    },
    {
      rule: "Edit(/a/b/**)",
      tool: "Edit",
      path: "/a/b/deeper/c.md",
      allowed: true,
      why: "the glob is deep, so a file further down is inside the folder just as plainly as one directly in it",
    },
    {
      rule: "Edit(/a/b/**)",
      tool: "Edit",
      path: "/a/bc/c.md",
      allowed: false,
      why: "a sibling folder whose name merely starts the same way is a different folder, which is why the separator is put back before the two are compared and not left off",
    },
    {
      rule: "Edit(/a/b/**)",
      tool: "Edit",
      path: "/a/b",
      allowed: false,
      why: "the rule grants what is inside the folder, and the folder itself is not inside itself",
    },
    {
      rule: "Read(/a/b/**)",
      tool: "Edit",
      path: "/a/b/c.md",
      allowed: false,
      why: "a rule granting one tool says nothing about another, and reading a file is not the same permission as changing it",
    },
    {
      rule: "Edit(/a/b/c.md)",
      tool: "Edit",
      path: "/a/b/c.md",
      allowed: true,
      why: "a rule naming one whole file needs no glob read at all, and the file it names is the file in front of the hook",
    },
    {
      rule: "Edit(/a/b/c.md)",
      tool: "Edit",
      path: "/a/b/d.md",
      allowed: false,
      why: "a rule naming one file grants that file and nothing beside it",
    },
    {
      rule: "Edit(/a/*/c.md)",
      tool: "Edit",
      path: "/a/b/c.md",
      allowed: false,
      why: "a star anywhere but the trailing place is a shape this reading does not claim to understand, and guessing at it would grant paths the rule never named",
    },
    {
      rule: "Edit(/a/b/*)",
      tool: "Edit",
      path: "/a/b/c.md",
      allowed: false,
      why: "a single star names one level only, which this deliberately does not read; the cost is a prompt the permission engine was going to answer anyway",
    },
    {
      rule: "Edit(a/b/**)",
      tool: "Edit",
      path: "/a/b/c.md",
      allowed: false,
      why: "a rule spelled from nowhere in particular would have to be read against some folder, and a hook is handed no folder it can trust",
    },
    {
      rule: "Edit(/a/b/**)",
      tool: "Edit",
      path: "b/c.md",
      allowed: false,
      why: "the same reason from the other side: a path that is not spelled from the root cannot be placed against a rule that is",
    },
    {
      rule: "WebSearch",
      tool: "Edit",
      path: "/a/b/c.md",
      allowed: false,
      why: "a rule with no brackets names no path at all, and a reader that fell through to comparing empty text would grant everything or nothing by accident",
    },
    {
      rule: "Edit(/a/b/**",
      tool: "Edit",
      path: "/a/b/c.md",
      allowed: false,
      why: "brackets that open and never close are not a rule this reading will act on, however much of one they look like",
    },
    {
      rule: "Bash(node scripts/ai.mjs ai_git:*)",
      tool: "Edit",
      path: "/a/b/c.md",
      allowed: false,
      why: "the bash rules are the great majority of the list this walks, and every one of them has to fall out on the tool name before its insides are read as a path",
    },
  ];
  return cases;
}
