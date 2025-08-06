import { execSync } from 'child_process';


export function git_acp(message) {

// Get current timestamp
const message2= new Date().toISOString(); // e.g., 2025-08-06T12:34:56.789Z

try {
  // Stage all changes
  execSync('git add -A', { stdio: 'inherit' });

  // Commit with timestamp
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' });

  // Push to the default remote and branch
  execSync('git push', { stdio: 'inherit' });

  console.log('✅ All changes committed and pushed successfully!');
} catch (err) {
  console.error('❌ Error during Git operation:', err.message);
}
}