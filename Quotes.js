

  
  const fruitFacts = {
    Apple: [
      "Apples boost heart health and lower cholesterol.",
      "Apples are rich in antioxidants and dietary fiber."
    ],
    Banana: [
      "Bananas are great for digestion due to high fiber.",
      "Bananas help maintain blood pressure with potassium."
    ],
    Orange: [
      "Oranges are a great source of immune-boosting vitamin C.",
      "Oranges support collagen production for skin health."
    ],
    Strawberry: [
      "Strawberries improve heart health and blood sugar control.",
      "They are packed with vitamin C and antioxidants."
    ],
    Pineapple: [
      "Pineapples aid digestion with natural enzymes.",
      "They support the immune system and reduce inflammation."
    ],
    Avocado: [
      "Avocados are heart-healthy and rich in good fats.",
      "They improve skin and aid in nutrient absorption."
    ],
    Grapes: [
      "Grapes improve heart health and protect against diabetes.",
      "They contain powerful antioxidants called polyphenols."
    ],
    WaterMelon: [
      "Watermelons hydrate your body and improve circulation.",
      "They are rich in vitamins A, C, and lycopene."
    ]
  };

  
  function showFact(fruit) {
    const facts = fruitFacts[fruit];
    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];
    document.getElementById("quote-text").textContent = fact;
    
  }

  
  document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener("click", () => {
      const fruit = button.textContent.trim().split(" ")[1]; 
      showFact(fruit);
    });
  });

 
  document.querySelector(".new").addEventListener("click", () => {
    const displayedFruit = document.getElementById("quote-author").textContent.replace("— ", "");
    if (displayedFruit && fruitFacts[displayedFruit]) {
      showFact(displayedFruit);
    }
  });

  
  document.querySelector(".copy").addEventListener("click", () => {
    const text = document.getElementById("quote-text").textContent;
    navigator.clipboard.writeText(text);
    alert("Fact copied to clipboard!");
  });

  
  document.querySelector(".Save").addEventListener("click", () => {
    const fact = document.getElementById("quote-text").textContent;
    alert("Saved: " + fact);
  });

