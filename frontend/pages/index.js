import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GoalBuilder.Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="container">
        <main>
          <h1 className="welcome">
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
     

      
</div>
      
        

    </div>
  );
}
