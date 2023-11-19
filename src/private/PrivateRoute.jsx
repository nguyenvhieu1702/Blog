import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    element={(props) => {
      // Kiểm tra quyền của người dùng ở đây (roles)
      const hasAdminRole = roles.includes("ROLE_ADMIN");

      if (!hasAdminRole) {
        // Chuyển hướng đến trang khác nếu không có quyền
        return <Navigate to="/other-page" />;
      }

      // Nếu có quyền, cho phép truy cập trang
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;