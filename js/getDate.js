export function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const createDate = year + "/" + month + "/" + day;
  return createDate;
}
