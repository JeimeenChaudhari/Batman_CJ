Copy-Item -Path public/Batman.jpg -Destination public/images/batman.jpg
Copy-Item -Path public/Batman.jpg -Destination public/images/batman-hero.jpg
Copy-Item -Path public/BBB.webp -Destination public/images/batman-bio.jpg
Copy-Item -Path public/BatmanBegins.jpg -Destination public/images/batman-begins.jpg
Copy-Item -Path public/TheDarkknight.jpeg -Destination public/images/dark-knight.jpg
Copy-Item -Path public/TheDarkKnightRises.jpeg -Destination public/images/dark-knight-rises.jpg
Copy-Item -Path public/batmanVSupermanDawnOfJustice.jpg -Destination public/images/batman-v-superman.jpg
Copy-Item -Path public/TheBatman.jpg -Destination public/images/the-batman.jpg
Copy-Item -Path public/Batman.jpg -Destination public/images/batman-movies.jpg

# Create additional images for characters and gadgets
Copy-Item -Path public/Batman.jpg -Destination public/images/joker.jpg
Copy-Item -Path public/Batman.jpg -Destination public/images/alfred.jpg
Copy-Item -Path public/Batman.jpg -Destination public/images/batmobile.jpg
Copy-Item -Path public/Batman.jpg -Destination public/images/batarang.jpg
Copy-Item -Path public/Batman.jpg -Destination public/images/batsuit.jpg

Write-Host "All images have been copied successfully!" 