$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$artifactsRoot = Join-Path $repoRoot "artifacts"
$buildOutput = Join-Path $artifactsRoot "build-$timestamp"
$siteOutput = Join-Path $buildOutput "site"
$docsOutput = Join-Path $buildOutput "docs"

Set-Location $repoRoot

if (-not (Test-Path $artifactsRoot)) {
  New-Item -ItemType Directory -Path $artifactsRoot | Out-Null
}

Write-Host "[prod-build] Installing dependencies..."
npm install

Write-Host "[prod-build] Running verification..."
npm run check

Write-Host "[prod-build] Generating documentation..."
npm run docs:build

Write-Host "[prod-build] Building static export..."
npm run build

New-Item -ItemType Directory -Path $siteOutput -Force | Out-Null
New-Item -ItemType Directory -Path $docsOutput -Force | Out-Null

Copy-Item -Path (Join-Path $repoRoot "out\*") -Destination $siteOutput -Recurse -Force
Copy-Item -Path (Join-Path $repoRoot "typedoc-site\*") -Destination $docsOutput -Recurse -Force

Write-Host "[prod-build] Artifacts created in $buildOutput"
