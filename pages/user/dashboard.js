import React from "react";
import Layout from "../../components/Layout";
import UserRoute from "../../components/Layout/routes/UserRoute";

const dashboard = () => {
  return (
    <Layout>
      <UserRoute>
        <h1>dashboard page</h1>
      </UserRoute>
    </Layout>
  );
};

export default dashboard;
