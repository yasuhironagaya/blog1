import style from "../styles/Home.module.css";

export default function Home() {
  const message = "あなたに贈る言葉";
  return (
    <>
      <header>HEADER</header>
      <main>
        <div>
          <h1>CUBE</h1>
          <p>{message}</p>
        </div>
      </main>
      <footer>FOOTER</footer>
    </>
  );
}
