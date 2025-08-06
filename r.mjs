// runFunction.js
import path from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname
(async () => {
  const [, , funcName, ...args] = process.argv;

  if (!funcName) {
    console.error('❌ Please provide a function name as the first argument.');
    process.exit(1);
  }

  try {
    // Import the function module from ./public/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
    const f_path = path.join(__dirname, 'public','src', funcName + '.mjs');
    const imported = await import(`file://${f_path}`);
    
    const fn = imported.default;

    if (typeof fn !== 'function') {
      throw new Error(`❌ The module "${funcName}" does not export a default function.`);
    }

    // Await the result of the function with the remaining args
    const result = await fn(...args);

    console.log('✅ Result:', result);
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
})();
