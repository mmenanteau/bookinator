export const ignoreCaseAndSpecialCharacters = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-zA-Z0-9]/g, "");

export const includesWithIgnore = (value1: string, value2: string): boolean =>
  ignoreCaseAndSpecialCharacters(value1).includes(
    ignoreCaseAndSpecialCharacters(value2)
  );
