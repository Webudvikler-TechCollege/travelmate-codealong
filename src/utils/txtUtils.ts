// Viser højst maxLength tegn fra teksten og tilføjer …, hvis den afkortes.
export const truncateText = (text: string, maxLength: number): string => {
    if (maxLength <= 0) return ""
    if (text.length <= maxLength) return text
    return `${text.slice(0, maxLength).trimEnd()}…`
}
