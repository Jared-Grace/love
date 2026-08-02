export function permission_tool_unmatched_cases() {
  "which allow rules name a file-editing tool the permission engine never matches, and which do not. the audit built on this judgment sweeps the settings files, and those hold no offending rule today and should never hold one, so a sweep that finds nothing proves nothing. these rules are written down instead of found, which is what lets a wrong answer show up as a failure rather than as silence";
  "the four that must answer yes are the four the human was warned about on 2026-08-02, one line each on startup, every one of them a grant that had been sitting there doing nothing. keeping them here means the day they are written again the build says so, rather than the human finding out from a prompt that will not stop coming";
  "the ones that must answer no carry the weight the yes cases cannot. an Edit rule is the live spelling every one of those four had to become, and condemning it would delete working grants wholesale. a Read rule is matched and does grant reading. a command rule and a domain rule name no file tool at all";
  let cases = [
    {
      rule: "Write(/tmp/claude-1000/-home-j-repos-love/**)",
      unmatched: true,
      why: "the scratchpad grant, which was dead until its Edit twin was proven to cover it",
    },
    {
      rule: "Write(/home/j/repos/love/scripts/temp/**)",
      unmatched: true,
      why: "the throwaway-script folder, the one place a Claude is told writing costs nothing",
    },
    {
      rule: "Write(/media/j/JPM/user/storage/**)",
      unmatched: true,
      why: "a working folder outside the repo, granted in the local settings file rather than the shared one, so the class crosses both files",
    },
    {
      rule: "Write(/home/j/backup/love_claude_memory/memory/**)",
      unmatched: true,
      why: "the memory realpath, the spelling every Claude is told to use, and it was granted to a tool nothing consults",
    },
    {
      rule: "MultiEdit(/home/j/repos/love/js/**)",
      unmatched: true,
      why: "nobody has written this one, and that is the point: the class is the tool name, not the four rules that happened to exist",
    },
    {
      rule: "NotebookEdit(/home/j/repos/love/js/**)",
      unmatched: true,
      why: "the third member, dead for the same reason and by the same rule",
    },
    {
      rule: "Edit(/home/j/repos/love/js/**)",
      unmatched: false,
      why: "the live spelling, and the one every offender above has to be rewritten as. a yes here would condemn the grants the repo actually runs on",
    },
    {
      rule: "Read(/home/j/repos/love/js/**)",
      unmatched: false,
      why: "reading is matched on its own rules and is granted by them, so only the editing tools collapse onto Edit",
    },
    {
      rule: "Write",
      unmatched: false,
      why: "a tool named with no path at all, which parses to an empty name and grants nothing there is anything to audit",
    },
    {
      rule: "Bash(node scripts/ai.mjs ai_git:*)",
      unmatched: false,
      why: "a command rule, which names no file tool and belongs to the bash guard",
    },
    {
      rule: "WebFetch(domain:example.com)",
      unmatched: false,
      why: "a domain rule, named nowhere near a file",
    },
  ];
  return cases;
}
