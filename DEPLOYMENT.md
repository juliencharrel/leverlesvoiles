# Guide de déploiement sur Vercel

Ce guide vous explique comment déployer le site Lever les Voiles sur Vercel.

## 🚀 Déploiement automatique

### 1. Prérequis
- Un compte GitHub avec le code source
- Un compte Vercel (gratuit)

### 2. Connexion à Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "New Project"

### 3. Import du projet
1. Sélectionnez le repository `leverlesvoiles`
2. Vercel détectera automatiquement Next.js
3. Cliquez sur "Deploy"

### 4. Configuration automatique
Le fichier `vercel.json` configure automatiquement :
- Framework : Next.js
- Build command : `npm run build`
- Output directory : `.next`
- Région : Europe (cdg1)

## ⚙️ Configuration manuelle

### Variables d'environnement
1. Dans votre projet Vercel, allez dans "Settings"
2. Cliquez sur "Environment Variables"
3. Ajoutez les variables nécessaires (voir `ENV_VARIABLES.md`)

### Domaines personnalisés
1. Allez dans "Settings" > "Domains"
2. Ajoutez votre domaine : `leverlesvoiles.org`
3. Configurez les DNS selon les instructions Vercel

## 🔧 Optimisations

### Performance
- Le site utilise Next.js 15 avec optimisations automatiques
- Images optimisées avec WebP/AVIF
- Code splitting automatique
- Compression gzip/brotli

### SEO
- Sitemap automatique : `/sitemap.xml`
- Robots.txt : `/robots.txt`
- Métadonnées optimisées
- Open Graph tags

### Sécurité
- Headers de sécurité configurés
- HTTPS automatique
- Protection XSS et CSRF

## 📊 Monitoring

### Analytics
- Vercel Analytics inclus
- Google Analytics (optionnel)
- Core Web Vitals monitoring

### Logs
- Logs de build dans Vercel Dashboard
- Logs de runtime disponibles
- Monitoring des erreurs

## 🔄 Déploiements

### Automatique
- Chaque push sur `main` déclenche un déploiement
- Preview deployments pour les pull requests
- Rollback automatique en cas d'erreur

### Manuel
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

## 🛠️ Maintenance

### Mises à jour
1. Modifiez le code localement
2. Testez avec `npm run dev`
3. Poussez sur GitHub
4. Vercel déploie automatiquement

### Rollback
1. Allez dans "Deployments"
2. Sélectionnez une version précédente
3. Cliquez sur "Promote to Production"

## 📞 Support

En cas de problème :
- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Support Vercel : [vercel.com/support](https://vercel.com/support)
- GitHub Issues : [github.com/vercel/vercel](https://github.com/vercel/vercel)

---

**Lever les Voiles** - Déploiement optimisé pour des performances maximales.
