// Converted from the Web Divider design canvas (About.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }
  renderVals() {
    const open = this.state.menuOpen;
    return {
      menuOpen: open,
      menuClosed: !open,
      menuOpenStr: open ? 'true' : 'false',
      menuLabel: open ? 'Close menu' : 'Open menu',
      toggleMenu: () => this.setState({ menuOpen: !open }),
      closeMenu: () => this.setState({ menuOpen: false })
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div className="page-about" id="top" style={{width: "100%", minHeight: "100vh", backgroundColor: "#05060B", color: "#EEF0FA", fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", lineHeight: "1.6", overflowX: "hidden", position: "relative"}}>
        <header style={{position: "sticky", top: "0", zIndex: "50", backgroundColor: "rgba(5,6,11,0.72)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", borderBottom: "1px solid rgba(255,255,255,0.07)"}}>
          <nav aria-label="Main navigation" style={{maxWidth: "1240px", margin: "0 auto", padding: "0 24px", height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px"}}>
            <Link to="/" aria-label="Web Divider home" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#FFFFFF"}}>
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
            </Link>
            <div className="wd-nav-links" style={{display: "flex", alignItems: "center", gap: "36px"}}>
              <Link className="wd-nav-link" to="/" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                Home
              </Link>
              <a className="wd-nav-link" href="#top" aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                About Us
              </a>
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
                <Link to="/" style={{color: "#D4D8E8", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  Home
                </Link>
                <a href="#top" onClick={v.closeMenu} aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  About Us
                </a>
                <Link to="/services" style={{color: "#D4D8E8", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
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
          <section aria-labelledby="about-hero-title" style={{position: "relative", overflow: "hidden", padding: "96px 24px 120px"}}>
            <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", top: "-240px", right: "-180px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.32), rgba(139,92,246,0) 65%)", pointerEvents: "none"}}></div>
            <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", bottom: "-280px", left: "-160px", width: "680px", height: "680px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.26), rgba(59,130,246,0) 65%)", pointerEvents: "none", animationDelay: "-3s"}}></div>
            <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none"}}></div>
            <div style={{position: "relative", maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "56px", alignItems: "center"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "28px"}}>
                <div className="wd-enter" style={{display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", padding: "8px 16px 8px 10px", borderRadius: "999px", border: "1px solid rgba(167,139,250,0.3)", backgroundColor: "rgba(139,92,246,0.08)", fontSize: "13px", fontWeight: "600", color: "#D6CCFF", letterSpacing: "0.18em"}}>
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg,#A78BFA,#60A5FA)", boxShadow: "0 0 12px #8B5CF6"}}></span>
                  {" "}GET TO KNOW US{" "}
                </div>
                <h1 id="about-hero-title" className="wd-enter wd-d1" style={{margin: "0", fontFamily: "'Space Grotesk', Inter, sans-serif", fontWeight: "700", fontSize: "clamp(42px, 5.8vw, 82px)", lineHeight: "0.98", letterSpacing: "-0.04em", color: "#FFFFFF", textTransform: "uppercase"}}>
                  Have an idea ?
                  <br />
                  <span className="wd-grad-text">
                    <span style={{backgroundColor: "initial", fontSize: "clamp(42px, 5.8vw, 82px)", letterSpacing: "-0.04em"}}>
                      let's covert it
                      <br />
                      to an app.&nbsp;
                    </span>
                    <br />
                  </span>
                </h1>
                <p className="wd-enter wd-d2" style={{margin: "0", maxWidth: "560px", fontSize: "19px", lineHeight: "1.65", color: "#A9B0C9"}}>
                  At Web Divider, we combine creativity, strategy, and technology to help businesses build a powerful digital presence and unlock new opportunities for growth.
                </p>
                <div className="wd-enter wd-d3" style={{display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "8px"}}>
                  <a className="wd-btn wd-btn-primary" href="#approach" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "16px"}}>
                    Explore Our Approach{" "}
                    <svg className="wd-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                  <Link className="wd-btn wd-btn-ghost" to="/contact" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "16px"}}>
                    Let's Work Together
                  </Link>
                </div>
              </div>
              <div className="wd-enter wd-d2" aria-hidden="true" style={{position: "relative", height: "540px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg className="wd-spin" width="480" height="480" viewBox="0 0 480 480" style={{position: "absolute", maxWidth: "100%"}} aria-hidden="true">
                  <circle cx="240" cy="240" r="230" fill="none" stroke="rgba(167,139,250,0.35)" strokeWidth="1" strokeDasharray="2 10"></circle>
                  <circle cx="240" cy="10" r="6" fill="#A78BFA"></circle>
                  <circle cx="470" cy="240" r="4" fill="#60A5FA"></circle>
                </svg>
                <div aria-hidden="true" style={{position: "absolute", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,92,255,0.45), rgba(59,130,246,0.15) 45%, rgba(5,6,11,0) 70%)"}}></div>
                <div className="wd-float" style={{position: "relative", width: "220px", height: "220px", perspective: "1000px"}}>
                  <div className="wd-cube" style={{position: "absolute", inset: "0"}}>
                    <div style={{position: "absolute", inset: "0", transform: "rotateY(0deg) translateZ(110px)", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.35)", background: "linear-gradient(135deg, rgba(167,139,250,0.55), rgba(59,130,246,0.25))"}}></div>
                    <div style={{position: "absolute", inset: "0", transform: "rotateY(90deg) translateZ(110px)", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.3)", background: "linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.2))"}}></div>
                    <div style={{position: "absolute", inset: "0", transform: "rotateY(180deg) translateZ(110px)", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.3)", background: "linear-gradient(135deg, rgba(109,40,217,0.55), rgba(30,58,138,0.3))"}}></div>
                    <div style={{position: "absolute", inset: "0", transform: "rotateY(-90deg) translateZ(110px)", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.3)", background: "linear-gradient(135deg, rgba(96,165,250,0.45), rgba(124,58,237,0.25))"}}></div>
                    <div style={{position: "absolute", inset: "0", transform: "rotateX(90deg) translateZ(110px)", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.4)", background: "linear-gradient(135deg, rgba(221,214,254,0.55), rgba(139,92,246,0.3))"}}></div>
                    <div style={{position: "absolute", inset: "0", transform: "rotateX(-90deg) translateZ(110px)", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.2)", background: "linear-gradient(135deg, rgba(30,27,75,0.7), rgba(59,130,246,0.3))"}}></div>
                  </div>
                </div>
                <div className="wd-float-2" style={{position: "absolute", top: "60px", left: "4%", padding: "12px 18px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", fontSize: "14px", fontWeight: "600", color: "#E4E0FF", display: "flex", alignItems: "center", gap: "8px"}}>
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#A78BFA", boxShadow: "0 0 10px #A78BFA"}}></span>
                  Creativity
                </div>
                <div className="wd-float" style={{position: "absolute", top: "46%", right: "0", padding: "12px 18px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", fontSize: "14px", fontWeight: "600", color: "#E4E0FF", display: "flex", alignItems: "center", gap: "8px", animationDelay: "-2.5s"}}>
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#7C9CFF", boxShadow: "0 0 10px #7C9CFF"}}></span>
                  Strategy
                </div>
                <div className="wd-float-2" style={{position: "absolute", bottom: "50px", left: "14%", padding: "12px 18px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", fontSize: "14px", fontWeight: "600", color: "#E4E0FF", display: "flex", alignItems: "center", gap: "8px", animationDelay: "-4s"}}>
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#60A5FA", boxShadow: "0 0 10px #60A5FA"}}></span>
                  Technology
                </div>
              </div>
            </div>
          </section>
          <section id="who" aria-labelledby="who-title" style={{padding: "120px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#070915", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "72px", alignItems: "center"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", gap: "24px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  WHO WE ARE
                </span>
                <h2 id="who-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(34px, 4.4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF", textTransform: "uppercase"}}>
                  Creativity meets strategy.{" "}
                  <span className="wd-grad-text">
                    That's Web Divider.
                  </span>
                </h2>
                <p style={{margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#D4D8E8"}}>
                  Web Divider is a digital marketing agency focused on helping businesses grow in an increasingly competitive digital world.
                </p>
                <p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#A9B0C9"}}>
                  We believe every brand has a unique story to tell. Our goal is to help businesses communicate that story through creative ideas, smart digital strategies, and meaningful online experiences.
                </p>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px"}}>
                  <span style={{padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.03)", fontSize: "14px", color: "#D4D8E8"}}>
                    Startups
                  </span>
                  <span style={{padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.03)", fontSize: "14px", color: "#D4D8E8"}}>
                    SMBs
                  </span>
                  <span style={{padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.03)", fontSize: "14px", color: "#D4D8E8"}}>
                    E-commerce
                  </span>
                  <span style={{padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.03)", fontSize: "14px", color: "#D4D8E8"}}>
                    Entrepreneurs
                  </span>
                  <span style={{padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.03)", fontSize: "14px", color: "#D4D8E8"}}>
                    Personal brands
                  </span>
                  <span style={{padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.03)", fontSize: "14px", color: "#D4D8E8"}}>
                    International businesses
                  </span>
                </div>
              </div>
              <div className="wd-reveal" aria-hidden="true" style={{position: "relative", height: "560px", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0B1024"}}>
                <div className="wd-shift" style={{position: "absolute", inset: "0", background: "linear-gradient(160deg, #0B1024 0%, #1E1B4B 40%, #1E3A8A 75%, #0B1024 100%)"}}></div>
                <div style={{position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(255,255,255,0.13) 1px, transparent 1px)", backgroundSize: "22px 22px", opacity: "0.45"}}></div>
                <span className="wd-grad-text" style={{position: "absolute", left: "8%", top: "6%", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "260px", lineHeight: "1", letterSpacing: "-0.08em", opacity: "0.9"}}>
                  W/D
                </span>
                <div className="wd-float" style={{position: "absolute", right: "10%", top: "42%", width: "42%", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #DDD6FE, #8B5CF6 40%, #312E81 80%, #0B1024 100%)", boxShadow: "0 0 100px rgba(139,92,246,0.55)"}}></div>
                <div className="wd-float-2" style={{position: "absolute", left: "10%", bottom: "10%", width: "52%", padding: "20px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.16)", backgroundColor: "rgba(255,255,255,0.06)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", display: "flex", flexDirection: "column", gap: "10px"}}>
                  <span style={{fontSize: "12px", letterSpacing: "0.18em", color: "#C4B5FD", fontWeight: "600"}}>
                    EVERY BRAND HAS A STORY
                  </span>
                  <span style={{height: "8px", width: "80%", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.55)"}}></span>
                  <span style={{height: "8px", width: "60%", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.25)"}}></span>
                </div>
              </div>
            </div>
          </section>
          <section id="story" aria-labelledby="story-title" style={{padding: "128px 24px", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "48px", alignItems: "end", marginBottom: "72px"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                    OUR STORY
                  </span>
                  <h2 id="story-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    BUILT ON IDEAS.{" "}
                    <span className="wd-grad-text">
                      DRIVEN BY POSSIBILITIES.
                    </span>
                  </h2>
                </div>
                <p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#A9B0C9"}}>
                  Web Divider was created with a simple idea: businesses deserve better digital experiences and smarter ways to grow online.
                </p>
              </div>
              <ol style={{listStyle: "none", margin: "0", padding: "0", position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px"}}>
                <li className="wd-reveal" style={{position: "relative", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                    <span style={{width: "18px", height: "18px", borderRadius: "50%", background: "linear-gradient(135deg,#A78BFA,#8B5CF6)", boxShadow: "0 0 0 6px rgba(139,92,246,0.18), 0 0 20px #8B5CF6", flexShrink: "0"}}></span>
                    <span className="wd-flow" style={{flex: "1", height: "2px", background: "linear-gradient(90deg, #8B5CF6, #3B82F6, #8B5CF6)"}}></span>
                  </div>
                  <div className="wd-card" style={{flexGrow: "1", padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", display: "flex", flexDirection: "column", gap: "12px"}}>
                    <span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", color: "#A78BFA"}}>
                      CHAPTER 01
                    </span>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      The idea
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      Businesses deserve better digital experiences and smarter ways to grow online.
                    </p>
                  </div>
                </li>
                <li className="wd-reveal" style={{position: "relative", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                    <span style={{width: "18px", height: "18px", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#6366F1)", boxShadow: "0 0 0 6px rgba(99,102,241,0.18), 0 0 20px #6366F1", flexShrink: "0"}}></span>
                    <span className="wd-flow" style={{flex: "1", height: "2px", background: "linear-gradient(90deg, #6366F1, #3B82F6, #6366F1)"}}></span>
                  </div>
                  <div className="wd-card" style={{flexGrow: "1", padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", display: "flex", flexDirection: "column", gap: "12px"}}>
                    <span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", color: "#A5B4FC"}}>
                      CHAPTER 02
                    </span>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      The vision
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      Bringing creativity, technology, and digital strategy together under one roof.
                    </p>
                  </div>
                </li>
                <li className="wd-reveal" style={{position: "relative", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                    <span style={{width: "18px", height: "18px", borderRadius: "50%", background: "linear-gradient(135deg,#6366F1,#3B82F6)", boxShadow: "0 0 0 6px rgba(59,130,246,0.18), 0 0 20px #3B82F6", flexShrink: "0"}}></span>
                    <span style={{flex: "1", height: "2px", backgroundImage: "linear-gradient(90deg, rgba(96,165,250,0.6) 50%, transparent 50%)", backgroundSize: "12px 2px"}}></span>
                  </div>
                  <div className="wd-card" style={{flexGrow: "1", padding: "28px", borderRadius: "24px", border: "1px solid rgba(96,165,250,0.35)", background: "linear-gradient(160deg, rgba(59,130,246,0.16), rgba(14,16,36,0.7))", display: "flex", flexDirection: "column", gap: "12px"}}>
                    <span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", color: "#93C5FD"}}>
                      TODAY
                    </span>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      Building connections
                    </h3>
                    <p style={{margin: "0", color: "#C9CEE0", fontSize: "15px"}}>
                      Helping brands build meaningful connections with their audiences and create a stronger digital future.
                    </p>
                  </div>
                </li>
                <li className="wd-reveal" style={{position: "relative", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                    <span style={{width: "18px", height: "18px", borderRadius: "50%", border: "2px dashed rgba(255,255,255,0.45)", flexShrink: "0"}}></span>
                    <span style={{flex: "1", height: "2px", backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.25) 50%, transparent 50%)", backgroundSize: "12px 2px"}}></span>
                  </div>
                  <div style={{flexGrow: "1", padding: "28px", borderRadius: "24px", border: "1px dashed rgba(255,255,255,0.22)", backgroundColor: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", gap: "12px"}}>
                    <span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", color: "#FDE68A"}}>
                      NEXT MILESTONE
                    </span>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#D4D8E8"}}>
                      [Add your milestone]
                    </h3>
                    <p style={{margin: "0", color: "#8D94AE", fontSize: "15px"}}>
                      Placeholder for a future chapter, such as your first launch, a new market or a new service.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
          <section aria-label="Mission and vision" style={{padding: "0 24px 128px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "24px"}}>
              <article className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", minHeight: "440px", padding: "clamp(32px, 4vw, 56px)", borderRadius: "32px", border: "1px solid rgba(167,139,250,0.3)", background: "linear-gradient(150deg, #2E1065 0%, #1E1B4B 45%, #0B0E22 100%)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
                <svg className="wd-spin" aria-hidden="true" width="360" height="360" viewBox="0 0 360 360" style={{position: "absolute", right: "-90px", top: "-90px", opacity: "0.8"}}>
                  <circle cx="180" cy="180" r="170" fill="none" stroke="rgba(196,181,253,0.35)" strokeWidth="1"></circle>
                  <circle cx="180" cy="180" r="120" fill="none" stroke="rgba(196,181,253,0.3)" strokeWidth="1" strokeDasharray="3 9"></circle>
                  <circle cx="180" cy="180" r="70" fill="none" stroke="rgba(196,181,253,0.4)" strokeWidth="1"></circle>
                  <circle cx="180" cy="10" r="6" fill="#C4B5FD"></circle>
                </svg>
                <span className="wd-icon" style={{position: "relative", width: "64px", height: "64px", borderRadius: "18px", background: "linear-gradient(135deg,#A78BFA,#7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", boxShadow: "0 14px 40px -10px rgba(139,92,246,0.8)"}}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </span>
                <div style={{position: "relative", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <h2 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 3.6vw, 48px)", letterSpacing: "-0.03em", color: "#FFFFFF"}}>
                    OUR MISSION
                  </h2>
                  <p style={{margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#E4E0FF", maxWidth: "500px"}}>
                    Our mission is to help businesses grow through creative digital solutions, strategic thinking, and meaningful online experiences.
                  </p>
                </div>
              </article>
              <article className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", minHeight: "440px", padding: "clamp(32px, 4vw, 56px)", borderRadius: "32px", border: "1px solid rgba(96,165,250,0.3)", background: "linear-gradient(150deg, #0B1024 0%, #172554 50%, #1E40AF 100%)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
                <div className="wd-pulse" aria-hidden="true" style={{position: "absolute", right: "-60px", bottom: "-80px", width: "340px", height: "340px", borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, rgba(147,197,253,0.7), rgba(59,130,246,0.35) 40%, rgba(59,130,246,0) 70%)"}}></div>
                <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px", WebkitMaskImage: "linear-gradient(200deg, #000, transparent 70%)", maskImage: "linear-gradient(200deg, #000, transparent 70%)"}}></div>
                <span className="wd-icon" style={{position: "relative", width: "64px", height: "64px", borderRadius: "18px", background: "linear-gradient(135deg,#60A5FA,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", boxShadow: "0 14px 40px -10px rgba(59,130,246,0.8)"}}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </span>
                <div style={{position: "relative", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <h2 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 3.6vw, 48px)", letterSpacing: "-0.03em", color: "#FFFFFF"}}>
                    OUR VISION
                  </h2>
                  <p style={{margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#DBEAFE", maxWidth: "500px"}}>
                    Our vision is to become a trusted creative partner for ambitious brands by making digital growth more accessible, impactful, and innovative.
                  </p>
                </div>
              </article>
            </div>
          </section>
          <section id="approach" aria-labelledby="approach-title" style={{padding: "128px 24px", background: "linear-gradient(180deg, #05060B 0%, #090C1E 50%, #05060B 100%)", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginBottom: "64px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  HOW WE WORK
                </span>
                <h2 id="approach-title" style={{margin: "0", maxWidth: "980px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  SMART THINKING. CREATIVE EXECUTION.{" "}
                  <span className="wd-grad-text">
                    MEANINGFUL GROWTH.
                  </span>
                </h2>
              </div>
              <div style={{position: "relative"}}>
                <div aria-hidden="true" className="wd-flow" style={{position: "absolute", left: "4%", right: "4%", top: "60px", height: "2px", background: "linear-gradient(90deg, rgba(139,92,246,0), #8B5CF6, #3B82F6, #8B5CF6, rgba(59,130,246,0))"}}></div>
                <ol style={{listStyle: "none", margin: "0", padding: "0", position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px"}}>
                  <li className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(10,12,28,0.92)", display: "flex", flexDirection: "column", gap: "16px"}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                      <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                      </span>
                      <span className="wd-num wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1", opacity: "0.55"}}>
                        01
                      </span>
                    </div>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.02em"}}>
                      DISCOVER
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We understand your business, goals, audience, and challenges.
                    </p>
                  </li>
                  <li className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(10,12,28,0.92)", display: "flex", flexDirection: "column", gap: "16px"}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                      <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                        </svg>
                      </span>
                      <span className="wd-num wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1", opacity: "0.55"}}>
                        02
                      </span>
                    </div>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.02em"}}>
                      STRATEGIZE
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We develop a customized digital strategy aligned with your objectives.
                    </p>
                  </li>
                  <li className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(10,12,28,0.92)", display: "flex", flexDirection: "column", gap: "16px"}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                      <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"></path>
                        </svg>
                      </span>
                      <span className="wd-num wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1", opacity: "0.55"}}>
                        03
                      </span>
                    </div>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.02em"}}>
                      CREATE
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We bring ideas to life through creative execution and digital solutions.
                    </p>
                  </li>
                  <li className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(10,12,28,0.92)", display: "flex", flexDirection: "column", gap: "16px"}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                      <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                      </span>
                      <span className="wd-num wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "44px", lineHeight: "1", opacity: "0.55"}}>
                        04
                      </span>
                    </div>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.02em"}}>
                      GROW
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We focus on continuous improvement and building long-term growth opportunities.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>
          <section aria-labelledby="whyus-title" style={{padding: "128px 24px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "32px", alignItems: "end", marginBottom: "56px"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                    WHY WORK WITH US
                  </span>
                  <h2 id="whyus-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.2vw, 56px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    MORE THAN A SERVICE PROVIDER.{" "}
                    <span className="wd-grad-text">
                      YOUR CREATIVE GROWTH PARTNER.
                    </span>
                  </h2>
                </div>
                <p style={{margin: "0", color: "#A9B0C9", fontSize: "17px"}}>
                  We work as an extension of your team, combining fresh ideas with clear goals and honest communication.
                </p>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px"}}>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.01em"}}>
                    Creative-First Thinking
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    We approach every project with fresh ideas and creative solutions.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="22" y1="12" x2="18" y2="12"></line>
                      <line x1="6" y1="12" x2="2" y2="12"></line>
                      <line x1="12" y1="6" x2="12" y2="2"></line>
                      <line x1="12" y1="22" x2="12" y2="18"></line>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.01em"}}>
                    Strategic Execution
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Every decision starts with understanding your business goals.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.01em"}}>
                    Client-Focused Approach
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    We believe in transparent communication and solutions built around your needs.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.01em"}}>
                    Future-Ready Solutions
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    We embrace modern technologies, creative trends, and evolving digital opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section aria-labelledby="values-title" style={{padding: "128px 24px", backgroundColor: "#070915", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginBottom: "56px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  WHAT DRIVES US
                </span>
                <h2 id="values-title" style={{margin: "0", maxWidth: "900px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  THE VALUES BEHIND{" "}
                  <span className="wd-grad-text">
                    EVERYTHING WE CREATE.
                  </span>
                </h2>
              </div>
              <ul style={{listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))", gap: "16px"}}>
                <li className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", minHeight: "280px", padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", background: "linear-gradient(180deg, rgba(139,92,246,0.18), rgba(14,16,36,0.7) 60%)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px"}}>
                  <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "88px", lineHeight: "0.9", letterSpacing: "-0.05em", opacity: "0.7"}}>
                    C
                  </span>
                  <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      Creativity
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We believe in thinking differently.
                    </p>
                  </div>
                </li>
                <li className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", minHeight: "280px", padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", background: "linear-gradient(180deg, rgba(124,58,237,0.16), rgba(14,16,36,0.7) 60%)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px"}}>
                  <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "88px", lineHeight: "0.9", letterSpacing: "-0.05em", opacity: "0.7"}}>
                    I
                  </span>
                  <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      Innovation
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We continuously explore better ways to work.
                    </p>
                  </div>
                </li>
                <li className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", minHeight: "280px", padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", background: "linear-gradient(180deg, rgba(99,102,241,0.16), rgba(14,16,36,0.7) 60%)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px"}}>
                  <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "88px", lineHeight: "0.9", letterSpacing: "-0.05em", opacity: "0.7"}}>
                    T
                  </span>
                  <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      Transparency
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We value honest communication.
                    </p>
                  </div>
                </li>
                <li className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", minHeight: "280px", padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", background: "linear-gradient(180deg, rgba(79,70,229,0.16), rgba(14,16,36,0.7) 60%)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px"}}>
                  <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "88px", lineHeight: "0.9", letterSpacing: "-0.05em", opacity: "0.7"}}>
                    C
                  </span>
                  <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      Collaboration
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We believe great results come from working together.
                    </p>
                  </div>
                </li>
                <li className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", minHeight: "280px", padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", background: "linear-gradient(180deg, rgba(59,130,246,0.2), rgba(14,16,36,0.7) 60%)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px"}}>
                  <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "88px", lineHeight: "0.9", letterSpacing: "-0.05em", opacity: "0.7"}}>
                    G
                  </span>
                  <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      Growth
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We focus on progress and long-term relationships.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section id="start" aria-labelledby="about-cta-title" style={{padding: "128px 24px"}}>
            <div className="wd-reveal" style={{position: "relative", maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", overflow: "hidden", padding: "clamp(56px, 8vw, 112px) 32px", textAlign: "center"}}>
              <div className="wd-shift" aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(120deg, #5B21B6, #4338CA, #1D4ED8, #7C3AED)"}}></div>
              <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "26px 26px", opacity: "0.35"}}></div>
              <div aria-hidden="true" className="wd-float" style={{position: "absolute", left: "6%", top: "18%", width: "120px", height: "120px", borderRadius: "28px", border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.08)", transform: "rotate(12deg)"}}></div>
              <div aria-hidden="true" className="wd-float-2" style={{position: "absolute", right: "7%", bottom: "14%", width: "150px", height: "150px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.6), rgba(255,255,255,0.05) 70%)"}}></div>
              <div style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}>
                <h2 id="about-cta-title" style={{margin: "0", maxWidth: "960px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(38px, 5.6vw, 78px)", lineHeight: "0.98", letterSpacing: "-0.04em", color: "#FFFFFF"}}>
                  YOUR NEXT BIG IDEA DESERVES TO BE SEEN.
                </h2>
                <p style={{margin: "0", maxWidth: "620px", fontSize: "19px", color: "#EDE9FE"}}>
                  Let's build something meaningful together. Whether you're launching a new brand or looking to grow an existing business, Web Divider is ready to help.
                </p>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px", marginTop: "12px"}}>
                  <Link className="wd-btn" to="/contact" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "60px", padding: "0 34px", borderRadius: "999px", backgroundColor: "#FFFFFF", color: "#1E1B4B", textDecoration: "none", fontWeight: "700", fontSize: "17px", boxShadow: "0 18px 50px -12px rgba(5,6,11,0.6)"}}>
                    Start a Project{" "}
                    <svg className="wd-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                  <Link className="wd-btn" to="/services" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "60px", padding: "0 34px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.55)", backgroundColor: "rgba(255,255,255,0.08)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "17px"}}>
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="contact" style={{borderTop: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#04050A", padding: "80px 24px 32px", scrollMarginTop: "76px"}}>
          <div style={{maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "48px"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "18px", minWidth: "0"}}>
              <Link to="/" aria-label="Web Divider home" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#FFFFFF"}}>
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
              </Link>
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
              <Link className="wd-foot-link" to="/" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Home
              </Link>
              <a className="wd-foot-link" href="#top" aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "15px"}}>
                About Us
              </a>
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

export default About;
