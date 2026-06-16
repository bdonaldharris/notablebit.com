import { ImageResponse } from "next/og";

export const alt = "NotableBIT - Founder-led technology studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 22% 18%, rgba(0,102,255,0.34), transparent 30%), radial-gradient(circle at 78% 20%, rgba(124,58,237,0.28), transparent 28%), linear-gradient(135deg, #05070d 0%, #0a1128 56%, #05070d 100%)",
          color: "#f5f7ff",
          display: "flex",
          fontFamily: "Arial, Helvetica, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(179,197,255,0.22)",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            gap: 26,
            height: "100%",
            justifyContent: "space-between",
            padding: 56,
            width: "100%",
          }}
        >
          <div style={{ color: "#fbbc00", fontSize: 26, letterSpacing: 4, textTransform: "uppercase" }}>NotableBIT</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 0.98, maxWidth: 860 }}>
              Products, platforms, and systems for the AI era.
            </div>
            <div style={{ color: "#c2c6d8", fontSize: 28, lineHeight: 1.35, maxWidth: 820 }}>
              Founder-led technology studio for builder workflows, media, community, and strategic execution.
            </div>
          </div>
          <div style={{ color: "#b3c5ff", fontSize: 24 }}>notablebit.com</div>
        </div>
      </div>
    ),
    size,
  );
}
