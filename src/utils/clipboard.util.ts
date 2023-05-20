export const copyToClipboard = (data: string) => {
  navigator.clipboard.writeText(data)
}
