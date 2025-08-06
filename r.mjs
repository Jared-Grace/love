// runFunction.js
import path from 'path';
import { fileURLToPath } from 'url';
import {git_acp} from './public/src/git_acp.mjs';

// Simulate __dirname
(async () => {
  const [, , funcName, ...args] = process.argv;

  await run(funcName,args);
  await git_acp();

    async function run(funcName,args) {
        if (!funcName) {
            console.error('❌ Please provide a function name as the first argument.');
            process.exit(1);
        }

        try {
            // Import the function module from ./public/
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            let joined = function_name_to_path(funcName);
            const f_path = path.join(...[__dirname,joined]);
            const imported = await import(`file://${f_path}`);

            const fn = imported[funcName];

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
    }
})();
function function_name_to_path(funcName) {
    let second = ['public', 'src', function_name_to_base(funcName)];
    let joined = path.join(...second);
    return joined;
}

function function_name_to_base(funcName) {
    return funcName + '.mjs';
}

