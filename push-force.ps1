# Script de push FORCÉ vers GitHub - Portfolio v1.0

Write-Host "⚠️  ATTENTION: Ce script va ÉCRASER le contenu existant sur GitHub!" -ForegroundColor Red
Write-Host "Appuyez sur une touche pour continuer ou CTRL+C pour annuler..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host "`n🚀 Push forcé vers GitHub..." -ForegroundColor Cyan

git push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ SUCCÈS! Portfolio v1.0 poussé vers GitHub!" -ForegroundColor Green
    Write-Host "🌐 Votre portfolio est maintenant disponible sur:" -ForegroundColor Cyan
    Write-Host "   https://github.com/jpmak6/portfolio" -ForegroundColor White
    Write-Host "`n📊 Statistiques du push:" -ForegroundColor Cyan
    Write-Host "   • 31 fichiers" -ForegroundColor White
    Write-Host "   • 4233 lignes de code" -ForegroundColor White
    Write-Host "   • Documentation consolidée" -ForegroundColor White
    Write-Host "   • Veille Windows 12 complète" -ForegroundColor White
    Write-Host "   • Version 1.0 Production" -ForegroundColor White
} else {
    Write-Host "`n❌ Erreur lors du push forcé" -ForegroundColor Red
}
