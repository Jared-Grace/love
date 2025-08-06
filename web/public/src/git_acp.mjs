import { execSync } from 'child_process';


export function git_acp(message) {

  // Stage all changes
  execSync('git add -A', { stdio: 'inherit' });

  // Commit with timestamp
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' });

  // Push to the default remote and branch
  execSync('git push', { stdio: 'inherit' });

}