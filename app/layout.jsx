export const metadata = {
  title: "demo-lab",
  description: "Weekday X-bookmark → demo lab with Vercel previews.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
