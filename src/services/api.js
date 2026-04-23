
const WORDPRESS_BASE_URL = "https://wordpress-api-production.up.railway.app/wp-json/wp/v2/products?_embed";

const LARAVEL_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

const normalizeWordpressProducts = (data) => {
  const products = Array.isArray(data) ? data : [];

  return products.map((item) => ({
    id: item.id,
    name: `${item.title?.rendered || 'Ingen titel'} (WP)`,
    image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://via.placeholder.com/150",
    price: item.acf?.price ? Number(item.acf.price) : 100,
    desc: item.content?.rendered?.replace(/<[^>]*>?/gm, '').slice(0, 100) || 'Ingen beskrivelse fundet.',
  }));
};

const normalizeLaravelProducts = (data) => {
  return (data || []).map((item) => ({
    id: Number(item.id),
    name: `${item.name} (Laravel)`,
    image: item.img_url,
    price: Number(item.price),
    desc: item.desc || 'Ingen beskrivelse fundet.',
  }));
};

export const getProducts = async (source = 'laravel') => {
  const isWordpressSource = source === 'wordpress';
  const url = isWordpressSource ? WORDPRESS_BASE_URL : `${LARAVEL_BASE_URL}/products`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Fejl: ${response.status} ${response.statusText} - ${errorText.slice(0, 120)}`);
    }

    const data = await response.json();

    return isWordpressSource
      ? normalizeWordpressProducts(data)
      : normalizeLaravelProducts(data);
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};