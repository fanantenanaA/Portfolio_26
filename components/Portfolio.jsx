"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const skills = [
  "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "React",
  "Vue.js", "Node.js", "PHP", "Laravel", "Symfony", "MySQL",
  "PostgreSQL", "WordPress", "PrestaShop"
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="page-noise" aria-hidden="true" />

      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Accueil" onClick={closeMenu}>
            <span className="brand-mark">MF</span>
            <span className="brand-copy">
              <strong>Marc Fanantenana</strong>
              <small>Développeur Web</small>
            </span>
          </a>

          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>

          <nav className={`main-nav${menuOpen ? " open" : ""}`} aria-label="Navigation principale">
            <a href="#apropos" onClick={closeMenu}>À propos</a>
            <a href="#expertise" onClick={closeMenu}>Expertise</a>
            <a href="#experience" onClick={closeMenu}>Expérience</a>
            <a href="#formation" onClick={closeMenu}>Formation</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>Me contacter</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-pad">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow"><span className="status-dot" /> Disponible pour de nouvelles opportunités</span>
              <h1>Je transforme des besoins métier en <span>expériences web performantes.</span></h1>
              <p className="hero-lead">
                Développeur Web Full-Stack avec 4 ans d’expérience, spécialisé dans la conception,
                l’optimisation et la maintenance de sites et applications web, notamment WordPress et PrestaShop.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Parlons de votre projet <span>↗</span></a>
                <a className="btn btn-ghost" href="#expertise" >Technologies & Expertise <span>↗</span></a>
              </div>
              <div className="hero-stats" aria-label="Résumé du profil">
                <div><strong>4 ans</strong><span>d’expérience web</span></div>
                <div><strong>Full-Stack</strong><span>Front & Back-end</span></div>
                <div><strong>E-commerce</strong><span>WordPress & PrestaShop</span></div>
              </div>
            </div>

            <div className="hero-visual reveal delay-1">
              <div className="portrait-shell">
                <div className="portrait-ring" />
                <Image
                  src="/assets/marc-fanantenana.jpeg"
                  alt="Portrait de Marc Fanantenana Andrianirina"
                  width={500}
                  height={540}
                  priority
                />
                <div className="floating-chip chip-one">PHP · JavaScript</div>
                <div className="floating-chip chip-two">WordPress · PrestaShop</div>
              </div>
              <div className="code-card" aria-hidden="true">
                <div className="code-head"><span /><span /><span /></div>
                <pre><code><span className="muted">const</span>{` developer = {\n  name: `}<span className="accent">&quot;Marc Fanantenana&quot;</span>{`,\n  focus: [`}<span className="accent">&quot;Web&quot;</span>{`, `}<span className="accent">&quot;E-commerce&quot;</span>{`],\n  mindset: `}<span className="accent">&quot;solution-oriented&quot;</span>{`\n};`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        <section id="apropos" className="section-pad section-soft">
          <div className="container about-grid">
            <div className="section-heading reveal">
              <span className="section-kicker">01 — À propos</span>
              <h2>Un profil technique avec une vraie attention à l’expérience utilisateur.</h2>
            </div>
            <div className="about-content reveal delay-1">
              <p>
                Développeur web Full-Stack, j’interviens dans la conception, le développement et l’amélioration
                de sites et d’applications web. Mon expérience couvre aussi bien l’interface utilisateur que les
                fonctionnalités back-end, avec une attention particulière portée à l’ergonomie, au responsive et à la qualité de navigation.
              </p>
              <p>
                J’ai également une expérience concrète en création de thèmes et plugins WordPress, maintenance de sites,
                développement e-commerce et optimisation de plateformes existantes.
              </p>
              <div className="quality-row">
                <span>Fiable & rigoureux</span><span>Réactif</span><span>Curieux</span><span>Orienté solutions</span>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="section-pad">
          <div className="container">
            <div className="section-heading inline reveal">
              <div><span className="section-kicker">02 — Expertise</span><h2>Ce que je peux apporter à une équipe ou à un projet.</h2></div>
              <p>Des compétences polyvalentes pour concevoir, maintenir et faire évoluer des solutions web modernes.</p>
            </div>

            <div className="service-grid">
              <article className="service-card reveal">
                <span className="card-num">01</span>
                <h3>Développement Front-end</h3>
                <p>Création d’interfaces responsive, optimisation de la navigation et adaptation de sites aux usages mobiles.</p>
                <div className="tags"><span>HTML</span><span>CSS</span><span>Bootstrap</span><span>Tailwind</span><span>React</span><span>Vue</span></div>
              </article>
              <article className="service-card reveal delay-1">
                <span className="card-num">02</span>
                <h3>Développement Back-end</h3>
                <p>Développement de fonctionnalités métier et d’applications web avec une approche structurée et maintenable.</p>
                <div className="tags"><span>PHP</span><span>Laravel</span><span>Symfony</span><span>Node.js</span><span>MySQL</span><span>PostgreSQL</span></div>
              </article>
              <article className="service-card reveal delay-2">
                <span className="card-num">03</span>
                <h3>CMS & E-commerce</h3>
                <p>Création, personnalisation et maintenance de sites WordPress et PrestaShop, avec développement de thèmes et plugins.</p>
                <div className="tags"><span>WordPress</span><span>PrestaShop</span><span>E-commerce</span><span>Plugins</span><span>Thèmes</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad section-dark">
          <div className="container stack-block reveal">
            <div><span className="section-kicker light">Stack technique</span><h2>Technologies & outils</h2></div>
            <div className="stack-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </section>

        <section id="experience" className="section-pad">
          <div className="container experience-grid">
            <div className="section-heading sticky-heading reveal">
              <span className="section-kicker">03 — Expérience</span>
              <h2>Une progression centrée sur la production web.</h2>
              <p>Deux expériences professionnelles complémentaires, du développement généraliste à l’optimisation et à la maintenance de plateformes.</p>
            </div>

            <div className="timeline">
              <article className="timeline-item reveal">
                <div className="timeline-top"><span className="period">2023 — 2026</span><span className="company">Yourtarget Agency · Antsahabe</span></div>
                <h3>Développeur Web</h3>
                <ul>
                  <li>Optimisation de l’ergonomie et de la qualité de navigation des sites clients.</li>
                  <li>Optimisation des fonctionnalités des plateformes web.</li>
                  <li>Analyse d’interfaces et propositions d’amélioration.</li>
                  <li>Adaptation et optimisation de sites et applications web existants.</li>
                  <li>Création de thèmes et plugins WordPress.</li>
                  <li>Maintenance de sites web.</li>
                </ul>
              </article>

              <article className="timeline-item reveal">
                <div className="timeline-top"><span className="period">2021 — 2023</span><span className="company">MGBI · Ankadivato</span></div>
                <h3>Développeur Web</h3>
                <ul>
                  <li>Conception et développement de sites web.</li>
                  <li>Développement et maintenance de sites e-commerce.</li>
                  <li>Implémentation de sites responsive et optimisés pour mobile.</li>
                  <li>Création de thèmes et plugins WordPress.</li>
                  <li>Création d’applications web.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="formation" className="section-pad section-soft">
          <div className="container">
            <div className="section-heading inline reveal">
              <div><span className="section-kicker">04 — Formation</span><h2>Un parcours entre informatique, création numérique et gestion de projet.</h2></div>
            </div>
            <div className="education-grid">
              <article className="edu-card reveal">
                <span>2020 — 2022</span>
                <h3>Master en Informatique</h3>
                <p className="school">Université E-TEC · Faravohitra</p>
                <p>
                  Formation approfondie en conception et développement de solutions
                  informatiques, avec une orientation vers le développement d’applications
                  web, la programmation, la gestion des bases de données et la conduite
                  de projets informatiques.
                </p>
              </article>

              <article className="edu-card reveal delay-1">
                <span>2017 — 2019</span>
                <h3>Licence en Communication Audiovisuelle et Numérique</h3>
                <p className="school">Université E-MEDIA · Tsiadana</p>
                <p>
                  Formation multidisciplinaire associant communication numérique,
                  conception web et création graphique. Initiation à WordPress et
                  PrestaShop, ainsi qu’aux outils Adobe Photoshop, Illustrator et XD.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad language-section">
          <div className="container language-grid reveal">
            <div><span className="section-kicker">Langues</span><h2>Communication</h2></div>
            <div className="language-list"><span>Malagasy</span><span>Français</span><span>Anglais</span></div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="container contact-card reveal">
            <div className="contact-copy">
              <span className="section-kicker light">05 — Contact</span>
              <h2>Vous avez un projet web ou une opportunité ?</h2>
              <p>Je suis ouvert aux collaborations, missions et opportunités professionnelles en développement web.</p>
              <a className="btn btn-light" href="mailto:fanantenaandria@gmail.com">Écrivez-moi <span>↗</span></a>
            </div>
            <div className="contact-info">
              <a href="mailto:fanantenaandria@gmail.com"><small>Email</small><strong>fanantenaandria@gmail.com</strong></a>
              <a href="tel:+261381547127"><small>Téléphone</small><strong>+261 38 15 471 27</strong></a>
              <div><small>Localisation</small><strong>Ambohitrinibe – Anosiala – Ambohidratrimo</strong></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© {new Date().getFullYear()} Marc Fanantenana Andrianirina.</p>
          <a href="#top">Retour en haut ↑</a>
        </div>
      </footer>
    </>
  );
}
