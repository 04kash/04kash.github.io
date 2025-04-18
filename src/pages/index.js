import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

export const Highlight = ({ children }) => (
  <span className={clsx(styles.index_highlight)}>{children}</span>
);

function Home() {
  const { siteConfig = {} } = useDocusaurusContext();

  return (
    <Layout description="My personal blog – thoughts, code, and open source.">
      <header className={clsx("hero", styles.header)}>
      <div className={styles.spotlight}></div>
        <div className="container text--center">
          {/* <img
            src="img/logo.svg"
            alt={siteConfig.title}
            className={styles.logo}
          /> */}
          <h1 className={styles.title}>
            <span className={styles.wave}>👋</span> Hi, I'm{" "}
            <Highlight><span className={styles.name}>Kashish</span></Highlight>
          </h1>
          <p className={styles.subtitle}>
            A curious developer exploring open source, ideas, and good code.
          </p>
          <p className={clsx(styles.description)}>
            Sharing thoughts and lessons from{" "}
            <Highlight>open source contributions</Highlight> and my growth as a
            developer.
            <br />
            New post every <Highlight>two weeks</Highlight>.
          </p>
          <div className={clsx(styles.buttonGroup)}>
            <Link
              className="button button--primary button--lg"
              to={useBaseUrl("/blog")}
            >
              Read the Blog
            </Link>
            <Link
              className="button button--secondary button--lg"
              to={useBaseUrl("/about")}
            >
              About Me
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
