import React, { Fragment } from "react";
import Header from "./Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Component/Header",
  component: Header,
};

const HeaderTemplate = (args) => (
  <Fragment>
    <Header {...args} />
  </Fragment>
);

export const DefaultHeader = HeaderTemplate.bind({});
DefaultHeader.args = {
  title: "Title to add to the top of a component",
  imageUrl: "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
};
