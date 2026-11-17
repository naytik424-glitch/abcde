// Converted from the Web Divider design canvas (Main.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, slide: 0 };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      if (!this.paused) this.setState({ slide: (this.state.slide + 1) % 3 });
    }, 7000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  renderVals() {
    const s = this.state.slide;
    const open = this.state.menuOpen;
    const go = (i) => () => { this.paused = true; this.setState({ slide: i }); };
    return {
      menuOpen: open,
      menuClosed: !open,
      menuOpenStr: open ? 'true' : 'false',
      menuLabel: open ? 'Close menu' : 'Open menu',
      toggleMenu: () => this.setState({ menuOpen: !open }),
      closeMenu: () => this.setState({ menuOpen: false }),
      show0: s === 0, show1: s === 1, show2: s === 2,
      prev: () => { this.paused = true; this.setState({ slide: (s + 2) % 3 }); },
      next: () => { this.paused = true; this.setState({ slide: (s + 1) % 3 }); },
      dots: [0, 1, 2].map((i) => ({
        go: go(i),
        label: 'Show testimonial ' + (i + 1),
        current: i === s ? 'true' : 'false',
        active: i === s,
        inactive: i !== s
      }))
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div className="page-home" id="top" style={{width: "100%", minHeight: "100vh", backgroundColor: "#05060B", color: "#EEF0FA", fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", lineHeight: "1.6", overflowX: "hidden", position: "relative"}}>
        <header style={{position: "sticky", top: "0", zIndex: "50", backgroundColor: "rgba(5,6,11,0.72)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", borderBottom: "1px solid rgba(255,255,255,0.07)"}}>
          <nav aria-label="Main navigation" style={{maxWidth: "1240px", margin: "0 auto", padding: "0 24px", height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px"}}>
            <a href="#top" aria-label="Web Divider home" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#FFFFFF"}}>
              <span aria-hidden="true" style={{width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px -8px rgba(124,92,255,.8)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                  <path d="M7 4 L12 20 L17 4"></path>
                </svg>
              </span>
              <span style={{fontFamily: "'Space Grotesk', Inter, sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em"}}>
                Web
                <span className="wd-grad-text">
                  Divider
                </span>
              </span>
            </a>
            <div className="wd-nav-links" style={{display: "flex", alignItems: "center", gap: "36px"}}>
              <a className="wd-nav-link" href="#top" aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                Home
              </a>
              <Link className="wd-nav-link" to="/about" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                About Us
              </Link>
              <Link className="wd-nav-link" to="/services" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                Services
              </Link>
              <Link className="wd-nav-link" to="/work" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                Our Work
              </Link>
              <Link className="wd-nav-link" to="/contact" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                Contact Us
              </Link>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
              <Link className="wd-btn wd-btn-primary wd-nav-cta" to="/contact" style={{display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 22px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                Let's Talk{" "}
                <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </Link>
              <button className="wd-burger" type="button" onClick={v.toggleMenu} aria-label={v.menuLabel} aria-expanded={v.menuOpenStr} style={{width: "44px", height: "44px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.04)", color: "#FFFFFF", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                {v.menuOpen && (
                  <>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M18 6 6 18"></path>
                      <path d="M6 6l12 12"></path>
                    </svg>
                  </>
                )}
                {v.menuClosed && (
                  <>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M4 6h16"></path>
                      <path d="M4 12h16"></path>
                      <path d="M4 18h16"></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </nav>
          {v.menuOpen && (
            <>
              <div className="wd-menu" style={{borderTop: "1px solid rgba(255,255,255,0.07)", backgroundColor: "rgba(8,10,22,0.97)", padding: "16px 24px 28px", display: "flex", flexDirection: "column", gap: "4px"}}>
                <a href="#top" onClick={v.closeMenu} style={{color: "#FFFFFF", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  Home
                </a>
                <Link to="/about" style={{color: "#D4D8E8", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  About Us
                </Link>
                <Link to="/services" onClick={v.closeMenu} style={{color: "#D4D8E8", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  Services
                </Link>
                <Link to="/work" style={{color: "#D4D8E8", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  Our Work
                </Link>
                <Link to="/contact" style={{color: "#D4D8E8", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  Contact Us
                </Link>
                <Link className="wd-btn wd-btn-primary" to="/contact" style={{marginTop: "16px", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "52px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                  Let's Talk
                </Link>
              </div>
            </>
          )}
        </header>
        <main>
          <section aria-labelledby="hero-title" style={{position: "relative", overflow: "hidden", padding: "96px 24px 112px"}}>
            <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", top: "-220px", left: "-160px", width: "640px", height: "640px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.35), rgba(139,92,246,0) 65%)", pointerEvents: "none"}}></div>
            <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", bottom: "-260px", right: "-120px", width: "720px", height: "720px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.28), rgba(59,130,246,0) 65%)", pointerEvents: "none", animationDelay: "-3s"}}></div>
            <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none"}}></div>
            <div style={{position: "relative", maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "56px", alignItems: "center"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "28px"}}>
                <div className="wd-enter" style={{display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", padding: "8px 16px 8px 10px", borderRadius: "999px", border: "1px solid rgba(167,139,250,0.3)", backgroundColor: "rgba(139,92,246,0.08)", fontSize: "13px", fontWeight: "500", color: "#D6CCFF", letterSpacing: "0.02em"}}>
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg,#A78BFA,#60A5FA)", boxShadow: "0 0 12px #8B5CF6"}}></span>
                  {" "}Digital Marketing Agency · US · UK · Canada · India{" "}
                </div>
                <h1 id="hero-title" className="wd-enter wd-d1" style={{margin: "0", fontFamily: "'Space Grotesk', Inter, sans-serif", fontWeight: "700", fontSize: "clamp(44px, 6.4vw, 88px)", lineHeight: "0.98", letterSpacing: "-0.04em", color: "#FFFFFF", textTransform: "uppercase"}}>
                  We turn ideas into{" "}
                  <span className="wd-grad-text">
                    digital growth.
                  </span>
                </h1>
                <p className="wd-enter wd-d2" style={{margin: "0", maxWidth: "540px", fontSize: "19px", lineHeight: "1.65", color: "#A9B0C9"}}>
                  From powerful digital strategies to creative experiences, we help brands stand out, connect with their audience, and grow their business.
                </p>
                <div className="wd-enter wd-d3" style={{display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "8px"}}>
                  <Link className="wd-btn wd-btn-primary" to="/services" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "16px"}}>
                    Explore Our Services{" "}
                    <svg className="wd-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                  <Link className="wd-btn wd-btn-ghost" to="/contact" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "16px"}}>
                    Let's Work Together
                  </Link>
                </div>
                <div className="wd-enter wd-d4" style={{display: "flex", flexWrap: "wrap", gap: "28px", marginTop: "20px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "14px", color: "#8D94AE"}}>
                  <span style={{display: "flex", alignItems: "center", gap: "8px"}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Strategy-first
                  </span>
                  <span style={{display: "flex", alignItems: "center", gap: "8px"}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Creative-led
                  </span>
                  <span style={{display: "flex", alignItems: "center", gap: "8px"}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Built to measure
                  </span>
                </div>
              </div>
              <div className="wd-enter wd-d2" aria-hidden="true" style={{position: "relative", height: "560px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg className="wd-spin" width="520" height="520" viewBox="0 0 520 520" style={{position: "absolute", maxWidth: "100%"}} aria-hidden="true">
                  <defs>
                    <linearGradient id="wdRing" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#A78BFA"></stop>
                      <stop offset="1" stopColor="#3B82F6" stopOpacity="0.1"></stop>
                    </linearGradient>
                  </defs>
                  <circle cx="260" cy="260" r="250" fill="none" stroke="url(#wdRing)" strokeWidth="1.2" strokeDasharray="2 10"></circle>
                  <circle cx="260" cy="10" r="6" fill="#A78BFA"></circle>
                </svg>
                <svg className="wd-spin-rev" width="420" height="420" viewBox="0 0 420 420" style={{position: "absolute", maxWidth: "90%"}} aria-hidden="true">
                  <ellipse cx="210" cy="210" rx="200" ry="200" fill="none" stroke="rgba(96,165,250,0.35)" strokeWidth="1"></ellipse>
                  <circle cx="410" cy="210" r="5" fill="#60A5FA"></circle>
                  <circle cx="10" cy="210" r="3" fill="#C4B5FD"></circle>
                </svg>
                <div className="wd-float" style={{position: "relative", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle at 32% 28%, #C9B8FF 0%, #8B5CF6 28%, #4338CA 58%, #0B1024 100%)", boxShadow: "0 0 120px 10px rgba(124,92,255,0.45), inset -30px -40px 80px rgba(5,6,11,0.8), inset 20px 20px 60px rgba(255,255,255,0.18)"}}>
                  <div style={{position: "absolute", inset: "0", borderRadius: "50%", background: "linear-gradient(115deg, transparent 46%, rgba(255,255,255,0.22) 49%, rgba(255,255,255,0.0) 52%, transparent 54%)"}}></div>
                  <div style={{position: "absolute", left: "50%", top: "-20px", bottom: "-20px", width: "2px", transform: "translateX(-50%) rotate(18deg)", background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.9), transparent)"}}></div>
                </div>
                <div className="wd-float-2" style={{position: "absolute", top: "54px", right: "2%", padding: "16px 18px", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.55)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 20px 50px -20px rgba(0,0,0,0.6)"}}>
                  <span style={{width: "38px", height: "38px", borderRadius: "11px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </span>
                  <span style={{display: "flex", flexDirection: "column", lineHeight: "1.25"}}>
                    <span style={{fontSize: "12px", color: "#8D94AE"}}>
                      Focus
                    </span>
                    <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "600", color: "#FFFFFF"}}>
                      Measurable growth
                    </span>
                  </span>
                </div>
                <div className="wd-float" style={{position: "absolute", bottom: "70px", left: "0", padding: "16px 18px", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.55)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", display: "flex", flexDirection: "column", gap: "10px", width: "210px", animationDelay: "-3s", boxShadow: "0 20px 50px -20px rgba(0,0,0,0.6)"}}>
                  <span style={{fontSize: "12px", color: "#8D94AE"}}>
                    Channel mix
                  </span>
                  <span style={{display: "flex", alignItems: "flex-end", gap: "6px", height: "48px"}}>
                    <span style={{flex: "1", height: "40%", borderRadius: "4px", background: "rgba(167,139,250,0.45)"}}></span>
                    <span style={{flex: "1", height: "65%", borderRadius: "4px", background: "rgba(167,139,250,0.65)"}}></span>
                    <span style={{flex: "1", height: "52%", borderRadius: "4px", background: "rgba(124,156,255,0.7)"}}></span>
                    <span style={{flex: "1", height: "85%", borderRadius: "4px", background: "linear-gradient(180deg,#A78BFA,#3B82F6)"}}></span>
                    <span style={{flex: "1", height: "100%", borderRadius: "4px", background: "linear-gradient(180deg,#C4B5FD,#60A5FA)"}}></span>
                  </span>
                  <span style={{display: "flex", gap: "6px", flexWrap: "wrap", fontSize: "11px", color: "#C9CEE0"}}>
                    <span>
                      SEO
                    </span>
                    <span>
                      ·
                    </span>
                    <span>
                      Social
                    </span>
                    <span>
                      ·
                    </span>
                    <span>
                      Ads
                    </span>
                  </span>
                </div>
                <div className="wd-float-2" style={{position: "absolute", bottom: "16px", right: "12%", padding: "10px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", fontSize: "13px", fontWeight: "500", color: "#E4E0FF", display: "flex", alignItems: "center", gap: "8px"}}>
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#34D399", boxShadow: "0 0 10px #34D399"}}></span>
                  Strategy · Creative · Tech{" "}
                </div>
              </div>
            </div>
          </section>
          <section aria-labelledby="brands-title" style={{padding: "40px 0 56px", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#070915"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto 28px", padding: "0 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "12px"}}>
              <h2 id="brands-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.22em", color: "#A9B0C9"}}>
                BUILT FOR AMBITIOUS BRANDS
              </h2>
              <p style={{margin: "0", fontSize: "12px", color: "#7F86A0"}}>
                Placeholder names for illustration. Not real clients.
              </p>
            </div>
            <div style={{overflow: "hidden", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)"}}>
              <div className="wd-marquee" style={{display: "flex", gap: "72px", width: "max-content", alignItems: "center", fontFamily: "'Space Grotesk', sans-serif", fontSize: "26px", fontWeight: "600", color: "rgba(238,240,250,0.42)", letterSpacing: "-0.01em", whiteSpace: "nowrap"}}>
                <span>
                  [ Brand One ]
                </span>
                <span style={{fontStyle: "italic"}}>
                  Startup Co.
                </span>
                <span>
                  ◆ Your Store
                </span>
                <span style={{letterSpacing: "0.2em", fontSize: "20px"}}>
                  BRANDNAME
                </span>
                <span>
                  Founder Studio
                </span>
                <span>
                  ● Placeholder
                </span>
                <span style={{fontStyle: "italic"}}>
                  Next Client
                </span>
                <span aria-hidden="true">
                  [ Brand One ]
                </span>
                <span aria-hidden="true" style={{fontStyle: "italic"}}>
                  Startup Co.
                </span>
                <span aria-hidden="true">
                  ◆ Your Store
                </span>
                <span aria-hidden="true" style={{letterSpacing: "0.2em", fontSize: "20px"}}>
                  BRANDNAME
                </span>
                <span aria-hidden="true">
                  Founder Studio
                </span>
                <span aria-hidden="true">
                  ● Placeholder
                </span>
                <span aria-hidden="true" style={{fontStyle: "italic"}}>
                  Next Client
                </span>
              </div>
            </div>
          </section>
          <section id="about" aria-labelledby="about-title" style={{padding: "128px 24px", scrollMarginTop: "76px"}}>
            <div className="wd-reveal" style={{maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "72px", alignItems: "center"}}>
              <div aria-hidden="true" style={{position: "relative", height: "480px", borderRadius: "28px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0B1024"}}>
                <div className="wd-shift" style={{position: "absolute", inset: "0", background: "linear-gradient(135deg, #0B1024 0%, #2A1B6B 35%, #1E3A8A 65%, #0B1024 100%)"}}></div>
                <div style={{position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)", backgroundSize: "22px 22px", opacity: "0.5"}}></div>
                <div style={{position: "absolute", left: "50%", top: "0", bottom: "0", width: "1px", background: "linear-gradient(180deg, transparent, rgba(196,181,253,0.9), transparent)"}}></div>
                <div className="wd-float" style={{position: "absolute", left: "12%", top: "18%", width: "34%", aspectRatio: "1", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.06)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)"}}></div>
                <div className="wd-float-2" style={{position: "absolute", right: "12%", bottom: "16%", width: "38%", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #C4B5FD, #7C3AED 45%, #1E1B4B 100%)", boxShadow: "0 0 80px rgba(139,92,246,0.5)"}}></div>
                <div style={{position: "absolute", left: "24px", bottom: "24px", padding: "10px 16px", borderRadius: "12px", backgroundColor: "rgba(5,6,11,0.55)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", letterSpacing: "0.16em", color: "#D6CCFF"}}>
                  STRATEGY | CREATIVITY | TECHNOLOGY
                </div>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "24px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  ABOUT WEB DIVIDER
                </span>
                <h2 id="about-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.03em", color: "#FFFFFF", textTransform: "uppercase"}}>
                  We don't just build brands.{" "}
                  <span className="wd-grad-text">
                    We build digital momentum.
                  </span>
                </h2>
                <p style={{margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#D4D8E8"}}>
                  Web Divider is a creative digital marketing agency focused on helping businesses build a stronger online presence through strategy, creativity, and technology.
                </p>
                <p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#A9B0C9"}}>
                  We partner with startups, growing businesses, e-commerce brands and personal brands across the US, UK, Canada and India. Every engagement starts with understanding your goals, then we design the campaigns, content and digital experiences that move you toward them.
                </p>
                <Link className="wd-btn wd-btn-ghost" to="/about" style={{alignSelf: "flex-start", marginTop: "8px", display: "inline-flex", alignItems: "center", gap: "10px", height: "52px", padding: "0 26px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                  Discover More{" "}
                  <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
          <section id="services" aria-labelledby="services-title" style={{padding: "128px 24px", background: "linear-gradient(180deg, #05060B 0%, #090C1E 50%, #05060B 100%)", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "56px"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "640px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                    OUR SERVICES
                  </span>
                  <h2 id="services-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    WHAT WE DO{" "}
                    <span className="wd-grad-text">
                      BEST
                    </span>
                  </h2>
                </div>
                <p style={{margin: "0", maxWidth: "420px", color: "#A9B0C9"}}>
                  Six connected disciplines, one team. We combine them into a single growth plan built around your brand.
                </p>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "20px"}}>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "-0.01em"}}>
                    Social Media Marketing
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", flexGrow: "1"}}>
                    Platform strategy, content calendars and community management that turn followers into a loyal audience.
                  </p>
                  <a className="wd-link" href="#contact" aria-label="Learn more about Social Media Marketing" style={{display: "inline-flex", alignItems: "center", gap: "8px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Learn More{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "-0.01em"}}>
                    Website Design &amp; Development
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", flexGrow: "1"}}>
                    Fast, responsive, conversion-focused websites that look premium and are easy for you to manage.
                  </p>
                  <a className="wd-link" href="#contact" aria-label="Learn more about Website Design and Development" style={{display: "inline-flex", alignItems: "center", gap: "8px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Learn More{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "-0.01em"}}>
                    SEO (Search Engine Optimization)
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", flexGrow: "1"}}>
                    Technical, on-page and content SEO that helps the right customers find you on search, organically.
                  </p>
                  <a className="wd-link" href="#contact" aria-label="Learn more about SEO" style={{display: "inline-flex", alignItems: "center", gap: "8px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Learn More{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "-0.01em"}}>
                    Content Creation
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", flexGrow: "1"}}>
                    Scroll-stopping videos, graphics and copy crafted for every platform and every stage of the funnel.
                  </p>
                  <a className="wd-link" href="#contact" aria-label="Learn more about Content Creation" style={{display: "inline-flex", alignItems: "center", gap: "8px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Learn More{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "-0.01em"}}>
                    Paid Advertising
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", flexGrow: "1"}}>
                    Targeted campaigns on Google, Meta and more, tested and optimised to make every budget work harder.
                  </p>
                  <a className="wd-link" href="#contact" aria-label="Learn more about Paid Advertising" style={{display: "inline-flex", alignItems: "center", gap: "8px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Learn More{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "-0.01em"}}>
                    Branding &amp; Creative Design
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", flexGrow: "1"}}>
                    Logos, visual identities and brand systems that make you instantly recognisable and memorable.
                  </p>
                  <a className="wd-link" href="#contact" aria-label="Learn more about Branding and Creative Design" style={{display: "inline-flex", alignItems: "center", gap: "8px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Learn More{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </article>
              </div>
            </div>
          </section>
          <section id="why" aria-labelledby="why-title" style={{padding: "128px 24px", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginBottom: "56px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  WHY WEB DIVIDER
                </span>
                <h2 id="why-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  WHY BRANDS{" "}
                  <span className="wd-grad-text">
                    CHOOSE US
                  </span>
                </h2>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px"}}>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.5)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#7F86A0"}}>
                    01
                  </span>
                  <span className="wd-icon" style={{width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "21px", fontWeight: "600", color: "#FFFFFF"}}>
                    Creative Thinking
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Fresh ideas that cut through the noise and give your brand a voice people remember.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.5)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#7F86A0"}}>
                    02
                  </span>
                  <span className="wd-icon" style={{width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 3v18h18"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "21px", fontWeight: "600", color: "#FFFFFF"}}>
                    Data-Driven Strategies
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Every decision is guided by research, analytics and continuous testing, not guesswork.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.5)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#7F86A0"}}>
                    03
                  </span>
                  <span className="wd-icon" style={{width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 21v-7"></path>
                      <path d="M4 10V3"></path>
                      <path d="M12 21v-9"></path>
                      <path d="M12 8V3"></path>
                      <path d="M20 21v-5"></path>
                      <path d="M20 12V3"></path>
                      <path d="M1 14h6"></path>
                      <path d="M9 8h6"></path>
                      <path d="M17 16h6"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "21px", fontWeight: "600", color: "#FFFFFF"}}>
                    Customized Solutions
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    No one-size-fits-all packages. Plans are shaped around your market, goals and budget.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.5)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#7F86A0"}}>
                    04
                  </span>
                  <span className="wd-icon" style={{width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "21px", fontWeight: "600", color: "#FFFFFF"}}>
                    Growth-Focused Approach
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    We measure success by your results: more reach, more leads and more revenue.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="work" aria-labelledby="work-title" style={{padding: "128px 24px", backgroundColor: "#070915", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "56px"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                    OUR SELECTED WORK
                  </span>
                  <h2 id="work-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    SELECTED WORK.{" "}
                    <span className="wd-grad-text">
                      REAL CREATIVITY.
                    </span>
                  </h2>
                </div>
                <p style={{margin: "0", maxWidth: "380px", color: "#A9B0C9", fontSize: "15px"}}>
                  The projects below are sample concepts that show our style and approach. They are not client work.
                </p>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 520px), 1fr))", gap: "24px"}}>
                <article className="wd-work wd-reveal" style={{borderRadius: "28px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0B0E22"}}>
                  <div style={{position: "relative", height: "340px", overflow: "hidden"}}>
                    <div className="wd-work-art" aria-hidden="true" style={{position: "absolute", inset: "0", background: "radial-gradient(circle at 70% 30%, #A78BFA 0%, #6D28D9 25%, #1E1B4B 60%, #0B0E22 100%)"}}>
                      <div style={{position: "absolute", left: "10%", top: "22%", width: "46%", height: "56%", borderRadius: "18px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)"}}></div>
                      <div style={{position: "absolute", left: "16%", top: "32%", width: "30%", height: "10px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.6)"}}></div>
                      <div style={{position: "absolute", left: "16%", top: "40%", width: "22%", height: "10px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.3)"}}></div>
                      <div style={{position: "absolute", right: "12%", bottom: "18%", width: "120px", height: "120px", borderRadius: "50%", background: "linear-gradient(135deg,#C4B5FD,#3B82F6)"}}></div>
                    </div>
                    <span style={{position: "absolute", top: "20px", left: "20px", padding: "6px 12px", borderRadius: "999px", backgroundColor: "rgba(5,6,11,0.7)", border: "1px solid rgba(255,255,255,0.15)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", color: "#FDE68A"}}>
                      SAMPLE PROJECT
                    </span>
                  </div>
                  <div style={{padding: "28px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
                      <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", color: "#A78BFA"}}>
                        BRANDING &amp; IDENTITY
                      </span>
                      <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: "600", color: "#FFFFFF"}}>
                        Lumen: Brand Identity Concept
                      </h3>
                    </div>
                    <Link className="wd-btn wd-btn-ghost" to="/work" aria-label="View project: Lumen brand identity concept" style={{display: "inline-flex", alignItems: "center", gap: "8px", height: "46px", padding: "0 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "14px", backgroundColor: "rgba(255,255,255,0.03)"}}>
                      View Project{" "}
                      <svg className="wd-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </Link>
                  </div>
                </article>
                <article className="wd-work wd-reveal" style={{borderRadius: "28px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0B0E22"}}>
                  <div style={{position: "relative", height: "340px", overflow: "hidden"}}>
                    <div className="wd-work-art" aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(150deg, #0B1024 0%, #1E3A8A 50%, #3B82F6 100%)"}}>
                      <div style={{position: "absolute", left: "12%", right: "12%", top: "16%", bottom: "0", borderRadius: "16px 16px 0 0", backgroundColor: "#0B1024", border: "1px solid rgba(255,255,255,0.18)", boxShadow: "0 -20px 60px rgba(0,0,0,0.35)"}}></div>
                      <div style={{position: "absolute", left: "12%", right: "12%", top: "16%", height: "30px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: "6px", padding: "10px 14px"}}>
                        <span style={{width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#F87171"}}></span>
                        <span style={{width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#FBBF24"}}></span>
                        <span style={{width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#34D399"}}></span>
                      </div>
                      <div style={{position: "absolute", left: "18%", top: "34%", width: "40%", height: "16px", borderRadius: "6px", background: "linear-gradient(90deg,#A78BFA,#60A5FA)"}}></div>
                      <div style={{position: "absolute", left: "18%", top: "44%", width: "28%", height: "10px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.25)"}}></div>
                      <div style={{position: "absolute", left: "18%", top: "58%", width: "64%", height: "30%", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.06)"}}></div>
                    </div>
                    <span style={{position: "absolute", top: "20px", left: "20px", padding: "6px 12px", borderRadius: "999px", backgroundColor: "rgba(5,6,11,0.7)", border: "1px solid rgba(255,255,255,0.15)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", color: "#FDE68A"}}>
                      SAMPLE PROJECT
                    </span>
                  </div>
                  <div style={{padding: "28px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
                      <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", color: "#A78BFA"}}>
                        WEB DESIGN &amp; DEVELOPMENT
                      </span>
                      <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: "600", color: "#FFFFFF"}}>
                        Orbit: E-commerce Store Concept
                      </h3>
                    </div>
                    <Link className="wd-btn wd-btn-ghost" to="/work" aria-label="View project: Orbit e-commerce store concept" style={{display: "inline-flex", alignItems: "center", gap: "8px", height: "46px", padding: "0 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "14px", backgroundColor: "rgba(255,255,255,0.03)"}}>
                      View Project{" "}
                      <svg className="wd-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </Link>
                  </div>
                </article>
                <article className="wd-work wd-reveal" style={{borderRadius: "28px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0B0E22"}}>
                  <div style={{position: "relative", height: "340px", overflow: "hidden"}}>
                    <div className="wd-work-art" aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(200deg, #312E81 0%, #0B1024 55%, #05060B 100%)"}}>
                      <div style={{position: "absolute", left: "14%", top: "14%", width: "26%", height: "72%", borderRadius: "22px", background: "linear-gradient(180deg,#8B5CF6,#3B82F6)", transform: "rotate(-6deg)", border: "1px solid rgba(255,255,255,0.25)"}}></div>
                      <div style={{position: "absolute", left: "38%", top: "10%", width: "26%", height: "72%", borderRadius: "22px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(6px)"}}></div>
                      <div style={{position: "absolute", left: "62%", top: "16%", width: "26%", height: "72%", borderRadius: "22px", background: "linear-gradient(180deg,#1E3A8A,#6D28D9)", transform: "rotate(6deg)", border: "1px solid rgba(255,255,255,0.2)"}}></div>
                    </div>
                    <span style={{position: "absolute", top: "20px", left: "20px", padding: "6px 12px", borderRadius: "999px", backgroundColor: "rgba(5,6,11,0.7)", border: "1px solid rgba(255,255,255,0.15)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", color: "#FDE68A"}}>
                      SAMPLE PROJECT
                    </span>
                  </div>
                  <div style={{padding: "28px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
                      <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", color: "#A78BFA"}}>
                        SOCIAL MEDIA &amp; CONTENT
                      </span>
                      <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: "600", color: "#FFFFFF"}}>
                        Pulse: Social Campaign Concept
                      </h3>
                    </div>
                    <Link className="wd-btn wd-btn-ghost" to="/work" aria-label="View project: Pulse social campaign concept" style={{display: "inline-flex", alignItems: "center", gap: "8px", height: "46px", padding: "0 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "14px", backgroundColor: "rgba(255,255,255,0.03)"}}>
                      View Project{" "}
                      <svg className="wd-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </Link>
                  </div>
                </article>
                <article className="wd-work wd-reveal" style={{borderRadius: "28px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0B0E22"}}>
                  <div style={{position: "relative", height: "340px", overflow: "hidden"}}>
                    <div className="wd-work-art" aria-hidden="true" style={{position: "absolute", inset: "0", background: "radial-gradient(circle at 25% 75%, #60A5FA 0%, #4338CA 30%, #0B1024 70%)"}}>
                      <svg viewBox="0 0 400 200" preserveAspectRatio="none" style={{position: "absolute", left: "8%", right: "8%", bottom: "18%", width: "84%", height: "50%"}} aria-hidden="true">
                        <polyline points="0,170 60,140 120,150 180,100 240,110 300,60 360,40 400,20" fill="none" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></polyline>
                        <polyline points="0,190 80,175 160,170 240,150 320,130 400,110" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="6 6"></polyline>
                      </svg>
                      <div style={{position: "absolute", right: "10%", top: "16%", padding: "14px 18px", borderRadius: "14px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "600"}}>
                        Search &amp; Ads
                      </div>
                    </div>
                    <span style={{position: "absolute", top: "20px", left: "20px", padding: "6px 12px", borderRadius: "999px", backgroundColor: "rgba(5,6,11,0.7)", border: "1px solid rgba(255,255,255,0.15)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", color: "#FDE68A"}}>
                      SAMPLE PROJECT
                    </span>
                  </div>
                  <div style={{padding: "28px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
                      <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", color: "#A78BFA"}}>
                        SEO &amp; PAID ADVERTISING
                      </span>
                      <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: "600", color: "#FFFFFF"}}>
                        Vertex: Growth Campaign Concept
                      </h3>
                    </div>
                    <Link className="wd-btn wd-btn-ghost" to="/work" aria-label="View project: Vertex growth campaign concept" style={{display: "inline-flex", alignItems: "center", gap: "8px", height: "46px", padding: "0 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "14px", backgroundColor: "rgba(255,255,255,0.03)"}}>
                      View Project{" "}
                      <svg className="wd-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </Link>
                  </div>
                </article>
              </div>
              <div className="wd-reveal" style={{display: "flex", justifyContent: "center", marginTop: "48px"}}>
                <Link className="wd-btn wd-btn-primary" to="/work" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 30px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                  Explore All Projects{" "}
                  <svg className="wd-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
          <section aria-labelledby="stats-title" style={{padding: "112px 24px"}}>
            <div className="wd-reveal" style={{position: "relative", maxWidth: "1240px", margin: "0 auto", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(167,139,250,0.25)", padding: "64px 40px"}}>
              <div className="wd-shift" aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(120deg, rgba(139,92,246,0.22), rgba(11,16,36,0.9) 40%, rgba(59,130,246,0.22))"}}></div>
              <div style={{position: "relative", display: "flex", flexDirection: "column", gap: "40px"}}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px"}}>
                  <h2 id="stats-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.02em"}}>
                    Results that speak for themselves
                  </h2>
                  <span style={{padding: "6px 14px", borderRadius: "999px", border: "1px dashed rgba(253,230,138,0.6)", color: "#FDE68A", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em"}}>
                    PLACEHOLDER VALUES. REPLACE WITH REAL DATA
                  </span>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "24px"}}>
                  <div style={{display: "flex", flexDirection: "column", gap: "6px", paddingLeft: "20px", borderLeft: "1px solid rgba(255,255,255,0.15)"}}>
                    <span className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "60px", fontWeight: "700", lineHeight: "1", letterSpacing: "-0.03em"}}>
                      [00]+
                    </span>
                    <span style={{color: "#D4D8E8", fontWeight: "500"}}>
                      Projects Completed
                    </span>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "6px", paddingLeft: "20px", borderLeft: "1px solid rgba(255,255,255,0.15)"}}>
                    <span className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "60px", fontWeight: "700", lineHeight: "1", letterSpacing: "-0.03em"}}>
                      [00]+
                    </span>
                    <span style={{color: "#D4D8E8", fontWeight: "500"}}>
                      Brands Supported
                    </span>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "6px", paddingLeft: "20px", borderLeft: "1px solid rgba(255,255,255,0.15)"}}>
                    <span className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "60px", fontWeight: "700", lineHeight: "1", letterSpacing: "-0.03em"}}>
                      [00]
                    </span>
                    <span style={{color: "#D4D8E8", fontWeight: "500"}}>
                      Industries Served
                    </span>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "6px", paddingLeft: "20px", borderLeft: "1px solid rgba(255,255,255,0.15)"}}>
                    <span className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "60px", fontWeight: "700", lineHeight: "1", letterSpacing: "-0.03em"}}>
                      [00]%
                    </span>
                    <span style={{color: "#D4D8E8", fontWeight: "500"}}>
                      Client Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-labelledby="testi-title" style={{padding: "96px 24px 128px"}}>
            <div style={{maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  CLIENT TESTIMONIALS
                </span>
                <h2 id="testi-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  WHAT PEOPLE{" "}
                  <span className="wd-grad-text">
                    SAY
                  </span>
                </h2>
              </div>
              <div className="wd-reveal" role="region" aria-roledescription="carousel" aria-label="Sample testimonials" style={{width: "100%", position: "relative", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", padding: "clamp(32px, 5vw, 64px)"}}>
                <span style={{position: "absolute", top: "24px", right: "24px", padding: "6px 12px", borderRadius: "999px", border: "1px dashed rgba(253,230,138,0.6)", color: "#FDE68A", fontSize: "11px", fontWeight: "600", letterSpacing: "0.08em"}}>
                  SAMPLE CONTENT
                </span>
                <span aria-hidden="true" className="wd-grad-text" style={{display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "96px", lineHeight: "0.6", height: "48px"}}>
                  “
                </span>
                <div aria-live="polite" style={{minHeight: "210px"}}>
                  {v.show0 && (
                    <>
                      <figure className="wd-menu" style={{margin: "0", display: "flex", flexDirection: "column", gap: "28px"}}>
                        <blockquote style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: "1.4", color: "#FFFFFF", fontWeight: "500"}}>
                          Web Divider brought clarity to our launch. The strategy was sharp, the creative felt premium, and the whole process was easy to follow.
                        </blockquote>
                        <figcaption style={{display: "flex", alignItems: "center", gap: "14px"}}>
                          <span aria-hidden="true" style={{width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", color: "#FFFFFF"}}>
                            A
                          </span>
                          <span style={{display: "flex", flexDirection: "column", lineHeight: "1.3"}}>
                            <span style={{color: "#FFFFFF", fontWeight: "600"}}>
                              [Client Name]
                            </span>
                            <span style={{color: "#8D94AE", fontSize: "14px"}}>
                              Founder, [Startup Name]
                            </span>
                          </span>
                        </figcaption>
                      </figure>
                    </>
                  )}
                  {v.show1 && (
                    <>
                      <figure className="wd-menu" style={{margin: "0", display: "flex", flexDirection: "column", gap: "28px"}}>
                        <blockquote style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: "1.4", color: "#FFFFFF", fontWeight: "500"}}>
                          Our new website finally reflects the quality of our products. The team listened carefully and delivered something we're proud to share.
                        </blockquote>
                        <figcaption style={{display: "flex", alignItems: "center", gap: "14px"}}>
                          <span aria-hidden="true" style={{width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg,#6366F1,#60A5FA)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", color: "#FFFFFF"}}>
                            B
                          </span>
                          <span style={{display: "flex", flexDirection: "column", lineHeight: "1.3"}}>
                            <span style={{color: "#FFFFFF", fontWeight: "600"}}>
                              [Client Name]
                            </span>
                            <span style={{color: "#8D94AE", fontSize: "14px"}}>
                              Owner, [E-commerce Brand]
                            </span>
                          </span>
                        </figcaption>
                      </figure>
                    </>
                  )}
                  {v.show2 && (
                    <>
                      <figure className="wd-menu" style={{margin: "0", display: "flex", flexDirection: "column", gap: "28px"}}>
                        <blockquote style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: "1.4", color: "#FFFFFF", fontWeight: "500"}}>
                          Consistent content, clear reporting and a team that genuinely cares about growth. Exactly what a personal brand needs.
                        </blockquote>
                        <figcaption style={{display: "flex", alignItems: "center", gap: "14px"}}>
                          <span aria-hidden="true" style={{width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg,#A78BFA,#7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", color: "#FFFFFF"}}>
                            C
                          </span>
                          <span style={{display: "flex", flexDirection: "column", lineHeight: "1.3"}}>
                            <span style={{color: "#FFFFFF", fontWeight: "600"}}>
                              [Client Name]
                            </span>
                            <span style={{color: "#8D94AE", fontSize: "14px"}}>
                              Creator, [Personal Brand]
                            </span>
                          </span>
                        </figcaption>
                      </figure>
                    </>
                  )}
                </div>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", marginTop: "36px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.08)"}}>
                  <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                    {(v.dots || []).map((d, i1) => (
                      <React.Fragment key={i1}>
                        <button type="button" onClick={d.go} aria-label={d.label} aria-current={d.current} style={{width: "44px", height: "44px", border: "0", backgroundColor: "transparent", padding: "0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                          {d.active && (
                            <>
                              <span style={{display: "block", width: "32px", height: "8px", borderRadius: "999px", background: "linear-gradient(90deg,#8B5CF6,#3B82F6)"}}></span>
                            </>
                          )}
                          {d.inactive && (
                            <>
                              <span style={{display: "block", width: "8px", height: "8px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.3)"}}></span>
                            </>
                          )}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                  <div style={{display: "flex", gap: "10px"}}>
                    <button className="wd-btn wd-btn-ghost" type="button" onClick={v.prev} aria-label="Previous testimonial" style={{width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </button>
                    <button className="wd-btn wd-btn-primary" type="button" onClick={v.next} aria-label="Next testimonial" style={{width: "48px", height: "48px", borderRadius: "50%", border: "0", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="start" aria-labelledby="cta-title" style={{padding: "0 24px 128px"}}>
            <div className="wd-reveal" style={{position: "relative", maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", overflow: "hidden", padding: "clamp(56px, 8vw, 112px) 32px", textAlign: "center"}}>
              <div className="wd-shift" aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(120deg, #5B21B6, #4338CA, #1D4ED8, #7C3AED)"}}></div>
              <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "26px 26px", opacity: "0.35"}}></div>
              <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", top: "-40%", left: "50%", width: "700px", height: "700px", marginLeft: "-350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.25), rgba(255,255,255,0) 60%)"}}></div>
              <div style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}>
                <h2 id="cta-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(40px, 6vw, 84px)", lineHeight: "0.98", letterSpacing: "-0.04em", color: "#FFFFFF"}}>
                  READY TO GROW
                  <br />
                  YOUR BRAND?
                </h2>
                <p style={{margin: "0", maxWidth: "520px", fontSize: "19px", color: "#EDE9FE"}}>
                  Let's turn your next big idea into something extraordinary.
                </p>
                <Link className="wd-btn" to="/contact" style={{marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "10px", height: "60px", padding: "0 34px", borderRadius: "999px", backgroundColor: "#FFFFFF", color: "#1E1B4B", textDecoration: "none", fontWeight: "700", fontSize: "17px", boxShadow: "0 18px 50px -12px rgba(5,6,11,0.6)"}}>
                  Start Your Project{" "}
                  <svg className="wd-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer id="contact" style={{borderTop: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#04050A", padding: "80px 24px 32px", scrollMarginTop: "76px"}}>
          <div style={{maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "48px"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "18px", gridColumn: "span 1", minWidth: "0"}}>
              <a href="#top" aria-label="Web Divider home" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#FFFFFF"}}>
                <span aria-hidden="true" style={{width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M7 4 L12 20 L17 4"></path>
                  </svg>
                </span>
                <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "20px"}}>
                  Web
                  <span className="wd-grad-text">
                    Divider
                  </span>
                </span>
              </a>
              <p style={{margin: "0", color: "#8D94AE", fontSize: "15px"}}>
                A creative digital marketing agency helping ambitious brands grow through strategy, creativity and technology.
              </p>
              <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
                <a className="wd-btn wd-btn-ghost" href="#" aria-label="Instagram (add your profile link)" style={{height: "44px", padding: "0 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", color: "#D4D8E8", textDecoration: "none", fontSize: "13px", fontWeight: "600"}}>
                  Instagram
                </a>
                <a className="wd-btn wd-btn-ghost" href="#" aria-label="LinkedIn (add your profile link)" style={{height: "44px", padding: "0 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", color: "#D4D8E8", textDecoration: "none", fontSize: "13px", fontWeight: "600"}}>
                  LinkedIn
                </a>
                <a className="wd-btn wd-btn-ghost" href="#" aria-label="X (add your profile link)" style={{height: "44px", padding: "0 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", color: "#D4D8E8", textDecoration: "none", fontSize: "13px", fontWeight: "600"}}>
                  X
                </a>
                <a className="wd-btn wd-btn-ghost" href="#" aria-label="Facebook (add your profile link)" style={{height: "44px", padding: "0 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", color: "#D4D8E8", textDecoration: "none", fontSize: "13px", fontWeight: "600"}}>
                  Facebook
                </a>
              </div>
            </div>
            <nav aria-label="Quick links" style={{display: "flex", flexDirection: "column", gap: "12px"}}>
              <h3 style={{margin: "0 0 6px", fontSize: "13px", letterSpacing: "0.18em", color: "#FFFFFF", fontWeight: "600"}}>
                QUICK LINKS
              </h3>
              <a className="wd-foot-link" href="#top" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Home
              </a>
              <Link className="wd-foot-link" to="/about" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                About Us
              </Link>
              <Link className="wd-foot-link" to="/services" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Services
              </Link>
              <Link className="wd-foot-link" to="/work" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Our Work
              </Link>
              <Link className="wd-foot-link" to="/contact" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Contact Us
              </Link>
            </nav>
            <nav aria-label="Services" style={{display: "flex", flexDirection: "column", gap: "12px"}}>
              <h3 style={{margin: "0 0 6px", fontSize: "13px", letterSpacing: "0.18em", color: "#FFFFFF", fontWeight: "600"}}>
                SERVICES
              </h3>
              <Link className="wd-foot-link" to="/services" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Social Media Marketing
              </Link>
              <Link className="wd-foot-link" to="/services" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Website Design &amp; Development
              </Link>
              <Link className="wd-foot-link" to="/services" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                SEO
              </Link>
              <Link className="wd-foot-link" to="/services" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Content Creation
              </Link>
              <Link className="wd-foot-link" to="/services" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Paid Advertising
              </Link>
              <Link className="wd-foot-link" to="/services" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Branding &amp; Creative Design
              </Link>
            </nav>
            <div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
              <h3 style={{margin: "0 0 6px", fontSize: "13px", letterSpacing: "0.18em", color: "#FFFFFF", fontWeight: "600"}}>
                CONTACT
              </h3>
              <span style={{display: "flex", gap: "10px", alignItems: "center", color: "#A9B0C9", fontSize: "15px"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                [your@email.com]
              </span>
              <span style={{display: "flex", gap: "10px", alignItems: "center", color: "#A9B0C9", fontSize: "15px"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                [+00 00000 00000]
              </span>
              <span style={{display: "flex", gap: "10px", alignItems: "center", color: "#A9B0C9", fontSize: "15px"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                [Your City, Country]
              </span>
              <Link className="wd-btn wd-btn-primary" to="/contact" style={{marginTop: "8px", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "46px", padding: "0 20px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "14px"}}>
                Let's Talk
              </Link>
            </div>
          </div>
          <div style={{maxWidth: "1240px", margin: "64px auto 0", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", color: "#7F86A0", fontSize: "14px"}}>
            <span>
              © 2026 Web Divider. All rights reserved.
            </span>
            <span>
              Designed for growth · US · UK · Canada · India
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
