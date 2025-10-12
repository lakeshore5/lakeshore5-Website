# lakeshore5 Portfolio - ChatGPT Embeddable Images

## 🎯 **Verified Working Images (Tested for ChatGPT Embedding)**

These URLs have been tested to return proper `image/png` or `image/jpeg` MIME types and `Access-Control-Allow-Origin: *` headers.

### ✅ **CONFIRMED WORKING URLs**

**Heliox Station - Space Cinematic**
```
https://raw.githubusercontent.com/lakeshore5/lakeshore5-Website/main/builds/athion-builds/Heliox_Station/SpaceCinematic.png
```
![Heliox Station Cinematic](https://raw.githubusercontent.com/lakeshore5/lakeshore5-Website/main/builds/athion-builds/Heliox_Station/SpaceCinematic.png)

**Xenos Castle - Main View**
```
https://raw.githubusercontent.com/lakeshore5/lakeshore5-Website/main/builds/xenos-builds/XenosCastle/XenosCastle.png
```
![Xenos Castle](https://raw.githubusercontent.com/lakeshore5/lakeshore5-Website/main/builds/xenos-builds/XenosCastle/XenosCastle.png)

---

### 🔧 **Alternative Working URLs (GitHub Pages)**

These GitHub Pages URLs work because they have proper MIME types:

**Heliox Station Gallery**
- https://lakeshore5.github.io/lakeshore5-Website/builds/athion-builds/Heliox_Station/SpaceBuild.png
- https://lakeshore5.github.io/lakeshore5-Website/builds/athion-builds/Heliox_Station/SpaceAerial.png
- https://lakeshore5.github.io/lakeshore5-Website/builds/athion-builds/Heliox_Station/SpaceTerra.png
- https://lakeshore5.github.io/lakeshore5-Website/builds/athion-builds/Heliox_Station/SpaceShip.png

**Xenos Castle Gallery**
- https://lakeshore5.github.io/lakeshore5-Website/builds/xenos-builds/XenosCastle/XenosCastleGround.png
- https://lakeshore5.github.io/lakeshore5-Website/builds/xenos-builds/XenosCastle/XenosCastleInside.png
- https://lakeshore5.github.io/lakeshore5-Website/builds/xenos-builds/XenosCastle/XenosCastleAerial.png
- https://lakeshore5.github.io/lakeshore5-Website/builds/xenos-builds/XenosCastle/XenosCastleOut.png

---

### ⚠️ **Known Issues**

Some images return `application/octet-stream` instead of proper image MIME types, causing embedding failures:
- Loriostrond images (GitHub raw serves with wrong MIME type)
- Some Aurelios images
- Various other builds

### 🚀 **Solution in Progress**

Working on creating properly served copies of all images with correct MIME types for 100% ChatGPT compatibility.

---

## 📋 **Usage Instructions for ChatGPT**

1. **Copy any URL from the "CONFIRMED WORKING" section above**
2. **Test the URL in your browser first** - it should open the image directly
3. **If it works in browser, it should embed in ChatGPT**

## 🎨 **Full Portfolio**
- **Main Site**: https://lakeshore5.github.io/lakeshore5-Website/
- **Complete Gallery**: https://lakeshore5.github.io/lakeshore5-Website/embed-gallery.html

## 📄 **License**
All images: **CC BY 4.0** - Attribution required: "Image by lakeshore5"
