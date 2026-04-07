import { command_line } from "../../../love/public/src/command_line.mjs";
export async function cryto_mini_sat() {
  `sudo apt update
sudo apt install cryptominisat`;
  let stdout = await command_line("cryptominisat5 ");
}
