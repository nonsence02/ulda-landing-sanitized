param(
  [string]$OutputDir = "backups"
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupRoot = Join-Path $repoRoot $OutputDir
$snapshotDir = Join-Path $backupRoot "snapshot-$timestamp"
$archivePath = Join-Path $backupRoot "snapshot-$timestamp.zip"

$itemsToCopy = @(
  "app",
  "components",
  "lib",
  "docs",
  "public",
  ".github",
  "package.json",
  "package-lock.json",
  "next.config.mjs",
  "tsconfig.json",
  "typedoc.json",
  "eslint.config.mjs",
  "tailwind.config.ts",
  "Dockerfile",
  "README.md"
)

Set-Location $repoRoot

New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null
New-Item -ItemType Directory -Path $snapshotDir -Force | Out-Null

foreach ($item in $itemsToCopy) {
  if (Test-Path $item) {
    Copy-Item -Path $item -Destination $snapshotDir -Recurse -Force
  }
}

Compress-Archive -Path (Join-Path $snapshotDir "*") -DestinationPath $archivePath -Force

Write-Host "[backup] Backup archive created: $archivePath"
