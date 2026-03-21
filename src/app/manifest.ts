import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Azienda Agricola Nonna Palma',
    short_name: 'Nonna Palma',
    description: 'Eccellenza nel cuore della Puglia. Dal 1950, olio extravergine di oliva di altissima qualità.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FAF9F6',
    theme_color: '#A05222',
    icons: [
      {
        src: '/pwa-icon.png?v=5',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png?v=5',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  }
}
