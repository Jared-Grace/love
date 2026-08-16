import { memory_folder_spellings } from "./memory_folder_spellings.mjs";
import { curl_read_hosts } from "./curl_read_hosts.mjs";
import { dispatcher_scripts_claude } from "./dispatcher_scripts_claude.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { dispatcher_scripts } from "./dispatcher_scripts.mjs";
import { dispatcher_commands_fn_named } from "./dispatcher_commands_fn_named.mjs";
import { functions_dispatcher_denied } from "./functions_dispatcher_denied.mjs";
export function python_mirrors() {
  arguments_assert(arguments, 0);
  ("Every list of names the python guard needs, together with where its generated");
  ("copy lives. The guard can only read a command line; this side can read the");
  ("import graph. Both have to know the same names, and the only way two copies");
  ("cannot disagree is for one of them to be written by the other.");
  ("A generated literal rather than a file the guard reads while it runs: the deny");
  ("floor is keyed on these sets, so a read that could fail would fail open. A");
  ("missing module raises at import instead, loudly, before any command is judged.");
  let mirrors = [
    {
      constant: "NODE_DISPATCHER_SCRIPTS",
      path: text_combine_multiple([
        ".claude/hooks/",
        dispatcher_scripts.name,
        ".py",
      ]),
      source: dispatcher_scripts,
    },
    {
      constant: "AI_DISPATCHER_SCRIPTS",
      path: text_combine_multiple([
        ".claude/hooks/",
        dispatcher_scripts_claude.name,
        ".py",
      ]),
      source: dispatcher_scripts_claude,
    },
    {
      constant: "DISPATCHER_COMMANDS_FN_NAMED",
      path: ".claude/hooks/dispatcher_commands.py",
      source: dispatcher_commands_fn_named,
    },
    {
      constant: "DENIED_DISPATCHER_FUNCTIONS",
      path: ".claude/hooks/denied_dispatcher_functions.py",
      source: functions_dispatcher_denied,
    },
    {
      constant: "MEMORY_FOLDER_SPELLINGS",
      path: text_combine_multiple([
        ".claude/hooks/",
        memory_folder_spellings.name,
        ".py",
      ]),
      source: memory_folder_spellings,
    },
    {
      constant: "CURL_READ_HOSTS",
      path: text_combine_multiple([
        ".claude/hooks/",
        curl_read_hosts.name,
        ".py",
      ]),
      source: curl_read_hosts,
    },
  ];
  return mirrors;
}
