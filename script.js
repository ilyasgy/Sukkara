const searchInput = document.querySelector('.search-input'); // Changed from 'getElementById' to 'querySelector' for class
const items = document.querySelectorAll('.product-card'); // Changed selector to target product cards with 'product-card' class

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  items.forEach(item => {
    const name = item.querySelector('.item-name').textContent.toLowerCase(); // Extract name from item-name class
    item.style.display = name.includes(query) ? 'flex' : 'none'; // Show/hide based on search
  });
});

const templateBlock = document.querySelector(".template-block"); // Changed from 'getElementById' to 'querySelector' for class
const container = document.querySelector(".buttons-container"); // Changed from 'getElementById' to 'querySelector' for class

const categories = [
  { name: "Chips & Nuts", img: "https://media.istockphoto.com/id/1383475280/photo/potato-chips-in-bowl-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=yy9vNbgkkipTiB1JdlXM1LELFKK-R3BSXCtuB9kNgis=" },
  { name: "Candies & Snacks", img: "https://media.istockphoto.com/id/151933343/photo/jellybeans-in-a-jar.jpg?s=612x612&w=0&k=20&c=CH7x2AYy0BU8QlMIqnY1KjjdrmI41jB0Mxc3CKbACJY=" },
  { name: "Water", img: "https://png.pngtree.com/png-vector/20241205/ourmid/pngtree-icy-glass-of-water-refreshing-chill-for-hot-days-png-image_14650187.png" },
  { name: "Drinks", img: "https://www.tasteofhome.com/wp-content/uploads/2024/05/Sweet-Rum-Punch_EXPS_FT24_273648_EC_050224_4.jpg" },
  { name: "Toys", img: "https://www.travelingbaby.com/media/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/i/n/infant_toys_1_1_2.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
  categories.forEach(category => {
    const block = templateBlock.cloneNode(true);
    block.style.display = "flex";
    block.removeAttribute("id");

    const img = block.querySelector("img");
    const label = block.querySelector(".category-label");

    img.src = category.img;
    img.alt = category.name;
    label.textContent = category.name;

    const className = category.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    block.classList.add(className);

    container.appendChild(block);
  });

  templateBlock.remove();
});

const templateCard = document.querySelector(".template-card"); // Changed from 'getElementById' to 'querySelector' for class
const ChipsContainer = document.querySelector(".chips-nuts .scroll-container"); // Changed selector to use class

const chipsItems = [
  {
    name: "Pringles Sour Cream & Onion",
    img: "https://bazaar5.com/image/cache/catalog/pro/product/apiData/100006683-pringles-potato-chips-sour-cream-onion-flavour-crunchy-crispy-107-g-0-1100x1100.jpg",
    LBP: "315,000",
    DODO: "3.50",
    grams: "165g",
    value: "Y"
  },
  {
    name: "Pringles Original",
    img: "https://cdn.mafrservices.com/pim-content/LBN/media/product/38976/1720690204/38976_main.jpg?im=Resize=480",
    LBP: "315,000",
    DODO: "3.50",
    grams: "102g",
    value: "Y"
  },
  {
    name: "Pringles Salt And Vinegar",
    img: "https://cdn.mafrservices.com/pim-content/LBN/media/product/38978/1720690204/38978_main.jpg?im=Resize=480",
    LBP: "315,000",
    DODO: "3.50",
    grams: "165g",
    value: "Y"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  chipsItems.forEach((item) => {
    const card = templateCard.cloneNode(true);
    card.style.display = "flex";
    card.removeAttribute("id");

    card.querySelector("img").src = item.img;
    card.querySelector("img").alt = item.name;
    card.querySelector(".item-name").textContent = item.name;
    card.querySelector(".item-grams").textContent = item.grams;
    card.querySelector(".price-lb").textContent = `LBP ${item.LBP}`;
    card.querySelector(".price-usd").textContent = `$${item.DODO}`;
      
    if (item.value === "N") {
        card.querySelector("img").style.opacity = "0.5";
        card.querySelector(".item-name").style.opacity = "0.5";
        card.querySelector(".item-grams").style.opacity = "0.5";
        card.querySelector(".price-lb").style.opacity = "0.5";
        card.querySelector(".price-usd").style.opacity = "0.5";
        
        const warningText = document.createElement("p");
        warningText.textContent = "Out of stock";
        warningText.classList.add("outofstock");
    
        card.querySelector(".item-details").appendChild(warningText);
    } else if (item.value === "Y") {
        
        card.style.opacity = "1";

        const existingWarning = card.querySelector(".out-of-stock");
        if (existingWarning) {
            existingWarning.remove();
        }
    }

    ChipsContainer.appendChild(card);
  });

  templateCard.remove();
});

