import chalk from "chalk";
import handle from "../password/handle.js";

async function createPassword() {
  console.log(chalk.green("Creating password..."));
  const password = await handle();
  console.log(password);
}

export default createPassword;
