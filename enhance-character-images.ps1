# Use Batman movie images for Alfred and Joker since they're clearer
Copy-Item -Path public/TheDarkknight.jpeg -Destination public/images/joker.jpg -Force
Copy-Item -Path public/BatmanBegins.jpg -Destination public/images/alfred.jpg -Force

Write-Host "Alfred and Joker images have been enhanced with clearer images!" 