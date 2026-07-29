import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { text_combine } from "./text_combine.mjs";
import { claude_config_folder } from "./claude_config_folder.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { memory_folder_realpath } from "./memory_folder_realpath.mjs";
export function permission_self_settings_cases() {
  "which allow rules count as blocked by Claude Code's built-in self-settings guard, and which do not. the audit that uses this judgment sweeps the settings files, and those hold no offending rule today and should never hold one, so a sweep that finds nothing proves nothing. these rules are written down instead of found, which is what lets a wrong answer show up as a failure rather than as silence";
  "the two that must answer no are the point of the corpus, not padding. a yes on the Read rule would condemn a grant that is live and load-bearing, and a yes on the memory spelling would report one finding twice, in the noisier of the two wordings";
  let config = claude_config_folder();
  let memory_config = memory_folder();
  let memory_real = memory_folder_realpath();
  let deep = "/**";
  let settings = path_join([config, "settings.json"]);
  let right = text_combine(settings, ")");
  let right2 = text_combine(settings, ")");
  let right3 = text_combine(deep, ")");
  let right4 = text_combine(config, right3);
  let right5 = text_combine(deep, ")");
  let right6 = text_combine(memory_config, right5);
  let right7 = text_combine(deep, ")");
  let right8 = text_combine(memory_config, right7);
  let right9 = text_combine(settings, ")");
  let right10 = text_combine(deep, ")");
  let right11 = text_combine(memory_real, right10);
  let cases = [
    {
      rule: text_combine("Edit(", right),
      blocked: true,
      why: "a plain write inside the config folder, which the guard prompts for however the rule is written",
    },
    {
      rule: text_combine("MultiEdit(", right2),
      blocked: true,
      why: "the guard knows nothing of tool names, so every write tool counts, not Edit and Write alone",
    },
    {
      rule: text_combine("Write(", right4),
      blocked: true,
      why: "a folder glob, whose probe path lands inside the config folder",
    },
    {
      rule: text_combine("Edit(", right6),
      blocked: false,
      why: "blocked too, but the memory hook denies it first and the file audit names the realpath to retry against, so this audit stays quiet rather than saying it twice",
    },
    {
      rule: text_combine("Read(", right8),
      blocked: false,
      why: "the guard fires on writes only, so this grant is live, and the hook abstains on reads to spare a wasted retry on every recall",
    },
    {
      rule: text_combine("Read(", right9),
      blocked: false,
      why: "reading the settings file is not editing it",
    },
    {
      rule: text_combine("Edit(", right11),
      blocked: false,
      why: "the realpath spelling, which is the one Claudes are told to use, and it sits outside the config folder entirely",
    },
    {
      rule: "Edit(/home/j/repos/love/js/**)",
      blocked: false,
      why: "an ordinary repo path, nowhere near the guard",
    },
    {
      rule: text_combine_multiple([
        "Bash(node scripts/ai.mjs ",
        fn_name("ai_git"),
        ":*)",
      ]),
      blocked: false,
      why: "a command rule, which names no path to probe and belongs to the bash guard",
    },
  ];
  return cases;
}
