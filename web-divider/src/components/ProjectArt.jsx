// Converted from the Web Divider design canvas (ProjectArt.dc.html).
import React from 'react';
class ProjectArt extends React.Component {
  renderVals() {
    const v = this.props.variant ?? 'ecom';
    return {
      isEcom: v === 'ecom',
      isBrand: v === 'brand',
      isSocial: v === 'social',
      isVideo: v === 'video',
      isGrowth: v === 'growth',
      isBizweb: v === 'bizweb',
      isSocialsys: v === 'socialsys',
      isProduct: v === 'product'
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div className="wd-art-root" aria-hidden="true" style={{position: "absolute", inset: "0", overflow: "hidden", fontFamily: "Inter, system-ui, sans-serif", color: "#FFFFFF", backgroundColor: "#0B0E22"}}>
        {v.isEcom && (
          <>
            <div style={{position: "absolute", inset: "0", background: "radial-gradient(circle at 80% 10%, #7C3AED 0%, #312E81 35%, #0B0E22 75%)"}}>
              <div style={{position: "absolute", left: "7%", top: "12%", width: "70%", height: "76%", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "#0A0D1F", overflow: "hidden", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7)"}}>
                <div style={{height: "12%", minHeight: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5%", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: "0.12em"}}>
                    STORE
                  </span>
                  <span style={{display: "flex", gap: "6px", alignItems: "center"}}>
                    <span style={{width: "30px", height: "6px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.3)"}}></span>
                    <span style={{width: "30px", height: "6px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.3)"}}></span>
                    <span style={{width: "18px", height: "18px", borderRadius: "6px", background: "linear-gradient(135deg,#A78BFA,#60A5FA)"}}></span>
                  </span>
                </div>
                <div style={{padding: "5%", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "6%", height: "88%"}}>
                  <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                    <div style={{flex: "1", borderRadius: "10px", background: "radial-gradient(circle at 50% 45%, #C4B5FD 0 22%, #4C1D95 23% 100%)"}}></div>
                    <span style={{height: "6px", width: "80%", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.55)"}}></span>
                    <span style={{height: "6px", width: "40%", borderRadius: "3px", backgroundColor: "#A78BFA"}}></span>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                    <div style={{flex: "1", borderRadius: "10px", background: "radial-gradient(circle at 50% 45%, #93C5FD 0 22%, #1E3A8A 23% 100%)"}}></div>
                    <span style={{height: "6px", width: "70%", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.55)"}}></span>
                    <span style={{height: "6px", width: "35%", borderRadius: "3px", backgroundColor: "#60A5FA"}}></span>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                    <div style={{flex: "1", borderRadius: "10px", background: "radial-gradient(circle at 50% 45%, #F0ABFC 0 22%, #581C87 23% 100%)"}}></div>
                    <span style={{height: "6px", width: "75%", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.55)"}}></span>
                    <span style={{height: "6px", width: "45%", borderRadius: "3px", backgroundColor: "#A78BFA"}}></span>
                  </div>
                </div>
              </div>
              <div style={{position: "absolute", right: "7%", bottom: "10%", width: "22%", height: "62%", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.25)", backgroundColor: "#0A0D1F", padding: "3%", display: "flex", flexDirection: "column", gap: "6%", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7)"}}>
                <div style={{flex: "1", borderRadius: "10px", background: "radial-gradient(circle at 50% 45%, #C4B5FD 0 26%, #4C1D95 27% 100%)"}}></div>
                <span style={{height: "6px", width: "70%", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.55)"}}></span>
                <span style={{height: "18%", maxHeight: "26px", borderRadius: "999px", background: "linear-gradient(90deg,#8B5CF6,#3B82F6)"}}></span>
              </div>
            </div>
          </>
        )}
        {v.isBrand && (
          <>
            <div style={{position: "absolute", inset: "0", backgroundColor: "#0D0B1F", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gridTemplateRows: "repeat(2, minmax(0, 1fr))", gap: "3%", padding: "5%"}}>
              <div style={{gridColumn: "span 2", gridRow: "span 2", borderRadius: "16px", background: "linear-gradient(140deg, #6D28D9, #4338CA 55%, #1D4ED8)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6%"}}>
                <svg width="34%" viewBox="0 0 100 100" style={{maxWidth: "140px"}}>
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#FFFFFF" strokeWidth="6"></circle>
                  <path d="M28 34 L50 72 L72 34" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", letterSpacing: "0.3em", fontSize: "14px"}}>
                  YOUR BRAND
                </span>
              </div>
              <div style={{borderRadius: "16px", backgroundColor: "#F5F3FF", color: "#1E1B4B", display: "flex", flexDirection: "column", justifyContent: "center", padding: "10%"}}>
                <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1"}}>
                  Aa
                </span>
                <span style={{fontSize: "10px", letterSpacing: "0.14em", fontWeight: "600", marginTop: "6px"}}>
                  TYPEFACE
                </span>
              </div>
              <div style={{borderRadius: "16px", overflow: "hidden", display: "grid", gridTemplateRows: "repeat(4, minmax(0, 1fr))"}}>
                <span style={{backgroundColor: "#8B5CF6"}}></span>
                <span style={{backgroundColor: "#4F46E5"}}></span>
                <span style={{backgroundColor: "#3B82F6"}}></span>
                <span style={{backgroundColor: "#E0E7FF"}}></span>
              </div>
            </div>
          </>
        )}
        {v.isSocial && (
          <>
            <div style={{position: "absolute", inset: "0", background: "radial-gradient(circle at 50% 110%, #DB2777 0%, #6D28D9 35%, #1E1B4B 70%, #0B0E22 100%)"}}>
              <div style={{position: "absolute", left: "50%", top: "52%", width: "34%", aspectRatio: "4 / 5", transform: "translate(-112%, -50%) rotate(-12deg)", borderRadius: "14px", background: "linear-gradient(160deg, #F472B6, #8B5CF6)", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)"}}>
                <span style={{position: "absolute", left: "10%", bottom: "10%", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "18px", lineHeight: "1.05"}}>
                  NEW
                  <br />
                  DROP
                </span>
              </div>
              <div style={{position: "absolute", left: "50%", top: "50%", width: "34%", aspectRatio: "4 / 5", transform: "translate(-50%, -50%)", borderRadius: "14px", backgroundColor: "#0A0D1F", border: "1px solid rgba(255,255,255,0.3)", padding: "4%", display: "flex", flexDirection: "column", gap: "6%", boxShadow: "0 30px 50px -10px rgba(0,0,0,0.7)", zIndex: "2"}}>
                <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
                  <span style={{width: "18px", height: "18px", borderRadius: "50%", background: "linear-gradient(135deg,#F472B6,#8B5CF6)"}}></span>
                  <span style={{width: "50%", height: "6px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.5)"}}></span>
                </div>
                <div style={{flex: "1", borderRadius: "10px", background: "linear-gradient(135deg, #A78BFA, #3B82F6)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "22px"}}>
                    BE BOLD
                  </span>
                </div>
                <div style={{display: "flex", gap: "8px"}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F472B6">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                  <span style={{width: "16px", height: "16px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.6)"}}></span>
                  <span style={{width: "16px", height: "16px", borderRadius: "4px", border: "2px solid rgba(255,255,255,0.6)"}}></span>
                </div>
              </div>
              <div style={{position: "absolute", left: "50%", top: "52%", width: "34%", aspectRatio: "4 / 5", transform: "translate(12%, -50%) rotate(12deg)", borderRadius: "14px", background: "linear-gradient(160deg, #3B82F6, #1E1B4B)", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)"}}>
                <span style={{position: "absolute", right: "10%", top: "10%", width: "36%", aspectRatio: "1", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.85)"}}></span>
              </div>
            </div>
          </>
        )}
        {v.isVideo && (
          <>
            <div style={{position: "absolute", inset: "0", background: "linear-gradient(120deg, #0B0E22 0%, #3B0764 55%, #1E3A8A 100%)"}}>
              <div style={{position: "absolute", left: "10%", top: "8%", bottom: "8%", aspectRatio: "9 / 16", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.3)", background: "radial-gradient(circle at 40% 35%, #F0ABFC, #7C3AED 40%, #1E1B4B 100%)", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7)"}}>
                <span style={{position: "absolute", left: "50%", top: "45%", width: "44px", height: "44px", margin: "-22px 0 0 -22px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#4C1D95" style={{marginLeft: "3px"}}>
                    <path d="M6 4v16l14-8z"></path>
                  </svg>
                </span>
                <span style={{position: "absolute", left: "10%", right: "10%", bottom: "16%", height: "8px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.85)"}}></span>
                <span style={{position: "absolute", left: "10%", right: "30%", bottom: "10%", height: "8px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.5)"}}></span>
              </div>
              <div style={{position: "absolute", left: "calc(10% + 28%)", right: "7%", top: "18%", display: "flex", flexDirection: "column", gap: "12px"}}>
                <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: "0.18em", color: "#E9D5FF"}}>
                  EDIT TIMELINE
                </span>
                <div style={{display: "flex", gap: "4px", height: "30px"}}>
                  <span style={{flex: "3", borderRadius: "6px", backgroundColor: "rgba(167,139,250,0.75)"}}></span>
                  <span style={{flex: "2", borderRadius: "6px", backgroundColor: "rgba(96,165,250,0.75)"}}></span>
                  <span style={{flex: "4", borderRadius: "6px", backgroundColor: "rgba(192,132,252,0.7)"}}></span>
                </div>
                <div style={{display: "flex", gap: "4px", height: "22px"}}>
                  <span style={{flex: "2", borderRadius: "6px", backgroundColor: "rgba(244,114,182,0.6)"}}></span>
                  <span style={{flex: "5", borderRadius: "6px", backgroundColor: "rgba(244,114,182,0.35)"}}></span>
                </div>
                <div style={{display: "flex", gap: "4px", height: "16px"}}>
                  <span style={{flex: "7", borderRadius: "6px", backgroundColor: "rgba(52,211,153,0.45)"}}></span>
                </div>
                <div style={{display: "flex", gap: "8px", marginTop: "10px"}}>
                  <span style={{width: "30%", aspectRatio: "9 / 16", borderRadius: "10px", background: "linear-gradient(160deg,#A78BFA,#1E1B4B)"}}></span>
                  <span style={{width: "30%", aspectRatio: "9 / 16", borderRadius: "10px", background: "linear-gradient(160deg,#60A5FA,#1E1B4B)"}}></span>
                  <span style={{width: "30%", aspectRatio: "9 / 16", borderRadius: "10px", background: "linear-gradient(160deg,#F472B6,#1E1B4B)"}}></span>
                </div>
              </div>
            </div>
          </>
        )}
        {v.isGrowth && (
          <>
            <div style={{position: "absolute", inset: "0", background: "radial-gradient(circle at 20% 80%, #1D4ED8 0%, #0F172A 55%, #05060B 100%)"}}>
              <svg viewBox="0 0 400 200" preserveAspectRatio="none" style={{position: "absolute", left: "6%", right: "6%", top: "34%", width: "88%", height: "44%"}}>
                <defs>
                  <linearGradient id="gArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.5"></stop>
                    <stop offset="1" stopColor="#8B5CF6" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path d="M0,170 C60,160 90,120 140,128 C190,136 220,80 270,70 C320,60 350,40 400,20 L400,200 L0,200 Z" fill="url(#gArea)"></path>
                <path d="M0,170 C60,160 90,120 140,128 C190,136 220,80 270,70 C320,60 350,40 400,20" fill="none" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round"></path>
              </svg>
              <div style={{position: "absolute", left: "6%", top: "9%", display: "flex", gap: "10px", flexWrap: "wrap", right: "6%"}}>
                <span style={{padding: "8px 12px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", fontSize: "12px", fontWeight: "600"}}>
                  Awareness
                </span>
                <span style={{padding: "8px 12px", borderRadius: "10px", background: "linear-gradient(90deg,#8B5CF6,#3B82F6)", fontSize: "12px", fontWeight: "600"}}>
                  Engagement
                </span>
                <span style={{padding: "8px 12px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", fontSize: "12px", fontWeight: "600"}}>
                  Search · Social · Display
                </span>
              </div>
              <div style={{position: "absolute", right: "7%", bottom: "9%", width: "34%", padding: "12px", borderRadius: "14px", backgroundColor: "rgba(10,13,31,0.85)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", gap: "10px", alignItems: "center"}}>
                <span style={{width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg,#A78BFA,#60A5FA)", flexShrink: "0"}}></span>
                <span style={{display: "flex", flexDirection: "column", gap: "5px", flex: "1"}}>
                  <span style={{height: "6px", width: "80%", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.6)"}}></span>
                  <span style={{height: "6px", width: "50%", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.3)"}}></span>
                </span>
              </div>
            </div>
          </>
        )}
        {v.isBizweb && (
          <>
            <div style={{position: "absolute", inset: "0", background: "linear-gradient(160deg, #1E3A8A 0%, #0B1024 60%)"}}>
              <div style={{position: "absolute", left: "6%", right: "6%", top: "10%", bottom: "0", borderRadius: "16px 16px 0 0", border: "1px solid rgba(255,255,255,0.2)", borderBottom: "0", backgroundColor: "#F8FAFC", overflow: "hidden"}}>
                <div style={{height: "14%", minHeight: "26px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5%", borderBottom: "1px solid #E2E8F0"}}>
                  <span style={{width: "60px", height: "10px", borderRadius: "5px", backgroundColor: "#1E1B4B"}}></span>
                  <span style={{display: "flex", gap: "10px"}}>
                    <span style={{width: "34px", height: "6px", borderRadius: "3px", backgroundColor: "#94A3B8"}}></span>
                    <span style={{width: "34px", height: "6px", borderRadius: "3px", backgroundColor: "#94A3B8"}}></span>
                    <span style={{width: "34px", height: "6px", borderRadius: "3px", backgroundColor: "#94A3B8"}}></span>
                    <span style={{width: "54px", height: "16px", marginTop: "-5px", borderRadius: "999px", backgroundColor: "#4F46E5"}}></span>
                  </span>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "6%", padding: "6% 5%"}}>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <span style={{height: "14px", width: "90%", borderRadius: "6px", backgroundColor: "#1E1B4B"}}></span>
                    <span style={{height: "14px", width: "70%", borderRadius: "6px", backgroundColor: "#1E1B4B"}}></span>
                    <span style={{height: "7px", width: "85%", borderRadius: "4px", backgroundColor: "#94A3B8", marginTop: "6px"}}></span>
                    <span style={{height: "7px", width: "65%", borderRadius: "4px", backgroundColor: "#94A3B8"}}></span>
                    <span style={{height: "24px", width: "110px", borderRadius: "999px", background: "linear-gradient(90deg,#7C3AED,#3B82F6)", marginTop: "8px"}}></span>
                  </div>
                  <div style={{borderRadius: "14px", minHeight: "120px", background: "linear-gradient(135deg, #C7D2FE, #818CF8 50%, #4F46E5)"}}></div>
                </div>
              </div>
              <div style={{position: "absolute", right: "9%", bottom: "7%", width: "18%", height: "58%", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "#F8FAFC", padding: "3%", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)"}}>
                <span style={{height: "8px", width: "70%", borderRadius: "4px", backgroundColor: "#1E1B4B"}}></span>
                <span style={{flex: "1", borderRadius: "10px", background: "linear-gradient(135deg, #C7D2FE, #4F46E5)"}}></span>
                <span style={{height: "16px", borderRadius: "999px", background: "linear-gradient(90deg,#7C3AED,#3B82F6)"}}></span>
              </div>
            </div>
          </>
        )}
        {v.isSocialsys && (
          <>
            <div style={{position: "absolute", inset: "0", backgroundColor: "#0A0B1A", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <div style={{width: "66%", maxWidth: "360px", aspectRatio: "1", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "6px", transform: "rotate(-6deg)"}}>
                <span style={{borderRadius: "8px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)"}}></span>
                <span style={{borderRadius: "8px", backgroundColor: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#4C1D95", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "13px"}}>
                  TIP #1
                </span>
                <span style={{borderRadius: "8px", background: "radial-gradient(circle, #C4B5FD 0 30%, #312E81 31%)"}}></span>
                <span style={{borderRadius: "8px", backgroundColor: "#1E1B4B", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "22px", color: "#A78BFA"}}>
                  “
                </span>
                <span style={{borderRadius: "8px", background: "linear-gradient(135deg,#3B82F6,#1E3A8A)"}}></span>
                <span style={{borderRadius: "8px", backgroundColor: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#1D4ED8", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "13px"}}>
                  NEW
                </span>
                <span style={{borderRadius: "8px", background: "radial-gradient(circle at 30% 70%, #60A5FA 0 25%, #4C1D95 26%)"}}></span>
                <span style={{borderRadius: "8px", background: "linear-gradient(135deg,#A78BFA,#F472B6)"}}></span>
                <span style={{borderRadius: "8px", backgroundColor: "#1E1B4B", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "12px", color: "#93C5FD"}}>
                  SWIPE →
                </span>
              </div>
            </div>
          </>
        )}
        {v.isProduct && (
          <>
            <div style={{position: "absolute", inset: "0", background: "radial-gradient(circle at 50% 30%, #6D28D9 0%, #2E1065 40%, #0B0E22 80%)"}}>
              <div style={{position: "absolute", left: "22%", right: "22%", bottom: "10%", height: "14%", borderRadius: "50%", background: "linear-gradient(180deg, #312E81, #1E1B4B)", boxShadow: "0 0 60px rgba(139,92,246,0.5)"}}></div>
              <div style={{position: "absolute", left: "36%", bottom: "16%", width: "15%", height: "56%", borderRadius: "28px 28px 14px 14px", background: "linear-gradient(90deg, #E0E7FF, #FFFFFF 40%, #C7D2FE)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)"}}>
                <span style={{position: "absolute", left: "30%", right: "30%", top: "-10%", height: "12%", borderRadius: "6px", backgroundColor: "#4C1D95"}}></span>
                <span style={{position: "absolute", left: "10%", right: "10%", top: "38%", height: "30%", borderRadius: "8px", background: "linear-gradient(135deg,#7C3AED,#2563EB)"}}></span>
              </div>
              <div style={{position: "absolute", left: "50%", bottom: "16%", width: "18%", height: "40%", borderRadius: "12px", background: "linear-gradient(135deg, #7C3AED, #3B82F6)", border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)"}}>
                <svg width="40%" viewBox="0 0 100 100">
                  <path d="M24 30 L50 76 L76 30" fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <span style={{position: "absolute", left: "6%", top: "8%", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: "0.2em", color: "#E9D5FF"}}>
                PACKAGING · LABEL · IDENTITY
              </span>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ProjectArt;
