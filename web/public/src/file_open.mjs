import { exec } from "child_process";

export async function file_open(filePath) {
  return await new Promise((resolve, reject) => {
    exec(`code "${filePath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error opening file: ${error.message}`);
        reject({ error });
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        reject({ stderr });
        return;
      }
      console.log(`Opened in VS Code: ${filePath}`);
      resolve();
    });
  });
}
