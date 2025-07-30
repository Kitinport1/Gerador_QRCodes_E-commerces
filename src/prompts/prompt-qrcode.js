import chalk from "chalk";

const promptQRCode = {
  name: "link",
  description: chalk.yellow.bold("Digite o link para gerar o QR Code:"),
};

const promptType = {
  name: "type",
  description: chalk.yellow.bold("Escolha o tamanho do QR Code (1 - Grande, 2 - Pequeno):"),
  pattern: /^[1-2]+$/,
  message: chalk.red.italic("Escolha apenas entre 1 e 2"),
  required: true,
};

export default { promptQRCode, promptType };
