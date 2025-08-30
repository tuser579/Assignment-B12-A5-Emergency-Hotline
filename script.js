
// history array
let history = [];

// Create history container
const historyContainer = document.createElement("div");
historyContainer.id = "history-container";
historyContainer.classList.add("flex", "flex-col", "gap-5");

// for call button actions
// emergency-btn
document
  .getElementById("emergency-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const coin = parseInt(document.getElementById("coin-count").innerText);

    if (coin >= 20) {
      alert("📞 Calling Emergency Service 999...");
      document.getElementById("coin-count").innerText = coin - 20;
      const newEntry = document.createElement("div");
      newEntry.classList.add(
        "bg-gray-100",
        "rounded-[0.5rem]",
        "flex",
        "justify-between",
        "items-center",
        "sm:gap-4",
        "p-2"
      );
      newEntry.innerHTML = `
            <div class="sm:w-38">
                <h4 class="font-semibold">National Emergency Service</h4>
                <p class="text-[0.9rem]">999</p>
            </div>
        `;

      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const newpar = document.createElement("p");
      newpar.innerText = timeString;
      newEntry.appendChild(newpar);

      history.push(newEntry);
      document.getElementById("add-history").appendChild(historyContainer);
      for (const entry of history) {
        historyContainer.appendChild(entry);
      }
    } else alert("❌ Not Calling Due To Insufficient Coin Balance!");
  });

// police-btn
document.getElementById("police-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const coin = parseInt(document.getElementById("coin-count").innerText);

  if (coin >= 20) {
    alert("📞 Calling Police Helpline Number 999...");
    document.getElementById("coin-count").innerText = coin - 20;
    const newEntry = document.createElement("div");
    newEntry.classList.add(
      "bg-gray-100",
      "rounded-[0.5rem]",
      "flex",
      "justify-between",
      "items-center",
      "sm:gap-4",
      "p-2"
    );
    newEntry.innerHTML = `
            <div class="sm:w-38">
                <h4 class="font-semibold">Police Helpline Number</h4>
                <p class="text-[0.9rem]">999</p>
            </div>
        `;

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const newpar = document.createElement("p");
    newpar.innerText = timeString;
    newEntry.appendChild(newpar);

    history.push(newEntry);
    document.getElementById("add-history").appendChild(historyContainer);
    for (const entry of history) {
      historyContainer.appendChild(entry);
    }
  } else alert("❌ Not Calling Due To Insufficient Coin Balance!");
});

// fire-btn
document.getElementById("fire-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const coin = parseInt(document.getElementById("coin-count").innerText);

  if (coin >= 20) {
    alert("📞 Calling Fire Service Number 999...");
    document.getElementById("coin-count").innerText = coin - 20;
    const newEntry = document.createElement("div");
    newEntry.classList.add(
      "bg-gray-100",
      "rounded-[0.5rem]",
      "flex",
      "justify-between",
      "items-center",
      "sm:gap-4",
      "p-2"
    );
    newEntry.innerHTML = `
            <div class="sm:w-38">
                <h4 class="font-semibold">Fire Service Number</h4>
                <p class="text-[0.9rem]">999</p>
            </div>
        `;

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const newpar = document.createElement("p");
    newpar.innerText = timeString;
    newEntry.appendChild(newpar);

    history.push(newEntry);
    document.getElementById("add-history").appendChild(historyContainer);
    for (const entry of history) {
      historyContainer.appendChild(entry);
    }
  } else alert("❌ Not Calling Due To Insufficient Coin Balance!");
});

