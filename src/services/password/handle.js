import permittedCharacters from './utils/permitted-Characters.js';

async function handle() {
  let characters = [];
  let password = '';

  const passwordLength = process.env.PASSWORD_LENGTH || 8;
  characters = await permittedCharacters();

  if (process.env.UPPERCASE_LETTERS === 'true') {
    characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }

  if (process.env.LOWERCASE_LETTERS === 'true') {
    characters.push(...'abcdefghijklmnopqrstuvwxyz');
  }

  if (process.env.NUMERALS === 'true') {
    characters.push(...'0123456789');
  }

  if (process.env.SPECIAL_CHARACTERS === 'true') {
    characters.push(...'!@#$%^&*()_+[]{}|;:,.<>?');
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;

}

export default handle;