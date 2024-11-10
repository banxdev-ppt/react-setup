export default function ValidateCitizen(id: string): boolean {
  const thaiIdPattern = /^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$|^\d{13}$/;

  if (!thaiIdPattern.test(id)) return false;

  const cleanId = id.replace(/-/g, "");

  if (cleanId.length !== 13) return false;

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanId.charAt(i)) * (13 - i);
  }

  const checksum = (11 - (sum % 11)) % 10;

  return checksum === parseInt(cleanId.charAt(12));
}