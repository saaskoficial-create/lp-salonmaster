$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$ffmpeg = (Get-Command ffmpeg -ErrorAction Stop).Source
$source = Join-Path $root "src\assets\human\salonmaster-hero-owner-v1.png"
$mark = Join-Path $root "public\pwa-512.png"
$destination = Join-Path $root "public\og-salonmaster.jpg"
$font = "C\:/Windows/Fonts/segoeuib.ttf"
$aTilde = [char]0x00E3
$oTilde = [char]0x00F5
$eAcute = [char]0x00E9
$lineThree = "para o seu sal${aTilde}o."
$subtitle = "Gest${aTilde}o para sal${oTilde}es, barbearias e est${eAcute}tica"
$filter = "[1:v]scale=440:-1:flags=lanczos[person];[2:v]scale=72:72:flags=lanczos[mark];[0:v][person]overlay=750:0:format=auto[base];[base][mark]overlay=78:66:format=auto[brand];[brand]drawtext=fontfile='$font':text='SalonMaster':fontcolor=0xFFFDFB:fontsize=38:x=166:y=80,drawtext=fontfile='$font':text='Menos correria.':fontcolor=0xFFFDFB:fontsize=62:x=78:y=184,drawtext=fontfile='$font':text='Mais controle':fontcolor=0xF36B21:fontsize=62:x=78:y=258,drawtext=fontfile='$font':text='$lineThree':fontcolor=0xF36B21:fontsize=62:x=78:y=332,drawtext=fontfile='$font':text='$subtitle':fontcolor=0xE6DAD2:fontsize=26:x=78:y=430"

& $ffmpeg -y -f lavfi -i "color=c=#21171D:s=1200x630:d=1" -i $source -i $mark -filter_complex $filter -frames:v 1 -update 1 -q:v 3 $destination
