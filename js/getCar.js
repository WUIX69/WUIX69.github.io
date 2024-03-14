document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const carId = urlParams.get("id");
  const carDescriptionElement = document.getElementById("carDescription");
  const carBrandElement = document.getElementById("carBrand");
  const carNameElement = document.getElementById("carName");
  const carCarouselElement = document.getElementById("carCarousel_image");

  const carImage = {
    ferrari250GT: [
      "images/carSingle_carousel/Ferrari-250GT_3.jpg",
      "images/carSingle_carousel/Ferrari-250GT_2.jpg",
      "images/carSingle_carousel/Ferrari-250GT_1.jpg",
    ],
    bmw3CSL: [
      "images/carSingle_carousel/BMW_1.avif",
      "images/carSingle_carousel/BMW_2.jpg",
      "images/carSingle_carousel/BMW_3.jpg",
    ],
    mclarenF1: [
      "images/carSingle_carousel/McLaren_f1_1.jpg",
      "images/carSingle_carousel/McLaren_f1_2.jpg",
      "images/carSingle_carousel/McLaren_f1_3.jpg",
    ],
    vwBeetle: [
      "images/carSingle_carousel/vw.webp",
      "images/carSingle_carousel/vw_1.webp",
      "images/carSingle_carousel/vw_3.webp",
      "images/carSingle_carousel/vw_2.webp",
    ],
    volvoP1800: [
      "images/carSingle_carousel/Volvo_3.avif",
      "images/carSingle_carousel/Volvo_2.avif",
      "images/carSingle_carousel/Volvo_1.avif",
    ],
  };

  // Clear existing carousel items
  carCarouselElement.innerHTML = "";

  // Dynamically create carousel items
  if (carImage[carId]) {
    carImage[carId].forEach((imageSrc, index) => {
      const carouselItem = document.createElement("div");
      carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");
      const imgElement = document.createElement("img");
      imgElement.src = imageSrc;
      imgElement.className = "d-block w-100";
      imgElement.alt = "Car Image " + (index + 1);

      carouselItem.appendChild(imgElement);
      carCarouselElement.appendChild(carouselItem);
    });
  }

  const carBrand = {
    ferrari250GT: "Ferrari",
    bmw3CSL: "BMW",
    mclarenF1: "McLaren",
    vwBeetle: "Volkswagen (VW)",
    volvoP1800: "Volvo",
  };

  if (carBrand[carId]) {
    carBrandElement.innerHTML = carBrand[carId];
  } else {
    carBrandElement.innerHTML = "Car Brand not available.";
  }

  const carName = {
    ferrari250GT: "Ferrari 250 GT Spider",
    bmw3CSL: "BMW 3.0 CSL",
    mclarenF1: "McLaren F1",
    vwBeetle: "Volkswagen Beetle",
    volvoP1800: "Volvo p1800",
  };

  if (carName[carId]) {
    carNameElement.innerHTML = carName[carId];
  } else {
    carNameElement.innerHTML = "Car Name not available.";
  }

  const carDescriptions = {
    ferrari250GT:
      "The Ferrari 250 GT Spider stands as a monumental achievement in the history of sports cars, marking a golden era for Ferrari from 1953 to 1964. This iconic vehicle is celebrated for its breathtaking design, which seamlessly blends aesthetic appeal with functional aerodynamics. The heart of the Ferrari 250 GT Spider is its robust V12 engine, a marvel of engineering that delivers unmatched performance and speed. The car's legacy is not only built on its road prowess but also its remarkable success on the race track, where it dominated competitions and left an indelible mark on motorsports history. Collectors and enthusiasts today vie for the convertible models of the 250 GT series, known as the Spider, making it one of the most sought-after classic cars in the world. Its enduring legacy and timeless design continue to captivate the imagination of car lovers everywhere, symbolizing the pinnacle of luxury and performance.<br/><br/>Beyond its technical specifications, the Ferrari 250 GT Spider represents a significant chapter in Ferrari's storied history. It embodies the passion and innovation that have become synonymous with the Ferrari brand, showcasing the craftsmanship and attention to detail that are hallmarks of Italian automotive design. The 250 GT Spider is more than just a car; it is a work of art that exemplifies the spirit of adventure and the pursuit of excellence.",
    porsche911:
      "Since its introduction in September 1964, the Porsche 911 has epitomized the essence of high performance in the realm of sports cars. Manufactured by Porsche AG of Stuttgart, Germany, this two-door, 2+2 high-performance rear-engined marvel has become an icon of automotive design and engineering. The Porsche 911 is renowned for its distinctive silhouette, characterized by its elegant curves and a rear-mounted flat-six engine that delivers exhilarating power. The vehicle's all-round independent suspension ensures a driving experience that is both dynamic and comfortable, making it a favorite among driving enthusiasts and professional racers alike. Over the years, the 911 has undergone continuous development, with each iteration refining its performance and luxury, yet the core concept of the car has remained steadfastly unchanged.<br/><br/>The Porsche 911's journey from air-cooled engines, which were a staple until the introduction of the Type 996 in 1998, to the more modern water-cooled engines, marks a significant evolution in its storied lineage. The '993' model, celebrated as the last of the air-cooled Porsche 911s, holds a special place in the hearts of purists. The 911's legacy is not just built on its technical achievements but also its cultural impact, having cemented its place as a symbol of sophistication, speed, and the joy of driving. Its enduring appeal across generations speaks to Porsche's commitment to excellence and innovation, making the 911 a timeless classic that continues to set the standard for sports cars around the world.",
    bmw3CSL:
      "The BMW 3.0 CSL is a masterpiece of automotive engineering, a sports car that left an indelible mark on the racing world from 1968 to 1975. Known affectionately as the 'Batmobile' due to its distinctive aerodynamics, including a large rear wing, the 3.0 CSL was a force to be reckoned with on the European touring car circuit. Its lightweight design, coupled with a powerful engine, made it a formidable competitor, dominating races and earning a legendary status among BMW's illustrious lineup. The 3.0 CSL was not just a race car; it was a statement of BMW's engineering prowess and a testament to the brand's commitment to performance and innovation.<br/><br/>Beyond its success on the track, the BMW 3.0 CSL has become a coveted collector's item, revered for its unique design and historical significance. Its legacy continues to influence BMW's approach to designing sports cars, embodying the spirit of the ultimate driving machine. The 3.0 CSL's blend of performance, style, and exclusivity makes it one of the most iconic sports cars of its era, a symbol of BMW's dedication to pushing the boundaries of what is possible on both the road and the racetrack.",
    mclarenF1: `
        The McLaren F1 is a remarkable sports car designed and manufactured by British automaker McLaren Cars. It is powered by the BMW S70/2 V12 engine and was the brainchild of Gordon Murray, who successfully persuaded Ron Dennis to support the project. The car's exterior and interior were designed by Peter Stevens. <br/><br>In 1998, the XP5 prototype set the Guinness World Record for the world's fastest production car, reaching an astounding speed of 240.1 mph (386.4 km/h), surpassing the previous record held by the modified Jaguar XJ220. The F1's design incorporates numerous proprietary technologies, making it lighter and more streamlined than many modern sports cars. <br/><br>One of its distinctive features is the central driving position, providing superior visibility compared to conventional seating layouts. Despite being primarily designed as a road car, a modified racing version of the F1 achieved remarkable success, including a victory at the 1995 24 Hours of Le Mans.
        `,
    vwBeetle: `
    The Volkswagen Beetle, officially known as the Volkswagen Type 1, is an iconic car that was manufactured by Volkswagen from 1938 to 2003. The idea for the Beetle originated from Adolf Hitler, who envisioned a low-cost, mass-produced vehicle to support Germany's road network. The final design was completed by Ferdinand Porsche in 1938. With its distinctive two-door body style and rear-engine layout, the Beetle became a symbol of affordable transportation and gained popularity worldwide.<br/><br>
    Over the years, the Beetle went through various iterations and became one of the most-produced cars in history, with over 21 million units manufactured. It served as the foundation for other Volkswagen models such as the Type 2 'Bus', Karmann Ghia, and Type 3 'Ponton'. The Beetle's influence extended beyond Volkswagen, leading to a surge in the production of rear-engine, rear-wheel-drive cars by other automakers like Fiat and Renault.<br/><br>
    However, as the European small-car market shifted towards front-wheel drive and hatchback designs, Volkswagen introduced the front-wheel drive Golf hatchback in 1974 as a successor to the Beetle. Despite this, the Beetle continued to have a lasting impact on automotive history, earning fourth place in the Car of the Century competition in 1999. Its unique design and cultural significance remain celebrated, making it an enduring symbol of automotive history.
    `,
    volvoP1800: `The Volvo P1800 (pronounced eighteen-hundred) holds a distinguished place in automotive history as a 2+2, front-engine, rear-drive sports car produced by Volvo Cars from 1961 to 1973.<br/><br>
    Initially introduced as a coupé from 1961 to 1972, it was later made available in a shooting-brake configuration during the final years of its production (1972–1973). The car's elegant styling was the work of Pelle Petterson under the guidance of Pietro Frua, during his tenure at the Italian carrozzeria Ghia, while its mechanical components were derived from Volvo's Amazon/122 series.<br/><br>
    While originally positioned as a touring car rather than a sports car, the P1800 gained widespread recognition after being featured as the vehicle driven by British actor Roger Moore in the television series "The Saint," which aired from 1962 to 1969.<br/><br>In 1998, an 1800S owned by Irv Gordon (1940–2018) achieved certification for having the highest mileage among privately-owned, non-commercial vehicles driven by the original owner. At the time of Gordon's passing in 2018, the car had surpassed an astonishing 3.25 million miles (over 5.23 million km), solidifying its reputation for durability and longevity.
    `,
    // Add more car descriptions here
  };

  if (carDescriptions[carId]) {
    carDescriptionElement.innerHTML = carDescriptions[carId];
  } else {
    carDescriptionElement.innerHTML = "Car description not found.";
  }
});