const chocolatesContainer = document.querySelector(".chocolates-handeler");
const candiesContainer = document.querySelector(".candies-handeler");


const chocolatesItems = [
  {
    name: "Milka Bubbly White",
    img: "https://cdn.mafrservices.com/sys-master-root/h24/h9b/51190620651550/190294_main.jpg?im=Resize=480",
    LBP: "117,000",
    DODO: "1.30",
    grams: "95g",
    value: "N"
  },
  {
    name: "Milka Crema Si Biscuit",
    img: "https://cdn.mafrservices.com/sys-master-root/h85/hec/17472417431582/384147_main.jpg?im=Resize=480",
    LBP: "117,000",
    DODO: "1.30",
    grams: "100g",
    value: "N"
  },
  {
    name: "Milka Riso Soffiato",
    img: "https://harrys.co.zw/wp-content/uploads/2024/04/3045140280803.jpg",
    LBP: "117,000",
    DODO: "1.30",
    grams: "100g",
    value: "N"
  },
    {
    name: "Milka Almond Crispy Cream",
    img: "https://marqetapi.weevi.com/content/uploads/ekomproducts/103078.jpeg",
    LBP: "117,000",
    DODO: "1.30",
    grams: "90g",
    value: "N"
  },
    {
    name: "Milka Hazelnuts",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPi8wh6_LMbeuHFQZ51gsF2IPxtSLxcIJbA&s",
    LBP: "108,000",
    DODO: "1.20",
    grams: "100g",
    value: "N"
  },
    {
    name: "Milka Sultu Cokolata",
    img: "https://images.migrosone.com/sanalmarket/product/07040651/07040651-262368-1650x1650.jpg",
    LBP: "108,000",
    DODO: "1.30",
    grams: "80g",
    value: "N"
  },
];

const candiesItems = [
  {
    name: "Fizzy Jelly Puffs",
    img: "https://theonlinesweetshop.com/wp-content/uploads/2022/09/Hi-Five-Fizzy-Strawberry-Puffs.jpg",
    LBP: "90,000",
    DODO: "1.00",
    grams: "100g",
    value: "Y"
  },
  {
    name: "Sour Filled Strawberry Ropes",
    img: "https://zweetshop.com/cdn/shop/files/108-209_f5c40ac1-baaf-40d6-bfab-5698d282f5f0.png?v=1725647549",
    LBP: "90,000",
    DODO: "1.00",
    grams: "100g",
    value: "Y"
  },
  {
    name: "Sweet Fruit Hearts",
    img: "https://www.dethlefsen-balk.de/images/IMAGE/51216a.jpg",
    LBP: "90,000",
    DODO: "1.00",
    grams: "100g",
    value: "Y"
  },
    {
    name: "Sweet Jelly Strawberries",
    img: "https://www.sweetsandcandy.co.uk/media/catalog/product/cache/ad201e1f2783b5fe29e123a2105d273f/v/i/vidal-jelly-filled-strawberries-tub.jpg",
    LBP: "90,000",
    DODO: "1.00",
    grams: "100g",
    value: "Y"
  },
    {
    name: "Gummy Bears",
    img: "https://i5.walmartimages.com/seo/HARIBO-Goldbears-Original-Gummy-Bears-8-oz_c7567645-008c-4c12-b4b0-31f5eb9a6e27.072fbd27c4c632e5df3d2702594126f2.jpeg",
    LBP: "90,000",
    DODO: "1.00",
    grams: "100g",
    value: "Y"
  },
  {
    name: "Sour Cola",
    img: "https://m.media-amazon.com/images/I/81ME+5boceL._SL1400_.jpg",
    LBP: "90,000",
    DODO: "1.00",
    grams: "100g",
    value: "Y"
  },
  {
    name: "Sweet Gummy Bones",
    img: "data:image/jpeg;base64,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",
    LBP: "90,000",
    DODO: "1.00",
    grams: "100g",
    value: "Y"
  },
  {
    name: "Sweet Strawberries Filled Ropes",
    img: "https://www.sweetsandcandy.co.uk/media/catalog/product/s/w/sweetarts-ropes-strawberry-99g.jpg",
    LBP: "90,000",
    DODO: "1.00",
    grams: "100g",
    value: "Y"
  },
  {
    name: "Sukkara Jellies Mix",
    img: "images/chips.jpg",
    LBP: "270,000",
    DODO: "3.00",
    grams: "300g",
    value: "Y"
  },
  {
    name: "Sweet Jelly Colorful Dolphins",
    img: "https://www.appletonsweets.co.uk/cdn/shop/files/13322197218419b84f8904079a144e20.png?v=1744038925",
    LBP: "81,000",
    DODO: "0.90",
    grams: "100g",
    value: "Y"
  },
  {
    name: "Liquorice Filled Jelly Bricks",
    img: "https://media.candynation.com/catalog/product/cache/37b377f2a2dfea30b42072b55c737119/s/t/strawberry_licorice_bricks.jpg",
    LBP: "90,000",
    DODO: "1.00",
    grams: "100g",
    value: "Y"
  },
  {
    name: "Liquorice Filled Sticks",
    img: "https://confitelia.com/4979-thickbox_default/filled-liquorice-sticks-fini-180-g.jpg",
    LBP: "90,000",
    DODO: "1.00",
    grams: "100g",
    value: "Y"
  },
];

