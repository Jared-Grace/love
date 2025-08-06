import { command_line } from "./command_line.mjs";


export function git_acp(message) {

  // Stage all changes
  command_line('git add -A',);

  // Commit with timestamp
  try {
  command_line(`git commit -m "${message}"`, );
  } catch (e) {
    
  }


  // Push to the default remote and branch
  command_line('git push',);

}