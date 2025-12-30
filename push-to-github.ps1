# Script de push vers GitHub - Portfolio v1.0

Write-Host "🚀 Démarrage du push vers GitHub..." -ForegroundColor Cyan

# Étape 1: Nettoyage et réinitialisation
Write-Host "`n📁 Nettoyage du dépôt Git..." -ForegroundColor Yellow
if (Test-Path .git) {
    Remove-Item -Recurse -Force .git
    Write-Host "✓ Ancien dépôt supprimé" -ForegroundColor Green
}

# Étape 2: Initialisation
Write-Host "`n🔧 Initialisation du dépôt Git..." -ForegroundColor Yellow
git init
Write-Host "✓ Dépôt initialisé" -ForegroundColor Green

# Étape 3: Configuration utilisateur
Write-Host "`n👤 Configuration utilisateur Git..." -ForegroundColor Yellow
git config user.name "jpmak6"
git config user.email "jpmakongue300@gmail.com"
Write-Host "✓ Utilisateur configuré" -ForegroundColor Green

# Étape 4: Ajout du remote
Write-Host "`n🔗 Ajout du remote GitHub..." -ForegroundColor Yellow
git remote add origin https://github.com/jpmak6/portfolio.git
Write-Host "✓ Remote ajouté" -ForegroundColor Green

# Étape 5: Création du .gitignore
Write-Host "`n📝 Création du .gitignore..." -ForegroundColor Yellow
@"
# OS
.DS_Store
Thumbs.db

# Editors
.vscode/
.idea/

# Logs
*.log

# Temporary files
*.tmp
*.temp
"@ | Out-File -FilePath .gitignore -Encoding UTF8
Write-Host "✓ .gitignore créé" -ForegroundColor Green

# Étape 6: Ajout des fichiers
Write-Host "`n➕ Ajout de tous les fichiers..." -ForegroundColor Yellow
git add .
Write-Host "✓ Fichiers ajoutés" -ForegroundColor Green

# Étape 7: Statut
Write-Host "`n📊 Statut du dépôt:" -ForegroundColor Yellow
git status

# Étape 8: Commit
Write-Host "`n💾 Création du commit..." -ForegroundColor Yellow
git commit -m "🎉 Version 1.0 - Portfolio complet avec veille Windows 12 et documentation consolidée"
Write-Host "✓ Commit créé" -ForegroundColor Green

# Étape 9: Vérification de la branche
Write-Host "`n🌿 Vérification de la branche..." -ForegroundColor Yellow
$currentBranch = git branch --show-current
Write-Host "Branche actuelle: $currentBranch" -ForegroundColor Cyan

# Renommer en main si nécessaire
if ($currentBranch -ne "main") {
    git branch -M main
    Write-Host "✓ Branche renommée en 'main'" -ForegroundColor Green
}

# Étape 10: Push
Write-Host "`n🚀 Push vers GitHub..." -ForegroundColor Yellow
Write-Host "⚠️  Si c'est votre premier push, GitHub pourrait demander authentification" -ForegroundColor Magenta

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ SUCCÈS! Portfolio poussé vers GitHub!" -ForegroundColor Green
    Write-Host "🌐 Votre portfolio est maintenant disponible sur: https://github.com/jpmak6/portfolio" -ForegroundColor Cyan
} else {
    Write-Host "`n⚠️  Erreur lors du push. Vérifiez:" -ForegroundColor Red
    Write-Host "  1. Votre connexion Internet" -ForegroundColor Yellow
    Write-Host "  2. Vos droits d'accès au dépôt GitHub" -ForegroundColor Yellow
    Write-Host "  3. Votre authentification GitHub" -ForegroundColor Yellow
}
