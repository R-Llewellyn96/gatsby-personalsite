import * as React from 'react';
import AboutMeSection from "../components/AboutMeSection";
import MyOwnTimeSection from "../components/MyOwnTimeSection";
import WorkSection from "../components/WorkSection";
import Layout from "../components/Layout";
import MyToolsSection from "../components/MyToolsSection";

export default function Index() {
  return (
      <Layout >
          <AboutMeSection />
          <MyOwnTimeSection />
          <WorkSection />
          <MyToolsSection />
      </Layout>
  );
}