// ambulance-btn
document
  .getElementById("ambulance-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const coin = parseInt(document.getElementById("coin-count").innerText);

    if (coin >= 20) {
      alert("📞 Calling Ambulance Service Number 1994-999999...");
      document.getElementById("coin-count").innerText = coin - 20;
      const newEntry = document.createElement("div");
      newEntry.classList.add(
        "bg-gray-100",
        "rounded-[0.5rem]",
        "flex",
        "justify-between",
        "items-center",
        "sm:gap-4",
        "p-2"
      );
      newEntry.innerHTML = `
            <div class="sm:w-38">
                <h4 class="font-semibold">Ambulance Service</h4>
                <p class="text-[0.9rem]">1994-999999</p>
            </div>
        `;

      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const newpar = document.createElement("p");
      newpar.innerText = timeString;
      newEntry.appendChild(newpar);

      history.push(newEntry);
      document.getElementById("add-history").appendChild(historyContainer);
      for (const entry of history) {
        historyContainer.appendChild(entry);
      }
    } else alert("❌ Not Calling Due To Insufficient Coin Balance!");
  });

// women&child-btn
document
  .getElementById("women&child-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const coin = parseInt(document.getElementById("coin-count").innerText);

    if (coin >= 20) {
      alert("📞 Calling Women & Child Helpline 109...");
      document.getElementById("coin-count").innerText = coin - 20;
      const newEntry = document.createElement("div");
      newEntry.classList.add(
        "bg-gray-100",
        "rounded-[0.5rem]",
        "flex",
        "justify-between",
        "items-center",
        "sm:gap-4",
        "p-2"
      );
      newEntry.innerHTML = `
            <div class="sm:w-38">
                <h4 class="font-semibold">Women & Child Helpline</h4>
                <p class="text-[0.9rem]">109</p>
            </div>
        `;

      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const newpar = document.createElement("p");
      newpar.innerText = timeString;
      newEntry.appendChild(newpar);

      history.push(newEntry);
      document.getElementById("add-history").appendChild(historyContainer);
      for (const entry of history) {
        historyContainer.appendChild(entry);
      }
    } else alert("❌ Not Calling Due To Insufficient Coin Balance!");
  });

// anticorruption-btn
document
  .getElementById("anticorruption-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const coin = parseInt(document.getElementById("coin-count").innerText);

    if (coin >= 20) {
      alert("📞 Calling Anti-Corruption Helpline 106...");
      document.getElementById("coin-count").innerText = coin - 20;
      const newEntry = document.createElement("div");
      newEntry.classList.add(
        "bg-gray-100",
        "rounded-[0.5rem]",
        "flex",
        "justify-between",
        "items-center",
        "sm:gap-4",
        "p-2"
      );
      newEntry.innerHTML = `
            <div class="sm:w-38">
                <h4 class="font-semibold">Anti-Corruption Helpline</h4>
                <p class="text-[0.9rem]">106</p>
            </div>
        `;

      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const newpar = document.createElement("p");
      newpar.innerText = timeString;
      newEntry.appendChild(newpar);

      history.push(newEntry);
      document.getElementById("add-history").appendChild(historyContainer);
      for (const entry of history) {
        historyContainer.appendChild(entry);
      }
    } else alert("❌ Not Calling Due To Insufficient Coin Balance!");
  });

// electric-btn
document.getElementById("electric-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const coin = parseInt(document.getElementById("coin-count").innerText);

  if (coin >= 20) {
    alert("📞 Calling Electricity Helpline 16216...");
    document.getElementById("coin-count").innerText = coin - 20;
    const newEntry = document.createElement("div");
    newEntry.classList.add(
      "bg-gray-100",
      "rounded-[0.5rem]",
      "flex",
      "justify-between",
      "items-center",
      "sm:gap-4",
      "p-2"
    );
    newEntry.innerHTML = `
            <div class="sm:w-38">
                <h4 class="font-semibold">Electricity Helpline</h4>
                <p class="text-[0.9rem]">16216</p>
            </div>
        `;

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const newpar = document.createElement("p");
    newpar.innerText = timeString;
    newEntry.appendChild(newpar);

    history.push(newEntry);
    document.getElementById("add-history").appendChild(historyContainer);
    for (const entry of history) {
      historyContainer.appendChild(entry);
    }
  } else alert("❌ Not Calling Due To Insufficient Coin Balance!");
});

