
const WORDPRESS_URL = "https://wordpress-api-production.up.railway.app/wp-json/wp/v2/products?_embed";

const LARAVEL_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

export const getProducts = async (source) => {
  let url = "";
  
  if (source === 'wordpress') {
    // Railway Wordpress link
    url = WORDPRESS_URL;
  } else {
    // Lukas' sti til Laravel
    url = `${LARAVEL_BASE_URL}/products`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Fejl: ${response.status} - ${errorText.slice(0, 100)}`);
    }

    const data = await response.json();

    // Mapping

    if (source === 'wordpress') {
      // Wordpress mapping
      return data.map((item) => {
        
        const imagePath = item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://via.placeholder.com/150";

        return {
          id: item.id,
          name: item.title.rendered,
          image: imagePath,
          
          price: item.acf.lager ? "99 kr." : "Udsolgt", 
          type: item.acf.product_type
        };
      });
    } else {
      // Laravel mapping
      return data.map((item) => ({
        id: item.id,
        name: item.name + " (Laravel)", // Eller hvad feltet er kaldt i databasen
        image: item.image_url || item.image, // Indsæt korrekt billed-sti
        price: item.price + " kr."
      }));
    }
  } catch (error) {
    console.error("API Error:", error);
    return []; // Returner en tom liste så appen ikke crasher ved fejl
  }
};