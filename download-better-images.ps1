# Download better quality images for Alfred and Joker
$alfredUrl = "https://static.wikia.nocookie.net/batman/images/4/42/Alfred_Pennyworth_%28Michael_Caine%29.jpg"
$jokerUrl = "https://static.wikia.nocookie.net/batman/images/f/f9/Heath_Ledger_as_the_Joker.JPG"

# Create a WebClient object to download the images
$webClient = New-Object System.Net.WebClient

# Download the images
Write-Host "Downloading better quality image for Alfred..."
$webClient.DownloadFile($alfredUrl, "public/AlfredPennyworth.jpg")

Write-Host "Downloading better quality image for Joker..."
$webClient.DownloadFile($jokerUrl, "public/Joker.jpg")

Write-Host "Images downloaded successfully!"

# Update the images in the images directory
Copy-Item -Path public/AlfredPennyworth.jpg -Destination public/images/alfred.jpg -Force
Copy-Item -Path public/Joker.jpg -Destination public/images/joker.jpg -Force

Write-Host "Alfred and Joker images have been updated successfully!" 