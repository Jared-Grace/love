import {command_line} from './command_line.mjs';
export async function file_open(filePath) {
  command_line(`code "${filePath}"`);
}
