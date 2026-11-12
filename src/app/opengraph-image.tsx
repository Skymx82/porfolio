import { ImageResponse } from "next/og";
import { profile, site } from "@/data/profile";

export const alt = `${profile.name}, ${profile.role.toLowerCase()}. Stage mai à août 2027, Toulouse.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Aperçu affiché quand le lien est partagé (LinkedIn, messageries), généré au build.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#FFFFFF",
          color: "#171717",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: 16,
            background: "linear-gradient(90deg, #8A2BE2 0%, #C2187A 100%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #8A2BE2 0%, #C2187A 100%)",
              color: "#FFFFFF",
              fontSize: 40,
            }}
          >
            {profile.initials}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, letterSpacing: -3, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ fontSize: 48, marginTop: 20, color: "#6B21A8" }}>{profile.role}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px 28px",
              borderRadius: 999,
              border: "3px solid #171717",
              fontSize: 34,
            }}
          >
            <span>{site.ogLine.before}</span>
            {/* Flèche dessinée : la police intégrée à next/og n'a pas le caractère « → ». */}
            <svg width="40" height="24" viewBox="0 0 40 24" style={{ margin: "0 10px" }}>
              <path d="M2 12h32M24 3l10 9-10 9" fill="none" stroke="#171717" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{site.ogLine.after}</span>
          </div>
          <div style={{ fontSize: 26, color: "#4B5563" }}>{site.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
