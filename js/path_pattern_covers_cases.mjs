export function path_pattern_covers_cases() {
  ("Written-out permission path patterns paired with a file, pinning which ones the pattern reaches");
  ("This decides whether a rule counts as granting a settings file, so it has to fail in both directions. Reading too widely fails a build over rules that grant nothing of the sort; reading too narrowly is the whole hole the gate exists to close, and the narrow reading is the tempting one, because the rule that hands over the settings file by granting a folder several levels above it does not mention the file at all.");
  ("Every path here is spelled from the root, which is the shape the reader is promised and the reason it can be asked about at all without knowing where anything ran.");
  let cases = [
    {
      name: "the pattern is the file itself",
      pattern: "/repo/.claude/settings.json",
      path: "/repo/.claude/settings.json",
      covers: true,
    },
    {
      name: "the pattern is a different file in the same folder",
      pattern: "/repo/.claude/hooks.json",
      path: "/repo/.claude/settings.json",
      covers: false,
    },
    {
      name: "a folder and two stars, the file sitting directly in it",
      pattern: "/repo/.claude/**",
      path: "/repo/.claude/settings.json",
      covers: true,
    },
    {
      name: "a folder and two stars, the file sitting several levels below",
      pattern: "/repo/**",
      path: "/repo/.claude/settings.json",
      covers: true,
    },
    {
      name: "a folder and one star, the file sitting directly in it",
      pattern: "/repo/.claude/*",
      path: "/repo/.claude/settings.json",
      covers: true,
    },
    {
      name: "a folder and one star, the file sitting a level below, which one star does not reach",
      pattern: "/repo/*",
      path: "/repo/.claude/settings.json",
      covers: false,
    },
    {
      name: "a folder and two stars, the file somewhere else entirely",
      pattern: "/other/**",
      path: "/repo/.claude/settings.json",
      covers: false,
    },
    {
      name: "a folder whose name merely starts the same way, which the separator tells apart",
      pattern: "/repo/.cl/**",
      path: "/repo/.claude/settings.json",
      covers: false,
    },
    {
      name: "a plain folder with no star at all, which grants that folder and not what is in it",
      pattern: "/repo/.claude",
      path: "/repo/.claude/settings.json",
      covers: false,
    },
  ];
  return cases;
}
