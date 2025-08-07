import { exec } from "child_process";

export async function file_open(filePath) {
    console.log(filePath)
  return await new Promise((resolve, reject) => {
    exec(`code "${filePath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error opening file: ${error.message}`);
        reject({ error });
        return;
      }
      console.log(`Opened in VS Code: ${filePath}`);
      resolve();
    });
  });
}
