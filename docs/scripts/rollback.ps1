param(
  [Parameter(Mandatory = $true)]
  [string]$BackupArchive
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$tempRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("ulda-rollback-" + [guid]::NewGuid().ToString("N"))

$itemsToRestore = @(
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

if (-not (Test-Path $BackupArchive)) {
  throw "Backup archive not found: $BackupArchive"
}

New-Item -ItemType Directory -Path $tempRoot -Force | Out-Null
Expand-Archive -Path $BackupArchive -DestinationPath $tempRoot -Force

foreach ($item in $itemsToRestore) {
  $sourcePath = Join-Path $tempRoot $item
  $targetPath = Join-Path $repoRoot $item

  if (Test-Path $sourcePath) {
    if (Test-Path $targetPath) {
      Remove-Item -Path $targetPath -Recurse -Force
    }

    Copy-Item -Path $sourcePath -Destination $targetPath -Recurse -Force
  }
}

Write-Host "[rollback] Project files restored from $BackupArchive"
Write-Host "[rollback] Recommended next steps: npm install; npm run check; npm run build"
