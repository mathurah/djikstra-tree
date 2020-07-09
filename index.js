import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Djikstra's Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id = "description"></div>

        <div className = "nav_bar">
          <nav className = "navigation_bar">
            <ul>
              <li><a href = "#description" style={{textDecoration: 'none'}}><b>About</b></a></li>
              <li><a href = "#values" style={{textDecoration: 'none'}}><b>Values</b></a></li>
              <li><a href = "#summary" style={{textDecoration: 'none'}}><b>Sign Up</b></a></li>
            </ul>
          </nav>
        </div>

        <img src = "lightbulb.png"></img>

        <h1 className="title">
          <a>djikstra's 
            <br></br>
            tree</a>
        </h1>
        
        <p className="description">
          <a>dijistra’s tree: (noun) getting you from one place to another, </a> 
          <br></br>
          <a>as fast as possible. </a>
          <br></br> <br></br>
          join our fun community of founders, tinkerers, and creators 
          <br></br>
          to work on projects with impact.
        </p>

        <p className="call_to_action">
          Take me there ￬
        </p>

        <div id = "values">
          <p className="value_description">
          The tree community is based off of several key values: mutual support, #2, #3 (ex.transparency, accountability [don’t drop off of a project once you commit]. We ask that members uphold these values when participating in the community to ensure that it remains welcoming and ______. 
          </p>

          <div className="grid">
            <a className="card">
              <h3>Mutual Support</h3>
              <p>Insert value description here</p>
            </a>

            <a className="card">
              <h3>Mutual Support</h3>
              <p>Insert value description here</p>
            </a>

            <a className="card">
              <h3>Mutual Support</h3>
              <p>Insert value description here</p>
            </a>
          </div>
        </div>

        <div id = "summary">
          <p className = "summary_description">
            Dijkstra’s Tree: a community where people come to share opportunities and to work on projects/startups together —
            <br></br>
            — composed of entrepreneurial, driven, and diverse people from all over the world. 
          </p>
        </div>

        <iframe className="airtable-embed" src="https://airtable.com/embed/shrTTzdRucTl8HBLB?backgroundColor=orange" frameBorder="0" width="40%" height="533"></iframe>

      </main>

      <style jsx>{`

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          background: rgba(237, 255, 252);
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main img {
          position: absolute;
          padding-right: 640px;
          top: 140px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .nav_bar {
          padding-left: 620px;
          margin-top: -24px;
        }
        
        .navigation_bar ul li {
          display: inline-block;
          list-style: none;
          padding: 0px 0px 0px 60px;
        }
        
        .navigation_bar ul li a {
          color: #000000;
        }

        .title {
          color: #1f1f1f;
          text-decoration: none;
          font-family: 'Merriweather';
          font-size: 6rem;
          line-height: 1.2;
          margin: 0;

          padding-left: 535px;
          padding-bottom: 0.3em;
          padding-top: 0.5em;

          text-shadow:
          -3px -3px 0 rgba(255, 255, 255, 0.8),  
          3px -3px 0 rgba(255, 255, 255, 0.8),
          -3px 3px 0 rgba(255, 255, 255, 0.8),
          3px 3px 0 rgba(255, 255, 255, 0.8);
          
        }

        @media only screen and (max-width: 480px) {
            main img {
              position: relative;
              padding-right: 0px;
              padding-left: 70%;
            }
        }

        .description {
          text-align: left;
          line-height: 1.5;
          font-size: 1.2rem;

          padding-left: 556px;
        }

        .description a {
          background-color: #F3F58B;
        }

        .call_to_action {
          text-align: left;
          line-height: 1.5;
          font-size: 2rem;
          padding-left: 300px;
          text-decoration: underline dotted #1f1f1f;
          text-decoration-thickness: 0.01em;
        }

        #values {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
        }

        .value_description {
          padding-top: 100px;
          text-align: left;
          font-size: 1.2rem;
          width: 80%;
        }

        .grid {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          padding-top: 18em;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background: #ADCAD0;
          width: 100%;
          height: 12vh;
        }

        .card:hover{
          -webkit-box-shadow: 0px 4px 6px 2px rgba(220,220,220, 0.4);  
          -moz-box-shadow:    0px 4px 6px 2px #ccc;  
          box-shadow:         0px 4px 6px 2px #ccc;

          padding-top: 1.3rem;
          padding-bottom: 1.7rem;
       }

        .card h3 {
          margin: 0;
          font-size: 1.2rem;
        }

        .card p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
        }

        #summary {
          width: 100%;
          height: 80vh;
        }

        .summary_description {
          padding-top: 40px;
          text-align: center;
          font-size: 1.4rem;
        }

        .airtable-embed {
          position: relative;
          margin-top: -48vh;
          background: transparent;
          border: 2px solid #ADCAD0;
          border-radius: 8px;
        }

      `}</style>

      <style jsx global>{`

        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Noto+Sans&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');

        @font-face { font-family: 'Barlow'; 
        font-style: normal; 
        font-weight: 300; font-display: swap; 
        src: local('Barlow Light'), 
          local('Barlow-Light'), 
          url(https://fonts.gstatic.com/s/barlow/v4/7cHqv4kjgoGqM7E3p-ks6Vop.ttf) format('truetype');
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Barlow';
          scroll-behavior: smooth;
        }


      `}</style>
    </div>
  )
}
