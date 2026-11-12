import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon aux initiales, généré au build.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(135deg, #8A2BE2 0%, #C2187A 100%)",
          color: "#FFFFFF",
          fontSize: 30,
          letterSpacing: -1,
        }}
      >
        {profile.initials}
      </div>
    ),
    { ...size }
  );
}
