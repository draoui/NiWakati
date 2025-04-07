export default function sitemap() {
  const baseUrl = 'https://ni-wakati.be'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calendar`, // Mis à jour
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    // ... autres URLs
  ]
}