import { ImageResponse } from "next/og";

export const alt = "Dasun Tharuka — Associate Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Terminal-styled OG card, generated at build time — no image assets needed.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0e16",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#f6a83c", fontSize: 28, letterSpacing: 6 }}>
          ASSOCIATE SOFTWARE ENGINEER
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            color: "#edeff4",
            fontSize: 96,
            fontWeight: 700,
          }}
        >
          Dasun Tharuka
          <span style={{ color: "#f6a83c" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            color: "#8b94a8",
            fontSize: 30,
          }}
        >
          $ 2+ years experience · Full-stack · Web & blockchain apps
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 64,
            color: "#8b94a8",
            fontSize: 24,
          }}
        >
          <span style={{ color: "#8b94a8" }}>~/</span>
          <span style={{ color: "#edeff4" }}>dasun</span>
          <span
            style={{
              width: 14,
              height: 30,
              backgroundColor: "#f6a83c",
              marginLeft: 10,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
