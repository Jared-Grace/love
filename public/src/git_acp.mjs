import { command_line } from "./command_line.mjs";


export function git_acp(message) {

  // Stage all changes
  command_line('git add -A',);

  // Commit with timestamp
  command_line(`git commit -m "${message}"`, );

  // Push to the default remote and branch
  command_line('git push',);

}