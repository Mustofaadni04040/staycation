//api bawaan browser untuk koma icon (jadi tidak perlu imprt import lagi)
export default (number) => {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
};