// brac-btn
document.getElementById("brac-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const coin = parseInt(document.getElementById("coin-count").innerText);

  if (coin >= 20) {
    alert("📞 Calling Brac Helpline 16445...");
    document.getElementById("coin-count").innerText = coin - 20;
    const newEntry = document.createElement("div");
    newEntry.classList.add(
      "bg-gray-100",
      "rounded-[0.5rem]",
      "flex",
      "justify-between",
      "items-center",
      "sm:gap-4",
      "p-2"
    );
    newEntry.innerHTML = `
            <div class="sm:w-38">
                <h4 class="font-semibold">Brac Helpline</h4>
                <p class="text-[0.9rem]">16445</p>
            </div>
        `;

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const newpar = document.createElement("p");
    newpar.innerText = timeString;
    newEntry.appendChild(newpar);

    history.push(newEntry);
    document.getElementById("add-history").appendChild(historyContainer);
    for (const entry of history) {
      historyContainer.appendChild(entry);
    }
  } else alert("❌ Not Calling Due To Insufficient Coin Balance!");
});

// railway-btn
document.getElementById("railway-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const coin = parseInt(document.getElementById("coin-count").innerText);

  if (coin >= 20) {
    alert("📞 Calling Bangladesh Railway Helpline 163...");
    document.getElementById("coin-count").innerText = coin - 20;
    const newEntry = document.createElement("div");
    newEntry.classList.add(
      "bg-gray-100",
      "rounded-[0.5rem]",
      "flex",
      "justify-between",
      "items-center",
      "sm:gap-4",
      "p-2"
    );
    newEntry.innerHTML = `
            <div class="sm:w-38">
                <h4 class="font-semibold">Bangladesh Railway Helpline</h4>
                <p class="text-[0.9rem]">163</p>
            </div>
        `;

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const newpar = document.createElement("p");
    newpar.innerText = timeString;
    newEntry.appendChild(newpar);

    history.push(newEntry);
    document.getElementById("add-history").appendChild(historyContainer);
    for (const entry of history) {
      historyContainer.appendChild(entry);
    }
  } else alert("❌ Not Calling Due To Insufficient Coin Balance!");
});



// for clear history 
document
  .getElementById("clear-history")
  .addEventListener("click", function (e) {
    e.preventDefault();
    history = [];
    historyContainer.innerHTML = "";
  });



// for copy button actions  
// 1 - for emergency copy  
document
  .getElementById("emergency-copy")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Emergency number copied to clipboard");
    navigator.clipboard
      .writeText("999")
      .then(() => {
        alert("Copied to clipboard: " + 999);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
    const copybtn = parseInt(document.getElementById("copy-btn").innerText);
    document.getElementById("copy-btn").innerText = copybtn + 1;
  });

// 2 - for police copy
document.getElementById("police-copy").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard
    .writeText("999")
    .then(() => {
      alert("Copied to clipboard: " + 999);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
  const copybtn = parseInt(document.getElementById("copy-btn").innerText);
  document.getElementById("copy-btn").innerText = copybtn + 1;
});

// 3 - for fire copy
document.getElementById("fire-copy").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard
    .writeText("999")
    .then(() => {
      alert("Copied to clipboard: " + 999);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
  const copybtn = parseInt(document.getElementById("copy-btn").innerText);
  document.getElementById("copy-btn").innerText = copybtn + 1;
});

