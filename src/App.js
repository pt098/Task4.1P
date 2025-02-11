import React from 'react';
import Header from './Header';
import FeaturedArticles from './FeaturedArticles';
import FeaturedTutorials from './FeaturedTutorials';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <FeaturedArticles />
        <FeaturedTutorials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
