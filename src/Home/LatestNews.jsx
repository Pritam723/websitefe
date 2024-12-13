import React from "react";
import ReactDOM from "react-dom";

import "./static/styles.less";

const url =
  "https://cors-anywhere.herokuapp.com/https://www.proseptic.co.uk/news-advice/feed";

class LatestNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentDidMount() {
    this.getNews();
  }

  async getNews() {
    const text = await fetch(url).then((r) => r.text());
    const xmlDoc = new DOMParser().parseFromString(text, "text/xml");
    const items = Array.from(xmlDoc.querySelectorAll("item")).map((item) => ({
      title: item.querySelector("title").textContent,
      description: item.querySelector("description").childNodes[0].data,
    }));
    this.setState({ news: items });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News</h1>
        </header>
        <div className="App-feeds" />
        <div className="panel-list">
          {this.state.news.length === 0 && <p>Loading...</p>}
          {this.state.news.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LatestNews;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
