import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Writings',
    Svg: require('../../static/img/writings.svg').default,
    description: 'My research and learning are documented in the Blog — from architecture to engineering practices.',
    link: '/blog',
    linkLabel: 'Read articles →',
  },
  {
    title: 'Learn',
    Svg: require('../../static/img/nuggets.svg').default,
    description: 'Bite-sized everyday learnings — techniques, patterns, and concepts — captured in Nuggets.',
    link: '/docs/intro',
    linkLabel: 'Explore Toolbox →',
  },
  {
    title: 'Learn..Do',
    Svg: require('../../static/img/hand-typing.svg').default,
    description: 'Getting your hands dirty is where it really clicks. Experiments and builds are recorded here.',
    link: '/blog',
    linkLabel: 'See in action →',
  },
];

function Feature({Svg, title, description, link, linkLabel}) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrap}>
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className={styles.featureBody}>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDesc}>{description}</p>
          <a href={link} className={styles.featureLink}>{linkLabel}</a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What you'll find here</h2>
          <p className={styles.sectionSubtitle}>A personal knowledge base built in public</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
