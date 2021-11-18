import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Writings',
    Svg: require('../../static/img/writings.svg').default,
    description: (
      <>
        Research and learnings are documented in blog
      </>
    ),
  },
  {
    title: 'Learn',
    Svg: require('../../static/img/nuggets.svg').default,
    description: (
      <>
        Bits and pieces of my everyday learning, techniques, patterns are documented in Nuggets
      </>
    ),
  },
  {
    title: 'Learn..Do',
    Svg: require('../../static/img/hand-typing.svg').default,
    description: (
      <>
        Research and learning is one thing, getting your <code>hands dirty</code> is more exciting.
        Excitement is documented in blog
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
