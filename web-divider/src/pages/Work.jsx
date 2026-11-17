// Converted from the Web Divider design canvas (Work.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectArt from '../components/ProjectArt.jsx';
// ---------------------------------------------------------------
// PROJECT DATA: add, remove or edit projects here.
// filter: web | brand | social | video | campaign
// id: also picks which visual ProjectArt.dc.html draws
// palette: any of violet, blue, pink, navy, light, indigo
// ---------------------------------------------------------------
class Work extends React.Component {
  // PROJECT DATA: add, remove or edit projects in this list.
  projects() {
    return [
  { id: 'ecom', filter: 'web', category: 'Website Design', title: 'E-Commerce Experience',
    description: 'A modern e-commerce website concept with a clean layout and user-friendly shopping experience.',
    overview: 'A concept online store for a growing product brand, exploring how a premium look and a simple shopping flow can work together on desktop and mobile.',
    direction: 'Calm, product-first layouts with rich gradients behind each item, so the products feel like the hero of every page.',
    approach: 'We mapped the journey from landing page to checkout, removed unnecessary steps and designed mobile screens first before scaling up to desktop.',
    features: ['Product grid with clear filters', 'Focused product detail pages', 'Streamlined cart and checkout flow', 'Mobile-first responsive layouts'],
    deliverables: 'UX flow, desktop and mobile UI', palette: ['violet', 'indigo', 'pink', 'navy'] },
  { id: 'brand', filter: 'brand', category: 'Branding', title: 'Brand Identity System',
    description: 'A creative brand identity concept with typography, colors, and visual elements.',
    overview: 'A complete identity concept for a modern service business, showing how a logo, colour palette and type system can work as one recognisable brand.',
    direction: 'Confident and minimal: a geometric monogram, a bold sans-serif typeface and a violet-to-blue palette with plenty of breathing room.',
    approach: 'We explored several logo routes, refined one mark, then tested it across business cards, social avatars and website headers to check it holds up everywhere.',
    features: ['Primary logo and monogram', 'Colour palette with usage ratios', 'Typography hierarchy', 'Brand application examples'],
    deliverables: 'Logo suite, palette, type system, guidelines', palette: ['violet', 'indigo', 'blue', 'light'] },
  { id: 'social', filter: 'social', category: 'Social Media', title: 'Social Media Campaign',
    description: "An engaging social media campaign concept designed to communicate a brand's personality.",
    overview: 'A launch-style campaign concept for a lifestyle brand, built as a series of posts that tell one story across a couple of weeks.',
    direction: 'Energetic and expressive, with bold type, playful colour blocks and short messages that read instantly on a phone screen.',
    approach: 'We defined the campaign message first, then designed a set of post templates that keep the look consistent while letting each post say something new.',
    features: ['Campaign concept and key message', 'Post and story templates', 'Caption tone of voice', 'Posting sequence plan'],
    deliverables: 'Campaign concept, post designs, story frames', palette: ['pink', 'violet', 'blue', 'navy'] },
  { id: 'video', filter: 'video', category: 'Video & Content', title: 'Creative Video Campaign',
    description: 'A visually engaging short-form video campaign concept for digital platforms.',
    overview: 'A short-form video series concept made for Reels and Shorts, designed to grab attention in the first seconds and keep viewers watching.',
    direction: 'Fast, rhythmic edits with bold captions, glowing gradient overlays and motion graphics that match the brand palette.',
    approach: 'We scripted strong hooks, planned shots in a vertical 9:16 format and built a reusable caption and transition style for the whole series.',
    features: ['Hook-first scripts', 'Vertical 9:16 edits', 'Branded captions and motion graphics', 'Series thumbnail style'],
    deliverables: 'Scripts, edited videos, motion templates', palette: ['violet', 'pink', 'blue', 'navy'] },
  { id: 'growth', filter: 'campaign', category: 'Marketing Campaigns', title: 'Digital Growth Campaign',
    description: 'A digital marketing campaign concept focused on brand awareness and audience engagement.',
    overview: 'A multi-channel campaign concept that brings search, social and display together around one clear awareness goal.',
    direction: 'A unified visual system so every ad, wherever it appears, is instantly recognisable as part of the same campaign.',
    approach: 'We defined the audience and objective, planned how each channel supports the others, then designed ad creative in the formats each platform needs.',
    features: ['Campaign objective and audience plan', 'Channel mix across search and social', 'Ad creative in multiple formats', 'Testing and optimisation plan'],
    deliverables: 'Campaign plan, ad creatives, testing roadmap', palette: ['blue', 'violet', 'indigo', 'navy'] },
  { id: 'bizweb', filter: 'web', category: 'Website Design', title: 'Modern Business Website',
    description: 'A professional business website concept designed to build credibility and generate inquiries.',
    overview: 'A concept website for a professional services firm, focused on making the business look established and making it easy to get in touch.',
    direction: 'Clean, light and trustworthy, with clear headlines, generous white space and a strong call to action on every page.',
    approach: 'We structured the site around the questions visitors ask most, designed a clear enquiry path and made sure every page works well on mobile.',
    features: ['Clear service and about pages', 'Prominent enquiry calls to action', 'Responsive desktop and mobile design', 'SEO-friendly page structure'],
    deliverables: 'Sitemap, UI design, responsive build plan', palette: ['indigo', 'violet', 'light', 'navy'] },
  { id: 'socialsys', filter: 'social', category: 'Social Media', title: 'Social Media Visual System',
    description: 'A consistent collection of creative social media graphics and promotional designs.',
    overview: 'A reusable set of social media templates that makes it quick to create on-brand posts week after week.',
    direction: 'A modular grid look, mixing bold typography tiles, gradient image tiles and quote cards so the feed looks planned and cohesive.',
    approach: 'We designed a small library of post types (tips, announcements, quotes, carousels) and showed how they combine into a balanced feed.',
    features: ['Feed layout system', 'Post templates for different content types', 'Carousel and story formats', 'Easy-to-edit template files'],
    deliverables: 'Template library, feed mockups', palette: ['violet', 'blue', 'light', 'navy'] },
  { id: 'product', filter: 'brand', category: 'Branding', title: 'Product Branding Concept',
    description: 'A modern product branding concept with a distinctive visual identity.',
    overview: 'A packaging and identity concept for a new consumer product, designed to stand out on a shelf and in online stores.',
    direction: 'Premium and modern: soft gradients, a strong central logo mark and clean labels that stay readable at small sizes.',
    approach: 'We explored packaging shapes and label layouts, then created product renders and supporting visuals for an e-commerce listing and social launch.',
    features: ['Product logo and label design', 'Packaging layout concepts', 'Product render visuals', 'Launch-ready marketing assets'],
    deliverables: 'Label design, packaging mockups, launch visuals', palette: ['violet', 'indigo', 'light', 'blue'] }
];
  }
  filterList() {
    return [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Website Design' },
  { key: 'brand', label: 'Branding' },
  { key: 'social', label: 'Social Media' },
  { key: 'video', label: 'Video & Content' },
  { key: 'campaign', label: 'Marketing Campaigns' }
];
  }
  // Card sizes: rows of a 3-column grid alternate wide + narrow cards.
  spansFor(n) {
    const patterns = [[2, 1], [1, 1, 1], [1, 2]];
    const out = [];
    let k = 0;
    while (out.length < n) {
      const left = n - out.length;
      let p = patterns[k % patterns.length];
      if (p.length > left) p = left === 2 ? [2, 1] : [3];
      p.forEach((s) => out.push(s));
      k++;
    }
    return out.slice(0, n);
  }
  
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, filter: 'all', anim: 0, sel: -1, enquiry: '' };
  }
  renderVals() {
    const st = this.state;
    const PROJECTS = this.projects();
    const FILTERS = this.filterList();
    const open = st.menuOpen;
    const list = PROJECTS.filter((p) => st.filter === 'all' || p.filter === st.filter);
    const spans = this.spansFor(list.length);
    const pop = st.anim % 2 === 0 ? 'wd-popA' : 'wd-popB';
    const visible = list.map((p, i) => ({
      ...p,
      num: String(PROJECTS.indexOf(p) + 1).padStart(2, '0'),
      categoryUpper: p.category.toUpperCase(),
      viewLabel: 'View project: ' + p.title,
      cls: 'wd-project wd-s' + spans[i] + ' ' + pop,
      open: () => this.setState({ sel: PROJECTS.indexOf(p) })
    }));
    const selP = st.sel >= 0 ? PROJECTS[st.sel] : PROJECTS[0];
    const total = PROJECTS.length;
    return {
      menuOpen: open,
      menuClosed: !open,
      menuOpenStr: open ? 'true' : 'false',
      menuLabel: open ? 'Close menu' : 'Open menu',
      toggleMenu: () => this.setState({ menuOpen: !open }),
      closeMenu: () => this.setState({ menuOpen: false }),
      filters: FILTERS.map((f) => ({
        label: f.label,
        pressed: st.filter === f.key ? 'true' : 'false',
        cls: 'wd-chip' + (st.filter === f.key ? ' is-active' : ''),
        pick: () => { if (st.filter !== f.key) this.setState({ filter: f.key, anim: st.anim + 1 }); }
      })),
      visible: visible,
      countLabel: list.length + (list.length === 1 ? ' concept project' : ' concept projects'),
      hasSel: st.sel >= 0,
      sel: {
        ...selP,
        features: selP.features.map((t) => ({ text: t })),
        palette: selP.palette.map((c) => ({ violet: c === 'violet', blue: c === 'blue', pink: c === 'pink', navy: c === 'navy', light: c === 'light', indigo: c === 'indigo' }))
      },
      selPos: (Math.max(st.sel, 0) + 1) + ' / ' + total,
      close: () => this.setState({ sel: -1 }),
      stop: (e) => { if (e && e.stopPropagation) e.stopPropagation(); },
      prevProject: () => this.setState({ sel: (st.sel - 1 + total) % total }),
      nextProject: () => this.setState({ sel: (st.sel + 1) % total }),
      talk: () => this.setState({ enquiry: selP.title, sel: -1 }),
      hasEnquiry: st.enquiry !== '',
      enquiry: st.enquiry
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div className="page-work" id="top" style={{width: "100%", minHeight: "100vh", backgroundColor: "#05060B", color: "#EEF0FA", fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", lineHeight: "1.6", overflowX: "hidden", position: "relative"}}>
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
              <Link className="wd-nav-link" to="/services" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                Services
              </Link>
              <a className="wd-nav-link" href="#top" aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                Our Work
              </a>
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
                <Link to="/services" style={{color: "#D4D8E8", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  Services
                </Link>
                <a href="#top" onClick={v.closeMenu} aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  Our Work
                </a>
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
          <section aria-labelledby="work-hero-title" style={{position: "relative", overflow: "hidden", padding: "96px 24px 120px"}}>
            <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", top: "-240px", right: "-120px", width: "760px", height: "760px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.3), rgba(139,92,246,0) 62%)", pointerEvents: "none"}}></div>
            <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", bottom: "-300px", left: "-200px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.26), rgba(59,130,246,0) 65%)", pointerEvents: "none", animationDelay: "-3s"}}></div>
            <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none"}}></div>
            <div style={{position: "relative", maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", gap: "48px", alignItems: "center"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "28px"}}>
                <div className="wd-enter" style={{display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", padding: "8px 16px 8px 10px", borderRadius: "999px", border: "1px solid rgba(167,139,250,0.3)", backgroundColor: "rgba(139,92,246,0.08)", fontSize: "13px", fontWeight: "600", color: "#D6CCFF", letterSpacing: "0.18em"}}>
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg,#A78BFA,#60A5FA)", boxShadow: "0 0 12px #8B5CF6"}}></span>
                  {" "}OUR PORTFOLIO{" "}
                </div>
                <h1 id="work-hero-title" className="wd-enter wd-d1" style={{margin: "0", fontFamily: "'Space Grotesk', Inter, sans-serif", fontWeight: "700", fontSize: "clamp(46px, 7vw, 100px)", lineHeight: "0.94", letterSpacing: "-0.05em", color: "#FFFFFF", textTransform: "uppercase"}}>
                  Good ideas deserve{" "}
                  <span className="wd-grad-text">
                    great execution.
                  </span>
                </h1>
                <p className="wd-enter wd-d2" style={{margin: "0", maxWidth: "560px", fontSize: "19px", lineHeight: "1.65", color: "#A9B0C9"}}>
                  Explore a collection of creative projects, digital experiences, and brand-focused solutions designed to help businesses stand out in the digital world.
                </p>
                <div className="wd-enter wd-d3" style={{display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "8px"}}>
                  <a className="wd-btn wd-btn-primary" href="#projects" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "16px"}}>
                    Explore Our Work{" "}
                    <svg className="wd-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                  <Link className="wd-btn wd-btn-ghost" to="/contact" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "16px"}}>
                    Start a Project
                  </Link>
                </div>
              </div>
              <div className="wd-enter wd-d2" aria-hidden="true" style={{position: "relative", height: "560px", perspective: "1400px"}}>
                <svg className="wd-spin" width="520" height="520" viewBox="0 0 520 520" style={{position: "absolute", left: "50%", top: "50%", margin: "-260px 0 0 -260px", maxWidth: "100%"}} aria-hidden="true">
                  <circle cx="260" cy="260" r="250" fill="none" stroke="rgba(167,139,250,0.28)" strokeWidth="1" strokeDasharray="2 10"></circle>
                  <circle cx="260" cy="10" r="5" fill="#A78BFA"></circle>
                </svg>
                <div className="wd-float-2" style={{position: "absolute", left: "4%", top: "18%", width: "46%", height: "58%", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.2)", background: "linear-gradient(160deg, #3B82F6, #1E1B4B)", transform: "rotateY(28deg) rotateZ(-6deg)", boxShadow: "0 40px 80px -30px rgba(0,0,0,0.8)", overflow: "hidden"}}>
                  <div style={{position: "absolute", left: "10%", right: "10%", top: "12%", height: "10px", borderRadius: "5px", backgroundColor: "rgba(255,255,255,0.6)"}}></div>
                  <div style={{position: "absolute", left: "10%", width: "50%", top: "22%", height: "10px", borderRadius: "5px", backgroundColor: "rgba(255,255,255,0.3)"}}></div>
                  <div style={{position: "absolute", left: "10%", right: "10%", bottom: "10%", height: "50%", borderRadius: "14px", background: "radial-gradient(circle at 50% 50%, #93C5FD 0 25%, rgba(255,255,255,0.08) 26%)"}}></div>
                </div>
                <div className="wd-float" style={{position: "absolute", right: "4%", top: "10%", width: "44%", height: "54%", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "#F5F3FF", transform: "rotateY(-26deg) rotateZ(5deg)", boxShadow: "0 40px 80px -30px rgba(0,0,0,0.8)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"}}>
                  <svg width="72" height="72" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#4C1D95" strokeWidth="6"></circle>
                    <path d="M28 34 L50 72 L72 34" fill="none" stroke="#4C1D95" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", letterSpacing: "0.28em", fontSize: "12px", color: "#4C1D95"}}>
                    IDENTITY
                  </span>
                </div>
                <div className="wd-float" style={{position: "absolute", left: "30%", bottom: "4%", width: "40%", height: "52%", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.3)", background: "linear-gradient(150deg, #A78BFA, #6D28D9 55%, #312E81)", boxShadow: "0 50px 90px -30px rgba(0,0,0,0.85), 0 0 80px rgba(139,92,246,0.4)", animationDelay: "-3s", overflow: "hidden"}}>
                  <span style={{position: "absolute", left: "50%", top: "44%", width: "56px", height: "56px", margin: "-28px 0 0 -28px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#4C1D95" style={{marginLeft: "3px"}}>
                      <path d="M6 4v16l14-8z"></path>
                    </svg>
                  </span>
                  <span style={{position: "absolute", left: "10%", right: "30%", bottom: "12%", height: "8px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.7)"}}></span>
                </div>
                <div className="wd-float-2" style={{position: "absolute", right: "6%", bottom: "14%", padding: "10px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(18,20,42,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", fontSize: "13px", fontWeight: "600", color: "#E4E0FF", display: "flex", alignItems: "center", gap: "8px"}}>
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FDE68A", boxShadow: "0 0 10px #FDE68A"}}></span>
                  Concept portfolio
                </div>
              </div>
            </div>
          </section>
          <section aria-labelledby="universe-title" style={{padding: "120px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#070915"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "72px", alignItems: "center"}}>
              <div className="wd-reveal" aria-hidden="true" style={{position: "relative", height: "520px", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "radial-gradient(circle at 50% 50%, #1E1B4B 0%, #0B0E22 60%, #05060B 100%)"}}>
                <div style={{position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: "0.35"}}></div>
                <svg className="wd-spin" viewBox="0 0 400 400" style={{position: "absolute", left: "50%", top: "50%", width: "88%", maxWidth: "440px", transform: "translate(-50%, -50%)"}}>
                  <ellipse cx="200" cy="200" rx="190" ry="190" fill="none" stroke="rgba(167,139,250,0.3)" strokeWidth="1"></ellipse>
                  <ellipse cx="200" cy="200" rx="130" ry="130" fill="none" stroke="rgba(147,197,253,0.3)" strokeWidth="1" strokeDasharray="3 8"></ellipse>
                  <circle cx="390" cy="200" r="9" fill="#A78BFA"></circle>
                  <circle cx="10" cy="200" r="6" fill="#60A5FA"></circle>
                  <circle cx="200" cy="70" r="7" fill="#F0ABFC"></circle>
                  <circle cx="200" cy="330" r="6" fill="#93C5FD"></circle>
                </svg>
                <div className="wd-float" style={{position: "absolute", left: "50%", top: "50%", width: "150px", height: "150px", margin: "-75px 0 0 -75px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #EDE9FE, #8B5CF6 40%, #312E81 85%)", boxShadow: "0 0 100px rgba(139,92,246,0.6)"}}></div>
                <span className="wd-float-2" style={{position: "absolute", left: "8%", top: "12%", padding: "8px 14px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", fontSize: "13px", fontWeight: "600", color: "#FFFFFF"}}>
                  Websites
                </span>
                <span className="wd-float" style={{position: "absolute", right: "8%", top: "20%", padding: "8px 14px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", fontSize: "13px", fontWeight: "600", color: "#FFFFFF", animationDelay: "-2s"}}>
                  Branding
                </span>
                <span className="wd-float-2" style={{position: "absolute", left: "12%", bottom: "14%", padding: "8px 14px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", fontSize: "13px", fontWeight: "600", color: "#FFFFFF", animationDelay: "-4s"}}>
                  Social media
                </span>
                <span className="wd-float" style={{position: "absolute", right: "10%", bottom: "10%", padding: "8px 14px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", fontSize: "13px", fontWeight: "600", color: "#FFFFFF", animationDelay: "-1s"}}>
                  Video &amp; content
                </span>
              </div>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", gap: "24px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  OUR CREATIVE UNIVERSE
                </span>
                <h2 id="universe-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(34px, 4.4vw, 58px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF", textTransform: "uppercase"}}>
                  We turn creative thinking into{" "}
                  <span className="wd-grad-text">
                    digital experiences.
                  </span>
                </h2>
                <p style={{margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#D4D8E8"}}>
                  Every project is an opportunity to solve a problem, communicate an idea, and create something meaningful.
                </p>
                <p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#A9B0C9"}}>
                  From websites and branding to social media campaigns and creative content, we bring ideas to life through thoughtful design and strategic execution.
                </p>
                <p style={{margin: "0", padding: "14px 18px", borderRadius: "14px", border: "1px dashed rgba(253,230,138,0.5)", color: "#FDE68A", fontSize: "14px"}}>
                  The projects on this page are concept and demo projects created to show our style and capabilities. They are not client work.
                </p>
              </div>
            </div>
          </section>
          <section id="projects" aria-labelledby="projects-title" style={{padding: "120px 24px", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "36px"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                    FEATURED PROJECTS
                  </span>
                  <h2 id="projects-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    SELECTED{" "}
                    <span className="wd-grad-text">
                      CONCEPTS
                    </span>
                  </h2>
                </div>
                <p role="status" style={{margin: "0", color: "#8D94AE", fontSize: "15px"}}>
                  Showing{" "}{v.countLabel}
                </p>
              </div>
              <div role="group" aria-label="Filter projects by category" style={{display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px"}}>
                {(v.filters || []).map((f, i1) => (
                  <React.Fragment key={i1}>
                    <button className={f.cls} type="button" onClick={f.pick} aria-pressed={f.pressed} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.16)", backgroundColor: "rgba(255,255,255,0.03)", color: "#C9CEE0", fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}>
                      {f.label}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              <div className="wd-grid" style={{gap: "24px"}}>
                {(v.visible || []).map((p, i2) => (
                  <React.Fragment key={i2}>
                    <article className={p.cls} style={{borderRadius: "28px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0B0E22", display: "flex", flexDirection: "column", minWidth: "0"}}>
                      <div style={{position: "relative", height: "340px", overflow: "hidden"}}>
                        <ProjectArt variant={p.id} />
                        <span style={{position: "absolute", top: "18px", left: "18px", padding: "6px 12px", borderRadius: "999px", backgroundColor: "rgba(5,6,11,0.72)", border: "1px solid rgba(255,255,255,0.15)", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#FDE68A", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)"}}>
                          CONCEPT PROJECT
                        </span>
                        <span style={{position: "absolute", top: "18px", right: "18px", padding: "6px 12px", borderRadius: "999px", backgroundColor: "rgba(139,92,246,0.85)", fontSize: "12px", fontWeight: "600", color: "#FFFFFF"}}>
                          {p.category}
                        </span>
                      </div>
                      <div style={{padding: "26px 28px 28px", display: "flex", flexDirection: "column", gap: "10px", flexGrow: "1"}}>
                        <span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", color: "#A78BFA"}}>
                          {p.num}{" "}·{" "}{p.categoryUpper}
                        </span>
                        <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "-0.01em"}}>
                          {p.title}
                        </h3>
                        <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px", flexGrow: "1"}}>
                          {p.description}
                        </p>
                        <button className="wd-btn wd-btn-ghost" type="button" onClick={p.open} aria-label={p.viewLabel} style={{marginTop: "10px", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "8px", height: "46px", padding: "0 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontWeight: "600", fontSize: "14px", cursor: "pointer"}}>
                          View Project{" "}
                          <svg className="wd-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        </button>
                      </div>
                    </article>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
          <section aria-labelledby="cap-title" style={{padding: "128px 24px", background: "linear-gradient(180deg, #05060B 0%, #090C1E 50%, #05060B 100%)", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "32px", alignItems: "end", marginBottom: "56px"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                    WHAT WE CAN CREATE
                  </span>
                  <h2 id="cap-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.2vw, 58px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                    FROM THE FIRST IDEA TO THE{" "}
                    <span className="wd-grad-text">
                      FINAL EXPERIENCE.
                    </span>
                  </h2>
                </div>
                <p style={{margin: "0", color: "#A9B0C9", fontSize: "17px"}}>
                  Six creative capabilities that can work on their own or come together as one connected brand experience.
                </p>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "20px"}}>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "21px", fontWeight: "600", color: "#FFFFFF"}}>
                    Website Design &amp; Development
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px", flexGrow: "1"}}>
                    Responsive business sites, e-commerce stores and landing pages designed to build trust and drive enquiries.
                  </p>
                  <Link className="wd-link" to="/services" aria-label="Explore website design services" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Services{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "21px", fontWeight: "600", color: "#FFFFFF"}}>
                    Brand Identity &amp; Design
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px", flexGrow: "1"}}>
                    Logos, colour palettes, typography and guidelines that give your brand a distinctive, consistent look.
                  </p>
                  <Link className="wd-link" to="/services" aria-label="Explore branding services" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Services{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "21px", fontWeight: "600", color: "#FFFFFF"}}>
                    Social Media Creatives
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px", flexGrow: "1"}}>
                    Posts, carousels and templates that keep your feed consistent, on-brand and engaging.
                  </p>
                  <Link className="wd-link" to="/services" aria-label="Explore social media services" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Services{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m16 13 5.22 3.48a.5.5 0 0 0 .78-.42V7.94a.5.5 0 0 0-.76-.43L16 10.5"></path>
                      <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "21px", fontWeight: "600", color: "#FFFFFF"}}>
                    Short-Form Video Content
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px", flexGrow: "1"}}>
                    Reels, shorts and motion graphics edited to grab attention in the first few seconds.
                  </p>
                  <Link className="wd-link" to="/services" aria-label="Explore content creation services" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Services{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "21px", fontWeight: "600", color: "#FFFFFF"}}>
                    Digital Marketing Campaigns
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px", flexGrow: "1"}}>
                    Campaign ideas, ad creative and targeting plans built around a clear objective.
                  </p>
                  <Link className="wd-link" to="/services" aria-label="Explore paid advertising services" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Services{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "21px", fontWeight: "600", color: "#FFFFFF"}}>
                    Creative Strategy
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px", flexGrow: "1"}}>
                    Research-led creative direction that connects every idea back to your audience and goals.
                  </p>
                  <Link className="wd-link" to="/services" aria-label="Explore creative strategy services" style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#C4B5FD", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                    Explore Services{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </article>
              </div>
            </div>
          </section>
          <section aria-labelledby="behind-title" style={{padding: "128px 24px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginBottom: "64px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  BEHIND THE WORK
                </span>
                <h2 id="behind-title" style={{margin: "0", maxWidth: "920px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  EVERY GREAT PROJECT STARTS WITH A{" "}
                  <span className="wd-grad-text">
                    GREAT PROCESS.
                  </span>
                </h2>
              </div>
              <div style={{position: "relative"}}>
                <div aria-hidden="true" className="wd-flow" style={{position: "absolute", left: "4%", right: "4%", top: "50%", height: "2px", background: "linear-gradient(90deg, rgba(139,92,246,0), #8B5CF6, #3B82F6, #8B5CF6, rgba(59,130,246,0))"}}></div>
                <ol style={{listStyle: "none", margin: "0", padding: "0", position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "20px"}}>
                  <li className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(10,12,28,0.94)", display: "flex", flexDirection: "column", gap: "14px"}}>
                    <span aria-hidden="true" className="wd-grad-text" style={{position: "absolute", right: "16px", top: "6px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "84px", lineHeight: "1", opacity: "0.18"}}>
                      01
                    </span>
                    <span className="wd-icon" style={{width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </span>
                    <span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", color: "#A78BFA"}}>
                      STEP 01
                    </span>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      UNDERSTAND
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We understand the client's business, audience, and objectives.
                    </p>
                  </li>
                  <li className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(10,12,28,0.94)", display: "flex", flexDirection: "column", gap: "14px"}}>
                    <span aria-hidden="true" className="wd-grad-text" style={{position: "absolute", right: "16px", top: "6px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "84px", lineHeight: "1", opacity: "0.18"}}>
                      02
                    </span>
                    <span className="wd-icon" style={{width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </span>
                    <span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", color: "#A78BFA"}}>
                      STEP 02
                    </span>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      EXPLORE
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We research ideas, references, and creative possibilities.
                    </p>
                  </li>
                  <li className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(10,12,28,0.94)", display: "flex", flexDirection: "column", gap: "14px"}}>
                    <span aria-hidden="true" className="wd-grad-text" style={{position: "absolute", right: "16px", top: "6px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "84px", lineHeight: "1", opacity: "0.18"}}>
                      03
                    </span>
                    <span className="wd-icon" style={{width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                    <span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", color: "#A78BFA"}}>
                      STEP 03
                    </span>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      CREATE
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We turn the selected direction into a complete creative solution.
                    </p>
                  </li>
                  <li className="wd-card wd-reveal" style={{position: "relative", overflow: "hidden", padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(10,12,28,0.94)", display: "flex", flexDirection: "column", gap: "14px"}}>
                    <span aria-hidden="true" className="wd-grad-text" style={{position: "absolute", right: "16px", top: "6px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "84px", lineHeight: "1", opacity: "0.18"}}>
                      04
                    </span>
                    <span className="wd-icon" style={{width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                    <span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", color: "#A78BFA"}}>
                      STEP 04
                    </span>
                    <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                      REFINE
                    </h3>
                    <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                      We review and refine the work to improve the final experience.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>
          <section id="start" aria-labelledby="work-cta-title" style={{padding: "0 24px 128px"}}>
            <div className="wd-reveal" style={{position: "relative", maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", overflow: "hidden", padding: "clamp(56px, 8vw, 112px) 32px", textAlign: "center"}}>
              <div className="wd-shift" aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(120deg, #5B21B6, #4338CA, #1D4ED8, #7C3AED)"}}></div>
              <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "26px 26px", opacity: "0.35"}}></div>
              <div aria-hidden="true" className="wd-float" style={{position: "absolute", left: "6%", bottom: "14%", width: "140px", height: "180px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.08)", transform: "rotate(-10deg)"}}></div>
              <div aria-hidden="true" className="wd-float-2" style={{position: "absolute", right: "6%", top: "12%", width: "160px", height: "120px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.1)", transform: "rotate(8deg)"}}></div>
              <div style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}>
                <h2 id="work-cta-title" style={{margin: "0", maxWidth: "980px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 5.4vw, 76px)", lineHeight: "0.98", letterSpacing: "-0.04em", color: "#FFFFFF"}}>
                  YOUR BRAND COULD BE OUR NEXT CREATIVE PROJECT.
                </h2>
                <p style={{margin: "0", maxWidth: "600px", fontSize: "19px", color: "#EDE9FE"}}>
                  Have an idea in mind? Let's collaborate and create something that makes your brand stand out.
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
              <Link className="wd-foot-link" to="/services" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Services
              </Link>
              <a className="wd-foot-link" href="#top" aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "15px"}}>
                Our Work
              </a>
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
              {v.hasEnquiry && (
                <>
                  <div className="wd-menu" role="status" style={{padding: "12px 14px", borderRadius: "14px", border: "1px solid rgba(167,139,250,0.45)", backgroundColor: "rgba(139,92,246,0.12)", display: "flex", flexDirection: "column", gap: "2px"}}>
                    <span style={{fontSize: "11px", letterSpacing: "0.14em", color: "#C4B5FD", fontWeight: "600"}}>
                      YOUR ENQUIRY
                    </span>
                    <span style={{color: "#FFFFFF", fontWeight: "600", fontSize: "15px"}}>
                      A project like:{" "}{v.enquiry}
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
        {v.hasSel && (
          <>
            <div className="wd-overlay" onClick={v.close} style={{position: "fixed", inset: "0", zIndex: "100", backgroundColor: "rgba(3,4,10,0.82)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", overflowY: "auto", padding: "32px 16px"}}>
              <div className="wd-dialog" role="dialog" aria-modal="true" aria-labelledby="detail-title" onClick={v.stop} style={{position: "relative", maxWidth: "1080px", margin: "0 auto", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "#0A0C1C", overflow: "hidden", boxShadow: "0 60px 120px -40px rgba(0,0,0,0.9)"}}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "18px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
                  <button className="wd-btn wd-btn-ghost" type="button" onClick={v.close} style={{display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.16)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontWeight: "600", fontSize: "14px", cursor: "pointer"}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    Back to portfolio
                  </button>
                  <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
                    <button className="wd-btn wd-btn-ghost" type="button" onClick={v.prevProject} aria-label="Previous project" style={{width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.16)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </button>
                    <span style={{color: "#8D94AE", fontSize: "14px", minWidth: "52px", textAlign: "center"}}>
                      {v.selPos}
                    </span>
                    <button className="wd-btn wd-btn-ghost" type="button" onClick={v.nextProject} aria-label="Next project" style={{width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.16)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                    <button type="button" onClick={v.close} aria-label="Close project details" style={{width: "44px", height: "44px", marginLeft: "4px", borderRadius: "50%", border: "0", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div style={{padding: "clamp(24px, 4vw, 48px)", display: "flex", flexDirection: "column", gap: "32px"}}>
                  <div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                      <span style={{padding: "6px 12px", borderRadius: "999px", border: "1px dashed rgba(253,230,138,0.6)", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#FDE68A"}}>
                        CONCEPT PROJECT
                      </span>
                      <span style={{padding: "6px 12px", borderRadius: "999px", backgroundColor: "rgba(139,92,246,0.85)", fontSize: "12px", fontWeight: "600", color: "#FFFFFF"}}>
                        {v.sel.category}
                      </span>
                    </div>
                    <h2 id="detail-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                      {v.sel.title}
                    </h2>
                    <p style={{margin: "0", maxWidth: "720px", fontSize: "18px", color: "#A9B0C9"}}>
                      {v.sel.description}
                    </p>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                    <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.18em", color: "#A78BFA", fontWeight: "600"}}>
                      FINAL PROJECT VISUALS
                    </h3>
                    <div style={{position: "relative", height: "clamp(260px, 44vw, 480px)", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)"}}>
                      <ProjectArt variant={v.sel.id} />
                    </div>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center"}}>
                      <span style={{fontSize: "13px", color: "#8D94AE", marginRight: "4px"}}>
                        Palette
                      </span>
                      {(v.sel.palette || []).map((c, i3) => (
                        <React.Fragment key={i3}>
                          {c.violet && (
                            <>
                              <span aria-hidden="true" style={{width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "#8B5CF6", border: "1px solid rgba(255,255,255,0.2)"}}></span>
                            </>
                          )}
                          {c.blue && (
                            <>
                              <span aria-hidden="true" style={{width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "#3B82F6", border: "1px solid rgba(255,255,255,0.2)"}}></span>
                            </>
                          )}
                          {c.pink && (
                            <>
                              <span aria-hidden="true" style={{width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "#F472B6", border: "1px solid rgba(255,255,255,0.2)"}}></span>
                            </>
                          )}
                          {c.navy && (
                            <>
                              <span aria-hidden="true" style={{width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "#1E1B4B", border: "1px solid rgba(255,255,255,0.2)"}}></span>
                            </>
                          )}
                          {c.light && (
                            <>
                              <span aria-hidden="true" style={{width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "#EEF0FA", border: "1px solid rgba(255,255,255,0.2)"}}></span>
                            </>
                          )}
                          {c.indigo && (
                            <>
                              <span aria-hidden="true" style={{width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "#4F46E5", border: "1px solid rgba(255,255,255,0.2)"}}></span>
                            </>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "16px"}}>
                    <div style={{padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", display: "flex", flexDirection: "column", gap: "10px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        PROJECT OVERVIEW
                      </h3>
                      <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                        {v.sel.overview}
                      </p>
                    </div>
                    <div style={{padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", display: "flex", flexDirection: "column", gap: "10px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        CREATIVE DIRECTION
                      </h3>
                      <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                        {v.sel.direction}
                      </p>
                    </div>
                    <div style={{padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", display: "flex", flexDirection: "column", gap: "10px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        DESIGN APPROACH
                      </h3>
                      <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                        {v.sel.approach}
                      </p>
                    </div>
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "16px", alignItems: "stretch"}}>
                    <div style={{padding: "24px", borderRadius: "20px", border: "1px solid rgba(167,139,250,0.3)", background: "linear-gradient(150deg, rgba(139,92,246,0.14), rgba(14,16,36,0.6))", display: "flex", flexDirection: "column", gap: "14px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        KEY FEATURES
                      </h3>
                      <ul style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px"}}>
                        {(v.sel.features || []).map((ft, i4) => (
                          <React.Fragment key={i4}>
                            <li style={{display: "flex", gap: "10px", color: "#D4D8E8", fontSize: "15px"}}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "4px"}}>
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              {ft.text}
                            </li>
                          </React.Fragment>
                        ))}
                      </ul>
                    </div>
                    <div style={{padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", display: "flex", flexDirection: "column", gap: "14px"}}>
                      <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.16em", color: "#FFFFFF", fontWeight: "600"}}>
                        PROJECT DETAILS
                      </h3>
                      <dl style={{margin: "0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "10px 18px", fontSize: "15px"}}>
                        <dt style={{color: "#8D94AE"}}>
                          Category
                        </dt>
                        <dd style={{margin: "0", color: "#FFFFFF"}}>
                          {v.sel.category}
                        </dd>
                        <dt style={{color: "#8D94AE"}}>
                          Type
                        </dt>
                        <dd style={{margin: "0", color: "#FFFFFF"}}>
                          Concept / demo project
                        </dd>
                        <dt style={{color: "#8D94AE"}}>
                          Deliverables
                        </dt>
                        <dd style={{margin: "0", color: "#FFFFFF"}}>
                          {v.sel.deliverables}
                        </dd>
                        <dt style={{color: "#8D94AE"}}>
                          Client
                        </dt>
                        <dd style={{margin: "0", color: "#FFFFFF"}}>
                          None. Created to show our approach.
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "12px", paddingTop: "8px"}}>
                    <Link className="wd-btn wd-btn-primary" to="/contact" onClick={v.talk} style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                      Have a Similar Project? Let's Talk{" "}
                      <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </Link>
                    <button className="wd-btn wd-btn-ghost" type="button" onClick={v.close} style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 26px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontWeight: "600", fontSize: "16px", cursor: "pointer"}}>
                      Back to portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Work;
