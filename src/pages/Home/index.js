import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Splash from '../../components/Splash';
import ProjectList from '../../components/ProjectList';
import Pricing from '../../components/Pricing';
import Process from '../../components/Process';
import BlogList from '../../components/BlogList';
import CallToAction from '../../components/CallToAction';

import { fetchBlogs } from '../../state/Blogs/actions';
import { getBlogsN } from '../../state/Blogs/selector';
import { fetchProjects } from '../../state/Projects/actions';
import { toggleMenu } from '../../state/Menu/actions';

import drupal8 from './drupal-8.png';
import netlify from './netlify.png';
import wordpress from './wordpress.png';
import nodejs from './nodejs.png';
import contentful from './contentful.png';
import react from './react.png';

import './styles.css';

class Home extends Component {
  componentWillMount() {
    if (this.props.blogs.length < 1) {
      this.props.fetchBlogs();
    }

    if (this.props.projects.length < 1) {
      this.props.fetchProjects();
    }
  }

  render() {
    return (
      <div>
        <Helmet
          title="auspicus.io - Web Development, Design &amp; Social Media Marketing"
          meta={[
            { name: 'description', content: 'auspicus.io is a web development, design and marketing agency specialising in implementing and maintaining the latest technologies in the industry.' },
            { name: 'keywords', content: 'web, development, agency, design, marketing, javascript, nodejs, php, wordpress, drupal' },
          ]} />
        <Splash />
        <div className="intro">
          <div className="intro__two-column">
            <div className="intro__left">
              <p className="intro__body-lg">
                We help businesses big and small maximize their marketing, design &amp; technical reach.
              </p>
            </div>
            <hr className="intro__two-column-divider" />
            <div className="intro__right">
              <p className="intro__body">
                Whether you're a brand new company or an established business, 
                there's no denying that moving online is a big step. 
                We make that transition easy for you by streamlining the process of
                managing your Facebook, Instagram, Twitter, Google Analytics,
                Adsense &amp; Search Console as well as maintaining and hosting your own custom website.
              </p>
            </div>
          </div>
        </div>
        <ProjectList
          projects={this.props.projects || []}
          loading={this.props.loadingProjects} />
        <Pricing onSelect={this.props.toggleMenu} />
        <Process />
        <div id="blogs">
          <BlogList
            blogs={this.props.blogs || []}
            limit={3}
            loading={this.props.loadingBlogs}
            />
        </div>
        <div className="solutions" id="solutions">
          <ul className="solutions__list">
            <li className="solutions__list-item">
              <a href="https://wordpress.org/">
                <img className="solutions__image" src={wordpress} alt=""/>
              </a>
            </li>
            <li className="solutions__list-item">
              <a href="https://www.drupal.org/">
                <img className="solutions__image" src={drupal8} alt=""/>
              </a>
            </li>
            <li className="solutions__list-item">
              <a href="https://www.netlify.com/">
                <img className="solutions__image" src={netlify} alt=""/>
              </a>
            </li>
            <li className="solutions__list-item">
              <a href="https://nodejs.org/en/">
                <img className="solutions__image" src={nodejs} alt=""/>
              </a>
            </li>
            <li className="solutions__list-item">
              <a href="https://www.contentful.com/">
                <img className="solutions__image" src={contentful} alt=""/>
              </a>
            </li>
            <li className="solutions__list-item">
              <a href="https://reactjs.org/">
                <img className="solutions__image" src={react} alt=""/>
              </a>
            </li>
          </ul>
        </div>
        <CallToAction
          foreground="#fff"
          background="#3e8889"
          prompt="Ready to get started?"
          buttonText="Tell us about your project."
          onClick={this.props.toggleMenu}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blogs: getBlogsN(state.blogs, (a, b) => new Date(Date.parse(a.published)) < new Date(Date.parse(b.published)), 3),
  loadingBlogs: state.blogs.fetching,
  projects: state.projects.projects,
  loadingProjects: state.projects.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBlogs: () => dispatch(fetchBlogs()),
  fetchProjects: () => dispatch(fetchProjects()),
  toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