document.addEventListener("DOMContentLoaded", () => {
  chocolatesItems.forEach((item) => {
    const card = templateCard.cloneNode(true);
    card.style.display = "flex";
    card.removeAttribute("id");

    card.querySelector("img").src = item.img;
    card.querySelector("img").alt = item.name;
    card.querySelector(".item-name").textContent = item.name;
    card.querySelector(".item-grams").textContent = item.grams;
    card.querySelector(".price-lb").textContent = `LBP ${item.LBP}`;
    card.querySelector(".price-usd").textContent = `$${item.DODO}`;
      
    if (item.value === "N") {
        card.querySelector("img").style.opacity = "0.5";
        card.querySelector(".item-name").style.opacity = "0.5";
        card.querySelector(".item-grams").style.opacity = "0.5";
        card.querySelector(".price-lb").style.opacity = "0.5";
        card.querySelector(".price-usd").style.opacity = "0.5";
        
        const warningText = document.createElement("p");
        warningText.textContent = "Out of stock";
        warningText.classList.add("outofstock");
    
        card.querySelector(".item-details").appendChild(warningText);
    } else if (item.value === "Y") {
        
        card.style.opacity = "1";

        const existingWarning = card.querySelector(".out-of-stock");
        if (existingWarning) {
            existingWarning.remove();
        }
    }

    chocolatesContainer.appendChild(card);
  });
    
    candiesItems.forEach((item) => {
    const card = templateCard.cloneNode(true);
    card.style.display = "flex";
    card.removeAttribute("id");

    card.querySelector("img").src = item.img;
    card.querySelector("img").alt = item.name;
    card.querySelector(".item-name").textContent = item.name;
    card.querySelector(".item-grams").textContent = item.grams;
    card.querySelector(".price-lb").textContent = `LBP ${item.LBP}`;
    card.querySelector(".price-usd").textContent = `$${item.DODO}`;
      
    if (item.value === "N") {
        card.querySelector("img").style.opacity = "0.5";
        card.querySelector(".item-name").style.opacity = "0.5";
        card.querySelector(".item-grams").style.opacity = "0.5";
        card.querySelector(".price-lb").style.opacity = "0.5";
        card.querySelector(".price-usd").style.opacity = "0.5";
        
        const warningText = document.createElement("p");
        warningText.textContent = "Out of stock";
        warningText.classList.add("outofstock");
    
        card.querySelector(".item-details").appendChild(warningText);
    } else if (item.value === "Y") {
        
        card.style.opacity = "1";

        const existingWarning = card.querySelector(".out-of-stock");
        if (existingWarning) {
            existingWarning.remove();
        }
    }

    candiesContainer.appendChild(card);
  });

  templateCard.remove();
});

const chipsCategorieBtn = document.getElementById("chips-nuts");
const candiesCategorieBtn = document.getElementById("candies-snacks");
const waterCategorieBtn = document.getElementById("water");
const drinksCategorieBtn = document.getElementById("drinks");
const toysCategorieBtn = document.getElementById("toys");

const showSection = (name) => {
  const allSections = document.querySelectorAll(".section");
  const targetSection = document.getElementById(name);

allSections.forEach((sec) => {
  if (sec.id !== "home") {
    sec.style.display = "none";
  }
});

  if (targetSection) {
    targetSection.style.display = "block";
  }
};

chipsCategorieBtn.addEventListener("click", () => {
    console.log("clicked");
});
candiesCategorieBtn.addEventListener("click", () => showSection("candies-section"));
waterCategorieBtn.addEventListener("click", () => showSection("water-section"));
drinksCategorieBtn.addEventListener("click", () => showSection("drinks-section"));
toysCategorieBtn.addEventListener("click", () => showSection("toys-section"));

document.querySelectorAll('.scroll-container').forEach(container => {
  container.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      const scrollSpeed = 2.5; // ← Increase this number to scroll faster
      container.scrollLeft += e.deltaY * scrollSpeed;
    }
  }, { passive: false });
});