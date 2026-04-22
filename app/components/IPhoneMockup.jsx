"use client";

import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   CONSTANTS — all dimensions derived from W
───────────────────────────────────────────────────────────── */
const W = 300;
const H = Math.round(W * 2.165);   // 649
const R  = 50;    // outer corner radius
const Ri = 44;    // inner screen radius
const B  = 4;     // bezel thickness

/* ─────────────────────────────────────────────────────────────
   WHATSAPP ICON
───────────────────────────────────────────────────────────── */
function WaIcon() {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
      background: "linear-gradient(175deg,#2ecc71 0%,#25b85a 50%,#1aab4e 100%)",
      display:"flex",alignItems:"center",justifyContent:"center",
      boxShadow:"0 3px 10px rgba(0,0,0,0.45),inset 0 1px 0 rgba(255,255,255,0.30)",
      position:"relative", overflow:"hidden",
    }}>
      {/* gloss on icon */}
      <div style={{position:"absolute",top:0,left:0,right:0,height:"45%",
        background:"linear-gradient(180deg,rgba(255,255,255,0.25),transparent)",
        borderRadius:"10px 10px 0 0"}}/>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.07-1.36C8.44 21.52 10.19 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 13.44c-.21.58-.95 1.06-1.6 1.2-.42.09-.97.16-2.83-.61-2.38-.97-3.92-3.4-4.04-3.56-.12-.15-.97-1.29-.97-2.46 0-1.17.61-1.75.83-1.99.22-.24.48-.3.64-.3h.45c.15 0 .35-.05.54.41.2.48.68 1.67.74 1.79.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62.98 1.33 1.59.91.79 1.69 1.03 1.93 1.15.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.39.66 1.63.78.24.12.4.18.46.28.06.1.06.58-.15 1.16z"/>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   NOTIFICATION CARD
───────────────────────────────────────────────────────────── */
function Notif({ sender, msg, time, delay }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(()=>setOn(true), delay); return ()=>clearTimeout(t); }, [delay]);
  return (
    <div style={{
      background:"rgba(26,26,44,0.82)",
      backdropFilter:"blur(40px)", WebkitBackdropFilter:"blur(40px)",
      borderRadius:16, padding:"11px 13px",
      display:"flex", gap:11, alignItems:"flex-start",
      border:"1px solid rgba(255,255,255,0.11)",
      boxShadow:"0 6px 28px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.08),inset 0 -1px 0 rgba(0,0,0,0.2)",
      opacity: on?1:0,
      transform: on?"translateY(0) scale(1)":"translateY(18px) scale(0.96)",
      transition:"opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)",
    }}>
      <WaIcon/>
      <div style={{flex:1,minWidth:0}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:1}}>
          <span style={{color:"rgba(255,255,255,0.48)",fontSize:10.5,fontWeight:600,letterSpacing:0.5,textTransform:"uppercase"}}>WhatsApp</span>
          <span style={{color:"rgba(255,255,255,0.38)",fontSize:11.5,flexShrink:0,marginLeft:8}}>{time}</span>
        </div>
        {sender&&<div style={{color:"rgba(255,255,255,0.96)",fontSize:14,fontWeight:600,lineHeight:1.3,marginBottom:1.5}}>{sender}</div>}
        <div style={{color:"rgba(255,255,255,0.68)",fontSize:13.5,lineHeight:1.42}}>{msg}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   LOCK SCREEN CONTENT
