
const WORDPRESS_BASE_URL = "https://wordpress-api-production.up.railway.app/wp-json/wp/v2/products?_embed";

const LARAVEL_BASE_URL = import.meta.env.VITE_API_URL || "https://php-api-production-9e90.up.railway.app/api";

const resolveLaravelImageUrl = (imgUrl) => {
  if (!imgUrl) {
    return "https://via.placeholder.com/150";
  }

  if (imgUrl.startsWith('http://') || imgUrl.startsWith('https://')) {
    return imgUrl;
  }

  const apiOrigin = LARAVEL_BASE_URL.replace(/\/api\/?$/, '');
  return `${apiOrigin}/${String(imgUrl).replace(/^\//, '')}`;
};

const normalizeWordpressProducts = (data) => {
  const products = Array.isArray(data) ? data : [];

  return products.map((item) => ({
    id: item.id,
    name: `${item.title?.rendered || 'Ingen titel'}`,
    image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://via.placeholder.com/150",
    price: item.acf?.price ? Number(item.acf.price) : 100,
    desc: item.content?.rendered?.replace(/<[^>]*>?/gm, '').slice(0, 100) || 'Ingen beskrivelse fundet.',
    type: item.acf?.product_type ? {
      id: 1,
      name: item.acf.product_type.charAt(0).toUpperCase() + item.acf.product_type.slice(1) // Capitalize first letter
    } : null,
  }));
};

const normalizeLaravelProducts = (data) => {

  const products = Array.isArray(data) ? data : (data?.data || []);

  if (products.length === 0) {
    console.log("⚠️ Laravel Normalizer: Ingen produkter fundet i svaret", data);
  } else {
    console.log(`✅ Laravel Normalizer: Mapper ${products.length} produkter`);
  }

  return products.map((item) => ({
    id: Number(item.id),
    name: `${item.name}`,
    image: resolveLaravelImageUrl(item.img_url),
    price: Number(item.price),
    desc: item.desc || 'Ingen beskrivelse fundet.',
    type: item.type || null, // Preserve type for filtering
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

export const getSingleProduct = async (id, source = 'laravel') => {
  const isWordpressSource = source === 'wordpress';

  try {
    if (isWordpressSource) {
      // WordPress has a dedicated single product endpoint
      const url = `https://wordpress-api-production.up.railway.app/wp-json/wp/v2/products/${id}?_embed`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Fejl: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const normalized = normalizeWordpressProducts([data]);
      return normalized[0];
    } else {
      // Laravel doesn't have single product endpoint, fetch all and filter
      const url = `${LARAVEL_BASE_URL}/products`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Fejl: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const products = Array.isArray(data) ? data : (data?.data || []);
      
      // Find product by ID
      const product = products.find(p => Number(p.id) === Number(id));
      
      if (!product) {
        console.log(`⚠️ Produkt med ID ${id} ikke fundet`);
        return null;
      }

      console.log("🔍 Found product:", product);
      const normalized = normalizeLaravelProducts([product]);
      return normalized[0];
    }
  } catch (error) {
    console.error('API Error fetching single product:', error);
    return null;
  }
};