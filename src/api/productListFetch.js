export function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Failed to fetch products. Try again.");
      } else {
        resolve([
          {
            id: 1,
            name: "Nike Air Max 270",
            price: 75,
            image: "./images/nike_white.png",
          },
          {
            id: 2,
            name: "Puma Astro Play",
            price: 60,
            image: "./images/puma_red.png",
          },
          {
            id: 3,
            name: "Adidas Ultraboost 21",
            price: 75,
            image: "./images/adidas_black.png",
          },
          {
            id: 4,
            name: "Vans Classic Slip-On",
            price: 45,
            image: "./images/vans_black.jpg",
          },
          {
            id: 5,
            name: "Puma RS-X Reinvent",
            price: 45,
            image: "./images/puma_black.png",
          },
          {
            id: 6,
            name: "Nike Dunk High By You",
            price: 85,
            image: "./images/nike_blue.png"
          },
          {
            id: 7,
            name: "Supra Skytop III",
            price: 85,
            image: "./images/supra_blue.jpg",
          },
          {
            id: 8,
            name: "Under Armour Curry 8",
            price: 85,
            image: "./images/ua_black.jpeg",
          }
        ]);
      }
    }, 1000);
  });
}
