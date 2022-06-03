import React from "react";

const AvatarGroup = ({ children, shape = "circle", size = 70, ...props }) => {
  const avatars = React.Children.toArray(children)
    .filter((element) => {
      // 필요하지 않은 컴포넌트는 모두 필터링되도록
      if (React.isValidElement(element) && element.props.__TYPE === "Avatar") {
        return true;
      }

      console.warn("Only accepts Avatar as it's children.");
      return false;
    })
    .map((avatar, index, avatars) => {
      // prop 넣어주기
      return React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        style: {
          ...avatar.props.style,
          marginLeft: -size / 5,
          zIndex: avatars.length - index,
        },
      });
    });

  return <div style={{ paddingLeft: size / 5 }}>{avatars}</div>;
};

export default AvatarGroup;
