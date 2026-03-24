param(
  [switch]$SkipPull
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..")
Set-Location $repoRoot

Write-Host "[update] Repository root: $repoRoot"

if (-not $SkipPull) {
  Write-Host "[update] Pulling latest changes..."
  git pull --ff-only
}

Write-Host "[update] Installing dependencies..."
npm install

Write-Host "[update] Running checks..."
npm run check

Write-Host "[update] Generating docs..."
npm run docs:build

Write-Host "[update] Building static export..."
npm run build

Write-Host "[update] Update procedure completed successfully."
