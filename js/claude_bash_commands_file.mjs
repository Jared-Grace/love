import fs from "fs";
import readline from "readline";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function claude_bash_commands_file(f_path) {
  "Every shell command run from one session, in the order they were run";
  "Read a line at a time, because one session's record runs to tens of megabytes and there are two hundred of them. The cheap test for the word comes before the parse for the same reason: almost every line is neither a tool call nor anything like one.";
  "Only the command is kept, never the rest of the call. What a session asked a program to do is a short line; what it handed to a file-writing tool is a whole file, and holding those for two hundred sessions at once is the difference between a reading that runs and one that runs out of room.";
  arguments_assert(arguments, 1);
  let stream = fs.createReadStream(f_path);
  let lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });
  let commands = [];
  for await (let line of lines) {
    let interesting = line.includes('"tool_use"');
    if (not(interesting)) {
      continue;
    }
    let entry = json_parse_try(line);
    if (equal(entry, null)) {
      continue;
    }
    let message = entry.message;
    if (not(message)) {
      continue;
    }
    let content = message.content;
    let listed = Array.isArray(content);
    if (not(listed)) {
      continue;
    }
    for (let part of content) {
      let used = equal(part.type, "tool_use");
      if (not(used)) {
        continue;
      }
      let bash = equal(part.name, "Bash");
      if (not(bash)) {
        continue;
      }
      let command = part.input.command;
      let said = equal(typeof command, "string");
      if (not(said)) {
        continue;
      }
      list_add(commands, command);
    }
  }
  return commands;
}
