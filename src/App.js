import './App.css';
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, MapPin, Phone } from 'lucide-react';
import './App.css';
import Photo from './images/profil.png';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const experiences = [
    {
      poste: "Stagiaire en Développement IA & Automatisation",
      entreprise: "Capgemini Engineering",
      lieu: "Casablanca",
      periode: "Janvier 2025 - Avril 2025",
      description: "Développement d'un programme intelligent de traduction multi-langue avec interface utilisateur moderne",
      technologies: ["Python", "PyQt6"]
    },
    {
      poste: "Stagiaire en Développement IA",
      entreprise: "Capgemini Engineering",
      lieu: "Casablanca",
      periode: "Septembre 2024 - Janvier 2025",
      description: "Création d'outils Excel automatisés pour analyser et comparer des documents de manière efficace",
      technologies: ["HTML5", "Python", "Flask"]
    },
    {
      poste: "Stagiaire en Développement Web & Data",
      entreprise: "Capgemini Engineering",
      lieu: "Casablanca",
      periode: "Février 2024 - Avril 2024",
      description: "Application de techniques économiques et environnementales à travers des solutions web performantes",
      technologies: ["ReactJS", "NodeJS", "MongoDB"]
    },
    {
      poste: "Stagiaire Développeuse Full Stack",
      entreprise: "IT Training Center",
      lieu: "Oujda",
      periode: "Mai 2023 - Juillet 2023",
      description: "Développement d'une application complète de gestion des inscriptions et du suivi des formations",
      technologies: ["ReactJS", "NodeJS", "MongoDB"]
    }
  ];

  const projets = [
    {
      titre: "OptiTry – Plateforme e-commerce de lunettes",
      periode: "Octobre 2024 - Mai 2025",
      description: "Développement d'une plateforme e-commerce avec essayage virtuel par IA et interface d'administration",
      technologies: [".NET", "Symfony", "Python", "IA"],
      type: "Projet de fin d'année"
    },
    {
      titre: "Projet IOT – Cold Chain Monitoring",
      periode: "Octobre 2025 - Décembre 2025",
      description: "Création d'un système pour surveiller la température des appareils médicaux et assurer la chaîne de froid",
      technologies: ["Angular", "IOT", "Monitoring"],
      type: "Projet de synthèse"
    },
    {
      titre: "Application CRM",
      periode: "Avril 2025 - Juin 2025",
      description: "CRM pour gestion clients, devis, factures et centralisation des interactions.",
      technologies: ["Symfony", "DevOps", "Jenkis", "Montanus"],
      type: "Projet de synthèse"
    },
    {
      titre: "StartBox.ma – Projet Challenge",
      periode: "Mars 2025 - Mai 2025",
      description: "Solution innovante, physique et digitale, permettant aux jeunes marocains de transformer leurs idées en projets entrepreneuriaux.",
      technologies: ["Innovation", "Entrepreneuriat", "Travail d'équipe"],
      type: "Projet Challenge"
    },
    {
      titre: "Système de gestion des RH",
      periode: "Novembre 2024 - Janvier 2025",
      description: "Conception d'une application de gestion centralisée des employés, départements et données RH",
      technologies: ["JEE", "MySQL"],
      type: "Projet de synthèse"
    },
    {
      titre: "Système de gestion des stocks médicaux",
      periode: "Novembre 2023 - Juillet 2024",
      description: "Développement d'une solution de suivi en temps réel des stocks avec alertes et traçabilité complète",
      technologies: ["Java"],
      type: "Projet de synthèse"
    },
    {
      titre: "Plateforme de gestion des dossiers patient",
      periode: "Novembre 2023 - Juillet 2024",
      description: "Conception d'une plateforme pour la gestion des dossiers patients et la planification des rendez-vous",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
      type: "Projet de synthèse"
    }
  ];

  const competences = {
    langages: ["C#", "Java", "Python", "JavaScript", "HTML5", "CSS", "PHP", "React", "Angular"],
    frameworks: [".NET", "Symfony", "PyQt6", "Flask", "Bootstrap"],
    databases: ["MySQL", "MongoDB"],
    outils: ["Git", "Docker", "JUnit", "Maven", "UML", "Merise", "Scrum", "DevOps", "Salesforce"]
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">TASNIME EL GAIRI</h1>

          <div className="nav-menu">
            {['accueil', 'à propos', 'expériences', 'projets', 'compétences', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item.replace(/\s+/g, '')}`} // enlève les espaces pour correspondre aux id
                className={`nav-link`}
              >
                {item}
              </a>
            ))}
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {['accueil', 'à propos', 'expériences', 'projets', 'compétences', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item.replace(/\s+/g, '')}`}
                className="mobile-nav-link"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>


      {/* Section Accueil */}
      <section id="accueil" className="hero-section">
        <div className="container hero-container">
          {/* Partie gauche : texte */}
          <div className="hero-content">
            <h2 className="hero-title">Tasnime EL GAIRI</h2>
            <h3 className="hero-subtitle">Élève Ingénieure d'État en Informatique</h3>
            <p className="hero-description">
              Étudiante ingénieure d'état en informatique full stack, je m'intéresse particulièrement à l'IA et au développement d'applications web. Mon objectif est de concevoir des solutions efficaces en utilisant les technologies les plus adaptées.
            </p>

            <div className="hero-info">
              <div className="info-item">
                <MapPin size={18} />
                <span>Oujda, Maroc</span>
              </div>
              <div className="info-item">
                <Phone size={18} />
                <span>+212 713-280915</span>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="mailto:tassnime.elgairi@gmail.com" className="btn btn-primary">
                <Mail size={18} />
                Contactez-moi
              </a>
              <a href="https://github.com/tasnimelgairi" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Github size={18} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/tasnime-el-gairi-902759276" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Partie droite : image */}
        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + '/images/profil.png'} alt="Tasnime EL GAIRI" />
        </div>

        </div>
      </section>


      {/* Section À propos */}
      <section id="àpropos" className="section section-white">
        <div className="container">
          <div className="section-header">
            <div className="section-line"></div>
            <h2 className="section-title">À Propos</h2>
          </div>
          <div className="about-grid">
            <div className="card">
              <GraduationCap className="card-icon" size={36} />
              <h3 className="card-title">Formation Actuelle</h3>
              <p className="card-text-bold">Diplôme d'Ingénieure en Informatique</p>
              <p className="card-text">École des Hautes Études d'Ingénierie</p>
              <p className="card-text-small">Oujda | Depuis 2024</p>
            </div>
            
            <div className="card">
              <div className="card-emoji">🌍</div>
              <h3 className="card-title">Langues</h3>
              <div className="list">
                <p className="list-item"><span className="bullet"></span>Arabe - Courant</p>
                <p className="list-item"><span className="bullet"></span>Français - Courant</p>
                <p className="list-item"><span className="bullet"></span>Anglais - Courant</p>
              </div>
            </div>

            <div className="card">
              <div className="card-emoji">💡</div>
              <h3 className="card-title">Centres d'Intérêt</h3>
              <div className="list">
                <p>• Innovation technologique</p>
                <p>• UI/UX Design</p>
                <p>• Basketball</p>
                <p>• Cuisine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expériences */}
      <section id="expériences" className="section section-gray">
        <div className="container">
          <div className="section-header">
            <div className="section-line"></div>
            <h2 className="section-title">Expériences Professionnelles</h2>
          </div>
          <div className="experience-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.poste}</h3>
                    <p className="experience-company">{exp.entreprise}</p>
                    <p className="experience-location">{exp.lieu}</p>
                  </div>
                  <span className="experience-period">{exp.periode}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="tags">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tag tag-blue">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="section section-white">
        <div className="container">
          <div className="section-header">
            <div className="section-line"></div>
            <h2 className="section-title">Projets Académiques</h2>
          </div>
          <div className="projects-grid">
            {projets.map((projet, idx) => (
              <div key={idx} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{projet.titre}</h3>
                  <ExternalLink size={18} className="project-icon" />
                </div>
                <p className="project-meta">{projet.type} • {projet.periode}</p>
                <p className="project-description">{projet.description}</p>
                <div className="tags">
                  {projet.technologies.map((tech, i) => (
                    <span key={i} className="tag tag-gray">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="compétences" className="section section-gray">
        <div className="container">
          <div className="section-header">
            <div className="section-line"></div>
            <h2 className="section-title">Compétences Techniques</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <h3 className="skill-title">Langages de Programmation</h3>
              <div className="tags">
                {competences.langages.map((lang) => (
                  <span key={lang} className="tag tag-blue">{lang}</span>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <h3 className="skill-title">Frameworks & Bibliothèques</h3>
              <div className="tags">
                {competences.frameworks.map((fw) => (
                  <span key={fw} className="tag tag-blue">{fw}</span>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <h3 className="skill-title">Bases de Données</h3>
              <div className="tags">
                {competences.databases.map((db) => (
                  <span key={db} className="tag tag-blue">{db}</span>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <h3 className="skill-title">Outils & Méthodologies</h3>
              <div className="tags">
                {competences.outils.map((outil) => (
                  <span key={outil} className="tag tag-blue">{outil}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="soft-skills">
            <h3 className="skill-title">Compétences Transversales</h3>
            <div className="soft-skills-grid">
              <div className="soft-skill-item">
                <div className="bullet-large"></div>
                Leadership & gestion d'équipe
              </div>
              <div className="soft-skill-item">
                <div className="bullet-large"></div>
                Résolution de problèmes
              </div>
              <div className="soft-skill-item">
                <div className="bullet-large"></div>
                Gestion de projets agile
              </div>
              <div className="soft-skill-item">
                <div className="bullet-large"></div>
                Adaptabilité et apprentissage continu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="section section-white">
        <div className="container-small">
          <div className="section-header-center">
            <div className="section-line"></div>
            <h2 className="section-title">Contact</h2>
          </div>
          <p className="contact-intro">
            Vous avez un projet en tête ou souhaitez discuter d'opportunités ? N'hésitez pas à me contacter.
          </p>
          <div className="contact-grid">
            <a href="mailto:tassnime.elgairi@gmail.com" className="contact-card">
              <Mail size={28} className="contact-icon" />
              <span className="contact-label">Email</span>
              <span className="contact-value">tassnime.elgairi@gmail.com</span>
            </a>
            <a href="https://github.com/tasnimelgairi" target="_blank" rel="noopener noreferrer" className="contact-card">
              <Github size={28} className="contact-icon" />
              <span className="contact-label">GitHub</span>
              <span className="contact-value">@tasnimelgairi</span>
            </a>
            <a href="https://linkedin.com/in/tasnime-el-gairi-902759276" target="_blank" rel="noopener noreferrer" className="contact-card">
              <Linkedin size={28} className="contact-icon" />
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">Tasnime EL GAIRI</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2025 Tasnime EL GAIRI</p>
          <p className="footer-subtext">Élève Ingénieure d'État en Informatique</p>
        </div>
      </footer>
    </div>
  );
}