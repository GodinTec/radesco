$baseUrl = 'https://radescomineracao.com.br/assets/images'
$images = @(
    'produtos/sao-lourenco-da-serra.png',
    'produtos/crystal-spring.png',
    'produtos/crystal-vida.png',
    'produtos/saude-original.png',
    'produtos/preferida.png',
    'produtos/radical.png',
    'produtos/bom-gosto.png',
    'produtos/otiminas.png',
    'produtos/klarissima.png',
    'produtos/acqua-real.png',
    'produtos/bg-produtos-01.png',
    'produtos/bg-produtos-02.png',
    'produtos/bg-produtos-03.png'
)
$targetDir = 'C:\Users\joaozinho\Documents\opencode\radesco-site\assets\images'
foreach ($img in $images) {
    $folder = Split-Path $img -Parent
    if ($folder) { New-Item -ItemType Directory -Path "$targetDir\$folder" -Force | Out-Null }
    $url = "$baseUrl/$img"
    $outFile = "$targetDir\$img"
    try {
        (New-Object System.Net.WebClient).DownloadFile($url, $outFile)
        Write-Host "OK: $img"
    } catch {
        Write-Host "FAIL: $img"
    }
}
Write-Host "Done!"