import React from "react"
import Layout from "../components/Layout";
import AboutMeSection from "../components/AboutMeSection";
import MyOwnTimeSection from "../components/MyOwnTimeSection";

export default function Blog() {

    return (
        <Layout >
            <AboutMeSection />
            <MyOwnTimeSection />
        </Layout>
    )

}