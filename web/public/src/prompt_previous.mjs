import {data_value} from './data_value.mjs';
import {data_transform} from './data_transform.mjs';
export async function prompt_previous() {
  await data_value("prompts");
}
