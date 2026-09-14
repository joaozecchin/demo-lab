export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ marginBottom: "0.5rem" }}>demo-lab</h1>
        <p style={{ color: "#555", margin: 0 }}>
          X bookmark → cloud agent demo → Vercel preview → morning link.
        </p>
        <p style={{ color: "#888", fontSize: "0.9rem" }}>
          Scaffolding only. Demos live on their own branches.
        </p>
      </div>
    </main>
  );
}
