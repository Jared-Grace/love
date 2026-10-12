import { js_flow_key_power_name } from "./js_flow_key_power_name.mjs";
import { js_flow_machine_power_name } from "./js_flow_machine_power_name.mjs";
export function js_flow_power_names() {
  "Every made-up name the flow check gives to a power a value may hold: what a record read by an unproved key hands back, and the machine itself. A slice reaching one of these has reached a power, wherever it came from.";
  let name = js_flow_key_power_name();
  let name2 = js_flow_machine_power_name();
  let names = [name, name2];
  return names;
}
