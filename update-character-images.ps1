# Update character images with more appropriate ones
Copy-Item -Path public/BruceWayne-Batman.jpg -Destination public/images/batman.jpg -Force
Copy-Item -Path public/AlfredPennyworth.webp -Destination public/images/alfred.jpg -Force
Copy-Item -Path public/Joker.webp -Destination public/images/joker.jpg -Force
Copy-Item -Path public/CatWomen.jpg -Destination public/images/catwoman.jpg -Force
Copy-Item -Path public/CommissionerJamesGordon.jpeg -Destination public/images/gordon.jpg -Force

# Update hero images
Copy-Item -Path public/BruceWayne-Batman.jpg -Destination public/images/batman-hero.jpg -Force
Copy-Item -Path public/BBB.webp -Destination public/images/batman-bio.jpg -Force

Write-Host "Character images have been updated successfully!" 