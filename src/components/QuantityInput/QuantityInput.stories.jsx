import React, { Fragment } from "react";
import QuantityInput from "./QuantityInput";
import { action } from "@storybook/addon-actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Component/QuantityInput",
  component: QuantityInput,
};

const QuantityInputTemplate = (args) => (
  <Fragment>
    <QuantityInput
      {...args}
      onQuantityChange={action("on setQuantity ...")}
    />
  </Fragment>
);

export const Default = QuantityInputTemplate.bind({});
Default.args = {
  label: "Corn Quantity",
};

export const QuantityOfOne = QuantityInputTemplate.bind({});
QuantityOfOne.args = {
  label: "Geese Quantity",
  initialQuantity: 1,
};

export const QuantityOfNegativeWillBeZero = QuantityInputTemplate.bind({});
QuantityOfNegativeWillBeZero.args = {
  label: "Quantity in the Positive",
  initialQuantity: -1,
};
