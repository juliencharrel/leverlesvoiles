# Variables d'environnement

Ce fichier documente les variables d'environnement utilisées par le site Lever les Voiles.

## Variables publiques (NEXT_PUBLIC_*)

### Configuration du site
- `NEXT_PUBLIC_SITE_URL` - URL principale du site (ex: https://leverlesvoiles.org)
- `NEXT_PUBLIC_SITE_NAME` - Nom du site (ex: Lever les Voiles)

### Contact
- `NEXT_PUBLIC_CONTACT_PHONE` - Numéro de téléphone (ex: +33 1 23 45 67 89)
- `NEXT_PUBLIC_CONTACT_EMAIL` - Adresse email (ex: contact@leverlesvoiles.org)
- `NEXT_PUBLIC_CONTACT_ADDRESS` - Adresse physique (ex: Port de plaisance, 75000 Paris, France)

### SEO et Analytics
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - ID Google Analytics (ex: GA_MEASUREMENT_ID)
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` - Code de vérification Google Search Console

### Réseaux sociaux
- `NEXT_PUBLIC_FACEBOOK_URL` - URL Facebook
- `NEXT_PUBLIC_INSTAGRAM_URL` - URL Instagram
- `NEXT_PUBLIC_TWITTER_URL` - URL Twitter

## Configuration sur Vercel

1. Allez dans votre projet Vercel
2. Cliquez sur "Settings"
3. Allez dans "Environment Variables"
4. Ajoutez les variables nécessaires

## Exemple de fichier .env.local

```bash
# Configuration du site
NEXT_PUBLIC_SITE_URL=https://leverlesvoiles.org
NEXT_PUBLIC_SITE_NAME=Lever les Voiles

# Contact
NEXT_PUBLIC_CONTACT_PHONE=+33 1 23 45 67 89
NEXT_PUBLIC_CONTACT_EMAIL=contact@leverlesvoiles.org
NEXT_PUBLIC_CONTACT_ADDRESS=Port de plaisance, 75000 Paris, France

# SEO
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code

# Réseaux sociaux
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/leverlesvoiles
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/leverlesvoiles
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/leverlesvoiles
```
