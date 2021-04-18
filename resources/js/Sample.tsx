import React, { useState } from "react";

type Props = {
  labelOn: string;
  labelOff: string;
};
const Sample = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const { labelOn, labelOff } = props;
  return (
    <label htmlFor="sample">
      <input
        id="sample"
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      {isChecked ? labelOn : labelOff}
    </label>
  );
};

export default Sample;
