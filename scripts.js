function loadGallery() {
    const gallery = document.getElementById('gallery');
    const images = [
        'image1.jpg', 'image2.jpg', 'image3.jpg' // Añade las rutas de tus imágenes aquí
    ];

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Barco';
        gallery.appendChild(img);

        // Simular barra de carga
        const loadingBar = document.getElementById('loading-container');
        loadingBar.style.display = 'block';
        setTimeout(() => {
            const progress = document.getElementById('progress');
            progress.style.width = `${(index + 1) / images.length * 100}%`;
            if (index === images.length - 1) {
                setTimeout(() => {
                    loadingBar.style.display = 'none';
                }, 500);
            }
        }, 500 * index);
    });
}

window.onload = loadGallery;
