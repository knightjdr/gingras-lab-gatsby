import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import news from '../components/news/news-list';

import Analytics from '../images/icon/analytics.svg';
import ChartNetwork from '../images/icon/chart-network.svg';
import HeadSideBrain from '../images/icon/head-side-brain.svg';
import Wifi from '../images/icon/wifi.svg';

import './home.css';

export const query = graphql`
  query {
    anneClaudeGingras: file(relativePath: { eq: "picture/anneclaude-gingras-home.png" }) {
      childImageSharp {
        fixed(width: 200, height: 268, toFormat: JPG) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    torontoIsland: file(relativePath: { eq: "picture/toronto.jpg" }) {
      childImageSharp {
        fixed(width: 800, height: 400) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    torontoSkyline: file(relativePath: { eq: "picture/toronto-skyline.jpg" }) {
      childImageSharp {
        fixed(width: 1000, height: 250) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout navbarShadow={false}>
    <Head title="Home" />
    <div className="home__waves" />
    <div className="home">
      <section className="home__landing">
        <div className="home__landing-skyline">
          <Img
            alt="View of Toronto skyline"
            fixed={data.torontoSkyline.childImageSharp.fixed}
          />
        </div>
        <div className="home__landing-description">
          <h1>Gingras laboratory</h1>
          <p>
            We are a signal transduction, systems biology and proteomics lab
            located at the Lunenfeld-Tanenbaum Research Institute (LTRI) in Toronto.
          </p>
        </div>
        <div className="home__landing-island">
          <Img
            alt="View of Toronto skyline from Toronto island"
            fixed={data.torontoIsland.childImageSharp.fixed}
          />
        </div>
      </section>
      <section className="home__anne-claude">
        <Img
          alt="Anne-Claude Gingras"
          fixed={data.anneClaudeGingras.childImageSharp.fixed}
        />
        <div className="home__anne-claude-about">
          <h2>Dr. Anne-Claude Gingras</h2>
          <p>
              Dr. Anne-Claude Gingras is a Senior Investigator at the
              LTRI and Professor in the Department of Molecular
              Genetics, University of Toronto. Dr. Gingras is an expert
              in mass spectrometry-based proteomics, a technology that enables
              the identification and quantification of proteins from biological
              samples. She develops tools to better understand how proteins associate
              with one another to perform their functions.
          </p>
          <div className="home__anne-claude-links">
            <a href="https://www.ncbi.nlm.nih.gov/pubmed?term=Gingras%20AC%5BAuthor%5D">
              PubMed
            </a>
            <a href="https://scholar.google.ca/citations?user=kPxn4QQAAAAJ&hl=en">
              Google Scholar
            </a>
            <a href="https://www.researchgate.net/profile/Anne-Claude_Gingras">
              ResearchGate
            </a>
          </div>
        </div>
      </section>
      <section className="home__news">
        <h2>Latest news</h2>
        <div className="home__news-inner">
          <ul>
            {
              news.slice(0, 3).map((item) => (
                <li key={item.title}>
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <section className="home__projects">
        <h2>Research</h2>
        <div className="home__project">
          <div className="home__project-description">
            <h3>Enabling tools for proteomics</h3>
            <p>
              Our laboratory improves interaction proteomics through the development of
              experimental and computational approaches. These include optimized protocols
              for affinity purifcation and BioID, and tools for mass spectrometry analysis,
              data management and visualization.
            </p>
            <Link
              className="nav-link"
              to="/research/#proteomics"
            >
              Read more
            </Link>
          </div>
          <img
            alt="Bar chart"
            height="150"
            src={Analytics}
          />
        </div>
        <div className="home__project">
          <img
            alt="Node and edge network"
            height="150"
            src={ChartNetwork}
          />
          <div className="home__project-description">
            <h3>Systems biology</h3>
            <p>
              While we are probably best known for our work on serine/threonine phosphatases,
              our research group has grown a lot recently, and our members are interested in several
              cell regulatory mechanisms, including Hippo signalling, trafficking, RNA-related
              structures, and splicing. These are being investigated using a variety of techniques,
              but in large part through interaction proteomics.
            </p>
            <Link
              className="nav-link"
              to="/research/#systemsbiology"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="home__project">
          <div className="home__project-description">
            <h3>Signalling</h3>
            <p>
              While the activities of kinases and phosphatases are both required for controlling
              cell growth and proliferation, the study of phosphatases has generally lagged behind
              that of kinases, resulting in a lopsided view of signal transduction. Our lab has
              undertaken systematic approaches to study the roughly 150 human phosphatases through
              systematic mapping of their interactions and through functional screenings (RNA
              interference and microscopy).
            </p>
            <Link
              className="nav-link"
              to="/research/#signalling"
            >
              Read more
            </Link>
          </div>
          <img
            alt="Wifi signal"
            height="150"
            src={Wifi}
          />
        </div>
        <div className="home__project">
          <img
            alt="Cartoon of human head and brain"
            height="150"
            src={HeadSideBrain}
          />
          <div className="home__project-description">
            <h3>Cerebral cavernous malformations</h3>
            <p>
                In 2009 we reported on the discovery of a novel large protein complex, which
                we termed STRIPAK, for STRiatin Interacting Phosphatase And Kinase, which contains
                both the PP2A phosphatase and a Ste20 kinase. Importantly, we also found that the
                protein CCM3 is a component of STRIPAK, leading us into further studies to
                elaborate the mechanisms underpinning CCM disease.
            </p>
            <Link
              className="nav-link"
              to="/research/#ccm"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    anneClaudeGingras: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    torontoIsland: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    torontoSkyline: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
