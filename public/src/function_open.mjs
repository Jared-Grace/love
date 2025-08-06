const { exec } = require('child_process');

export function function_open(filePath) {
    exec(`code "${filePath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error opening file: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Opened in VS Code: ${filePath}`);
    });
}