import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

const heroCards = [
  { emoji: '✍️', label: '11 articles published', to: '/blog' },
  { emoji: '💡', label: 'Architecture & Design', to: '/blog/tags/architecture' },
  { emoji: '🛠️', label: 'Patterns & Practices', to: '/docs/intro' },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <span className={styles.heroEyebrow}>Hey, I'm Nolo 👋</span>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryBtn} to="/blog">
              Read the Blog
            </Link>
            <Link className={styles.secondaryBtn} to="/docs/intro">
              Browse Toolbox
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          {heroCards.map(({emoji, label, to}) => (
            <Link key={label} to={to} className={styles.heroCard}>
              <span className={styles.heroCardEmoji}>{emoji}</span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Simplifying tech concepts — architecture, design patterns, and engineering practices.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
