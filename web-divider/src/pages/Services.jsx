// Converted from the Web Divider design canvas (Services.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, faq: 0, service: '' };
  }
  renderVals() {
    const open = this.state.menuOpen;
    const f = this.state.faq;
    const ask = (name) => () => this.setState({ service: name });
    const vals = {
      menuOpen: open,
      menuClosed: !open,
      menuOpenStr: open ? 'true' : 'false',
      menuLabel: open ? 'Close menu' : 'Open menu',
      toggleMenu: () => this.setState({ menuOpen: !open }),
      closeMenu: () => this.setState({ menuOpen: false }),
      service: this.state.service,
      hasService: this.state.service !== '',
      askSocial: ask('Social Media Marketing'),
      askWeb: ask('Website Design & Development'),
      askSeo: ask('Search Engine Optimization (SEO)'),
      askContent: ask('Content Creation'),
      askAds: ask('Paid Advertising'),
      askBrand: ask('Branding & Creative Design')
    };
    for (let i = 0; i < 7; i++) {
      vals['open' + i] = f === i;
      vals['closed' + i] = f !== i;
      vals['open' + i + 's'] = f === i ? 'true' : 'false';
      vals['faq' + i] = () => this.setState({ faq: f === i ? -1 : i });
    }
    return vals;
  }

  render() {
    const v = this.renderVals();
    return (
      <div className="page-services" id="top" style={{width: "100%", minHeight: "100vh", backgroundColor: "#05060B", color: "#EEF0FA", fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", lineHeight: "1.6", overflowX: "hidden", position: "relative"}}>
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
              <Link className="wd-nav-link" to="/about" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                About Us
              </Link>
              <a className="wd-nav-link" href="#top" aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                Services
              </a>
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
                <Link to="/about" style={{color: "#D4D8E8", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  About Us
                </Link>
                <a href="#top" onClick={v.closeMenu} aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  Services
                </a>
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
          <section aria-labelledby="svc-hero-title" style={{position: "relative", overflow: "hidden", padding: "96px 24px 120px"}}>
            <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", top: "-200px", left: "30%", width: "760px", height: "760px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.28), rgba(139,92,246,0) 62%)", pointerEvents: "none"}}></div>
            <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", bottom: "-300px", right: "-200px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.3), rgba(59,130,246,0) 65%)", pointerEvents: "none", animationDelay: "-3s"}}></div>
            <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none"}}></div>
            <div style={{position: "relative", maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", gap: "48px", alignItems: "center"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "28px"}}>
                <div className="wd-enter" style={{display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", padding: "8px 16px 8px 10px", borderRadius: "999px", border: "1px solid rgba(167,139,250,0.3)", backgroundColor: "rgba(139,92,246,0.08)", fontSize: "13px", fontWeight: "600", color: "#D6CCFF", letterSpacing: "0.18em"}}>
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg,#A78BFA,#60A5FA)", boxShadow: "0 0 12px #8B5CF6"}}></span>
                  {" "}OUR SERVICES{" "}
                </div>
                <h1 id="svc-hero-title" className="wd-enter wd-d1" style={{margin: "0", fontFamily: "'Space Grotesk', Inter, sans-serif", fontWeight: "700", fontSize: "clamp(44px, 6.6vw, 92px)", lineHeight: "0.96", letterSpacing: "-0.045em", color: "#FFFFFF", textTransform: "uppercase"}}>
                  Everything your brand needs to{" "}
                  <span className="wd-grad-text">
                    grow digitally.
                  </span>
                </h1>
                <p className="wd-enter wd-d2" style={{margin: "0", maxWidth: "560px", fontSize: "19px", lineHeight: "1.65", color: "#A9B0C9"}}>
                  We combine creativity, strategy, and technology to help businesses build a stronger digital presence, reach the right audience, and unlock new growth opportunities.
                </p>
                <div className="wd-enter wd-d3" style={{display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "8px"}}>
                  <a className="wd-btn wd-btn-primary" href="#overview" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "16px"}}>
                    Explore Our Services{" "}
                    <svg className="wd-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                  <Link className="wd-btn wd-btn-ghost" to="/contact" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "16px"}}>
                    Let's Talk
                  </Link>
                </div>
              </div>
              <div className="wd-enter wd-d2" aria-hidden="true" style={{position: "relative", height: "560px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg className="wd-spin" width="500" height="500" viewBox="0 0 500 500" style={{position: "absolute", maxWidth: "100%"}} aria-hidden="true">
                  <circle cx="250" cy="250" r="240" fill="none" stroke="rgba(167,139,250,0.3)" strokeWidth="1" strokeDasharray="2 10"></circle>
                  <circle cx="250" cy="10" r="5" fill="#A78BFA"></circle>
                  <circle cx="10" cy="250" r="4" fill="#60A5FA"></circle>
                </svg>
                <div style={{position: "relative", width: "300px", height: "420px"}}>
                  <div className="wd-plate" style={{position: "absolute", left: "0", top: "0", width: "300px", height: "300px", animationDelay: "0s"}}>
                    <div style={{width: "100%", height: "100%", transform: "rotateX(58deg) rotateZ(-45deg)", borderRadius: "36px", border: "1px solid rgba(255,255,255,0.35)", background: "linear-gradient(135deg, rgba(196,181,253,0.65), rgba(139,92,246,0.35))", boxShadow: "0 0 60px rgba(139,92,246,0.45)"}}></div>
                  </div>
                  <div className="wd-plate" style={{position: "absolute", left: "0", top: "60px", width: "300px", height: "300px", animationDelay: "-1.5s"}}>
                    <div style={{width: "100%", height: "100%", transform: "rotateX(58deg) rotateZ(-45deg)", borderRadius: "36px", border: "1px solid rgba(255,255,255,0.28)", background: "linear-gradient(135deg, rgba(124,92,255,0.55), rgba(79,70,229,0.3))"}}></div>
                  </div>
                  <div className="wd-plate" style={{position: "absolute", left: "0", top: "120px", width: "300px", height: "300px", animationDelay: "-3s"}}>
                    <div style={{width: "100%", height: "100%", transform: "rotateX(58deg) rotateZ(-45deg)", borderRadius: "36px", border: "1px solid rgba(255,255,255,0.24)", background: "linear-gradient(135deg, rgba(96,165,250,0.5), rgba(59,130,246,0.25))"}}></div>
                  </div>
                  <div className="wd-plate" style={{position: "absolute", left: "0", top: "180px", width: "300px", height: "300px", animationDelay: "-4.5s"}}>
                    <div style={{width: "100%", height: "100%", transform: "rotateX(58deg) rotateZ(-45deg)", borderRadius: "36px", border: "1px solid rgba(255,255,255,0.18)", background: "linear-gradient(135deg, rgba(30,58,138,0.7), rgba(11,16,36,0.6))", boxShadow: "0 40px 80px rgba(0,0,0,0.5)"}}></div>
                  </div>
                </div>
                <div className="wd-float-2" style={{position: "absolute", top: "48px", right: "0", padding: "12px 16px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", display: "flex", flexDirection: "column", gap: "2px"}}>
                  <span style={{fontSize: "11px", color: "#8D94AE", letterSpacing: "0.12em"}}>
                    LAYER
                  </span>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "600", color: "#FFFFFF"}}>
                    Brand &amp; Content
                  </span>
                </div>
                <div className="wd-float" style={{position: "absolute", top: "46%", left: "0", padding: "12px 16px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", display: "flex", flexDirection: "column", gap: "2px", animationDelay: "-3s"}}>
                  <span style={{fontSize: "11px", color: "#8D94AE", letterSpacing: "0.12em"}}>
                    LAYER
                  </span>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "600", color: "#FFFFFF"}}>
                    Website &amp; SEO
                  </span>
                </div>
                <div className="wd-float-2" style={{position: "absolute", bottom: "34px", right: "8%", padding: "12px 16px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", display: "flex", flexDirection: "column", gap: "2px", animationDelay: "-5s"}}>
                  <span style={{fontSize: "11px", color: "#8D94AE", letterSpacing: "0.12em"}}>
                    LAYER
                  </span>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "600", color: "#FFFFFF"}}>
                    Social &amp; Ads
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section id="overview" aria-labelledby="overview-title" style={{padding: "120px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "linear-gradient(180deg, #070915 0%, #090C1E 60%, #05060B 100%)", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "32px", alignItems: "end", marginBottom: "56px"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                    WHAT WE DO
                  </span>
                  <h2 id="overview-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.2vw, 58px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    CREATIVE SOLUTIONS. SMART STRATEGIES.{" "}
                    <span className="wd-grad-text">
                      REAL POSSIBILITIES.
                    </span>
                  </h2>
                </div>
                <p style={{margin: "0", fontSize: "17px", color: "#A9B0C9"}}>
                  From building your online presence to growing your audience, we offer digital solutions designed to help your business move forward.
                </p>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "20px"}}>
                <article className="wd-card wd-reveal" style={{position: "relative", padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                    <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                    </span>
                    <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1", opacity: "0.5"}}>
                      01
                    </span>
                  </div>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                    Social Media Marketing
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Build a powerful social media presence and connect your brand with the right audience.
                  </p>
                  <ul style={{listStyle: "none", margin: "0", padding: "18px 0 0", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "10px", flexGrow: "1"}}>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Social Media Strategy
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Social Media Management
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Audience Engagement
                    </li>
                  </ul>
                  <a className="wd-link" href="#svc-social" aria-label="Explore service: Social Media Marketing" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Service{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{position: "relative", padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                    <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </span>
                    <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1", opacity: "0.5"}}>
                      02
                    </span>
                  </div>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                    Website Design &amp; Development
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Create modern, responsive, and high-performing websites that turn visitors into potential customers.
                  </p>
                  <ul style={{listStyle: "none", margin: "0", padding: "18px 0 0", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "10px", flexGrow: "1"}}>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Website Design
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Website Development
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Landing Page Development
                    </li>
                  </ul>
                  <a className="wd-link" href="#svc-web" aria-label="Explore service: Website Design and Development" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Service{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{position: "relative", padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                    <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </span>
                    <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1", opacity: "0.5"}}>
                      03
                    </span>
                  </div>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                    Search Engine Optimization (SEO)
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Improve your online visibility and help potential customers discover your business through search engines.
                  </p>
                  <ul style={{listStyle: "none", margin: "0", padding: "18px 0 0", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "10px", flexGrow: "1"}}>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Keyword Research
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      On-Page SEO
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Technical SEO
                    </li>
                  </ul>
                  <a className="wd-link" href="#svc-seo" aria-label="Explore service: SEO" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Service{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{position: "relative", padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                    <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m16 13 5.22 3.48a.5.5 0 0 0 .78-.42V7.94a.5.5 0 0 0-.76-.43L16 10.5"></path>
                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                      </svg>
                    </span>
                    <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1", opacity: "0.5"}}>
                      04
                    </span>
                  </div>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                    Content Creation
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Create engaging digital content that captures attention, communicates your brand message, and builds connections.
                  </p>
                  <ul style={{listStyle: "none", margin: "0", padding: "18px 0 0", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "10px", flexGrow: "1"}}>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Short-Form Video Content
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Graphic Design
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Creative Content Strategy
                    </li>
                  </ul>
                  <a className="wd-link" href="#svc-content" aria-label="Explore service: Content Creation" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Service{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{position: "relative", padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                    <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                    </span>
                    <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1", opacity: "0.5"}}>
                      05
                    </span>
                  </div>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                    Paid Advertising
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Reach the right people with targeted advertising campaigns designed around your business objectives.
                  </p>
                  <ul style={{listStyle: "none", margin: "0", padding: "18px 0 0", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "10px", flexGrow: "1"}}>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Google Ads
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Meta Ads
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Campaign Optimization
                    </li>
                  </ul>
                  <a className="wd-link" href="#svc-ads" aria-label="Explore service: Paid Advertising" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Service{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{position: "relative", padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                    <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.2))", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"></path>
                      </svg>
                    </span>
                    <span className="wd-num wd-grad-text" aria-hidden="true" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1", opacity: "0.5"}}>
                      06
                    </span>
                  </div>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                    Branding &amp; Creative Design
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Build a memorable brand identity with creative visuals and consistent brand communication.
                  </p>
                  <ul style={{listStyle: "none", margin: "0", padding: "18px 0 0", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "10px", flexGrow: "1"}}>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Brand Identity Design
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Logo Design
                    </li>
                    <li style={{display: "flex", gap: "10px", alignItems: "center", color: "#D4D8E8", fontSize: "15px"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Marketing Creatives
                    </li>
                  </ul>
                  <a className="wd-link" href="#svc-brand" aria-label="Explore service: Branding and Creative Design" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Service{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </a>
                </article>
              </div>
            </div>
          </section>
          <div aria-label="Service details">
            <section id="svc-social" className="wd-show" aria-labelledby="svc-social-title" style={{padding: "112px 24px", scrollMarginTop: "76px"}}>
              <div style={{maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "64px", alignItems: "center"}}>
                <div className="wd-reveal" aria-hidden="true" style={{flex: "1 1 460px", minWidth: "0", position: "relative", height: "520px", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "radial-gradient(circle at 30% 20%, #4C1D95 0%, #1E1B4B 45%, #0B0E22 100%)"}}>
                  <div className="wd-art" style={{position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div className="wd-float" style={{position: "relative", width: "220px", height: "420px", borderRadius: "36px", border: "1px solid rgba(255,255,255,0.25)", backgroundColor: "rgba(5,6,11,0.75)", padding: "18px 14px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7)"}}>
                      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                        <span style={{width: "34px", height: "34px", borderRadius: "50%", background: "linear-gradient(135deg,#A78BFA,#3B82F6)"}}></span>
                        <span style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                          <span style={{width: "80px", height: "7px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.6)"}}></span>
                          <span style={{width: "50px", height: "6px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.25)"}}></span>
                        </span>
                      </div>
                      <div style={{flex: "1", borderRadius: "18px", background: "linear-gradient(160deg, #8B5CF6, #3B82F6)"}}></div>
                      <div style={{display: "flex", gap: "12px"}}>
                        <span style={{width: "22px", height: "22px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.2)"}}></span>
                        <span style={{width: "22px", height: "22px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.2)"}}></span>
                        <span style={{width: "22px", height: "22px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.2)"}}></span>
                      </div>
                      <div style={{display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "6px"}}>
                        <span style={{aspectRatio: "1", borderRadius: "8px", backgroundColor: "rgba(167,139,250,0.4)"}}></span>
                        <span style={{aspectRatio: "1", borderRadius: "8px", backgroundColor: "rgba(96,165,250,0.4)"}}></span>
                        <span style={{aspectRatio: "1", borderRadius: "8px", backgroundColor: "rgba(124,92,255,0.4)"}}></span>
                      </div>
                    </div>
                    <div className="wd-float-2" style={{position: "absolute", top: "18%", left: "8%", padding: "10px 14px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: "8px", color: "#FFFFFF", fontSize: "13px", fontWeight: "600"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#F472B6" stroke="none" aria-hidden="true">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                      Engagement
                    </div>
                    <div className="wd-float" style={{position: "absolute", bottom: "16%", right: "8%", padding: "10px 14px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: "8px", color: "#FFFFFF", fontSize: "13px", fontWeight: "600", animationDelay: "-2s"}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                        <path d="M16 2v4"></path>
                        <path d="M8 2v4"></path>
                        <path d="M3 10h18"></path>
                      </svg>
                      Content calendar
                    </div>
                  </div>
                </div>
                <div className="wd-reveal" style={{flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                    SERVICE 01 · SOCIAL MEDIA MARKETING
                  </span>
                  <h2 id="svc-social-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    TURN YOUR SOCIAL PRESENCE INTO{" "}
                    <span className="wd-grad-text">
                      BRAND POWER.
                    </span>
                  </h2>
                  <p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#A9B0C9"}}>
                    A consistent social presence doesn't happen by accident. We start with a clear strategy for which platforms matter for your audience and what you want to say there, then plan your content in advance, publish it on a reliable schedule and actively engage with your community, so your brand shows up with purpose every week.
                  </p>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "24px", padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.5)"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        KEY BENEFITS
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          A consistent, recognisable brand voice
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Content planned around your goals
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Closer relationships with your audience
                        </li>
                      </ul>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        DELIVERABLES
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Platform strategy &amp; content pillars
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Monthly content calendar
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Post scheduling &amp; publishing
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Community management &amp; reporting
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link className="wd-btn wd-btn-primary" to="/contact" onClick={v.askSocial} style={{alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                    Discuss This Service{" "}
                    <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
            <section id="svc-web" className="wd-show" aria-labelledby="svc-web-title" style={{padding: "112px 24px", backgroundColor: "#070915", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: "76px"}}>
              <div style={{maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", gap: "64px", alignItems: "center"}}>
                <div className="wd-reveal" aria-hidden="true" style={{flex: "1 1 460px", minWidth: "0", position: "relative", height: "520px", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "linear-gradient(150deg, #0B1024 0%, #1E3A8A 60%, #3B82F6 120%)"}}>
                  <div className="wd-art" style={{position: "absolute", inset: "0"}}>
                    <div style={{position: "absolute", left: "8%", right: "8%", top: "12%", bottom: "12%", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "#080B1A", overflow: "hidden", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)"}}>
                      <div style={{height: "36px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "7px", padding: "0 14px"}}>
                        <span style={{width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F87171"}}></span>
                        <span style={{width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FBBF24"}}></span>
                        <span style={{width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#34D399"}}></span>
                        <span style={{marginLeft: "14px", flex: "1", height: "14px", borderRadius: "7px", backgroundColor: "rgba(255,255,255,0.08)"}}></span>
                      </div>
                      <div style={{padding: "22px", display: "flex", flexDirection: "column", gap: "14px"}}>
                        <span style={{width: "55%", height: "18px", borderRadius: "6px", background: "linear-gradient(90deg,#A78BFA,#60A5FA)"}}></span>
                        <span style={{width: "38%", height: "10px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.3)"}}></span>
                        <span style={{width: "120px", height: "28px", borderRadius: "999px", background: "linear-gradient(90deg,#8B5CF6,#3B82F6)"}}></span>
                        <div style={{display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px", marginTop: "8px"}}>
                          <span style={{height: "90px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.06)"}}></span>
                          <span style={{height: "90px", borderRadius: "10px", backgroundColor: "rgba(139,92,246,0.18)"}}></span>
                          <span style={{height: "90px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.06)"}}></span>
                        </div>
                      </div>
                    </div>
                    <div className="wd-float" style={{position: "absolute", right: "4%", bottom: "6%", width: "110px", height: "200px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.25)", backgroundColor: "#080B1A", padding: "12px 10px", display: "flex", flexDirection: "column", gap: "8px"}}>
                      <span style={{height: "10px", width: "70%", borderRadius: "5px", background: "linear-gradient(90deg,#A78BFA,#60A5FA)"}}></span>
                      <span style={{flex: "1", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.07)"}}></span>
                      <span style={{height: "20px", borderRadius: "999px", background: "linear-gradient(90deg,#8B5CF6,#3B82F6)"}}></span>
                    </div>
                    <div className="wd-float-2" style={{position: "absolute", left: "4%", top: "4%", padding: "8px 14px", borderRadius: "999px", backgroundColor: "rgba(5,6,11,0.7)", border: "1px solid rgba(255,255,255,0.15)", fontSize: "12px", fontWeight: "600", color: "#E4E0FF", letterSpacing: "0.08em"}}>
                      RESPONSIVE
                    </div>
                  </div>
                </div>
                <div className="wd-reveal" style={{flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#93C5FD"}}>
                    SERVICE 02 · WEBSITE DESIGN &amp; DEVELOPMENT
                  </span>
                  <h2 id="svc-web-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    WEBSITES THAT LOOK GOOD AND{" "}
                    <span className="wd-grad-text">
                      WORK HARD.
                    </span>
                  </h2>
                  <p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#A9B0C9"}}>
                    Your website is often the first place people decide whether to trust you. We design professional, responsive sites that look sharp on every screen, load quickly and guide visitors clearly from first impression to enquiry, giving your business the credibility and structure it needs to turn interest into conversations.
                  </p>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "24px", padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.5)"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        KEY BENEFITS
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          A credible, professional first impression
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Great experience on mobile and desktop
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Clear paths for visitors to get in touch
                        </li>
                      </ul>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        DELIVERABLES
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Sitemap &amp; page structure
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Custom UI design
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Responsive development
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Landing pages &amp; contact forms
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link className="wd-btn wd-btn-primary" to="/contact" onClick={v.askWeb} style={{alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                    Discuss This Service{" "}
                    <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
            <section id="svc-seo" className="wd-show" aria-labelledby="svc-seo-title" style={{padding: "112px 24px", scrollMarginTop: "76px"}}>
              <div style={{maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "64px", alignItems: "center"}}>
                <div className="wd-reveal" aria-hidden="true" style={{flex: "1 1 460px", minWidth: "0", position: "relative", height: "520px", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "radial-gradient(circle at 75% 25%, #312E81 0%, #0F172A 55%, #05060B 100%)"}}>
                  <div className="wd-art" style={{position: "absolute", inset: "0", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px", padding: "0 10%"}}>
                    <div style={{display: "flex", alignItems: "center", gap: "12px", height: "56px", padding: "0 20px", borderRadius: "999px", border: "1px solid rgba(167,139,250,0.45)", backgroundColor: "rgba(255,255,255,0.06)", boxShadow: "0 0 40px rgba(139,92,246,0.3)"}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                      <span style={{color: "#E4E0FF", fontSize: "15px"}}>
                        your service near you
                      </span>
                      <span className="wd-blink" style={{width: "2px", height: "20px", backgroundColor: "#C4B5FD"}}></span>
                    </div>
                    <div style={{padding: "18px 20px", borderRadius: "18px", border: "1px solid rgba(139,92,246,0.5)", background: "linear-gradient(90deg, rgba(139,92,246,0.22), rgba(59,130,246,0.12))", display: "flex", flexDirection: "column", gap: "8px"}}>
                      <span style={{width: "40%", height: "8px", borderRadius: "4px", backgroundColor: "#86EFAC", opacity: "0.8"}}></span>
                      <span style={{width: "70%", height: "12px", borderRadius: "6px", backgroundColor: "#FFFFFF"}}></span>
                      <span className="wd-bar" style={{width: "90%", height: "8px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.35)"}}></span>
                    </div>
                    <div style={{padding: "18px 20px", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", gap: "8px", opacity: "0.6"}}>
                      <span style={{width: "35%", height: "8px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.3)"}}></span>
                      <span style={{width: "60%", height: "12px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.45)"}}></span>
                    </div>
                    <div style={{padding: "18px 20px", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", gap: "8px", opacity: "0.35"}}>
                      <span style={{width: "30%", height: "8px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.3)"}}></span>
                      <span style={{width: "55%", height: "12px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.45)"}}></span>
                    </div>
                  </div>
                </div>
                <div className="wd-reveal" style={{flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                    SERVICE 03 · SEARCH ENGINE OPTIMIZATION
                  </span>
                  <h2 id="svc-seo-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    GET FOUND BY THE PEOPLE{" "}
                    <span className="wd-grad-text">
                      LOOKING FOR YOU.
                    </span>
                  </h2>
                  <p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#A9B0C9"}}>
                    People are already searching for what you offer. We research the keywords your customers actually use, fix the technical issues that hold your site back, and optimise your pages and content, so search engines understand your business better and you have a stronger chance of appearing when it matters. SEO takes time, so we focus on steady, sustainable improvement.
                  </p>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "24px", padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.5)"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        KEY BENEFITS
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Better organic search visibility
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Traffic from people with real intent
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          A healthier, faster website
                        </li>
                      </ul>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        DELIVERABLES
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Keyword research report
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Technical SEO audit &amp; fixes
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          On-page optimisation
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Progress reporting
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link className="wd-btn wd-btn-primary" to="/contact" onClick={v.askSeo} style={{alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                    Discuss This Service{" "}
                    <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
            <section id="svc-content" className="wd-show" aria-labelledby="svc-content-title" style={{padding: "112px 24px", backgroundColor: "#070915", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: "76px"}}>
              <div style={{maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", gap: "64px", alignItems: "center"}}>
                <div className="wd-reveal" aria-hidden="true" style={{flex: "1 1 460px", minWidth: "0", position: "relative", height: "520px", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "linear-gradient(200deg, #3B0764 0%, #1E1B4B 50%, #0B0E22 100%)"}}>
                  <div className="wd-art" style={{position: "absolute", inset: "0", display: "flex", flexDirection: "column", justifyContent: "center", gap: "22px", padding: "0 9%"}}>
                    <div style={{position: "relative", height: "260px", borderRadius: "22px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.2)", background: "radial-gradient(circle at 30% 40%, #A78BFA, #6D28D9 40%, #1E3A8A 100%)"}}>
                      <span style={{position: "absolute", left: "50%", top: "50%", width: "72px", height: "72px", margin: "-36px 0 0 -36px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 12px rgba(255,255,255,0.15)"}}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="#4C1D95" stroke="none" style={{marginLeft: "4px"}}>
                          <path d="M6 4v16l14-8z"></path>
                        </svg>
                      </span>
                      <span style={{position: "absolute", top: "14px", left: "14px", padding: "4px 10px", borderRadius: "6px", backgroundColor: "rgba(5,6,11,0.6)", color: "#FFFFFF", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", gap: "6px"}}>
                        <span className="wd-blink" style={{width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#F87171"}}></span>
                        REC
                      </span>
                      <span style={{position: "absolute", bottom: "14px", right: "14px", padding: "4px 10px", borderRadius: "6px", backgroundColor: "rgba(5,6,11,0.6)", color: "#FFFFFF", fontSize: "12px", fontWeight: "600"}}>
                        9:16 · 0:15
                      </span>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "8px", padding: "14px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(5,6,11,0.55)"}}>
                      <div style={{display: "flex", gap: "4px", height: "28px"}}>
                        <span style={{flex: "3", borderRadius: "5px", backgroundColor: "rgba(167,139,250,0.7)"}}></span>
                        <span style={{flex: "2", borderRadius: "5px", backgroundColor: "rgba(124,156,255,0.7)"}}></span>
                        <span style={{flex: "4", borderRadius: "5px", backgroundColor: "rgba(139,92,246,0.55)"}}></span>
                        <span style={{flex: "2", borderRadius: "5px", backgroundColor: "rgba(96,165,250,0.6)"}}></span>
                      </div>
                      <div style={{display: "flex", gap: "4px", height: "18px"}}>
                        <span style={{flex: "5", borderRadius: "5px", backgroundColor: "rgba(52,211,153,0.45)"}}></span>
                        <span style={{flex: "6", borderRadius: "5px", backgroundColor: "rgba(52,211,153,0.3)"}}></span>
                      </div>
                    </div>
                  </div>
                  <div className="wd-float" style={{position: "absolute", right: "6%", top: "8%", padding: "8px 14px", borderRadius: "999px", backgroundColor: "rgba(5,6,11,0.7)", border: "1px solid rgba(255,255,255,0.15)", fontSize: "12px", fontWeight: "600", color: "#E4E0FF", letterSpacing: "0.08em"}}>
                    SHORT-FORM
                  </div>
                </div>
                <div className="wd-reveal" style={{flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#93C5FD"}}>
                    SERVICE 04 · CONTENT CREATION
                  </span>
                  <h2 id="svc-content-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    CONTENT THAT MAKES PEOPLE{" "}
                    <span className="wd-grad-text">
                      STOP AND LOOK.
                    </span>
                  </h2>
                  <p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#A9B0C9"}}>
                    Attention is the new currency. We create short-form videos, scroll-stopping graphics and on-brand copy that communicate your message quickly and clearly. Every piece is planned around your audience and platform, so your content feels native, looks premium and gives people a reason to remember you.
                  </p>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "24px", padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.5)"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        KEY BENEFITS
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Content built to capture attention
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          A clear, consistent brand message
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Formats made for each platform
                        </li>
                      </ul>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        DELIVERABLES
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Short-form videos &amp; Reels
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Motion graphics &amp; edits
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Social graphics &amp; carousels
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Content strategy &amp; scripts
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link className="wd-btn wd-btn-primary" to="/contact" onClick={v.askContent} style={{alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                    Discuss This Service{" "}
                    <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
            <section id="svc-ads" className="wd-show" aria-labelledby="svc-ads-title" style={{padding: "112px 24px", scrollMarginTop: "76px"}}>
              <div style={{maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "64px", alignItems: "center"}}>
                <div className="wd-reveal" aria-hidden="true" style={{flex: "1 1 460px", minWidth: "0", position: "relative", height: "520px", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "radial-gradient(circle at 50% 50%, #1E3A8A 0%, #0F172A 55%, #05060B 100%)"}}>
                  <div className="wd-art" style={{position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <svg width="380" height="380" viewBox="0 0 380 380" style={{maxWidth: "86%"}} aria-hidden="true">
                      <circle cx="190" cy="190" r="180" fill="none" stroke="rgba(147,197,253,0.18)" strokeWidth="1"></circle>
                      <circle cx="190" cy="190" r="130" fill="none" stroke="rgba(147,197,253,0.28)" strokeWidth="1"></circle>
                      <circle cx="190" cy="190" r="80" fill="none" stroke="rgba(196,181,253,0.45)" strokeWidth="1.5"></circle>
                      <circle className="wd-pulse" cx="190" cy="190" r="34" fill="url(#adsCore)"></circle>
                      <defs>
                        <radialGradient id="adsCore">
                          <stop offset="0" stopColor="#E9D5FF"></stop>
                          <stop offset="1" stopColor="#7C3AED"></stop>
                        </radialGradient>
                      </defs>
                      <circle cx="70" cy="120" r="5" fill="rgba(255,255,255,0.3)"></circle>
                      <circle cx="310" cy="90" r="5" fill="rgba(255,255,255,0.3)"></circle>
                      <circle cx="330" cy="260" r="5" fill="rgba(255,255,255,0.3)"></circle>
                      <circle cx="60" cy="280" r="5" fill="rgba(255,255,255,0.3)"></circle>
                      <circle cx="140" cy="150" r="7" fill="#A78BFA"></circle>
                      <circle cx="250" cy="140" r="7" fill="#60A5FA"></circle>
                      <circle cx="240" cy="245" r="7" fill="#A78BFA"></circle>
                      <circle cx="135" cy="240" r="7" fill="#60A5FA"></circle>
                      <line x1="140" y1="150" x2="190" y2="190" stroke="rgba(196,181,253,0.6)" strokeWidth="1.5"></line>
                      <line x1="250" y1="140" x2="190" y2="190" stroke="rgba(147,197,253,0.6)" strokeWidth="1.5"></line>
                      <line x1="240" y1="245" x2="190" y2="190" stroke="rgba(196,181,253,0.6)" strokeWidth="1.5"></line>
                      <line x1="135" y1="240" x2="190" y2="190" stroke="rgba(147,197,253,0.6)" strokeWidth="1.5"></line>
                    </svg>
                  </div>
                  <div className="wd-float" style={{position: "absolute", left: "6%", top: "8%", padding: "10px 14px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", color: "#FFFFFF", fontSize: "13px", fontWeight: "600"}}>
                    Google Ads
                  </div>
                  <div className="wd-float-2" style={{position: "absolute", right: "6%", bottom: "8%", padding: "10px 14px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", color: "#FFFFFF", fontSize: "13px", fontWeight: "600"}}>
                    Meta Ads
                  </div>
                </div>
                <div className="wd-reveal" style={{flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                    SERVICE 05 · PAID ADVERTISING
                  </span>
                  <h2 id="svc-ads-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    PUT YOUR BRAND IN FRONT OF{" "}
                    <span className="wd-grad-text">
                      THE RIGHT AUDIENCE.
                    </span>
                  </h2>
                  <p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#A9B0C9"}}>
                    Paid ads let you reach people who are most likely to care about what you offer. We plan and run Google and Meta campaigns around your objective, whether that's leads, sales or awareness, with careful targeting, compelling ad creative and regular testing, so your budget is spent with intention and adjusted as we learn what works.
                  </p>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "24px", padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.5)"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        KEY BENEFITS
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Reach relevant audiences quickly
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Campaigns tied to clear objectives
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Ongoing testing and refinement
                        </li>
                      </ul>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        DELIVERABLES
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Campaign strategy &amp; setup
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Audience targeting
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Ad creatives &amp; copy
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Optimisation &amp; performance reports
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link className="wd-btn wd-btn-primary" to="/contact" onClick={v.askAds} style={{alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                    Discuss This Service{" "}
                    <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
            <section id="svc-brand" className="wd-show" aria-labelledby="svc-brand-title" style={{padding: "112px 24px", backgroundColor: "#070915", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: "76px"}}>
              <div style={{maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", gap: "64px", alignItems: "center"}}>
                <div className="wd-reveal" aria-hidden="true" style={{flex: "1 1 460px", minWidth: "0", position: "relative", height: "520px", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0B0E22"}}>
                  <div className="wd-art" style={{position: "absolute", inset: "0", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px", padding: "7%"}}>
                    <div style={{borderRadius: "22px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M7 4 L12 20 L17 4"></path>
                      </svg>
                    </div>
                    <div style={{borderRadius: "22px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.04)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "20px", gap: "4px"}}>
                      <span style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "64px", fontWeight: "700", lineHeight: "1", color: "#FFFFFF"}}>
                        Aa
                      </span>
                      <span style={{fontSize: "12px", letterSpacing: "0.14em", color: "#8D94AE"}}>
                        TYPOGRAPHY
                      </span>
                    </div>
                    <div style={{borderRadius: "22px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.04)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", padding: "20px"}}>
                      <span style={{fontSize: "12px", letterSpacing: "0.14em", color: "#8D94AE"}}>
                        PALETTE
                      </span>
                      <div style={{display: "flex", gap: "8px"}}>
                        <span style={{width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#8B5CF6"}}></span>
                        <span style={{width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#3B82F6"}}></span>
                        <span style={{width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#0B1024", border: "1px solid rgba(255,255,255,0.3)"}}></span>
                        <span style={{width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#EEF0FA"}}></span>
                      </div>
                    </div>
                    <div className="wd-shift" style={{borderRadius: "22px", background: "linear-gradient(135deg, #312E81, #6D28D9, #1D4ED8, #312E81)", display: "flex", alignItems: "flex-end", padding: "20px"}}>
                      <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", color: "#FFFFFF", fontSize: "20px", lineHeight: "1.1"}}>
                        Brand
                        <br />
                        guidelines
                      </span>
                    </div>
                  </div>
                </div>
                <div className="wd-reveal" style={{flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#93C5FD"}}>
                    SERVICE 06 · BRANDING &amp; CREATIVE DESIGN
                  </span>
                  <h2 id="svc-brand-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    MAKE YOUR BRAND{" "}
                    <span className="wd-grad-text">
                      RECOGNIZABLE.
                    </span>
                  </h2>
                  <p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#A9B0C9"}}>
                    Strong brands are easy to recognise and hard to forget. We craft distinctive identities, from logo and colour palette to typography and visual style, and then apply them consistently across your marketing, so every touchpoint feels like you and your business builds a clear, confident presence in its market.
                  </p>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "24px", padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.5)"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        KEY BENEFITS
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          A distinctive look that stands out
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Consistency across every channel
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          Stronger trust and recall
                        </li>
                      </ul>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        DELIVERABLES
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Logo design &amp; variations
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Colour palette &amp; typography
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Brand guidelines
                        </li>
                        <li style={{display: "flex", gap: "10px"}}>
                          <span aria-hidden="true" style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#60A5FA", marginTop: "10px", flexShrink: "0"}}></span>
                          Marketing creatives &amp; templates
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link className="wd-btn wd-btn-primary" to="/contact" onClick={v.askBrand} style={{alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                    Discuss This Service{" "}
                    <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
          </div>
          <section id="process" aria-labelledby="process-title" style={{padding: "128px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginBottom: "72px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  HOW WE WORK
                </span>
                <h2 id="process-title" style={{margin: "0", maxWidth: "900px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  FROM THE FIRST IDEA TO THE{" "}
                  <span className="wd-grad-text">
                    FINAL EXECUTION.
                  </span>
                </h2>
              </div>
              <ol style={{listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "28px"}}>
                <li className="wd-reveal" style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                  <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
                    <span style={{width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: "0", boxShadow: "0 0 0 8px rgba(139,92,246,0.14), 0 16px 40px -12px rgba(124,92,255,0.8)"}}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </span>
                    <span className="wd-flow" aria-hidden="true" style={{flex: "1", height: "2px", background: "linear-gradient(90deg, #8B5CF6, #3B82F6, #8B5CF6)"}}></span>
                  </div>
                  <span className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1", letterSpacing: "-0.04em"}}>
                    01
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.02em"}}>
                    DISCOVER
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Understand the business, target audience, goals, and challenges.
                  </p>
                </li>
                <li className="wd-reveal" style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                  <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
                    <span style={{width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: "0", boxShadow: "0 0 0 8px rgba(139,92,246,0.14), 0 16px 40px -12px rgba(124,92,255,0.8)"}}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </span>
                    <span className="wd-flow" aria-hidden="true" style={{flex: "1", height: "2px", background: "linear-gradient(90deg, #8B5CF6, #3B82F6, #8B5CF6)"}}></span>
                  </div>
                  <span className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1", letterSpacing: "-0.04em"}}>
                    02
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.02em"}}>
                    STRATEGIZE
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Develop a customized plan according to the business objectives.
                  </p>
                </li>
                <li className="wd-reveal" style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                  <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
                    <span style={{width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: "0", boxShadow: "0 0 0 8px rgba(139,92,246,0.14), 0 16px 40px -12px rgba(124,92,255,0.8)"}}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                    </span>
                    <span className="wd-flow" aria-hidden="true" style={{flex: "1", height: "2px", background: "linear-gradient(90deg, #8B5CF6, #3B82F6, #8B5CF6)"}}></span>
                  </div>
                  <span className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1", letterSpacing: "-0.04em"}}>
                    03
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.02em"}}>
                    EXECUTE
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Create and implement the selected digital solutions.
                  </p>
                </li>
                <li className="wd-reveal" style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                  <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
                    <span style={{width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: "0", boxShadow: "0 0 0 8px rgba(139,92,246,0.14), 0 16px 40px -12px rgba(124,92,255,0.8)"}}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5"></path>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M8 16H3v5"></path>
                      </svg>
                    </span>
                    <span aria-hidden="true" style={{flex: "1", height: "2px", backgroundImage: "linear-gradient(90deg, rgba(96,165,250,0.6) 50%, transparent 50%)", backgroundSize: "12px 2px"}}></span>
                  </div>
                  <span className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "52px", lineHeight: "1", letterSpacing: "-0.04em"}}>
                    04
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.02em"}}>
                    OPTIMIZE
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Review performance and identify opportunities for continuous improvement.
                  </p>
                </li>
              </ol>
            </div>
          </section>
          <section aria-labelledby="svc-why-title" style={{padding: "128px 24px", background: "linear-gradient(180deg, #05060B 0%, #090C1E 50%, #05060B 100%)", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "56px", alignItems: "start"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  WHY CHOOSE WEB DIVIDER
                </span>
                <h2 id="svc-why-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  YOUR GOALS.{" "}
                  <span className="wd-grad-text">
                    OUR CREATIVE APPROACH.
                  </span>
                </h2>
                <p style={{margin: "0", color: "#A9B0C9", fontSize: "17px", maxWidth: "460px"}}>
                  Every engagement is shaped around what you want to achieve, delivered by a team that cares about the details and keeps you in the loop.
                </p>
                <Link className="wd-btn wd-btn-ghost" to="/contact" style={{alignSelf: "flex-start", marginTop: "8px", display: "inline-flex", alignItems: "center", gap: "10px", height: "52px", padding: "0 26px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                  Let's Talk{" "}
                  <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "16px"}}>
                <div className="wd-card wd-reveal" style={{padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "14px"}}>
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
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF"}}>
                    Customized Strategies
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Plans built around your market, audience, goals and budget, never a generic package.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "14px"}}>
                  <span className="wd-icon" style={{width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF"}}>
                    Creative Execution
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Ideas brought to life with premium design, sharp copy and content made to stand out.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "14px"}}>
                  <span className="wd-icon" style={{width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF"}}>
                    Transparent Communication
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Clear updates, honest advice and reporting you can actually understand.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "14px"}}>
                  <span className="wd-icon" style={{width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF"}}>
                    Growth-Focused Solutions
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Every activity is connected to your bigger goals and improved over time.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="faq" aria-labelledby="faq-title" style={{padding: "128px 24px", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "880px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginBottom: "48px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  FAQ
                </span>
                <h2 id="faq-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  FREQUENTLY ASKED{" "}
                  <span className="wd-grad-text">
                    QUESTIONS
                  </span>
                </h2>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                <div className="wd-reveal" style={{borderRadius: "20px", border: "1px solid rgba(255,255,255,0.09)", backgroundColor: "rgba(14,16,36,0.6)", overflow: "hidden"}}>
                  <h3 style={{margin: "0"}}>
                    <button className="wd-faq-q" type="button" onClick={v.faq0} aria-expanded={v.open0s} aria-controls="faq-a0" style={{width: "100%", minHeight: "64px", padding: "20px 24px", border: "0", backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: "600", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", cursor: "pointer"}}>
                      What services does Web Divider offer?
                      <span aria-hidden="true" style={{width: "36px", height: "36px", flexShrink: "0", borderRadius: "50%", border: "1px solid rgba(167,139,250,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                        {v.open0 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                            </svg>
                          </>
                        )}
                        {v.closed0 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </h3>
                  {v.open0 && (
                    <>
                      <div id="faq-a0" className="wd-menu" style={{padding: "0 24px 24px", color: "#A9B0C9", fontSize: "16px", lineHeight: "1.7"}}>
                        We offer six core services: social media marketing, website design and development, search engine optimisation (SEO), content creation, paid advertising (Google and Meta Ads), and branding and creative design. You can use one service or combine several into a complete growth plan.
                      </div>
                    </>
                  )}
                </div>
                <div className="wd-reveal" style={{borderRadius: "20px", border: "1px solid rgba(255,255,255,0.09)", backgroundColor: "rgba(14,16,36,0.6)", overflow: "hidden"}}>
                  <h3 style={{margin: "0"}}>
                    <button className="wd-faq-q" type="button" onClick={v.faq1} aria-expanded={v.open1s} aria-controls="faq-a1" style={{width: "100%", minHeight: "64px", padding: "20px 24px", border: "0", backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: "600", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", cursor: "pointer"}}>
                      Can I hire Web Divider for a single service?
                      <span aria-hidden="true" style={{width: "36px", height: "36px", flexShrink: "0", borderRadius: "50%", border: "1px solid rgba(167,139,250,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                        {v.open1 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                            </svg>
                          </>
                        )}
                        {v.closed1 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </h3>
                  {v.open1 && (
                    <>
                      <div id="faq-a1" className="wd-menu" style={{padding: "0 24px 24px", color: "#A9B0C9", fontSize: "16px", lineHeight: "1.7"}}>
                        Yes. You can work with us on just one service, such as a new website or social media management, or bring us in for several. We'll recommend what makes sense for your goals, but the choice is always yours.
                      </div>
                    </>
                  )}
                </div>
                <div className="wd-reveal" style={{borderRadius: "20px", border: "1px solid rgba(255,255,255,0.09)", backgroundColor: "rgba(14,16,36,0.6)", overflow: "hidden"}}>
                  <h3 style={{margin: "0"}}>
                    <button className="wd-faq-q" type="button" onClick={v.faq2} aria-expanded={v.open2s} aria-controls="faq-a2" style={{width: "100%", minHeight: "64px", padding: "20px 24px", border: "0", backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: "600", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", cursor: "pointer"}}>
                      Do you work with international clients?
                      <span aria-hidden="true" style={{width: "36px", height: "36px", flexShrink: "0", borderRadius: "50%", border: "1px solid rgba(167,139,250,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                        {v.open2 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                            </svg>
                          </>
                        )}
                        {v.closed2 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </h3>
                  {v.open2 && (
                    <>
                      <div id="faq-a2" className="wd-menu" style={{padding: "0 24px 24px", color: "#A9B0C9", fontSize: "16px", lineHeight: "1.7"}}>
                        Yes. We work remotely with businesses in the United States, United Kingdom, Canada and India, as well as other markets. We plan communication around your time zone and use online tools for meetings, feedback and approvals.
                      </div>
                    </>
                  )}
                </div>
                <div className="wd-reveal" style={{borderRadius: "20px", border: "1px solid rgba(255,255,255,0.09)", backgroundColor: "rgba(14,16,36,0.6)", overflow: "hidden"}}>
                  <h3 style={{margin: "0"}}>
                    <button className="wd-faq-q" type="button" onClick={v.faq3} aria-expanded={v.open3s} aria-controls="faq-a3" style={{width: "100%", minHeight: "64px", padding: "20px 24px", border: "0", backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: "600", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", cursor: "pointer"}}>
                      How do I get started?
                      <span aria-hidden="true" style={{width: "36px", height: "36px", flexShrink: "0", borderRadius: "50%", border: "1px solid rgba(167,139,250,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                        {v.open3 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                            </svg>
                          </>
                        )}
                        {v.closed3 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </h3>
                  {v.open3 && (
                    <>
                      <div id="faq-a3" className="wd-menu" style={{padding: "0 24px 24px", color: "#A9B0C9", fontSize: "16px", lineHeight: "1.7"}}>
                        Simply get in touch and tell us a little about your business and what you'd like to achieve. We'll arrange an initial conversation to understand your needs, then share a recommended approach and next steps.
                      </div>
                    </>
                  )}
                </div>
                <div className="wd-reveal" style={{borderRadius: "20px", border: "1px solid rgba(255,255,255,0.09)", backgroundColor: "rgba(14,16,36,0.6)", overflow: "hidden"}}>
                  <h3 style={{margin: "0"}}>
                    <button className="wd-faq-q" type="button" onClick={v.faq4} aria-expanded={v.open4s} aria-controls="faq-a4" style={{width: "100%", minHeight: "64px", padding: "20px 24px", border: "0", backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: "600", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", cursor: "pointer"}}>
                      How much do your digital marketing services cost?
                      <span aria-hidden="true" style={{width: "36px", height: "36px", flexShrink: "0", borderRadius: "50%", border: "1px solid rgba(167,139,250,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                        {v.open4 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                            </svg>
                          </>
                        )}
                        {v.closed4 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </h3>
                  {v.open4 && (
                    <>
                      <div id="faq-a4" className="wd-menu" style={{padding: "0 24px 24px", color: "#A9B0C9", fontSize: "16px", lineHeight: "1.7"}}>
                        Pricing depends on the services you need, the scope of work and how long you'd like us to support you. Rather than fixed packages, we prepare a tailored proposal after understanding your requirements, so you only pay for what's genuinely useful to your business.
                      </div>
                    </>
                  )}
                </div>
                <div className="wd-reveal" style={{borderRadius: "20px", border: "1px solid rgba(255,255,255,0.09)", backgroundColor: "rgba(14,16,36,0.6)", overflow: "hidden"}}>
                  <h3 style={{margin: "0"}}>
                    <button className="wd-faq-q" type="button" onClick={v.faq5} aria-expanded={v.open5s} aria-controls="faq-a5" style={{width: "100%", minHeight: "64px", padding: "20px 24px", border: "0", backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: "600", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", cursor: "pointer"}}>
                      How long does it take to complete a project?
                      <span aria-hidden="true" style={{width: "36px", height: "36px", flexShrink: "0", borderRadius: "50%", border: "1px solid rgba(167,139,250,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                        {v.open5 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                            </svg>
                          </>
                        )}
                        {v.closed5 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </h3>
                  {v.open5 && (
                    <>
                      <div id="faq-a5" className="wd-menu" style={{padding: "0 24px 24px", color: "#A9B0C9", fontSize: "16px", lineHeight: "1.7"}}>
                        Timelines vary with the type and size of the project. One-off work like a logo or a landing page is usually shorter than a full website or brand identity, while services such as SEO, social media and ads are ongoing. We'll agree on a realistic timeline with you before any work begins.
                      </div>
                    </>
                  )}
                </div>
                <div className="wd-reveal" style={{borderRadius: "20px", border: "1px solid rgba(255,255,255,0.09)", backgroundColor: "rgba(14,16,36,0.6)", overflow: "hidden"}}>
                  <h3 style={{margin: "0"}}>
                    <button className="wd-faq-q" type="button" onClick={v.faq6} aria-expanded={v.open6s} aria-controls="faq-a6" style={{width: "100%", minHeight: "64px", padding: "20px 24px", border: "0", backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: "600", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", cursor: "pointer"}}>
                      Can you create a customized marketing strategy?
                      <span aria-hidden="true" style={{width: "36px", height: "36px", flexShrink: "0", borderRadius: "50%", border: "1px solid rgba(167,139,250,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                        {v.open6 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                            </svg>
                          </>
                        )}
                        {v.closed6 && (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </h3>
                  {v.open6 && (
                    <>
                      <div id="faq-a6" className="wd-menu" style={{padding: "0 24px 24px", color: "#A9B0C9", fontSize: "16px", lineHeight: "1.7"}}>
                        Absolutely. Every strategy we create is built around your business, audience, market and objectives. We look at where you are today, where you want to go, and which channels and activities can help you get there.
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section id="start" aria-labelledby="svc-cta-title" style={{padding: "0 24px 128px"}}>
            <div className="wd-reveal" style={{position: "relative", maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", overflow: "hidden", padding: "clamp(56px, 8vw, 112px) 32px", textAlign: "center"}}>
              <div className="wd-shift" aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(120deg, #5B21B6, #4338CA, #1D4ED8, #7C3AED)"}}></div>
              <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "26px 26px", opacity: "0.35"}}></div>
              <svg className="wd-spin" aria-hidden="true" width="520" height="520" viewBox="0 0 520 520" style={{position: "absolute", left: "-160px", bottom: "-220px", opacity: "0.6"}}>
                <circle cx="260" cy="260" r="250" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="3 9"></circle>
                <circle cx="260" cy="260" r="170" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1"></circle>
                <circle cx="260" cy="10" r="6" fill="#FFFFFF"></circle>
              </svg>
              <div aria-hidden="true" className="wd-float-2" style={{position: "absolute", right: "7%", top: "14%", width: "130px", height: "130px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.6), rgba(255,255,255,0.05) 70%)"}}></div>
              <div style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}>
                <h2 id="svc-cta-title" style={{margin: "0", maxWidth: "980px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 5.4vw, 76px)", lineHeight: "0.98", letterSpacing: "-0.04em", color: "#FFFFFF"}}>
                  LET'S FIND THE RIGHT SOLUTION FOR YOUR BRAND.
                </h2>
                <p style={{margin: "0", maxWidth: "620px", fontSize: "19px", color: "#EDE9FE"}}>
                  Every business has different goals. Tell us what you're looking to achieve, and let's explore how Web Divider can help.
                </p>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px", marginTop: "12px"}}>
                  <Link className="wd-btn" to="/contact" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "60px", padding: "0 34px", borderRadius: "999px", backgroundColor: "#FFFFFF", color: "#1E1B4B", textDecoration: "none", fontWeight: "700", fontSize: "17px", boxShadow: "0 18px 50px -12px rgba(5,6,11,0.6)"}}>
                    Start Your Project{" "}
                    <svg className="wd-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                  <Link className="wd-btn" to="/contact" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "60px", padding: "0 34px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.55)", backgroundColor: "rgba(255,255,255,0.08)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "17px"}}>
                    Contact Us
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
              <Link className="wd-foot-link" to="/about" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                About Us
              </Link>
              <a className="wd-foot-link" href="#top" aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "15px"}}>
                Services
              </a>
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
              <a className="wd-foot-link" href="#svc-social" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Social Media Marketing
              </a>
              <a className="wd-foot-link" href="#svc-web" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Website Design &amp; Development
              </a>
              <a className="wd-foot-link" href="#svc-seo" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                SEO
              </a>
              <a className="wd-foot-link" href="#svc-content" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Content Creation
              </a>
              <a className="wd-foot-link" href="#svc-ads" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Paid Advertising
              </a>
              <a className="wd-foot-link" href="#svc-brand" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Branding &amp; Creative Design
              </a>
            </nav>
            <div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
              <h3 style={{margin: "0 0 6px", fontSize: "13px", letterSpacing: "0.18em", color: "#FFFFFF", fontWeight: "600"}}>
                CONTACT
              </h3>
              {v.hasService && (
                <>
                  <div className="wd-menu" role="status" style={{padding: "12px 14px", borderRadius: "14px", border: "1px solid rgba(167,139,250,0.45)", backgroundColor: "rgba(139,92,246,0.12)", display: "flex", flexDirection: "column", gap: "2px"}}>
                    <span style={{fontSize: "11px", letterSpacing: "0.14em", color: "#C4B5FD", fontWeight: "600"}}>
                      YOUR ENQUIRY
                    </span>
                    <span style={{color: "#FFFFFF", fontWeight: "600", fontSize: "15px"}}>
                      {v.service}
                    </span>
                  </div>
                </>
              )}
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

export default Services;
