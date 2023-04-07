import React from "react";

import { Fade } from "react-awesome-reveal";

//destructure props jadi data dan current
export default function MainContent({ data, current }) {
  return <Fade>{data[current] && data[current].content}</Fade>;
}
