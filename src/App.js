import React, { Component } from 'react';
import ReactDom from 'react-dom'
import { Footer, Article, Sectiontwo, Signup, Sectionone, Landingnav, Landingheader } from './components'

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Landingheader />
        <Landingnav />
        <Sectionone />

        <div id="main">
          <section id="one" className = "tiles">
            <Article
              layout = 'images/pic01.jpg'
              header = 'Header1'
              body = 'body text 1'
              />
            <Article
              layout = 'images/pic02.jpg'
              header = 'Header2'
              body = 'body text 2'
              />
            <Article
              layout = 'images/pic03.jpg'
              header = 'Header3'
              body = 'body text 3'
              />
            <Article
              layout = 'images/pic04.jpg'
              header = 'Header4'
              body = 'body text 4'
              />
            <Article
              layout = 'images/pic05.jpg'
              header = 'Header5'
              body = 'body text 5'
              />
            <Article
              layout = 'images/pic06.jpg'
              header = 'Header6'
              body = 'body text 6'
              />
          </section>

          <section id="two">
            <Sectiontwo />
          </section>
        </div>

        <section id='contact'>
          <Signup />
        </section>

        <Footer />

    </div>
    )
  }
}

export default App;
