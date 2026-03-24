$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..")
Set-Location $repoRoot

Write-Host "[dev] Repository root: $repoRoot"

if (-not (Test-Path "node_modules")) {
  Write-Host "[dev] Installing dependencies..."
  npm install
}

Write-Host "[dev] Starting Next.js development server..."
npm run dev
