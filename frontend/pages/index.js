import Head from "next/head";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GoalBuilder.Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Nav />
        <div className="container">
        <main>
          <h1>
            Welcome to{" "}
            <a href="https://goalbuilder.space">GoalBuilder.Space!</a>
          </h1>

          <p className="description">
            This is a <strong>Project in Progress</strong> by{" "}
            <a href="https://rollercoaster.dev">RollerCoaster.Dev</a>
          </p>
        
        
        <div id="about">
          <h2>What's he building in there?</h2>
          <p>
            I'm learning how to use Next.js, Apollo and Strapi to build a goal
            tracking app and sharing my notes and results each day on my blog.
          </p>
          <p>
            Go have a look and check back here to see how I'm progressing. You
            can also find me on Twitter at{" "}
            <a href="https://twitter.com/RollerDev">@RollerDev</a>
          </p>
        </div>
        </main>
     

      <footer>
        
      </footer>
</div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #about {
          display: flex;
          justify-content:center;
          
          flex-direction:column;
          margin:5rem;
        }
        
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
