$ErrorActionPreference = "Continue"

$tasks = @(
    @{ Url = "https://lamose.co.in/"; Hero = "screenshots/lamose-hero.png"; Full = "screenshots/lamose-full.png" },
    @{ Url = "https://whitewolfinfra.com/"; Hero = "screenshots/whitewolf-hero.png"; Full = "screenshots/whitewolf-full.png" },
    @{ Url = "https://www.gardenresidency.com/"; Hero = "screenshots/garden-residency-hero.png"; Full = "screenshots/garden-residency-full.png" },
    @{ Url = "https://www.ireedindia.com/"; Hero = "screenshots/ireed-hero.png"; Full = "screenshots/ireed-full.png" },
    @{ Url = "https://boring-ashen.vercel.app/"; Hero = "screenshots/pinnacle-hero.png"; Full = "screenshots/pinnacle-full.png" }
)

foreach ($t in $tasks) {
    Write-Host ">>> Capturing Hero: $($t.Url) -> $($t.Hero)"
    npx playwright screenshot --viewport-size "1440, 1000" --wait-for-timeout 4000 $t.Url $t.Hero

    Write-Host ">>> Capturing Full: $($t.Url) -> $($t.Full)"
    npx playwright screenshot --viewport-size "1440, 1000" --full-page --wait-for-timeout 4000 $t.Url $t.Full
}

Write-Host ">>> ALL CAPTURES FINISHED!"
Get-ChildItem screenshots\*.png | Select-Object Name, Length, LastWriteTime
