# 🌐 Portfolio - Ebelle Makongue Jeanpascal

Portfolio personnel développé dans le cadre du BTS SIO option SLAM.

![Portfolio Preview](anex/IMG/technology-8280863_1280.jpg)

## 🚀 Démarrage rapide

### Méthode 1 : Live Server (Recommandé)

1. Ouvrez le projet dans VS Code
2. Installez l'extension "Live Server" si ce n'est pas déjà fait
3. Clic droit sur `index.html` → "Open with Live Server"
4. Le site s'ouvrira automatiquement sur `http://127.0.0.1:5500`

### Méthode 2 : Ouvrir directement

1. Naviguez vers le dossier `file_html/`
2. Double-cliquez sur `portfolio.html`

### Méthode 3 : Depuis le terminal

```bash
# Si vous avez Python installé
python -m http.server 8000
# Puis ouvrez http://localhost:8000
```

## 📁 Structure du projet

```
portfolio-master/
├── index.html              # Point d'entrée (redirection)
├── debug.md               # Journal de développement
├── test.md                # Documentation complète du projet
│
├── anex/
│   ├── IMG/               # Images du portfolio
│   └── PDF/               # CV et lettre de motivation
│
├── file_css/              # Feuilles de style
│   ├── style.css          # Styles globaux
│   ├── portfolio.css      # Page d'accueil
│   ├── profil.css         # Page profil
│   ├── projet.css         # Page projets
│   ├── situation_pro.css  # Page situations pro
│   ├── veille.css         # Page veille techno
│   └── formulaire.css     # Page contact
│
├── file_html/             # Pages HTML
│   ├── portfolio.html     # 🏠 Accueil
│   ├── TP.html        # 👤 Profil
│   ├── projet.html        # 💼 Projets
│   ├── situation_pro.html # 🎓 Situations professionnelles
│   ├── veille techno.html # 🔬 Veille technologique
│   └── formulaire.html    # 📧 Contact
│
└── file_js/               # Scripts JavaScript
    ├── nav.js             # Navigation responsive
    └── type.js            # Animation typing
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne (Grid, Flexbox, Variables CSS, Animations)
- **JavaScript ES6+** - Interactivité
- **Font Awesome 6.0** - Icônes
- **Google Fonts** - Typographie (Montserrat, Playfair Display, Roboto, Open Sans, Poppins)
- **Typed.js** - Animation de texte

## 🎨 Fonctionnalités

✅ Design responsive (mobile, tablette, desktop)  
✅ Navigation sticky avec effet scroll  
✅ Menu hamburger pour mobile  
✅ Animations et transitions fluides  
✅ Système de design cohérent  
✅ Téléchargement CV et lettre de motivation  
✅ Formulaire de contact  

## 📄 Pages disponibles

1. **Accueil** (`portfolio.html`) - Présentation générale et compétences
2. **Profil** (`TP.html`) - Parcours et objectifs professionnels
3. **Projets** (`projet.html`) - Réalisations techniques
4. **Situations Pro** (`situation_pro.html`) - Expériences professionnelles
5. **Veille Techno** (`veille techno.html`) - IA, informatique quantique
6. **Contact** (`formulaire.html`) - Formulaire de contact

## 🔗 Liens

- **GitHub Repository:** [https://github.com/jpmak6/portfolio](https://github.com/jpmak6/portfolio)
- **Branche principale:** `main`

## 📝 Documentation complète

Pour une analyse détaillée du projet, consultez le fichier [`test.md`](test.md) qui contient :
- Architecture complète
- Analyse technique approfondie
- Roadmap de développement
- Instructions pour maintenir le projet

## 🐛 Dépannage

### Le site ne s'ouvre pas avec Live Server

**Solution :** Assurez-vous de lancer Live Server depuis la racine du projet (là où se trouve `index.html`).

### Les styles CSS ne se chargent pas

**Vérification :** Les chemins dans les fichiers HTML utilisent des chemins relatifs (`../file_css/style.css`). Assurez-vous que la structure des dossiers est intacte.

### Les images ne s'affichent pas

**Vérification :** Les images doivent être dans le dossier `anex/IMG/`. Vérifiez les chemins dans le code.

### Le header couvre le contenu en haut de page

**Résolu :** Le header fixe a maintenant une compensation de `padding-top: 100px` appliquée au contenu de chaque page (profil, projets, situations pro, formulaire). Si le problème persiste, vérifiez que les fichiers CSS sont bien chargés.

## 👤 Auteur

**Ebelle Makongue Jeanpascal**  
Étudiant BTS SIO - Option SLAM  
Passionné par l'informatique et les nouvelles technologies

## 📅 Historique

- **14 octobre 2025** - Initial commit et documentation complète
- **17 septembre 2025** - Conversion PHP → HTML

## 📜 Licence

© 2024 Ebelle Makongue Jeanpascal - Tous droits réservés

---

*Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.*
