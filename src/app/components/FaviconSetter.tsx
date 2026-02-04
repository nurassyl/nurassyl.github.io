// Component to dynamically generate and set a rounded favicon
import { useEffect } from 'react';
import faviconImage from 'figma:asset/dbff330fb802950f3d0606d734e9f8ae3a50270f.png';

export function FaviconSetter() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size (standard favicon sizes: 32x32, 64x64, or larger)
    const size = 64;
    canvas.width = size;
    canvas.height = size;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      // Create rounded rectangle clipping path
      const radius = size * 0.15; // 15% border radius
      
      ctx.beginPath();
      ctx.moveTo(radius, 0);
      ctx.lineTo(size - radius, 0);
      ctx.quadraticCurveTo(size, 0, size, radius);
      ctx.lineTo(size, size - radius);
      ctx.quadraticCurveTo(size, size, size - radius, size);
      ctx.lineTo(radius, size);
      ctx.quadraticCurveTo(0, size, 0, size - radius);
      ctx.lineTo(0, radius);
      ctx.quadraticCurveTo(0, 0, radius, 0);
      ctx.closePath();
      ctx.clip();
      
      // Draw the image
      ctx.drawImage(img, 0, 0, size, size);
      
      // Convert canvas to data URL
      const faviconUrl = canvas.toDataURL('image/png');
      
      // Update or create favicon link element
      let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.type = 'image/png';
      link.href = faviconUrl;
    };
    
    img.src = faviconImage;
  }, []);

  return null; // This component doesn't render anything
}
