# Lever les Voiles - Site Web

Un site web moderne et créatif pour l'association d'art vivant "Lever les Voiles", construit avec Next.js 15, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **Vercel** - Déploiement et hosting

## ✨ Fonctionnalités

- 🎨 Design créatif et artistique
- 🌈 Thème coloré et vibrant
- 📱 Optimisé mobile-first
- ⚡ Performance optimisée
- 🎭 Animations fluides et parallaxes
- 🔍 SEO optimisé
- 🌐 Support multilingue (français)

## 📁 Structure du projet

```
src/
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   ├── sitemap.ts           # Sitemap dynamique
│   └── robots.ts            # Robots.txt dynamique
├── components/
│   └── ClientOnly.tsx       # Composant pour gérer l'hydratation
└── lib/                     # Utilitaires (à venir)
```

## 🛠️ Installation et développement

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd leverlesvoiles
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance l'application en mode production
- `npm run lint` - Vérifie le code avec ESLint

## 🚀 Déploiement sur Vercel

1. **Connecter le repository à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Next.js

2. **Configuration automatique**
   - Le fichier `vercel.json` configure automatiquement le déploiement
   - Les variables d'environnement peuvent être ajoutées dans l'interface Vercel

3. **Déploiement automatique**
   - Chaque push sur la branche `main` déclenche un nouveau déploiement
   - Les previews sont créées pour chaque pull request

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans Tailwind CSS :
- Rose/Violet : `pink-400`, `purple-500`, `indigo-500`
- Dégradés : `from-pink-500 to-purple-600`
- Noir/Transparence : `black/20`, `white/10`

### Typographie
- Police principale : Inter (Google Fonts)
- Tailles responsives pour tous les écrans

### Animations
- Utilisation de Framer Motion pour les animations
- Animations d'entrée et de scroll
- Transitions fluides entre les pages
- Gestion de l'hydratation avec ClientOnly

## 📱 Responsive Design

Le site est optimisé pour tous les appareils :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🔧 Configuration SEO

- Métadonnées optimisées pour chaque page
- Open Graph tags pour les réseaux sociaux
- Twitter Cards configurées
- Robots.txt et sitemap (à ajouter)

## 📈 Performance

- Images optimisées avec Next.js Image
- Code splitting automatique
- Lazy loading des composants
- Compression des assets

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

Pour toute question concernant le site web :
- Email : contact@leverlesvoiles.org
- Téléphone : +33 1 23 45 67 89

---

**Lever les Voiles** - Votre partenaire pour l'art vivant et l'authenticité depuis plus de 10 ans.
