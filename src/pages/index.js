import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

const exampleCode = `import { App } from '@nodearch/core';
import { ExpressServer, ExpressHook } from '@nodearch/express';
import express from 'express';

export default class MyApp extends App {
  constructor() {
    super({
      classLoader: {
        classpath: './components'
      },
      extensions: [{ 
        app: new ExpressServer({ expressApp: express() } ), 
        include: [ExpressHook] 
      }]
    });
  }
}`;

const features = [
  {
    title: 'Extensibility',
    imageUrl: 'img/logo.png',
    description: (
      <>
        With the powerful extension system, you can customize the behavior of your app, either by using an existing extension from npm or writing it yourself
      </>
    ),
  },
  {
    title: 'Modularity & Design',
    imageUrl: 'img/logo.png',
    description: (
      <>
        Deliver best quality, scalable, maintainable, production grade code, using well known design patterns, powerful dependency injection, and Typescript.
      </>
    ),
  },
  {
    title: 'Productivity',
    imageUrl: 'img/logo.png',
    description: (
      <>
        Focus on what matters, with features such as modules auto detection, you will not be distracted with unnecessary imports and code wiring.
      </>
    ),
  },
  {
    title: 'Typescript',
    imageUrl: 'img/logo.png',
    description: (
      <>
        Full support for Typescript including a rich library of decorators to aid you in the development journey.
      </>
    ),
  },
  {
    title: 'Inversify',
    imageUrl: 'img/logo.png',
    description: (
      <>
        NodeArch uses Inversify, A powerful and lightweight inversion of control container, to handle all the heavy work for dependency injection.
      </>
    ),
  },
  {
    title: 'Use cases',
    imageUrl: 'img/logo.png',
    description: (
      <>
        The NodeArch core module is designed to support you no matter your use case, you can look for an existing extension e.g. @nodearch/express or create and publish your own.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="NODE.JS Backend Framework">
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src="img/default.svg" className="header-home-logo"></img>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'btn-getstarted button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              <span className="btn-getstarted-text">Get Started</span>
            </Link>
          </div>
          <div className={clsx('col col--7', styles.exampleCode)}>
              <CodeBlock metastring="typescript" className="typescript">
                {exampleCode}
              </CodeBlock>
            </div>
        </div>
      </header> */}


      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--5">
              <img src="img/logo.png" width="200" height="auto" />
              <h1 className="hero__title">
                {siteConfig.title}
                <br />
                <a href="https://www.npmjs.com/package/@nodearch/core" rel="noopener noreferrer">
                  <img
                    alt="npm core"
                    src="https://img.shields.io/npm/v/@nodearch/core?label=Core&style=flat-square"
                  ></img>
                  {'  '}
                </a>
                <a href="https://www.npmjs.com/package/@nodearch/cli" rel="noopener noreferrer">
                  <img
                    alt="npm cli"
                    src="https://img.shields.io/npm/v/@nodearch/cli?label=CLI&style=flat-square"
                  ></img>
                </a>
              </h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx('button button--outline button--secondary button--lg', styles.getStarted)}
                  to={useBaseUrl('docs/installation')}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className={clsx('col col--7', styles.exampleCode)}>
              <CodeBlock metastring="typescript" className="typescript">
                {exampleCode}
              </CodeBlock>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* <div className="container" style={{ backgroundColor: '#dedede', borderRadius: '15px' }}>
          <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Try it out now</h2>
          <div style={{ paddingTop: '10px', paddingBottom: '50px' }}>
            <CodeBlock metastring="shell" className="shell">
              {`npm i -g @nodearch/cli\nnodearch new`}
            </CodeBlock>
          </div>
        </div> */}

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
