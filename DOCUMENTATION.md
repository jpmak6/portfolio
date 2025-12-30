# 📚 DOCUMENTATION COMPLÈTE - Portfolio v1.0

> **Portfolio BTS SIO - Ebelle Makongue Jeanpascal**  
> Documentation consolidée et synthétisée • Dernière mise à jour : 30 décembre 2025

---

## 📑 Table des matières

1. [Identité du Projet](#-identité-du-projet)
2. [Démarrage Rapide](#-démarrage-rapide)
3. [Architecture](#-architecture)
4. [Technologies & Stack](#-technologies--stack)
5. [Pages & Fonctionnalités](#-pages--fonctionnalités)
6. [Design System](#-design-system)
7. [Journal de Développement](#-journal-de-développement)
8. [Maintenance & Évolutions](#-maintenance--évolutions)

---

## 🎯 Identité du Projet

### Informations générales
- **Propriétaire :** Ebelle Makongue Jeanpascal
- **Date de naissance :** 14 juin 2003 (22 ans)
- **Formation :** BTS SIO option SLAM (1ère année)
- **Contact :** jpmakongue300@gmail.com | +33 6 73 68 11 04
- **GitHub :** [github.com/jpmak6/portfolio](https://github.com/jpmak6/portfolio)
- **Version actuelle :** 1.0
- **Statut :** Production

### Objectifs du portfolio
- ✅ Présenter compétences techniques et réalisations
- ✅ Démontrer maîtrise du développement web front-end
- ✅ Valoriser veille technologique (Windows 12)
- ✅ Faciliter contact pour stages/projets
- ✅ Servir de support pour BTS SIO

### Compétences démontrées
**Développement**
- HTML5 sémantique et accessible
- CSS3 avancé (Grid, Flexbox, animations, variables)
- JavaScript ES6+ (DOM, événements, responsive)
- Design responsive multi-breakpoints

**Systèmes & Réseaux**
- Administration Linux (Ubuntu)
- Configuration serveurs web (Apache/Nginx)
- Scripting (Bash, PowerShell)
- WordPress et hébergement (Hostinger)

**Gestion de projet**
- Versionnement Git/GitHub
- Documentation technique
- Résolution méthodique de bugs
- Organisation et structure de code

---

## 🚀 Démarrage Rapide

### Méthode 1 : Live Server (Recommandée)
```bash
1. Ouvrir le projet dans VS Code
2. Installer l'extension "Live Server"
3. Clic droit sur index.html → "Open with Live Server"
4. Accès automatique sur http://127.0.0.1:5500
```

### Méthode 2 : Serveur Python
```bash
# Depuis la racine du projet
python -m http.server 8000
# Puis ouvrir http://localhost:8000
```

### Méthode 3 : Ouverture directe
```bash
# Naviguer vers file_html/
# Double-cliquer sur portfolio.html
```

### ⚠️ Dépannage rapide

**Problème : Styles CSS ne chargent pas**
- Vérifier structure des dossiers intacte
- Chemins relatifs : `../file_css/style.css`

**Problème : Images manquantes**
- Vérifier dossier `anex/IMG/`
- Images Windows 12 nécessaires (voir section Images)

**Problème : Header couvre contenu**
- Correction appliquée : `padding-top: 140px` sur toutes les pages

---

## 📁 Architecture

### Structure des dossiers
```
portfolio-main/
├── index.html                    # Point d'entrée avec redirection
├── DOCUMENTATION.md              # Ce fichier (v1.0)
├── README.md                     # Guide utilisateur
│
├── anex/
│   ├── IMG/                      # Images (11 fichiers)
│   │   ├── technology-8280863_1280.jpg
│   │   ├── ZBMvQZNQU6cqhcK6oViPeA-1200-80-3660204703.jpg
│   │   ├── windows12concept-121819203.png
│   │   ├── Win12-6-1978179312.jpg
│   │   └── ... (7 autres images)
│   └── PDF/
│       ├── EBELLE JEAN-PASCA-1.pdf        # CV
│       └── Candidature_Stage_Ngando_Jean-Pascal.pdf
│
├── file_css/                     # 7 fichiers CSS (~2000+ lignes)
│   ├── style.css                 # Styles globaux + design system
│   ├── portfolio.css             # Page accueil
│   ├── profil.css                # Page TP
│   ├── projet.css                # Page projets
│   ├── situation_pro.css         # Page situations pro
│   ├── veille.css                # Page veille techno
│   └── formulaire.css            # Page contact
│
├── file_html/                    # 6 pages HTML
│   ├── portfolio.html            # 🏠 Accueil
│   ├── TP.html                   # 📚 TP par module
│   ├── projet.html               # 💼 Projets
│   ├── situation_pro.html        # 🎓 Situations professionnelles
│   ├── veille techno.html        # 🔬 Veille Windows 12
│   └── formulaire.html           # 📧 Contact
│
└── file_js/                      # 2 fichiers JavaScript
    ├── nav.js                    # Navigation responsive (100 lignes)
    └── type.js                   # Animation typing (Typed.js)
```

### Principes d'organisation
- ✅ **Séparation des responsabilités** : HTML/CSS/JS distincts
- ✅ **CSS modulaire** : Un fichier par page + styles globaux
- ✅ **Nomenclature cohérente** : Préfixes clairs (file_*, nav-*, project-*)
- ✅ **Assets centralisés** : Images et PDFs dans anex/
- ✅ **Documentation versionnée** : Historique complet des modifications

---

## 🛠️ Technologies & Stack

### Front-End Core
| Technologie | Version | Usage |
|------------|---------|-------|
| **HTML5** | - | Structure sémantique, accessibilité |
| **CSS3** | - | Design, animations, responsive |
| **JavaScript** | ES6+ | Interactivité, navigation mobile |

### Bibliothèques externes
| Bibliothèque | Version | CDN | Usage |
|--------------|---------|-----|-------|
| **Font Awesome** | 6.0.0 | ✅ | Icônes (600+ utilisées) |
| **Google Fonts** | - | ✅ | 5 polices (Montserrat, Playfair, etc.) |
| **Typed.js** | - | ❌ | Animation texte (à configurer) |

### Outils de développement
- **VS Code** : Éditeur principal
- **Live Server** : Serveur dev local
- **Git/GitHub** : Versionnement
- **Chrome DevTools** : Debugging

### Fonctionnalités CSS avancées
```css
/* Variables CSS */
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
}

/* Flexbox & Grid */
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); }

/* Animations */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* Media Queries */
@media (max-width: 768px) { /* Tablettes */ }
@media (max-width: 480px) { /* Mobiles */ }
@media (min-width: 1200px) { /* Desktop */ }
```

### Breakpoints responsive
- **320px** : Petits mobiles
- **480px** : Mobiles standards
- **768px** : Tablettes (breakpoint principal)
- **1024px** : Laptops
- **1200px** : Desktop large

---

## 📄 Pages & Fonctionnalités

### 🏠 Page Accueil (portfolio.html)
**Sections principales :**
- **Hero section** : Titre animé + CTA (Contact, CV, Lettre)
- **À propos** : Présentation, compétences clés, badges tech
- **Compétences** : 5 cartes cliquables (Ubuntu, Packet Tracer, Serveur Web, Système, PowerShell)

**Liens externes :**
- Téléchargement CV (PDF)
- Téléchargement lettre de motivation (PDF)
- Redirection vers page contact

**Particularités :**
- Hero plein écran (height: 100vh)
- Layout 2 colonnes pour section "À propos"
- Cartes compétences avec liens vers TP.html

---

### 📚 Page TP (TP.html)
**Organisation par module :**
1. **Ubuntu** : Installation, config serveur, scripts admin
2. **Packet Tracer** : Topologies, VLANs, routage, simulation
3. **Serveur Web** : Apache/Nginx, déploiement, sécurité
4. **Système** : Admin, utilisateurs, services, monitoring
5. **PowerShell** : Scripts automatisation Windows

**Structure :**
- Articles avec ancres ID (ex: `#tp-ubuntu`)
- Navigation depuis page accueil
- Cards extensibles pour contenu futur

---

### 💼 Page Projets (projet.html)
**Projet principal : Serveur Web Infrastructure**
- **Durée** : 3 mois (2025)
- **Technologies** : Apache, Linux, PHP, MySQL, SSL/TLS
- **Version** : 1.0
- **Features** :
  - Configuration Apache optimisée
  - Certificats SSL/TLS
  - Gestion performances et sécurité
  - Monitoring et logs

**Design :**
- Cards avec images
- Tags technologiques colorés
- Liste de features à puces
- Boutons d'action (supprimés en v1.0)

---

### 🎓 Page Situations Pro (situation_pro.html)
**Stage : E&M Softwere Systeme**
- **Mission** : Développement landing page conversion
- **Technologies** : WordPress, Hostinger, HTML/CSS responsive
- **Actions** :
  - Recueil besoins et définition objectifs
  - Conception maquettes responsive
  - Développement WordPress (thème, plugins)
  - Configuration hébergement et déploiement
  - Tests compatibilité mobile

**Compétences mobilisées :**
- Gestion de contenu WordPress
- HTML & CSS responsive
- Déploiement et hébergement
- Orientation conversion / UX

---

### 🔬 Page Veille Techno (veille techno.html)
**Thématique : Windows 12 - OS Hybride et Modulaire**

**Structure professionnelle :**
- Badge d'état (Thématique + Statut)
- Image hero principale
- Problématique technique
- 3 piliers de l'analyse (Modularité CorePC, NPU & IA, Sécurité Rust & Pluton)
- Galerie 3 images Windows 12
- **Sources en cartes visuelles** (4 sources)
- Synthèse personnelle (citation)
- Points clés SISR (4 cartes)
- Checklist technique (6 items)

**Sources documentées :**
| Type | Source | Lien |
|------|--------|------|
| Article | ZDNet - Focus Entreprise | zdnet.fr |
| Analyse | Windows Central - CorePC | windowscentral.com |
| Actualité | Frandroid - Recap Complet | frandroid.com |
| Documentation | Microsoft Learn - IA & NPU | learn.microsoft.com |

**Images utilisées :**
- Hero : `ZBMvQZNQU6cqhcK6oViPeA-1200-80-3660204703.jpg`
- Galerie 1 : `windows12concept-121819203.png`
- Galerie 2 : `Win12-6-1978179312.jpg`
- Galerie 3 : `639752-1-2696169072.jpeg`

---

### 📧 Page Contact (formulaire.html)
**Design : Cartes de contact (sans formulaire)**

**4 cartes interactives :**
1. **Email** : jpmakongue300@gmail.com (lien mailto)
2. **Téléphone** : +33 6 73 68 11 04 (lien tel)
3. **Localisation** : France
4. **GitHub** : github.com/jpmak6 (lien externe)

**Caractéristiques :**
- Icônes gradient circulaires (80px)
- Animations hover (élévation, rotation, glow)
- Descriptions contextuelles
- CTA avec flèches animées
- Responsive parfait (1 colonne mobile)

**Ancien formulaire supprimé en v1.0**

---

## 🎨 Design System

### Palette de couleurs
```css
--primary-color: #2c3e50;      /* Bleu-gris foncé - Headers, texte principal */
--secondary-color: #3498db;    /* Bleu vif - CTA, liens, accents */
--accent-color: #e74c3c;       /* Rouge - Alertes, hover important */
--light-color: #ecf0f1;        /* Gris clair - Textes secondaires */
--dark-color: #2c3e50;         /* Identique primary */
```

### Typographie (Google Fonts)
| Police | Poids | Usage |
|--------|-------|-------|
| **Montserrat** | 800 | H1, Logo (heading-1) |
| **Playfair Display** | 700 italic | H2 (heading-2) |
| **Roboto** | 600 | H3 (heading-3) |
| **Open Sans** | Regular | Corps de texte (text-body) |
| **Poppins** | 500 | Textes accent (text-accent) |

### Composants clés

**Logo animé**
```css
.logo-text {
    background: linear-gradient(45deg, #3498db, #e74c3c);
    -webkit-background-clip: text;
    color: transparent;
}
```

**Cartes (Cards)**
```css
.card {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(10px);
}
```

**Boutons**
- `.btn-primary` : Background gradient bleu
- `.btn-secondary` : Bordure bleue, transparent
- `.btn-outline` : Bordure blanche, transparent

**Navigation**
- Header fixe (position: fixed)
- Height: 80px + padding
- Menu hamburger < 768px
- Smooth scroll avec auto-hide

### Animations CSS
```css
/* Fade In */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Pulse */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

/* Slide In */
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}
```

### Scrollbar personnalisée
```css
::-webkit-scrollbar {
    width: 14px;
}

::-webkit-scrollbar-track {
    background: linear-gradient(180deg, #1a1a2e, #16213e);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #3498db, #2c3e50);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    box-shadow: 0 0 10px #3498db;
}
```

---

## 📝 Journal de Développement

### 🗓️ 17 septembre 2025
**Migration PHP vers HTML**
- Conversion de tous les fichiers PHP en HTML
- Réorganisation des fichiers JavaScript
- Configuration Git initiale
- Analyse technique du portfolio

---

### 🗓️ 14 octobre 2025 - Initial Commit
**Setup GitHub**
- Initialisation dépôt Git
- Premier commit sur branche `main`
- Création README.md et debug.md
- Repository: github.com/jpmak6/portfolio

**Documentation**
- Conversion test.txt en test.md
- Réécriture documentation exhaustive
- Ajout profil détaillé développeur
- Architecture complète documentée
- Roadmap développement créée

---

### 🗓️ 14 octobre 2025 - Correction Live Server
**❌ Problème identifié**
- Pages HTML ne s'ouvraient pas avec Live Server
- Cause : Fichiers dans sous-dossier `file_html/`

**✅ Solutions appliquées**
- Création `index.html` à la racine avec triple redirection :
  1. Meta refresh (HTTP)
  2. JavaScript setTimeout
  3. Lien manuel de secours
- Design page de chargement avec spinner animé
- Documentation complète dans README

---

### 🗓️ 15 octobre 2025 - Fix Header Fixe
**❌ Problème identifié**
- Header fixe couvrait contenu en haut de page
- Cause : `position: fixed` sans compensation

**✅ Solution finale**
- `padding-top: 140px` ajouté au `main` de toutes les pages :
  - profil.css
  - projet.css
  - situation_pro.css
  - formulaire.css
- Calcul : Header 80px + padding nav 48px + marge 12px = 140px
- veille.css avait déjà `margin-top: 160px` (OK)
- portfolio.css utilise `height: 100vh` (pas de problème)

---

### 🗓️ 15 octobre 2025 - Correction Logo
**❌ Problème identifié**
- Point (bullet point) apparaissait à côté du logo
- Cause : Conflit CSS pseudo-éléments ::before

**✅ Solutions appliquées**
- `list-style: none` sur `.nav-logo`
- `display: none !important` sur `.nav-logo::before`
- `display: none !important` sur `.logo-text::before`
- Restructuration CSS `.nav-container`

---

### 🗓️ 15 octobre 2025 - Améliorations Design
**1. Scrollbar redesignée**
- Largeur 14px (au lieu de 12px)
- Gradient vertical fluide
- Hover avec glow effect bleu
- Support Firefox (scrollbar-width, scrollbar-color)

**2. Titre h1 responsive (veille.css)**
- `clamp(1.8rem, 5vw, 2.5rem)` pour taille fluide
- Padding ajouté pour éviter contact bords
- Pseudo-élément ::after pour soulignement adaptatif
- Gradient transparent pour effet fondu

**3. Media queries complètes**
- @media (max-width: 768px) : Tablettes
- @media (max-width: 480px) : Mobiles
- @media (min-width: 1200px) : Grands écrans

---

### 🗓️ 30 décembre 2025 - Version 1.0
**Veille technologique Windows 12**
- Intégration contenu structuré professionnel
- Transformation tableau sources en cartes visuelles
- 3 piliers de l'analyse (CorePC, NPU & IA, Sécurité)
- Galerie 3 images avec noms corrigés
- 4 sources documentées avec liens externes
- Checklist technique interactive (6 items)
- Synthèse personnelle avec citation stylisée

**Page Contact refonte**
- Suppression formulaire (pas de backend)
- 4 cartes interactives colorées
- Icônes circulaires avec rotation 360°
- Effets hover sophistiqués (glow, élévation)
- Design responsive parfait

**Page Projets nettoyage**
- Suppression boutons "Voir le projet" et "Code source"
- Focus sur présentation des features

**Documentation consolidée**
- Regroupement de 4 fichiers .md en 1 seul
- Synthèse lisible et structurée
- Table des matières complète
- Historique chronologique détaillé

---

## 🔧 Maintenance & Évolutions

### ✅ Fonctionnalités complètes (v1.0)
- [x] Design responsive multi-breakpoints
- [x] Navigation sticky avec auto-hide
- [x] Menu hamburger mobile
- [x] Animations et transitions fluides
- [x] Système de design cohérent
- [x] Téléchargement CV et lettre
- [x] Page contact avec cartes interactives
- [x] Veille technologique structurée
- [x] Documentation exhaustive

### 🚧 À faire (v1.1 et au-delà)

**Court terme (1-2 semaines)**
- [ ] Configurer Typed.js correctement sur accueil
- [ ] Ajouter vrais liens GitHub projets
- [ ] Compléter sections TP avec contenu réel
- [ ] Ajouter screenshots projets

**Moyen terme (1 mois)**
- [ ] Optimiser images (format WebP, lazy loading)
- [ ] Minification CSS/JS pour production
- [ ] Tests accessibilité (ARIA, lecteurs d'écran)
- [ ] Améliorer SEO (meta, sitemap, robots.txt)
- [ ] Ajouter 2-3 nouveaux projets

**Long terme (3+ mois)**
- [ ] Backend formulaire contact (PHP/Node.js)
- [ ] Service Worker pour cache
- [ ] Dark mode / Light mode toggle
- [ ] Blog technique intégré
- [ ] Filtrage projets par technologie
- [ ] Internationalisation (FR/EN)
- [ ] Analytics (Google Analytics ou alternative)
- [ ] Animations GSAP ou Three.js

### 🐛 Bugs connus
- ⚠️ Typed.js inclus mais non configuré
- ⚠️ Pas de lazy loading images (impact performance)
- ⚠️ Manque attributs alt sur certaines images
- ⚠️ Pas de favicon défini

### 🔐 Sécurité & Performance
**À surveiller :**
- Mise à jour régulière dépendances CDN
- Validation HTML/CSS/JS (W3C)
- Tests performance Lighthouse
- Optimisation temps de chargement
- Compression images (TinyPNG, Squoosh)

### 📊 Statistiques projet v1.0
- **Lignes de code CSS** : ~2500 lignes
- **Lignes de code JavaScript** : ~150 lignes
- **Pages HTML** : 7 (dont index redirection)
- **Fichiers CSS** : 7 modulaires
- **Fichiers JavaScript** : 2
- **Images** : 11 (dont 4 Windows 12)
- **Documents PDF** : 2 (CV + lettre)
- **Polices** : 5 familles Google Fonts
- **Icônes Font Awesome** : 600+ utilisées

---

## 🎓 Contexte Académique

**Formation :** BTS SIO option SLAM  
**Niveau :** 1ère année  
**Établissement :** [À compléter]  
**Période :** 2025-2026

**Compétences BTS SIO démontrées :**
- ✅ Développer la présence en ligne
- ✅ Travailler en mode projet
- ✅ Mettre à disposition des utilisateurs un service informatique
- ✅ Organiser son développement professionnel

**Situations professionnelles :**
1. Stage E&M Softwere Systeme (Landing page WordPress)
2. Projet Serveur Web Infrastructure (Apache, SSL, monitoring)

**Veille technologique :**
- Thématique : Windows 12 - OS Hybride et Modulaire
- Sources : 4 documentées (ZDNet, Windows Central, Frandroid, Microsoft Learn)

---

## 📞 Contact & Support

**Développeur :** Ebelle Makongue Jeanpascal  
**Email :** jpmakongue300@gmail.com  
**Téléphone :** +33 6 73 68 11 04  
**GitHub :** [github.com/jpmak6](https://github.com/jpmak6)  
**LinkedIn :** [À compléter]

**Localisation :** France  
**Disponibilité :** Stages, projets, collaborations

---

## 📜 Licence & Crédits

**© 2024-2025 Ebelle Makongue Jeanpascal - Tous droits réservés**

**Crédits :**
- Font Awesome 6.0.0 (Icônes)
- Google Fonts (Typographie)
- Images Unsplash / Freepik (Backgrounds)
- Images Windows 12 (Sources diverses)

**Technologies open-source utilisées :**
- HTML5, CSS3, JavaScript (Standards W3C)
- Git (Versionnement)

---

## 🔄 Versions

| Version | Date | Changements majeurs |
|---------|------|---------------------|
| **1.0** | 30 déc 2025 | Version stable production |
| 0.9 | 15 oct 2025 | Corrections design + responsive |
| 0.8 | 14 oct 2025 | Fix Live Server + documentation |
| 0.5 | 17 sept 2025 | Migration PHP → HTML |
| 0.1 | Sept 2025 | Création initiale |

---

**📌 Note finale :** Cette documentation regroupe et synthétise les contenus de `README.md`, `debug.md`, `test.md`, et `IMAGES_WINDOWS12.md`. Elle constitue la référence unique pour la maintenance et l'évolution du portfolio v1.0.

*Dernière mise à jour : 30 décembre 2025*