───────────────────────────────────────────────────────────── */
function LockScreen() {
  const [rdy, setRdy] = useState(false);
  useEffect(()=>{ setTimeout(()=>setRdy(true),100); },[]);

  return (
    <div style={{width:"100%",height:"100%",position:"relative",overflow:"hidden",
      fontFamily:"-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text',sans-serif"}}>

      {/* ── WALLPAPER ── */}
      <div style={{position:"absolute",inset:0,
        background:"linear-gradient(172deg,#08081c 0%,#0c0c28 18%,#10103a 38%,#0c0a2e 55%,#07061a 75%,#050410 100%)"}}/>

      {/* aurora blob 1 — left purple */}
      <div style={{position:"absolute",
        top:"28%",left:"-18%",width:"80%",height:"75%",
        background:"radial-gradient(ellipse,rgba(85,55,210,0.38) 0%,transparent 65%)",
        filter:"blur(24px)"}}/>
      {/* aurora blob 2 — right deep blue */}
      <div style={{position:"absolute",
        top:"40%",right:"-22%",width:"70%",height:"70%",
        background:"radial-gradient(ellipse,rgba(50,35,185,0.30) 0%,transparent 60%)",
        filter:"blur(28px)"}}/>
      {/* aurora blob 3 — bottom violet */}
      <div style={{position:"absolute",
        bottom:"-8%",left:"18%",width:"65%",height:"48%",
        background:"radial-gradient(ellipse,rgba(100,60,220,0.38) 0%,transparent 62%)",
        filter:"blur(20px)"}}/>
      {/* light streak */}
      <div style={{position:"absolute",top:"-15%",left:"-35%",
        width:"100%",height:"110%",
        background:"linear-gradient(148deg,transparent 35%,rgba(90,65,210,0.09) 52%,transparent 65%)",
        transform:"rotate(-8deg)"}}/>

      {/* ── STATUS BAR ── */}
      <div style={{position:"relative",zIndex:10,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"14px 24px 2px",height:50}}>
        <span style={{color:"rgba(255,255,255,0.92)",fontSize:15.5,fontWeight:600,letterSpacing:0.05}}>9:41</span>
        <div style={{display:"flex",gap:5.5,alignItems:"center"}}>
          {/* signal bars */}
          <div style={{display:"flex",gap:2,alignItems:"flex-end",height:12}}>
            {[3,5,7,9,11].map((h,i)=>(
              <div key={i} style={{width:3,height:h,borderRadius:1.5,
                background:i<4?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.25)"}}/>
            ))}
          </div>
          {/* wifi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M8 9.5L9.5 12H6.5Z" fill="rgba(255,255,255,0.92)"/>
            <path d="M4.5 6.8C5.8 5.5 10.2 5.5 11.5 6.8" stroke="rgba(255,255,255,0.92)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
            <path d="M1.5 3.5C3.8 1.1 12.2 1.1 14.5 3.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
          </svg>
          {/* battery */}
          <div style={{position:"relative",width:26,height:12}}>
            <div style={{position:"absolute",inset:0,border:"1.5px solid rgba(255,255,255,0.65)",borderRadius:3.5}}/>
            <div style={{position:"absolute",left:2.5,top:2.5,bottom:2.5,width:"66%",
              background:"rgba(255,255,255,0.92)",borderRadius:1.5}}/>
            <div style={{position:"absolute",right:-4,top:"50%",transform:"translateY(-50%)",
              width:3,height:6,background:"rgba(255,255,255,0.45)",borderRadius:"0 2px 2px 0"}}/>
          </div>
        </div>
      </div>

      {/* ── DYNAMIC ISLAND ── */}
      <div style={{position:"absolute",top:12,left:"50%",transform:"translateX(-50%)",
        width:"34%",height:34,borderRadius:9999,background:"#000",zIndex:25,
        boxShadow:"0 0 0 1px rgba(255,255,255,0.05),0 2px 8px rgba(0,0,0,0.8)"}}/>

      {/* ── CLOCK ── */}
      <div style={{position:"relative",zIndex:10,
        display:"flex",flexDirection:"column",alignItems:"center",
        paddingTop:22,
        opacity:rdy?1:0, transform:rdy?"none":"translateY(-8px)",
        transition:"opacity 0.6s ease,transform 0.6s ease"}}>
        {/* lock icon */}
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" style={{marginBottom:9}}>
          <rect x="1.5" y="9.5" width="15" height="11" rx="2.5"
            stroke="rgba(255,255,255,0.75)" strokeWidth="1.7"/>
          <path d="M5 9.5V6.5a4 4 0 018 0v3"
            stroke="rgba(255,255,255,0.75)" strokeWidth="1.7" strokeLinecap="round"/>
          <circle cx="9" cy="15" r="1.2" fill="rgba(255,255,255,0.75)"/>
        </svg>
        <div style={{color:"rgba(255,255,255,0.75)",fontSize:16,fontWeight:400,letterSpacing:0.15,marginBottom:1}}>
          Mercoledì, 22 aprile
        </div>
        <div style={{color:"rgba(255,255,255,0.97)",fontSize:78,fontWeight:200,
          letterSpacing:-4,lineHeight:1.0,marginTop:0,
          textShadow:"0 2px 40px rgba(100,80,255,0.25)"}}>
          9:41
        </div>
      </div>

      {/* ── NOTIFICATIONS ── */}
      <div style={{position:"relative",zIndex:10,
        display:"flex",flexDirection:"column",gap:9,
        padding:"10px 13px 0"}}>
        <Notif sender="UpPilot" msg="Post pubblicato con successo su Instagram." time="Ora" delay={220}/>
        <Notif sender="UpPilot" msg="Il cliente ha approvato il contenuto." time="2 min fa" delay={600}/>
        <Notif msg="Token Meta in scadenza tra 3 giorni." time="8 min fa" delay={980}/>
        <Notif sender="UpPilot" msg="Errore di pubblicazione rilevato." time="12 min fa" delay={1360}/>
      </div>

      {/* ── BOTTOM CONTROLS ── */}
      <div style={{position:"absolute",bottom:22,left:0,right:0,zIndex:10,
        display:"flex",justifyContent:"space-between",padding:"0 48px"}}>
        {[
          <svg key="t" width="15" height="22" viewBox="0 0 15 22" fill="none">
            <path d="M5.5 1h4l2 9H3.5L5.5 1z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M3.5 10l-2 9h11l-2-9" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
            <line x1="7.5" y1="14" x2="7.5" y2="19" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>,
          <svg key="c" width="22" height="18" viewBox="0 0 22 18" fill="none">
            <rect x="1" y="4" width="20" height="13" rx="3" stroke="white" strokeWidth="1.6"/>
            <circle cx="11" cy="10.5" r="3.5" stroke="white" strokeWidth="1.6"/>
            <path d="M7.5 4l1.3-3h4.4l1.3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
            <circle cx="17.5" cy="7" r="1" fill="white"/>
          </svg>
        ].map((ic,i)=>(
          <div key={i} style={{width:50,height:50,borderRadius:"50%",
            background:"rgba(255,255,255,0.15)",
            backdropFilter:"blur(28px)",WebkitBackdropFilter:"blur(28px)",
            border:"1px solid rgba(255,255,255,0.14)",
            display:"flex",alignItems:"center",justifyContent:"center",
            boxShadow:"0 4px 16px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.18)"}}>
            {ic}
          </div>
        ))}
      </div>

      {/* home indicator */}
      <div style={{position:"absolute",bottom:8,left:"50%",transform:"translateX(-50%)",
        width:120,height:5,borderRadius:3,
        background:"rgba(255,255,255,0.30)",zIndex:10}}/>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
/**
 * @param {{ className?: string; size?: number; width?: number }} props
 */
export default function IPhoneMockup(props = {}) {
  const { className = "", size, width } = props;
  const [fy, setFy] = useState(0);
  const [frx, setFrx] = useState(2);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const rafRef = useRef(null);
  const targetWidth = size ?? width ?? 380;
  const scale = targetWidth / W;

  /* floating animation */
  useEffect(()=>{
    let start = null;
    const loop = (ts)=>{
      if(!start) start=ts;
      const t=(ts-start)/1000;
      setFy(Math.sin((t*Math.PI*2)/5.5)*9);
      setFrx(2+Math.sin((t*Math.PI*2)/7)*0.5);
      rafRef.current=requestAnimationFrame(loop);
    };
    rafRef.current=requestAnimationFrame(loop);
    return ()=>cancelAnimationFrame(rafRef.current);
  },[]);

  /* subtle mouse parallax */
  const handleMouse = (e)=>{
    const {left,top,width,height}=e.currentTarget.getBoundingClientRect();
    const x=((e.clientX-left)/width-0.5)*2;
    const y=((e.clientY-top)/height-0.5)*2;
    setMouseX(x); setMouseY(y);
  };
  const handleLeave=()=>{ setMouseX(0); setMouseY(0); };

  const tiltY = -7 + mouseX * 3;
  const tiltX =  frx - mouseY * 1.5;

  return (
    <div
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        display:"flex",alignItems:"center",justifyContent:"center",
        position:"relative",overflow:"visible",
        width: W * scale + 80,
        maxWidth:"100%",
      }}>
      {/* ── PHONE WRAPPER (float + perspective + parallax) ── */}
      <div style={{
        transform:`perspective(1400px) rotateY(${tiltY}deg) rotateX(${tiltX}deg) translateY(${fy}px) scale(${scale})`,
        willChange:"transform",
        transition:"transform 0.08s linear",
        padding:40,
        transformOrigin:"center center",
      }}>

        {/* ══ OUTER TITANIUM FRAME ══ */}
        <div style={{
          width:W, height:H,
          borderRadius:R,
          position:"relative",
          /* titanium brush gradient — light hits top-left */
          background:`linear-gradient(
            158deg,
            #3a3a3c 0%,
            #2c2c2e 12%,
            #1e1e20 28%,
            #252527 50%,
            #1c1c1e 65%,
            #2a2a2c 80%,
            #363638 100%
          )`,
          boxShadow:[
            /* rim light */
            "0 0 0 0.6px rgba(255,255,255,0.14)",
            /* inner inset edge */
            "inset 0 0 0 0.5px rgba(255,255,255,0.06)",
            /* tight contact shadow */
            "0 4px 10px rgba(0,0,0,0.22)",
            /* mid shadow */
            "0 20px 60px rgba(0,0,0,0.48)",
            /* deep ambient shadow */
            "0 60px 140px rgba(0,0,0,0.68)",
            /* colour-tinted glow */
            "0 0 80px rgba(60,40,160,0.12)",
          ].join(","),
        }}>

          {/* ── BRUSHED METAL TEXTURE overlay ── */}
          {/* horizontal micro-lines simulate brushed titanium */}
          <div style={{position:"absolute",inset:0,borderRadius:R,
            backgroundImage:`repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.015) 2px,
              rgba(255,255,255,0.015) 3px
            )`,
            pointerEvents:"none",zIndex:1}}/>

          {/* ── CHAMFERED EDGE HIGHLIGHTS ── */}
          {/* top-left edge — brightest (key light source) */}
          <div style={{position:"absolute",inset:0,borderRadius:R,
            background:`linear-gradient(
              135deg,
              rgba(255,255,255,0.22) 0%,
              rgba(255,255,255,0.08) 8%,
              transparent 22%,
              transparent 75%,
              rgba(255,255,255,0.05) 88%,
              rgba(255,255,255,0.10) 100%
            )`,
            pointerEvents:"none",zIndex:35}}/>

          {/* top edge thin specular */}
          <div style={{position:"absolute",top:0,left:R/2,right:R/2,height:1.5,
            background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.28),rgba(255,255,255,0.18),transparent)",
            borderRadius:1,pointerEvents:"none",zIndex:36}}/>

          {/* left edge thin specular */}
          <div style={{position:"absolute",left:0,top:R/2,bottom:R/2,width:1.5,
            background:"linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.08),transparent)",
            borderRadius:1,pointerEvents:"none",zIndex:36}}/>

          {/* bottom edge — darker (shadow side) */}
          <div style={{position:"absolute",bottom:0,left:R/2,right:R/2,height:1,
            background:"linear-gradient(90deg,transparent,rgba(0,0,0,0.5),transparent)",
            borderRadius:1,pointerEvents:"none",zIndex:36}}/>

          {/* ══ SCREEN ══ */}
          <div style={{
            position:"absolute",
            top:B,left:B,right:B,bottom:B,
            borderRadius:Ri,
            overflow:"hidden",
            background:"#000",
            /* screen sits in frame — depth shadow */
            boxShadow:"inset 0 0 0 0.5px rgba(0,0,0,1), inset 0 3px 12px rgba(0,0,0,0.7)",
          }}>
            <LockScreen/>

            {/* GLASS LAYER 1 — primary reflection (upper-left band) */}
            <div style={{position:"absolute",inset:0,borderRadius:Ri,
              background:`linear-gradient(
                138deg,
                rgba(255,255,255,0.072) 0%,
                rgba(255,255,255,0.028) 18%,
                transparent 42%,
                transparent 78%,
                rgba(255,255,255,0.018) 100%
              )`,
              pointerEvents:"none",zIndex:50}}/>

            {/* GLASS LAYER 2 — subtle full-surface tint (gives "depth") */}
            <div style={{position:"absolute",inset:0,borderRadius:Ri,
              background:"linear-gradient(180deg,rgba(80,70,160,0.04) 0%,transparent 60%)",
              pointerEvents:"none",zIndex:51}}/>

            {/* GLASS LAYER 3 — top-edge bright catch-light */}
            <div style={{position:"absolute",top:0,left:"18%",right:"18%",height:1.5,
              background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)",
              pointerEvents:"none",zIndex:52}}/>

            {/* SCREEN-FRAME SEAM */}
            <div style={{position:"absolute",inset:0,borderRadius:Ri,
              boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.95), inset 0 2px 14px rgba(0,0,0,0.65)",
              pointerEvents:"none",zIndex:53}}/>
          </div>

          {/* ── OVERALL PHONE GLOSS COAT ── */}
          {/* very subtle full-phone sheen, sits above everything */}
          <div style={{position:"absolute",inset:0,borderRadius:R,
            background:`radial-gradient(
              ellipse 70% 40% at 30% 20%,
              rgba(255,255,255,0.04) 0%,
              transparent 70%
            )`,
            pointerEvents:"none",zIndex:38}}/>

        </div>{/* /frame */}
      </div>{/* /float wrapper */}
    </div>
  );
}
