// Converted from the Web Divider design canvas (Contact.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';
class Contact extends React.Component {

  // ================================================================
  // 1) SUBMISSION CONFIG: connect a real backend or email service here.
  //    Leave inquiryEndpoint empty to stay in demo mode (nothing sent).
  //    Example services: Formspree, Web3Forms, your own API route.
  // ================================================================
  config() {
    return {
      inquiryEndpoint: '',          // e.g. 'https://formspree.io/f/your-id'
      demoDelayMs: 1200
    };
  }

  // 2) SUBMISSION HANDLER: the only place that talks to the network.
  //    Resolves to { delivered: true } on success, { demo: true } in demo
  //    mode, and throws on failure.
  submitInquiry(payload) {
    const cfg = this.config();
    if (!cfg.inquiryEndpoint) {
      return new Promise((resolve) => setTimeout(() => resolve({ demo: true }), cfg.demoDelayMs));
    }
    return fetch(cfg.inquiryEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    }).then((res) => {
      if (!res.ok) throw new Error('Request failed with status ' + res.status);
      return { delivered: true };
    });
  }

  // 3) FORM DATA
  countries() {
    return ['United States', 'United Kingdom', 'Canada', 'India', 'Australia', 'Austria', 'Bangladesh', 'Belgium', 'Brazil', 'China', 'Denmark', 'Egypt', 'Finland', 'France', 'Germany', 'Hong Kong', 'Indonesia', 'Ireland', 'Israel', 'Italy', 'Japan', 'Kenya', 'Malaysia', 'Mexico', 'Nepal', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Pakistan', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Saudi Arabia', 'Singapore', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'United Arab Emirates', 'Vietnam', 'Other'];
  }
  services() {
    return ['Social Media Marketing', 'Website Design & Development', 'SEO', 'Content Creation', 'Paid Advertising', 'Branding & Creative Design', 'Other'];
  }
  faqData() {
    return [
      { q: 'How can I get started with Web Divider?', a: 'Simply complete our project inquiry form with your details and requirements. We’ll review your inquiry and discuss the next steps.' },
      { q: 'Do you work with international clients?', a: 'We aim to work with businesses across different markets, including the USA, UK, Canada, and India. Contact us to discuss your requirements.' },
      { q: 'Can I hire you for just one service?', a: 'Yes. You can inquire about individual services or multiple services depending on your project requirements.' },
      { q: 'How much do your services cost?', a: 'Pricing depends on the type, scope, and complexity of your project. Contact us for a discussion about your requirements.' },
      { q: 'How long does it take to complete a project?', a: 'Timelines depend on the project scope, requirements, and deliverables. We’ll discuss an estimated timeline after understanding your project.' },
      { q: 'What happens after I submit the inquiry form?', a: 'We’ll review the information you provide and contact you using your submitted contact details once a working response process has been configured.' }
    ];
  }
  emptyForm() {
    return { name: '', email: '', company: '', country: '', countryQuery: '', services: [], budget: '', timeline: '', details: '', source: '', consent: false };
  }

  // 4) VALIDATION
  validate(f) {
    const e = {};
    if (f.name.trim().length < 2) e.name = 'Please enter your full name.';
    if (!f.email.trim()) e.email = 'Please enter your business email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Please enter a valid email address, like name@company.com.';
    if (!f.country) e.country = f.countryQuery.trim() ? 'Please choose a country from the list (or "Other").' : 'Please select your country.';
    if (!f.details.trim()) e.details = 'Please tell us a little about your project.';
    else if (f.details.trim().length < 20) e.details = 'Please add a few more details (at least 20 characters).';
    if (!f.consent) e.consent = 'Please agree to the processing of your information so we can respond.';
    return e;
  }

  constructor(props) {
    super(props);
    this.state = { menuOpen: false, f: this.emptyForm(), errors: {}, tried: false, status: 'idle', comboOpen: false, faqOpen: { 0: true } };
  }

  setField(key, value) {
    const f = { ...this.state.f, [key]: value };
    const next = { f };
    if (this.state.tried) next.errors = this.validate(f);
    if (this.state.status === 'error') next.status = 'idle';
    this.setState(next);
  }

  pickCountry(label) {
    const f = { ...this.state.f, country: label, countryQuery: label };
    this.setState({ f, comboOpen: false, errors: this.state.tried ? this.validate(f) : this.state.errors });
  }

  handleSubmit(ev) {
    if (ev && ev.preventDefault) ev.preventDefault();
    if (this.state.status === 'submitting') return;          // prevent duplicate submissions
    const f = this.state.f;
    const errors = this.validate(f);
    if (Object.keys(errors).length) {
      this.setState({ errors, tried: true, status: 'idle' });
      return;
    }
    this.setState({ errors: {}, tried: true, status: 'submitting', comboOpen: false });
    const payload = {
      name: f.name.trim(), email: f.email.trim(), company: f.company.trim(), country: f.country,
      services: f.services, budget: f.budget, timeline: f.timeline, details: f.details.trim(),
      source: f.source, consent: f.consent, submittedAt: new Date().toISOString()
    };
    this.submitInquiry(payload)
      .then((r) => this.setState({ status: r && r.delivered ? 'success' : 'demo' }))
      .catch(() => this.setState({ status: 'error' }));
  }

  renderVals() {
    const st = this.state;
    const f = st.f;
    const er = st.errors;
    const open = st.menuOpen;
    const preview = this.props.previewState ?? 'live';
    const status = preview === 'success' ? 'success' : preview === 'demo' ? 'demo' : st.status;
    const fields = ['name', 'email', 'country', 'details', 'consent'];
    const has = {}, inv = {}, err = {}, cls = {};
    fields.forEach((k) => {
      has[k] = !!er[k];
      inv[k] = er[k] ? 'true' : 'false';
      err[k] = er[k] || '';
      cls[k] = 'wd-input' + (er[k] ? ' is-invalid' : '');
    });
    const on = {};
    ['name', 'email', 'company', 'budget', 'timeline', 'details', 'source'].forEach((k) => {
      on[k] = (e) => this.setField(k, e.target.value);
    });
    on.consent = (e) => this.setField('consent', !!e.target.checked);
    on.countryQuery = (e) => {
      const q = e.target.value;
      const exact = this.countries().find((c) => c.toLowerCase() === q.trim().toLowerCase()) || '';
      const nf = { ...this.state.f, countryQuery: q, country: exact };
      this.setState({ f: nf, comboOpen: true, errors: this.state.tried ? this.validate(nf) : this.state.errors });
    };
    const q = f.countryQuery.trim().toLowerCase();
    const showAll = !q || q === f.country.toLowerCase();
    const matches = this.countries().filter((c) => showAll || c.toLowerCase().includes(q));
    const errCount = Object.keys(er).length;
    const summary = [
      ['Name', f.name], ['Email', f.email], ['Company', f.company || '-'], ['Country', f.country],
      ['Services', f.services.length ? f.services.join(', ') : '-'], ['Budget', f.budget || '-'],
      ['Timeline', f.timeline || '-'], ['Found us via', f.source || '-'],
      ['Details', f.details.length > 140 ? f.details.slice(0, 140) + '…' : f.details]
    ].map(([k, v]) => ({ k, v }));
    return {
      menuOpen: open,
      menuClosed: !open,
      menuOpenStr: open ? 'true' : 'false',
      menuLabel: open ? 'Close menu' : 'Open menu',
      toggleMenu: () => this.setState({ menuOpen: !open }),
      closeMenu: () => this.setState({ menuOpen: false }),

      f, has, inv, err, cls, on,
      isDemoMode: !this.config().inquiryEndpoint,
      showForm: status === 'idle' || status === 'submitting' || status === 'error',
      isSubmitting: status === 'submitting',
      submittingStr: status === 'submitting' ? 'true' : 'false',
      submitLabel: status === 'submitting' ? 'SUBMITTING…' : 'SUBMIT PROJECT INQUIRY',
      isSuccess: status === 'success',
      isDemoResult: status === 'demo',
      isError: status === 'error',
      hasErrors: errCount > 0 && status !== 'submitting',
      errorSummary: errCount === 1 ? 'Please fix 1 highlighted field before submitting.' : 'Please fix the ' + errCount + ' highlighted fields before submitting.',
      submit: (e) => this.handleSubmit(e),
      reset: () => this.setState({ f: this.emptyForm(), errors: {}, tried: false, status: 'idle' }),
      backToForm: () => this.setState({ status: 'idle' }),
      summary,

      comboOpen: st.comboOpen && status !== 'submitting',
      comboOpenStr: st.comboOpen ? 'true' : 'false',
      openCombo: () => this.setState({ comboOpen: true }),
      toggleCombo: () => this.setState({ comboOpen: !st.comboOpen }),
      comboKey: (e) => {
        if (e.key === 'Escape') { this.setState({ comboOpen: false }); }
        else if (e.key === 'Enter') { e.preventDefault(); if (matches.length) this.pickCountry(matches[0]); }
        else if (e.key === 'ArrowDown' && !st.comboOpen) { this.setState({ comboOpen: true }); }
      },
      comboItems: matches.map((c) => ({ label: c, isSel: f.country === c, selected: f.country === c ? 'true' : 'false', pick: () => this.pickCountry(c) })),
      comboEmpty: matches.length === 0,

      serviceOpts: this.services().map((s) => {
        const sel = f.services.includes(s);
        return {
          label: s, on: sel, checked: sel ? 'true' : 'false',
          cls: 'wd-opt' + (sel ? ' is-on' : ''),
          toggle: () => this.setField('services', sel ? f.services.filter((x) => x !== s) : [...f.services, s])
        };
      }),
      servicesSummary: f.services.length ? f.services.length + ' selected' : 'Optional. Choose one or more.',
      detailsCount: f.details.trim().length + ' characters',

      faqs: this.faqData().map((it, i) => {
        const isOpen = !!st.faqOpen[i];
        return {
          q: it.q, a: it.a, open: isOpen, closed: !isOpen, expanded: isOpen ? 'true' : 'false', panelId: 'cfaq-' + i,
          toggle: () => this.setState({ faqOpen: { ...st.faqOpen, [i]: !isOpen } })
        };
      })
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div className="page-contact" id="top" style={{width: "100%", minHeight: "100vh", backgroundColor: "#05060B", color: "#EEF0FA", fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", lineHeight: "1.6", overflowX: "hidden", position: "relative"}}>
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
              <Link className="wd-nav-link" to="/work" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                Our Work
              </Link>
              <a className="wd-nav-link" href="#top" aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "15px", fontWeight: "500"}}>
                Contact Us
              </a>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
              <a className="wd-btn wd-btn-primary wd-nav-cta" href="#inquiry" style={{display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 22px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "15px"}}>
                Let's Talk{" "}
                <svg className="wd-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
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
                <Link to="/work" style={{color: "#D4D8E8", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  Our Work
                </Link>
                <a href="#top" onClick={v.closeMenu} aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "18px", fontWeight: "500", padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
                  Contact Us
                </a>
                <a className="wd-btn wd-btn-primary" href="#inquiry" onClick={v.closeMenu} style={{marginTop: "16px", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "52px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600"}}>
                  Let's Talk
                </a>
              </div>
            </>
          )}
        </header>
        <main>
          <section aria-labelledby="contact-hero-title" style={{position: "relative", overflow: "hidden", padding: "96px 24px 112px"}}>
            <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", top: "-260px", left: "20%", width: "760px", height: "760px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.3), rgba(139,92,246,0) 62%)", pointerEvents: "none"}}></div>
            <div aria-hidden="true" className="wd-pulse" style={{position: "absolute", bottom: "-300px", right: "-180px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.28), rgba(59,130,246,0) 65%)", pointerEvents: "none", animationDelay: "-3s"}}></div>
            <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none"}}></div>
            <div style={{position: "relative", maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", gap: "48px", alignItems: "center"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "28px"}}>
                <div className="wd-enter" style={{display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", padding: "8px 16px 8px 10px", borderRadius: "999px", border: "1px solid rgba(167,139,250,0.3)", backgroundColor: "rgba(139,92,246,0.08)", fontSize: "13px", fontWeight: "600", color: "#D6CCFF", letterSpacing: "0.18em"}}>
                  <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg,#A78BFA,#60A5FA)", boxShadow: "0 0 12px #8B5CF6"}}></span>
                  {" "}LET'S CONNECT{" "}
                </div>
                <h1 id="contact-hero-title" className="wd-enter wd-d1" style={{margin: "0", fontFamily: "'Space Grotesk', Inter, sans-serif", fontWeight: "700", fontSize: "clamp(44px, 6.6vw, 92px)", lineHeight: "0.96", letterSpacing: "-0.045em", color: "#FFFFFF", textTransform: "uppercase"}}>
                  Let's create something{" "}
                  <span className="wd-grad-text">
                    great together.
                  </span>
                </h1>
                <p className="wd-enter wd-d2" style={{margin: "0", maxWidth: "580px", fontSize: "19px", lineHeight: "1.65", color: "#A9B0C9"}}>
                  Have a project in mind, a business to grow, or an idea to bring to life? We'd love to hear about it. Tell us what you're looking for, and let's explore what's possible.
                </p>
                <div className="wd-enter wd-d3" style={{display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "8px"}}>
                  <a className="wd-btn wd-btn-primary" href="#inquiry" style={{display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "16px"}}>
                    Start Your Project{" "}
                    <svg className="wd-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="wd-enter wd-d2" aria-hidden="true" style={{position: "relative", height: "520px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg className="wd-spin" width="480" height="480" viewBox="0 0 480 480" style={{position: "absolute", maxWidth: "100%"}}>
                  <circle cx="240" cy="240" r="230" fill="none" stroke="rgba(167,139,250,0.3)" strokeWidth="1" strokeDasharray="2 10"></circle>
                  <circle cx="240" cy="240" r="160" fill="none" stroke="rgba(96,165,250,0.25)" strokeWidth="1"></circle>
                  <circle cx="240" cy="10" r="6" fill="#A78BFA"></circle>
                  <circle cx="400" cy="240" r="4" fill="#60A5FA"></circle>
                </svg>
                <span className="wd-ring" style={{position: "absolute", width: "220px", height: "220px", borderRadius: "50%", border: "2px solid rgba(167,139,250,0.5)"}}></span>
                <span className="wd-ring" style={{position: "absolute", width: "220px", height: "220px", borderRadius: "50%", border: "2px solid rgba(96,165,250,0.45)", animationDelay: "-1.3s"}}></span>
                <div className="wd-float" style={{position: "relative", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle at 32% 28%, #DDD6FE 0%, #8B5CF6 32%, #4338CA 62%, #0B1024 100%)", boxShadow: "0 0 120px 10px rgba(124,92,255,0.45), inset -24px -30px 60px rgba(5,6,11,0.75)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <svg width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="wd-float-2" style={{position: "absolute", top: "40px", left: "2%", maxWidth: "230px", padding: "14px 16px", borderRadius: "18px 18px 18px 4px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.62)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", fontSize: "14px", color: "#E4E0FF"}}>
                  Hi! We're launching a new brand…
                </div>
                <div className="wd-float" style={{position: "absolute", bottom: "70px", right: "0", maxWidth: "220px", padding: "14px 16px", borderRadius: "18px 18px 4px 18px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", fontSize: "14px", color: "#FFFFFF", animationDelay: "-3s", boxShadow: "0 20px 40px -16px rgba(124,92,255,0.7)"}}>
                  Let's talk about your goals.
                </div>
                <div className="wd-float-2" style={{position: "absolute", bottom: "16px", left: "12%", padding: "10px 14px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(18,20,42,0.62)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", fontSize: "13px", color: "#C9CEE0", display: "flex", gap: "5px", alignItems: "center", animationDelay: "-5s"}}>
                  <span style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C4B5FD"}}></span>
                  <span style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#A78BFA"}}></span>
                  <span style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#8B5CF6"}}></span>
                </div>
              </div>
            </div>
          </section>
          <section aria-labelledby="hear-title" style={{padding: "96px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#070915"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "48px"}}>
                <h2 id="hear-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(34px, 4.4vw, 60px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  WE'D LOVE TO{" "}
                  <span className="wd-grad-text">
                    HEAR FROM YOU.
                  </span>
                </h2>
                <p style={{margin: "0", maxWidth: "420px", color: "#A9B0C9"}}>
                  Pick whichever way suits you best. Every message is read by our team.
                </p>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "20px"}}>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                    <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </span>
                    <span aria-hidden="true" className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "28px", opacity: "0.6"}}>
                      01
                    </span>
                  </div>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                    Email Us
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px", flexGrow: "1"}}>
                    Send us an email and tell us about your project.
                  </p>
                  <span style={{alignSelf: "flex-start", padding: "10px 14px", borderRadius: "12px", border: "1px dashed rgba(253,230,138,0.55)", color: "#FDE68A", fontWeight: "600", fontSize: "15px"}}>
                    [YOUR BUSINESS EMAIL]
                  </span>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(167,139,250,0.35)", background: "linear-gradient(160deg, rgba(139,92,246,0.18), rgba(14,16,36,0.7))", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                    <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                    </span>
                    <span aria-hidden="true" className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "28px", opacity: "0.6"}}>
                      02
                    </span>
                  </div>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                    Start a Project
                  </h3>
                  <p style={{margin: "0", color: "#C9CEE0", fontSize: "15px", flexGrow: "1"}}>
                    Have a specific project in mind? Share your requirements through our inquiry form.
                  </p>
                  <a className="wd-btn wd-btn-primary" href="#inquiry" style={{alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "8px", height: "46px", padding: "0 20px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "14px"}}>
                    Go to the inquiry form{" "}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </a>
                </article>
                <article className="wd-card wd-reveal" style={{padding: "32px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                    <span className="wd-icon" style={{width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                    </span>
                    <span aria-hidden="true" className="wd-grad-text" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "28px", opacity: "0.6"}}>
                      03
                    </span>
                  </div>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: "600", color: "#FFFFFF"}}>
                    Social Media
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px", flexGrow: "1"}}>
                    Follow along and message us on your favourite platform.
                  </p>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                    <a className="wd-btn wd-btn-ghost" href="#" aria-label="Instagram (placeholder: add your profile URL)" style={{height: "44px", padding: "0 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", color: "#D4D8E8", textDecoration: "none", fontSize: "14px", fontWeight: "600"}}>
                      Instagram
                    </a>
                    <a className="wd-btn wd-btn-ghost" href="#" aria-label="LinkedIn (placeholder: add your profile URL)" style={{height: "44px", padding: "0 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", color: "#D4D8E8", textDecoration: "none", fontSize: "14px", fontWeight: "600"}}>
                      LinkedIn
                    </a>
                    <a className="wd-btn wd-btn-ghost" href="#" aria-label="Facebook (placeholder: add your profile URL)" style={{height: "44px", padding: "0 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", color: "#D4D8E8", textDecoration: "none", fontSize: "14px", fontWeight: "600"}}>
                      Facebook
                    </a>
                  </div>
                  <span style={{fontSize: "12px", color: "#FDE68A"}}>
                    [Placeholder links. Add your profile URLs.]
                  </span>
                </article>
              </div>
            </div>
          </section>
          <section id="inquiry" aria-labelledby="form-title" style={{padding: "120px 24px", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start"}}>
              <div className="wd-reveal" style={{flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  PROJECT INQUIRY
                </span>
                <h2 id="form-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(34px, 4vw, 56px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  TELL US ABOUT{" "}
                  <span className="wd-grad-text">
                    YOUR PROJECT.
                  </span>
                </h2>
                <p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#A9B0C9"}}>
                  Share a few details about your business and what you're looking to achieve. We'll use this information to understand your requirements.
                </p>
                <div style={{padding: "24px", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", display: "flex", flexDirection: "column", gap: "18px"}}>
                  <h3 style={{margin: "0", fontSize: "13px", letterSpacing: "0.18em", color: "#FFFFFF", fontWeight: "600"}}>
                    WHAT HAPPENS NEXT
                  </h3>
                  <ol style={{listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "16px"}}>
                    <li style={{display: "flex", gap: "14px", alignItems: "flex-start"}}>
                      <span style={{width: "32px", height: "32px", flexShrink: "0", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", color: "#FFFFFF"}}>
                        1
                      </span>
                      <span style={{color: "#D4D8E8", fontSize: "15px"}}>
                        We review your project details and goals.
                      </span>
                    </li>
                    <li style={{display: "flex", gap: "14px", alignItems: "flex-start"}}>
                      <span style={{width: "32px", height: "32px", flexShrink: "0", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", color: "#FFFFFF"}}>
                        2
                      </span>
                      <span style={{color: "#D4D8E8", fontSize: "15px"}}>
                        We get in touch using the contact details you share.
                      </span>
                    </li>
                    <li style={{display: "flex", gap: "14px", alignItems: "flex-start"}}>
                      <span style={{width: "32px", height: "32px", flexShrink: "0", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", color: "#FFFFFF"}}>
                        3
                      </span>
                      <span style={{color: "#D4D8E8", fontSize: "15px"}}>
                        We discuss your needs and suggest a tailored approach.
                      </span>
                    </li>
                  </ol>
                </div>
                {v.isDemoMode && (
                  <>
                    <div role="note" style={{padding: "16px 18px", borderRadius: "16px", border: "1px dashed rgba(253,230,138,0.6)", backgroundColor: "rgba(253,230,138,0.06)", display: "flex", gap: "12px", alignItems: "flex-start"}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "2px"}}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                      <p style={{margin: "0", color: "#FDE68A", fontSize: "14px", lineHeight: "1.6"}}>
                        <strong>
                          Demo mode:
                        </strong>
                        {" "}this form is not connected to an email service or backend yet. It checks every field, but submissions are not delivered anywhere.
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="wd-reveal" style={{flex: "999 1 560px", minWidth: "0", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(12,14,32,0.75)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", padding: "clamp(24px, 4vw, 48px)", boxShadow: "0 40px 100px -50px rgba(124,92,255,0.6)"}}>
                {v.showForm && (
                  <>
                    <form onSubmit={v.submit} noValidate={true} aria-describedby="form-req-note" style={{display: "flex", flexDirection: "column", gap: "24px"}}>
                      <p id="form-req-note" style={{margin: "0", color: "#8D94AE", fontSize: "14px"}}>
                        Fields marked{" "}
                        <span style={{color: "#C4B5FD"}}>
                          *
                        </span>
                        {" "}are required.
                      </p>
                      {v.hasErrors && (
                        <>
                          <div role="alert" style={{padding: "14px 16px", borderRadius: "14px", border: "1px solid rgba(248,113,113,0.5)", backgroundColor: "rgba(248,113,113,0.1)", color: "#FECACA", fontSize: "15px", display: "flex", gap: "10px", alignItems: "flex-start"}}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FCA5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: "0", marginTop: "3px"}}>
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 8v4"></path>
                              <path d="M12 16h.01"></path>
                            </svg>
                            <span>
                              {v.errorSummary}
                            </span>
                          </div>
                        </>
                      )}
                      {v.isError && (
                        <>
                          <div role="alert" style={{padding: "14px 16px", borderRadius: "14px", border: "1px solid rgba(248,113,113,0.5)", backgroundColor: "rgba(248,113,113,0.1)", color: "#FECACA", fontSize: "15px"}}>
                            Something went wrong and your inquiry could not be sent. Please try again in a moment, or email us directly at [YOUR BUSINESS EMAIL].
                          </div>
                        </>
                      )}
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "20px"}}>
                        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                          <label htmlFor="f-name" style={{fontSize: "14px", fontWeight: "600", color: "#E4E6F0"}}>
                            Full Name{" "}
                            <span style={{color: "#C4B5FD"}}>
                              *
                            </span>
                          </label>
                          <input id="f-name" className={v.cls.name} type="text" name="name" autoComplete="name" required={true} placeholder="Enter your full name" value={v.f.name} onChange={v.on.name} aria-invalid={v.inv.name} aria-describedby="e-name" style={{width: "100%", height: "54px", padding: "0 18px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.04)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: "16px"}} />
                          {v.has.name && (
                            <>
                              <span id="e-name" style={{color: "#FCA5A5", fontSize: "13px"}}>
                                {v.err.name}
                              </span>
                            </>
                          )}
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                          <label htmlFor="f-email" style={{fontSize: "14px", fontWeight: "600", color: "#E4E6F0"}}>
                            Business Email{" "}
                            <span style={{color: "#C4B5FD"}}>
                              *
                            </span>
                          </label>
                          <input id="f-email" className={v.cls.email} type="email" name="email" autoComplete="email" inputMode="email" required={true} placeholder="Enter your business email" value={v.f.email} onChange={v.on.email} aria-invalid={v.inv.email} aria-describedby="e-email" style={{width: "100%", height: "54px", padding: "0 18px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.04)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: "16px"}} />
                          {v.has.email && (
                            <>
                              <span id="e-email" style={{color: "#FCA5A5", fontSize: "13px"}}>
                                {v.err.email}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "20px"}}>
                        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                          <label htmlFor="f-company" style={{fontSize: "14px", fontWeight: "600", color: "#E4E6F0"}}>
                            Company / Brand Name{" "}
                            <span style={{color: "#8D94AE", fontWeight: "500"}}>
                              (optional)
                            </span>
                          </label>
                          <input id="f-company" className="wd-input" type="text" name="company" autoComplete="organization" placeholder="Enter your company or brand name" value={v.f.company} onChange={v.on.company} style={{width: "100%", height: "54px", padding: "0 18px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.04)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: "16px"}} />
                        </div>
                        <div style={{position: "relative", display: "flex", flexDirection: "column", gap: "8px"}}>
                          <label id="l-country" htmlFor="f-country" style={{fontSize: "14px", fontWeight: "600", color: "#E4E6F0"}}>
                            Country{" "}
                            <span style={{color: "#C4B5FD"}}>
                              *
                            </span>
                          </label>
                          <div style={{position: "relative"}}>
                            <input id="f-country" className={v.cls.country} type="text" role="combobox" autoComplete="off" aria-autocomplete="list" aria-expanded={v.comboOpenStr} aria-controls="country-list" aria-invalid={v.inv.country} aria-describedby="e-country" placeholder="Search or select your country" value={v.f.countryQuery} onChange={v.on.countryQuery} onFocus={v.openCombo} onKeyDown={v.comboKey} style={{width: "100%", height: "54px", padding: "0 52px 0 18px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.04)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: "16px"}} />
                            <button type="button" onClick={v.toggleCombo} aria-label="Show country list" tabIndex="-1" style={{position: "absolute", right: "5px", top: "5px", width: "44px", height: "44px", border: "0", borderRadius: "10px", backgroundColor: "transparent", color: "#C4B5FD", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </button>
                          </div>
                          {v.comboOpen && (
                            <>
                              <div id="country-list" role="listbox" aria-labelledby="l-country" className="wd-menu" style={{position: "absolute", left: "0", right: "0", top: "calc(100% + 6px)", zIndex: "20", maxHeight: "280px", overflowY: "auto", padding: "6px", borderRadius: "16px", border: "1px solid rgba(167,139,250,0.35)", backgroundColor: "#0D1026", boxShadow: "0 24px 60px -20px rgba(0,0,0,0.8)"}}>
                                {(v.comboItems || []).map((c, i1) => (
                                  <React.Fragment key={i1}>
                                    <button className="wd-combo-opt" type="button" role="option" aria-selected={c.selected} onClick={c.pick} style={{width: "100%", minHeight: "44px", padding: "0 14px", border: "0", borderRadius: "10px", backgroundColor: "transparent", color: "#E4E6F0", fontFamily: "Inter, sans-serif", fontSize: "15px", textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer"}}>
                                      {c.label}
                                      {c.isSel && (
                                        <>
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M20 6 9 17l-5-5"></path>
                                          </svg>
                                        </>
                                      )}
                                    </button>
                                  </React.Fragment>
                                ))}
                                {v.comboEmpty && (
                                  <>
                                    <div style={{padding: "12px 14px", color: "#8D94AE", fontSize: "14px"}}>
                                      No match found. Choose "Other" or check the spelling.
                                    </div>
                                  </>
                                )}
                              </div>
                            </>
                          )}
                          {v.has.country && (
                            <>
                              <span id="e-country" style={{color: "#FCA5A5", fontSize: "13px"}}>
                                {v.err.country}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <fieldset style={{margin: "0", padding: "0", border: "0", display: "flex", flexDirection: "column", gap: "12px"}}>
                        <legend style={{padding: "0", marginBottom: "12px", fontSize: "14px", fontWeight: "600", color: "#E4E6F0"}}>
                          Service Required{" "}
                          <span style={{color: "#8D94AE", fontWeight: "500"}}>
                            (select all that apply)
                          </span>
                        </legend>
                        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "10px"}}>
                          {(v.serviceOpts || []).map((s, i2) => (
                            <React.Fragment key={i2}>
                              <button className={s.cls} type="button" role="checkbox" aria-checked={s.checked} onClick={s.toggle} style={{minHeight: "52px", padding: "10px 14px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.03)", color: "#C9CEE0", fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: "500", textAlign: "left", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer"}}>
                                <span className="wd-tick" aria-hidden="true" style={{width: "22px", height: "22px", flexShrink: "0", borderRadius: "7px", border: "1.5px solid rgba(255,255,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                  {s.on && (
                                    <>
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </>
                                  )}
                                </span>
                                {" "}{s.label}{" "}
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                        <span style={{color: "#8D94AE", fontSize: "13px"}}>
                          {v.servicesSummary}
                        </span>
                      </fieldset>
                      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "20px"}}>
                        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                          <label htmlFor="f-budget" style={{fontSize: "14px", fontWeight: "600", color: "#E4E6F0"}}>
                            Project Budget
                          </label>
                          <select id="f-budget" className="wd-input" name="budget" value={v.f.budget} onChange={v.on.budget} style={{width: "100%", height: "54px", padding: "0 16px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.04)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: "16px", cursor: "pointer"}}>
                            <option value="">
                              Select a budget range
                            </option>
                            <option value="Under $500">
                              Under $500
                            </option>
                            <option value="$500 – $1,000">
                              $500 – $1,000
                            </option>
                            <option value="$1,000 – $3,000">
                              $1,000 – $3,000
                            </option>
                            <option value="$3,000 – $5,000">
                              $3,000 – $5,000
                            </option>
                            <option value="$5,000+">
                              $5,000+
                            </option>
                            <option value="Not sure yet">
                              Not sure yet
                            </option>
                          </select>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                          <label htmlFor="f-timeline" style={{fontSize: "14px", fontWeight: "600", color: "#E4E6F0"}}>
                            Project Timeline
                          </label>
                          <select id="f-timeline" className="wd-input" name="timeline" value={v.f.timeline} onChange={v.on.timeline} style={{width: "100%", height: "54px", padding: "0 16px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.04)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: "16px", cursor: "pointer"}}>
                            <option value="">
                              Select a timeline
                            </option>
                            <option value="Immediately">
                              Immediately
                            </option>
                            <option value="Within 1 Month">
                              Within 1 Month
                            </option>
                            <option value="Within 2–3 Months">
                              Within 2–3 Months
                            </option>
                            <option value="Flexible Timeline">
                              Flexible Timeline
                            </option>
                            <option value="Just Exploring">
                              Just Exploring
                            </option>
                          </select>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                          <label htmlFor="f-source" style={{fontSize: "14px", fontWeight: "600", color: "#E4E6F0"}}>
                            How Did You Find Us?
                          </label>
                          <select id="f-source" className="wd-input" name="source" value={v.f.source} onChange={v.on.source} style={{width: "100%", height: "54px", padding: "0 16px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.04)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: "16px", cursor: "pointer"}}>
                            <option value="">
                              Select an option
                            </option>
                            <option value="Google Search">
                              Google Search
                            </option>
                            <option value="Instagram">
                              Instagram
                            </option>
                            <option value="LinkedIn">
                              LinkedIn
                            </option>
                            <option value="Facebook">
                              Facebook
                            </option>
                            <option value="Referral">
                              Referral
                            </option>
                            <option value="Other">
                              Other
                            </option>
                          </select>
                        </div>
                      </div>
                      <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                        <label htmlFor="f-details" style={{fontSize: "14px", fontWeight: "600", color: "#E4E6F0"}}>
                          Project Details{" "}
                          <span style={{color: "#C4B5FD"}}>
                            *
                          </span>
                        </label>
                        <textarea id="f-details" className={v.cls.details} name="details" rows="6" required={true} placeholder="Tell us about your business, your goals, your project requirements, and what kind of support you're looking for..." value={v.f.details} onChange={v.on.details} aria-invalid={v.inv.details} aria-describedby="e-details" style={{width: "100%", minHeight: "170px", padding: "16px 18px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.04)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.6", resize: "vertical"}}></textarea>
                        <div style={{display: "flex", justifyContent: "space-between", gap: "12px"}}>
                          {v.has.details && (
                            <>
                              <span id="e-details" style={{color: "#FCA5A5", fontSize: "13px"}}>
                                {v.err.details}
                              </span>
                            </>
                          )}
                          <span style={{marginLeft: "auto", color: "#7F86A0", fontSize: "13px"}}>
                            {v.detailsCount}
                          </span>
                        </div>
                      </div>
                      <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                        <label htmlFor="f-consent" style={{display: "flex", gap: "12px", alignItems: "flex-start", cursor: "pointer", color: "#C9CEE0", fontSize: "15px", lineHeight: "1.55"}}>
                          <input id="f-consent" type="checkbox" name="consent" checked={v.f.consent} onChange={v.on.consent} aria-invalid={v.inv.consent} aria-describedby="e-consent" style={{width: "22px", height: "22px", margin: "1px 0 0", flexShrink: "0", accentColor: "#8B5CF6", cursor: "pointer"}} />
                          <span>
                            I agree to the processing of my information for the purpose of responding to my inquiry. Read our{" "}
                            <a href="#" aria-label="Privacy Policy (placeholder: add your policy page link)" style={{color: "#C4B5FD"}}>
                              [Privacy Policy]
                            </a>
                            .{" "}
                            <span style={{color: "#C4B5FD"}}>
                              *
                            </span>
                          </span>
                        </label>
                        {v.has.consent && (
                          <>
                            <span id="e-consent" style={{color: "#FCA5A5", fontSize: "13px"}}>
                              {v.err.consent}
                            </span>
                          </>
                        )}
                      </div>
                      <button className="wd-btn wd-btn-primary" type="submit" disabled={v.isSubmitting} aria-busy={v.submittingStr} style={{width: "100%", height: "60px", border: "0", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", fontFamily: "'Space Grotesk', Inter, sans-serif", fontSize: "16px", fontWeight: "700", letterSpacing: "0.08em", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", cursor: "pointer"}}>
                        {v.isSubmitting && (
                          <>
                            <svg className="wd-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
                              <path d="M21 12a9 9 0 1 1-6.22-8.56"></path>
                            </svg>
                          </>
                        )}
                        {" "}{v.submitLabel}{" "}
                      </button>
                    </form>
                  </>
                )}
                {v.isSuccess && (
                  <>
                    <div role="status" className="wd-menu" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px", padding: "32px 8px"}}>
                      <span style={{width: "88px", height: "88px", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 12px rgba(139,92,246,0.15), 0 20px 50px -15px rgba(124,92,255,0.8)"}}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(28px, 3.4vw, 40px)", letterSpacing: "-0.02em", color: "#FFFFFF"}}>
                        THANK YOU FOR REACHING OUT!
                      </h3>
                      <p style={{margin: "0", maxWidth: "460px", color: "#A9B0C9", fontSize: "17px"}}>
                        We've received your inquiry. We'll review your project details and get back to you.
                      </p>
                      <button className="wd-btn wd-btn-ghost" type="button" onClick={v.reset} style={{height: "50px", padding: "0 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontWeight: "600", fontSize: "15px", cursor: "pointer"}}>
                        Send another inquiry
                      </button>
                    </div>
                  </>
                )}
                {v.isDemoResult && (
                  <>
                    <div role="status" className="wd-menu" style={{display: "flex", flexDirection: "column", gap: "20px", padding: "16px 4px"}}>
                      <span style={{alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", border: "1px dashed rgba(253,230,138,0.6)", color: "#FDE68A", fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em"}}>
                        DEMO MODE
                      </span>
                      <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(26px, 3vw, 36px)", letterSpacing: "-0.02em", color: "#FFFFFF"}}>
                        Your inquiry was{" "}
                        <span className="wd-grad-text">
                          not sent.
                        </span>
                      </h3>
                      <p style={{margin: "0", color: "#A9B0C9", fontSize: "16px"}}>
                        Every field passed validation, but this form isn't connected to an email service or backend yet, so nothing was delivered. Please email us at [YOUR BUSINESS EMAIL] in the meantime.
                      </p>
                      <div style={{padding: "18px 20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", gap: "8px"}}>
                        <span style={{fontSize: "12px", letterSpacing: "0.16em", color: "#8D94AE", fontWeight: "600"}}>
                          WHAT WOULD HAVE BEEN SENT
                        </span>
                        {(v.summary || []).map((row, i3) => (
                          <React.Fragment key={i3}>
                            <div style={{display: "flex", gap: "12px", fontSize: "14px", flexWrap: "wrap"}}>
                              <span style={{minWidth: "110px", color: "#8D94AE"}}>
                                {row.k}
                              </span>
                              <span style={{color: "#E4E6F0", flex: "1", minWidth: "0", overflowWrap: "anywhere"}}>
                                {row.v}
                              </span>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                      <div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
                        <button className="wd-btn wd-btn-ghost" type="button" onClick={v.backToForm} style={{height: "50px", padding: "0 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontWeight: "600", fontSize: "15px", cursor: "pointer"}}>
                          Back to my inquiry
                        </button>
                        <button className="wd-btn wd-btn-ghost" type="button" onClick={v.reset} style={{height: "50px", padding: "0 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "transparent", color: "#C9CEE0", fontFamily: "Inter, sans-serif", fontWeight: "600", fontSize: "15px", cursor: "pointer"}}>
                          Clear the form
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
          <section aria-labelledby="partner-title" style={{padding: "120px 24px", background: "linear-gradient(180deg, #05060B 0%, #090C1E 50%, #05060B 100%)", borderTop: "1px solid rgba(255,255,255,0.06)"}}>
            <div style={{maxWidth: "1240px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginBottom: "56px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  WHY WEB DIVIDER
                </span>
                <h2 id="partner-title" style={{margin: "0", maxWidth: "900px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  YOUR NEXT DIGITAL PARTNER COULD BE{" "}
                  <span className="wd-grad-text">
                    RIGHT HERE.
                  </span>
                </h2>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px"}}>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#7F86A0"}}>
                    01
                  </span>
                  <span className="wd-icon" style={{width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="8" r="5"></circle>
                      <path d="M20 21a8 8 0 0 0-16 0"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF"}}>
                    Personalized Approach
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Every business has different goals. We focus on understanding your requirements before suggesting solutions.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#7F86A0"}}>
                    02
                  </span>
                  <span className="wd-icon" style={{width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF"}}>
                    Creative Thinking
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    We combine creative ideas with practical strategies to help your brand stand out.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#7F86A0"}}>
                    03
                  </span>
                  <span className="wd-icon" style={{width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF"}}>
                    Clear Communication
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    We believe in transparent communication and keeping clients informed throughout the project.
                  </p>
                </div>
                <div className="wd-card wd-reveal" style={{padding: "32px 28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(14,16,36,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "16px"}}>
                  <span style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#7F86A0"}}>
                    04
                  </span>
                  <span className="wd-icon" style={{width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </span>
                  <h3 style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: "600", color: "#FFFFFF"}}>
                    Growth-Focused Mindset
                  </h3>
                  <p style={{margin: "0", color: "#A9B0C9", fontSize: "15px"}}>
                    Our approach is focused on creating meaningful digital experiences and long-term opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="faq" aria-labelledby="cfaq-title" style={{padding: "120px 24px", scrollMarginTop: "76px"}}>
            <div style={{maxWidth: "880px", margin: "0 auto"}}>
              <div className="wd-reveal" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginBottom: "48px"}}>
                <span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.22em", color: "#A78BFA"}}>
                  FAQ
                </span>
                <h2 id="cfaq-title" style={{margin: "0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#FFFFFF"}}>
                  FREQUENTLY ASKED{" "}
                  <span className="wd-grad-text">
                    QUESTIONS
                  </span>
                </h2>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                {(v.faqs || []).map((q, i4) => (
                  <React.Fragment key={i4}>
                    <div className="wd-reveal" style={{borderRadius: "20px", border: "1px solid rgba(255,255,255,0.09)", backgroundColor: "rgba(14,16,36,0.6)", overflow: "hidden"}}>
                      <h3 style={{margin: "0"}}>
                        <button className="wd-faq-q" type="button" onClick={q.toggle} aria-expanded={q.expanded} aria-controls={q.panelId} style={{width: "100%", minHeight: "64px", padding: "20px 24px", border: "0", backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: "600", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", cursor: "pointer"}}>
                          {q.q}
                          <span aria-hidden="true" style={{width: "36px", height: "36px", flexShrink: "0", borderRadius: "50%", border: "1px solid rgba(167,139,250,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD"}}>
                            {q.open && (
                              <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                                  <path d="M5 12h14"></path>
                                </svg>
                              </>
                            )}
                            {q.closed && (
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
                      {q.open && (
                        <>
                          <div id={q.panelId} className="wd-menu" style={{padding: "0 24px 24px", color: "#A9B0C9", fontSize: "16px", lineHeight: "1.7"}}>
                            {q.a}
                          </div>
                        </>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
          <section id="start" aria-labelledby="ccta-title" style={{padding: "0 24px 128px"}}>
            <div className="wd-reveal" style={{position: "relative", maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", overflow: "hidden", padding: "clamp(56px, 8vw, 112px) 32px", textAlign: "center"}}>
              <div className="wd-shift" aria-hidden="true" style={{position: "absolute", inset: "0", background: "linear-gradient(120deg, #5B21B6, #4338CA, #1D4ED8, #7C3AED)"}}></div>
              <div aria-hidden="true" style={{position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "26px 26px", opacity: "0.35"}}></div>
              <div aria-hidden="true" className="wd-float" style={{position: "absolute", left: "7%", top: "16%", padding: "12px 16px", borderRadius: "18px 18px 18px 4px", backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", width: "150px", height: "56px"}}></div>
              <div aria-hidden="true" className="wd-float-2" style={{position: "absolute", right: "8%", bottom: "16%", borderRadius: "18px 18px 4px 18px", backgroundColor: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.35)", width: "120px", height: "50px"}}></div>
              <div style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}>
                <h2 id="ccta-title" style={{margin: "0", maxWidth: "980px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 5.4vw, 76px)", lineHeight: "0.98", letterSpacing: "-0.04em", color: "#FFFFFF"}}>
                  LET'S TURN YOUR IDEA INTO SOMETHING EXTRAORDINARY.
                </h2>
                <p style={{margin: "0", maxWidth: "620px", fontSize: "19px", color: "#EDE9FE"}}>
                  Your next big opportunity starts with a conversation. Tell us what you have in mind, and let's explore how we can work together.
                </p>
                <a className="wd-btn" href="#inquiry" style={{marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "10px", height: "60px", padding: "0 34px", borderRadius: "999px", backgroundColor: "#FFFFFF", color: "#1E1B4B", textDecoration: "none", fontWeight: "700", fontSize: "17px", boxShadow: "0 18px 50px -12px rgba(5,6,11,0.6)"}}>
                  Let's Talk{" "}
                  <svg className="wd-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
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
              <Link className="wd-foot-link" to="/work" style={{color: "#A9B0C9", textDecoration: "none", fontSize: "15px"}}>
                Our Work
              </Link>
              <a className="wd-foot-link" href="#top" aria-current="page" style={{color: "#FFFFFF", textDecoration: "none", fontSize: "15px"}}>
                Contact Us
              </a>
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
              <a className="wd-btn wd-btn-primary" href="#inquiry" style={{marginTop: "8px", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "46px", padding: "0 20px", borderRadius: "999px", background: "linear-gradient(100deg,#8B5CF6,#3B82F6)", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "14px"}}>
                Let's Talk
              </a>
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

export default Contact;
