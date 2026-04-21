//const WP_URL = "https://din-wp-side.dk/wp-json/wp/v2/posts";
const LARAVEL_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

//export const getProducts = async (source) => {
  //const url = source === 'wordpress' ? WP_URL : LARAVEL_URL;
 // const url = source === 'wordpress' ? "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita" : "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon";
 // const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon"
  
 // const response = await fetch(url);
  //const data = await response.json();

 // return data.drinks.map((drink) => ({
 //     id: drink.idDrink,
 //     name: drink.strDrink + " (Test-" + source + ")", // Tilføjer kilden så du kan se den virker
 //     image: drink.strDrinkThumb
  //  }));

  // Her mapper vi dataen, så de ser ens ud for React, 
  // uanset om de kommer fra WP eller Laravel
 // return data.map(item => ({
 //   id: item.id,
 //   title: source === 'wordpress' ? item.title.rendered : item.name,
  //  price: source === 'wordpress' ? item.acf?.price : item.price,
  //  image: source === 'wordpress' ? item.featured_image_url : item.image_path
  //}));
//};
//export const getProducts = async (source) => {
  // 1. Vælg URL baseret på kilden
  // Vi bruger Margarita til WordPress-test og Lemon til Laravel-test
 // const url = source === 'wordpress' 
  //  ? "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita" 
  //  : "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon";

  //try {
  //  const response = await fetch(url);
   // const data = await response.json();

    // 2. Map dataen (CocktailDB returnerer et objekt med en "drinks" liste)
   // return data.drinks.map((drink) => ({
   //   id: drink.idDrink,
      // Vi tilføjer (WP) eller (Laravel) så du er 100% sikker på at skiftet virker
   //   name: drink.strDrink + (source === 'wordpress' ? " (WP-Test)" : " (Laravel-Test)"),
   //   image: drink.strDrinkThumb,
   //   price: "75 kr." // Vi "hardcoder" en pris, da CocktailDB ikke har priser
   // }));

 // } catch (error) {
 //   console.error("Fejl ved hentning af test-data:", error);
 //   return [];
 // }
//};

const LARAVEL_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

export const getProducts = async (source) => {
  let url = "";
  
  if (source === 'wordpress') {
    // Test-cocktail (eller senere dit WP-link)
    url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
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

    // Mapping logik
    if (source === 'wordpress') {
      return data.drinks.map((drink) => ({
        id: drink.idDrink,
        name: drink.strDrink + " (WP)",
        image: drink.strDrinkThumb,
        price: "100 kr."
      }));
    } else {
      //Indsæt de korrekte data ift mapping
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