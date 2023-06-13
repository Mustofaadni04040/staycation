//api bawaan browser untuk koma icon (jadi tidak perlu import import lagi)
const number = (number) => {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
};

export default number;
