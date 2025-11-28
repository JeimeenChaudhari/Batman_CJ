# Update gadget images with more appropriate ones
Copy-Item -Path public/BatMobile.webp -Destination public/images/batmobile.jpg -Force
Copy-Item -Path public/Batarang.jpg -Destination public/images/batarang.jpg -Force
Copy-Item -Path public/Batsuit.jpg -Destination public/images/batsuit.jpg -Force
Copy-Item -Path public/GrapplingGun.jpeg -Destination public/images/grappling-gun.jpg -Force
Copy-Item -Path public/UtilityBelt.webp -Destination public/images/utility-belt.jpg -Force
Copy-Item -Path public/BatComputer.jpeg -Destination public/images/bat-computer.jpg -Force
Copy-Item -Path public/Smokepellet.jpg -Destination public/images/smoke-pellets.jpg -Force
Copy-Item -Path public/BatClaw.jpeg -Destination public/images/batclaw.jpg -Force
Copy-Item -Path public/DetectiveVidon.jpg -Destination public/images/detective-vision.jpg -Force
Copy-Item -Path public/Batwing.jpeg -Destination public/images/batwing.jpg -Force

# Create hero image for gadgets page
Copy-Item -Path public/TheDarkknight.jpeg -Destination public/images/batman-gadgets.jpg -Force

Write-Host "Gadget images have been updated successfully!" 