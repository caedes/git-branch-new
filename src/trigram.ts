export default function trigram(userName: string): string {
  const words = userName
    .replace(/([A-Z])/g, " $1")
    .replace(/(-)/g, " ")
    .toLowerCase()
    .split(" ")
    .filter((word) => word);

  const firstWords = words.slice(0, 3);

  switch (firstWords.length) {
    case 1:
      return firstWords[0].slice(0, 3);

    case 2:
      return `${firstWords[0].slice(0, 1)}${firstWords[1].slice(0, 2)}`;

    case 3:
      return firstWords.map((word) => word[0]).join("");

    default:
      return "";
  }
}
