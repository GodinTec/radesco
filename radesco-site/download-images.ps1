$baseUrl = 'https://radescomineracao.com.br/assets/images'
$images = @(
    'sao-lourenco-da-serra-branco.png',
    'ondas.png',
    'ondas-branco.png',
    'banner/banner_01.png',
    'home/agua-sao-lourenco.png',
    'home/qualidade-comprovada-bg.png',
    'home/qualidade-comprovada-galao.png',
    'home/icons/da-natureza-para-voce.png',
    'home/icons/armazenamento.png',
    'home/icons/controle-de-qualidade.png',
    'home/icons/localizacao-privilegiada.png',
    'home/conheca-nossos-distribuidores.png',
    'footer-bg.png',
    'perguntas-frequentes.png',
    'sao-lourenco-da-serra.png',
    'radesco.png',
    'incandescente.png'
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