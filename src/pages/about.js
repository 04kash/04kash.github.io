import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function Home() {
  const { siteConfig = {} } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="About Page"
      wrapperClassName={clsx(styles.layout)}
    >
      <div className={clsx(styles.about_container)}>
        <main className={clsx(styles.about_description)}>
        <h1 className={styles.headline}>About Me</h1>
          <p>
            I'm a Computer Science student at the{" "}
            <span className={clsx(styles.glow_highlight)}>University of Toronto</span>, with a deep interest in{" "}
            <span className={clsx(styles.glow_highlight)}>software engineering</span>.
          </p>

          <p>
            Currently a <span className={clsx(styles.glow_highlight)}>SWE Intern @ Red Hat</span>, and a <span className={clsx(styles.glow_highlight)}>Maintainer</span>{" "}
            for the community plugins area within the <span className={clsx(styles.glow_highlight)}>Backstage Project</span>.
          </p>

          <p>
            I spend most of my time contributing to <span className={clsx(styles.glow_highlight)}>open source</span>, exploring new ideas, and learning by building.
          </p>

          <p>
            You can find most of my work on{" "}
            <a href="https://github.com/04kash" target="_blank" rel="noopener noreferrer">
            <span className={clsx(styles.glow_highlight)}>GitHub</span>
            </a>. I occasionally share thoughts and things I’m learning on this{" "}
            <a href="/blog">
            <span className={clsx(styles.glow_highlight)}>blog</span>
            </a>.
          </p>
        </main>
      </div>
    </Layout>
  );
}

export default Home;


