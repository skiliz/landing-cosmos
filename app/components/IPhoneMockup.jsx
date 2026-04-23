"use client";

// iPhone 15 Pro — Natural Titanium
// Dimensions: 146.6 x 70.6 mm -> aspect 2.077
// At 360px width -> scale 5.1 px/mm
// Frame: Natural Titanium (#A4A096-#D0C8BA)
// Screen: iOS 18 style abstract wallpaper — flowing navy/violet/teal
// Hardware: Dynamic Island with camera + prox sensor, side buttons, SIM,
//           USB-C, mic, speaker dots, inner bezel ring
// Lock screen: date, clock, flashlight + camera affordances, lock icon,
//              WhatsApp notifications, home indicator

export default function IPhoneMockup({ className = "" } = {}) {
  // Natural Titanium palette
  const ti = {
    specular: "#E4DCD0",
    light:    "#CEC6B8",
    midLight: "#BAB2A4",
    mid:      "#ACA498",
    midShadow:"#A4A094",
    shadow:   "#B0A89C",
    loBounce: "#C0B8AA",
    lo:       "#CAC2B4",
    base:     "#D0C8BA",
  };

  const btn = (side) => ({
    position:     "absolute",
    width:        3.5,
    borderRadius: side === "left" ? "2px 0 0 2px" : "0 2px 2px 0",
    background:
      side === "left"
        ? `linear-gradient(90deg, ${ti.loBounce} 0%, ${ti.light} 45%, ${ti.specular} 70%, ${ti.mid} 100%)`
        : `linear-gradient(270deg, ${ti.loBounce} 0%, ${ti.light} 45%, ${ti.specular} 70%, ${ti.mid} 100%)`,
    boxShadow:
      side === "left"
        ? "-1.5px 0 4px rgba(0,0,0,0.36), inset 0 1px 0 rgba(255,248,235,0.35), inset 0 -1px 0 rgba(0,0,0,0.25)"
        : " 1.5px 0 4px rgba(0,0,0,0.36), inset 0 1px 0 rgba(255,248,235,0.35), inset 0 -1px 0 rgba(0,0,0,0.25)",
    left:  side === "left"  ? -3.5 : undefined,
    right: side === "right" ? -3.5 : undefined,
    zIndex: 20,
  });

  // iOS 18 native wallpaper — served as an SVG asset from /public with
  // flowing organic bloom shapes (heavy Gaussian blur) over a deep OLED base.
  // See public/wallpapers/ios18-dark.svg
  const wallpaperUrl = "url('/wallpapers/ios18-dark.svg')";

  return (
    <div
      className={className}
      style={{
        width:              "var(--iphone-width,  360px)",
        height:             "var(--iphone-height, 735px)",
        position:           "relative",
        userSelect:         "none",
        WebkitUserSelect:   "none",
      }}
    >
      {/* ── Left side hardware ─────────────────────────────────────── */}
      {/* Action button */}
      <div style={{ ...btn("left"), top: "13.2%", height: 30 }} />
      {/* Volume up */}
      <div style={{ ...btn("left"), top: "21.2%", height: 56 }} />
      {/* Volume down */}
      <div style={{ ...btn("left"), top: "29.8%", height: 56 }} />
      {/* SIM tray seam */}
      <div style={{
        ...btn("left"),
        top:    "63.5%",
        height: 22,
        width:  3,
        background: `linear-gradient(90deg, ${ti.midShadow} 0%, ${ti.midLight} 60%, ${ti.light} 100%)`,
        boxShadow: "-1px 0 3px rgba(0,0,0,0.32), inset 0 10px 0 rgba(0,0,0,0.10)",
      }} />

      {/* ── Right side hardware ─────────────────────────────────────── */}
      {/* Power / side button */}
      <div style={{ ...btn("right"), top: "26.0%", height: 80 }} />

      {/* ── Phone frame body ─────────────────────────────────────────── */}
      <div
        style={{
          position:     "relative",
          width:        "100%",
          height:       "100%",
          borderRadius: 54,
          overflow:     "visible",
          background: [
            // Warm specular sweep (top-left)
            "linear-gradient(138deg, rgba(255,248,235,0.40) 0%, rgba(255,248,235,0.10) 16%, transparent 34%)",
            // Subtle bottom-right bounce
            "linear-gradient(318deg, rgba(255,248,235,0.18) 0%, transparent 22%)",
            // Side-light fall-off for 3D cylindrical feel
            "linear-gradient(90deg, rgba(0,0,0,0.10) 0%, transparent 8%, transparent 92%, rgba(0,0,0,0.10) 100%)",
            // Base Natural Titanium vertical ramp
            `linear-gradient(168deg,` +
              `${ti.specular} 0%, ` +
              `${ti.light}    7%, ` +
              `${ti.midLight} 18%, ` +
              `${ti.mid}      32%, ` +
              `${ti.midShadow}48%, ` +
              `${ti.shadow}   62%, ` +
              `${ti.loBounce} 76%, ` +
              `${ti.lo}       88%, ` +
              `${ti.base}     100%)`,
          ].join(", "),
          boxShadow: [
            // Crisp top rim warm highlight
            "inset 0  1.5px 0 rgba(255,248,235,0.55)",
            // Bottom rim shadow
            "inset 0 -1.2px 0 rgba(0,0,0,0.28)",
            // Ambient floor contact shadow (close, soft)
            "0 6px 14px -4px rgba(0,0,0,0.55)",
            // Mid drop
            "0 22px 42px -14px rgba(0,0,0,0.55)",
            // Long atmospheric shadow — lifts the phone off the page
            "0 64px 120px -28px rgba(0,0,0,0.65)",
            // Violet ambient bleed from wallpaper onto floor
            "0 42px 90px -40px rgba(90,40,220,0.35)",
          ].join(", "),
        }}
      >
        {/* ── Inner bezel ring: thin black band between titanium and glass ─── */}
        <div
          style={{
            position:     "absolute",
            top: 5, left: 5, right: 5, bottom: 5,
            borderRadius: 50,
            background:   "#040408",
            // Inner edge has a razor-thin warm highlight as the glass sits in
            boxShadow:    "inset 0 0 0 0.6px rgba(255,248,235,0.18)",
            zIndex:       1,
          }}
        />

        {/* ── Screen glass ──────────────────────────────────────────── */}
        <div
          style={{
            position:        "absolute",
            top: 7, left: 7, right: 7, bottom: 7,
            borderRadius:    48,
            overflow:        "hidden",
            background:      `${wallpaperUrl} center / cover no-repeat, #02040C`,
            zIndex:          2,
          }}
        >
          {/* Dynamic Island — with camera + proximity sensor */}
          <div
            style={{
              position:     "absolute",
              top:          12,
              left:         "50%",
              transform:    "translateX(-50%)",
              width:        124,
              height:       37,
              borderRadius: 20,
              background:   "#000",
              zIndex:       20,
              // OLED ambient bleed — the black "melts" into screen at edges
              boxShadow: [
                "0 0 0 1px rgba(0,0,0,0.95)",
                "0 4px 18px rgba(0,0,0,0.80)",
                "0 0 34px  rgba(0,0,0,0.60)",
                // Tiny chrome-like upper highlight hinting at OLED cutout
                "inset 0 0.5px 0 rgba(30,30,45,0.70)",
              ].join(", "),
            }}
          >
            {/* Front camera dot */}
            <div style={{
              position:     "absolute",
              top:          "50%",
              right:        14,
              transform:    "translateY(-50%)",
              width:        9,
              height:       9,
              borderRadius: "50%",
              background:   "radial-gradient(circle at 35% 35%, #1d2838 0%, #0a0f18 48%, #000 100%)",
              boxShadow:    "inset 0 0 0 1px rgba(22,30,46,0.9), inset 0 1px 2px rgba(255,255,255,0.05)",
            }} />
            {/* Tiny sub-pixel reflection inside camera lens */}
            <div style={{
              position:     "absolute",
              top:          "calc(50% - 3px)",
              right:        16.5,
              width:        2,
              height:       2,
              borderRadius: "50%",
              background:   "rgba(120,150,200,0.55)",
              filter:       "blur(0.2px)",
            }} />
            {/* Proximity / FaceID sensor cluster (subtle) */}
            <div style={{
              position:     "absolute",
              top:          "50%",
              left:         14,
              transform:    "translateY(-50%)",
              width:        6,
              height:       6,
              borderRadius: "50%",
              background:   "radial-gradient(circle at 35% 35%, #141a26 0%, #070a12 60%, #000 100%)",
              opacity:      0.85,
            }} />
          </div>

          {/* ── Status bar ───────────────────────────────────────────── */}
          <div
            style={{
              position:   "absolute",
              top:        18,
              left:       28,
              right:      28,
              display:    "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex:     15,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
              color:      "rgba(255,255,255,0.96)",
            }}
          >
            {/* Time */}
            <span style={{ fontSize: 15.5, fontWeight: 600, letterSpacing: "-0.4px" }}>9:41</span>

            <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {/* Cellular signal — 4 bars, last faded */}
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <rect x="0"    y="5.5" width="3.2" height="6.5" rx="0.9" fill="rgba(255,255,255,0.96)"/>
                <rect x="4.6"  y="3.5" width="3.2" height="8.5" rx="0.9" fill="rgba(255,255,255,0.96)"/>
                <rect x="9.2"  y="1.5" width="3.2" height="10.5" rx="0.9" fill="rgba(255,255,255,0.96)"/>
                <rect x="13.8" y="0"   width="3.2" height="12"   rx="0.9" fill="rgba(255,255,255,0.32)"/>
              </svg>
              {/* WiFi */}
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <circle cx="8" cy="11" r="1.6" fill="rgba(255,255,255,0.96)"/>
                <path d="M4.4 7.8C5.5 6.7 6.7 6.1 8 6.1s2.5.6 3.6 1.7" stroke="rgba(255,255,255,0.96)" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M1.3 4.8C3.1 2.9 5.4 1.8 8 1.8s4.9 1.1 6.7 3.0" stroke="rgba(255,255,255,0.96)" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              {/* Battery */}
              <svg width="26" height="13" viewBox="0 0 26 13" fill="none">
                <rect x="0.6" y="0.6" width="21.8" height="11.8" rx="2.8" stroke="rgba(255,255,255,0.55)" strokeWidth="1.1"/>
                <rect x="2.2" y="2.2" width="16"   height="8.6"  rx="1.7" fill="rgba(255,255,255,0.94)"/>
                <path d="M23.4 4.4v4.2" stroke="rgba(255,255,255,0.46)" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </span>
          </div>

          {/* ── Lock icon ────────────────────────────────────────────── */}
          <div
            style={{
              position:  "absolute",
              top:       64,
              left:      "50%",
              transform: "translateX(-50%)",
              zIndex:    5,
              opacity:   0.82,
            }}
            aria-hidden="true"
          >
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <rect x="1" y="7" width="12" height="10" rx="2.4" fill="rgba(255,255,255,0.92)" />
              <path
                d="M3.5 7V5a3.5 3.5 0 0 1 7 0v2"
                stroke="rgba(255,255,255,0.92)"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="7" cy="12" r="1.1" fill="rgba(0,0,0,0.70)" />
            </svg>
          </div>

          {/* Date label */}
          <div
            style={{
              position:      "absolute",
              top:           96,
              left: 0, right: 0,
              textAlign:     "center",
              color:         "rgba(255,255,255,0.70)",
              fontSize:      20,
              fontWeight:    400,
              letterSpacing: "0.1px",
              fontFamily:    "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
              zIndex:        5,
              textShadow:    "0 1px 10px rgba(0,0,0,0.25)",
            }}
          >
            Wednesday, April 22
          </div>

          {/* Large clock */}
          <div
            style={{
              position:      "absolute",
              top:           118,
              left: 0, right: 0,
              textAlign:     "center",
              color:         "#fff",
              fontSize:      92,
              fontWeight:    200,
              letterSpacing: "-6px",
              fontFamily:    "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
              lineHeight:    1,
              zIndex:        5,
              textShadow:    "0 2px 18px rgba(0,0,0,0.28)",
            }}
          >
            9:41
          </div>

          {/* ── Notification cards ────────────────────────────────────── */}
          <div
            style={{
              position:       "absolute",
              top:            314,
              left:           12, right: 12,
              display:        "flex",
              flexDirection:  "column",
              gap:            10,
              zIndex:         5,
            }}
          >
            {[
              { text: "Post pubblicato su Instagram.",      ago: "ora" },
              { text: "Cliente ha approvato il contenuto.", ago: "2m"  },
              { text: "Token Meta in scadenza tra 7g.",     ago: "14m" },
            ].map(({ text, ago }) => (
              <div
                key={text}
                style={{
                  display:      "flex",
                  gap:          11,
                  background:   "rgba(14,14,22,0.72)",
                  borderRadius: 22,
                  padding:      "13px 14px",
                  backdropFilter:       "blur(36px) saturate(140%)",
                  WebkitBackdropFilter: "blur(36px) saturate(140%)",
                  border:       "1px solid rgba(255,255,255,0.08)",
                  alignItems:   "flex-start",
                  boxShadow: [
                    "0 2px 12px rgba(0,0,0,0.35)",
                    "inset 0 1px 0 rgba(255,255,255,0.06)",
                  ].join(", "),
                }}
              >
                {/* WhatsApp icon — iOS squircle */}
                <div
                  style={{
                    width:        36,
                    height:       36,
                    borderRadius: 8,
                    background:   "linear-gradient(150deg, #3FD56A, #25D366 60%, #1DAB52)",
                    flexShrink:   0,
                    display:      "flex",
                    alignItems:   "center",
                    justifyContent: "center",
                    boxShadow:    "0 2px 8px rgba(37,211,102,0.30), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.37C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.02 18c-1.68 0-3.26-.47-4.6-1.27l-.33-.2-3.41.92.93-3.32-.22-.34A8.02 8.02 0 0 1 4 12c0-4.42 3.6-8 8.02-8S20 7.58 20 12s-3.58 8-7.98 8zm4.43-5.97c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.24-.6.76-.74.92-.14.16-.27.18-.5.06-.23-.12-.97-.36-1.85-1.14-.68-.61-1.14-1.36-1.28-1.59-.13-.23-.01-.36.1-.47.1-.1.23-.27.35-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.52-1.26-.72-1.73-.19-.45-.38-.39-.52-.4-.14 0-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01s.86 2.33.98 2.5c.12.16 1.68 2.57 4.08 3.6.57.25 1.01.4 1.36.51.57.18 1.09.16 1.5.1.46-.07 1.41-.58 1.61-1.13.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
                  </svg>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    color:         "rgba(255,255,255,0.92)",
                    fontWeight:    600,
                    fontSize:      12.5,
                    marginBottom:  2,
                    fontFamily:    "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                    letterSpacing: "-0.1px",
                  }}>UpPilot</div>
                  <div style={{
                    color:         "rgba(255,255,255,0.70)",
                    fontSize:      12.5,
                    lineHeight:    1.3,
                    fontFamily:    "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                    letterSpacing: "-0.1px",
                    overflow:      "hidden",
                    textOverflow:  "ellipsis",
                    whiteSpace:    "nowrap",
                  }}>{text}</div>
                </div>

                <div style={{
                  color:      "rgba(255,255,255,0.38)",
                  fontSize:   11,
                  flexShrink: 0,
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                  paddingTop: 1,
                }}>{ago}</div>
              </div>
            ))}
          </div>

          {/* ── Flashlight + Camera bottom affordances ─────────────────── */}
          <LockAffordance side="left">
            {/* Flashlight icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 2h8l-1 5-3 3-3-3-1-5zm1 12l3-1 3 1v6a3 3 0 0 1-6 0v-6z"
                fill="#fff"
              />
            </svg>
          </LockAffordance>
          <LockAffordance side="right">
            {/* Camera icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 4l-1.5 2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.5L15 4H9zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6z"
                fill="#fff"
              />
            </svg>
          </LockAffordance>

          {/* ── Screen glare — subtle diagonal sheen on glass ───────── */}
          <div
            style={{
              position:      "absolute",
              inset:         0,
              borderRadius:  48,
              background: [
                // Main diagonal sheen from top-left — like real glass catching light
                "linear-gradient(148deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 18%, transparent 38%)",
                // Secondary low-right ambient bounce
                "linear-gradient(220deg, rgba(255,255,255,0.025) 0%, transparent 34%)",
                // Tight top-right specular pinpoint
                "radial-gradient(ellipse 30% 14% at 82% 6%, rgba(255,255,255,0.10) 0%, transparent 70%)",
              ].join(", "),
              pointerEvents: "none",
              zIndex:        30,
            }}
          />

          {/* ── Inner screen edge shadow (depth under bezel) ───────── */}
          <div
            style={{
              position:      "absolute",
              inset:         0,
              borderRadius:  48,
              boxShadow:     "inset 0 0 28px rgba(0,0,0,0.55), inset 0 0 0 0.5px rgba(255,255,255,0.05)",
              pointerEvents: "none",
              zIndex:        31,
            }}
          />

          {/* Home indicator */}
          <div
            style={{
              position:     "absolute",
              bottom:       8,
              left:         "50%",
              transform:    "translateX(-50%)",
              width:        134,
              height:       5,
              borderRadius: 999,
              background:   "rgba(255,255,255,0.30)",
              zIndex:       10,
            }}
          />
        </div>

        {/* ── Inner chamfer line (glass meets titanium, top arc) ───── */}
        <div
          style={{
            position:     "absolute",
            top:          6,
            left:         7, right: 7,
            height:       1,
            borderRadius: "48px 48px 0 0",
            background:   "linear-gradient(90deg, transparent 6%, rgba(255,248,235,0.26) 28%, rgba(255,248,235,0.26) 72%, transparent 94%)",
            pointerEvents: "none",
            zIndex:       12,
          }}
        />

        {/* ── Bottom edge: speaker dots — USB-C — mic ─────────────── */}
        <div
          style={{
            position:  "absolute",
            bottom:    2,
            left:      "50%",
            transform: "translateX(-50%)",
            display:   "flex",
            alignItems: "center",
            gap:        5,
            zIndex:    20,
          }}
        >
          {[0,1,2,3].map(i => (
            <div key={`ls${i}`} style={{
              width:        3.5, height: 3.5,
              borderRadius: "50%",
              background:   "rgba(0,0,0,0.46)",
              boxShadow:    "inset 0 0.5px 1.5px rgba(0,0,0,0.70)",
            }} />
          ))}

          {/* USB-C port */}
          <div style={{
            width:        26, height: 6,
            borderRadius: 3,
            background:   "#06060C",
            margin:       "0 6px",
            boxShadow:    "inset 0 1.5px 3px rgba(0,0,0,0.78), 0 0 0 0.5px rgba(255,255,255,0.05)",
          }} />

          {[0,1,2,3].map(i => (
            <div key={`rs${i}`} style={{
              width:        3.5, height: 3.5,
              borderRadius: "50%",
              background:   "rgba(0,0,0,0.46)",
              boxShadow:    "inset 0 0.5px 1.5px rgba(0,0,0,0.70)",
            }} />
          ))}

          <div style={{
            width:        4, height: 4,
            borderRadius: "50%",
            background:   "rgba(0,0,0,0.50)",
            boxShadow:    "inset 0 0.5px 1.5px rgba(0,0,0,0.72)",
            marginLeft:   4,
          }} />
        </div>
      </div>
    </div>
  );
}

// Lock-screen corner affordance button (iOS 16+): frosted circle with icon
function LockAffordance({ side, children }) {
  return (
    <div
      style={{
        position:       "absolute",
        bottom:         44,
        [side]:         24,
        width:          44,
        height:         44,
        borderRadius:   "50%",
        background:     "rgba(20,20,30,0.55)",
        backdropFilter:       "blur(24px) saturate(140%)",
        WebkitBackdropFilter: "blur(24px) saturate(140%)",
        border:         "1px solid rgba(255,255,255,0.06)",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        opacity:        0.92,
        boxShadow:      "inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.30)",
        zIndex:         4,
      }}
    >
      {children}
    </div>
  );
}