// 4 - for ambulance copy
document
  .getElementById("ambulance-copy")
  .addEventListener("click", function (e) {
    e.preventDefault();
    navigator.clipboard
      .writeText("1994-999999")
      .then(() => {
        alert("Copied to clipboard: 1994-999999");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
    const copybtn = parseInt(document.getElementById("copy-btn").innerText);
    document.getElementById("copy-btn").innerText = copybtn + 1;
  });

// 5 - for women copy
document.getElementById("women-copy").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard
    .writeText("109")
    .then(() => {
      alert("Copied to clipboard: " + 109);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
  const copybtn = parseInt(document.getElementById("copy-btn").innerText);
  document.getElementById("copy-btn").innerText = copybtn + 1;
});

// 6 - for anti copy
document.getElementById("anti-copy").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard
    .writeText("106")
    .then(() => {
      alert("Copied to clipboard: " + 106);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
  const copybtn = parseInt(document.getElementById("copy-btn").innerText);
  document.getElementById("copy-btn").innerText = copybtn + 1;
});


// 7 - for electric copy
document.getElementById("electric-copy").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard
    .writeText("16216")
    .then(() => {
      alert("Copied to clipboard: " + 16216);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
  const copybtn = parseInt(document.getElementById("copy-btn").innerText);
  document.getElementById("copy-btn").innerText = copybtn + 1;
});

// 8 - for brac copy
document.getElementById("brac-copy").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard
    .writeText("16445")
    .then(() => {
      alert("Copied to clipboard: " + 16445);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
  const copybtn = parseInt(document.getElementById("copy-btn").innerText);
  document.getElementById("copy-btn").innerText = copybtn + 1;
});


// 9 - for railway copy
document.getElementById("railway-copy").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard
    .writeText("163")
    .then(() => {
      alert("Copied to clipboard: " + 163);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
  const copybtn = parseInt(document.getElementById("copy-btn").innerText);
  document.getElementById("copy-btn").innerText = copybtn + 1;
});



// for love cnt increases
// for emer-love
document.getElementById("emer-love").addEventListener("click", function (e) {
  e.preventDefault();
  const loveCount = parseInt(document.getElementById("love-cnt").innerText);
  document.getElementById("love-cnt").innerText = loveCount + 1;
});

// for police-love
document.getElementById("police-love").addEventListener("click", function (e) {
  e.preventDefault();
  const loveCount = parseInt(document.getElementById("love-cnt").innerText);
  document.getElementById("love-cnt").innerText = loveCount + 1;
});

// for fire-love
document.getElementById("fire-love").addEventListener("click", function (e) {
  e.preventDefault();
  const loveCount = parseInt(document.getElementById("love-cnt").innerText);
  document.getElementById("love-cnt").innerText = loveCount + 1;
});

// for ambulance-love
document.getElementById("ambulance-love").addEventListener("click", function (e) {
  e.preventDefault();
  const loveCount = parseInt(document.getElementById("love-cnt").innerText);
  document.getElementById("love-cnt").innerText = loveCount + 1;
});

// for women-love
document.getElementById("women-love").addEventListener("click", function (e) {
  e.preventDefault();
  const loveCount = parseInt(document.getElementById("love-cnt").innerText);
  document.getElementById("love-cnt").innerText = loveCount + 1;
});


// for anti-love
document.getElementById("anti-love").addEventListener("click", function (e) {
  e.preventDefault();
  const loveCount = parseInt(document.getElementById("love-cnt").innerText);
  document.getElementById("love-cnt").innerText = loveCount + 1;
});


// for elec-love
document.getElementById("elec-love").addEventListener("click", function (e) {
  e.preventDefault();
  const loveCount = parseInt(document.getElementById("love-cnt").innerText);
  document.getElementById("love-cnt").innerText = loveCount + 1;
});


// for brac-love
document.getElementById("brac-love").addEventListener("click", function (e) {
  e.preventDefault();
  const loveCount = parseInt(document.getElementById("love-cnt").innerText);
  document.getElementById("love-cnt").innerText = loveCount + 1;
});


// for railway-love
document.getElementById("railway-love").addEventListener("click", function (e) {
  e.preventDefault();
  const loveCount = parseInt(document.getElementById("love-cnt").innerText);
  document.getElementById("love-cnt").innerText = loveCount + 1;
});