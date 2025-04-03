$tailwind = Start-Job -ScriptBlock {npx @tailwindcss/cli -i ./assets/css/input.css -o ./assets/css/output.css --watch --minify}
$hugo = Start-Job -ScriptBlock {hugo server -D}

Write-Host 'Starting jobs...';

Get-Job

Write-Host -NoNewline 'Press any key to stop...';
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');

Write-Host '';
Write-Host 'Stopping jobs...';

$hugo | Stop-Job
$tailwind | Stop-Job

Remove-Job -Job $hugo
Remove-Job -Job $tailwind
