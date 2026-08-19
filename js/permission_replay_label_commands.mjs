import { arguments_assert } from "./arguments_assert.mjs";
import { claude_transcript_paths_recent } from "./claude_transcript_paths_recent.mjs";
import { permission_prompt_events_paths } from "./permission_prompt_events_paths.mjs";
import { permission_replay_events_keyed } from "./permission_replay_events_keyed.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export async function permission_replay_label_commands(label, days) {
  "Every different command one row of the prompt record stands for, counted, commonest first.";
  "The ranked record says a shape interrupted the human fifty four times and shows one command as a sample, which is enough to work on a row that a single rule could answer and not nearly enough for one that no rule can. A row keyed by a bare shell word is fifty four different lines wearing one label, and the only way to see what they were all doing - and so what named command is missing - is to ask for them.";
  "Grouped by the whole command line, so a line run thirty times and a line run once are told apart. The same grouping the ranked record uses, asked one level down.";
  arguments_assert(arguments, 2);
  let paths = claude_transcript_paths_recent(days);
  let events = await permission_prompt_events_paths(paths, days, 0);
  let keyed = permission_replay_events_keyed(events);
  let under = [];
  for (let event of keyed) {
    let key = property_get(event, "replay_key");
    let same = equal(key, label);
    if (same) {
      list_add(under, event);
    }
  }
  let rows = permission_prompt_events_grouped_by(under, "command");
  let commands = [];
  for (let row of rows) {
    let count = property_get(row, "count");
    let command = property_get(row, "label");
    let pair = {
      count,
      command,
    };
    list_add(commands, pair);
  }
  let r = {
    label,
    days: Number(days),
    calls: under.length,
    distinct: commands.length,
    commands,
  };
  return r;
}
