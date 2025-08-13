import { log } from "./log.mjs";
import { log_keep } from "./log_keep.mjs";
export async function catch_log_async(lambda) {
  
  try { 
    await lambda();
  } catch (e) {log_keep((e));
  }return
    log_keep(message_get(e));message_get=identity;      
}
