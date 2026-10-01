# Tarjeta digital — Fundación España África

Tarjeta web/PWA de Montserrat Momán Pampillo basada en el concepto visual 1C.

## Qué hace
- Guarda el contacto mediante `montserrat-moman.vcf`.
- Llama por teléfono y abre el correo con un toque.
- Abre la dirección en OpenStreetMap.
- Permite compartir la URL de la tarjeta.
- Se puede instalar como PWA en Android/Chrome.
- En iPhone: Safari → Compartir → Añadir a pantalla de inicio.
- Funciona sin conexión después de la primera visita gracias al service worker.

## Publicarla gratis con GitHub Pages
1. Crea un repositorio nuevo en GitHub.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio.
3. En GitHub: Settings → Pages.
4. En “Build and deployment”, selecciona “Deploy from a branch”.
5. Selecciona la rama `main` y carpeta `/ (root)`.
6. GitHub mostrará una URL pública. Esa será la dirección de la tarjeta.

## Importante sobre el QR
La imagen `assets/qr.png` procede del QR proporcionado por el usuario. Si el QR debe apuntar a la URL pública de esta tarjeta, habrá que generar uno nuevo después de publicar la página y reemplazar `assets/qr.png`.
