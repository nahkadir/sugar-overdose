function renderProducts(filter = "all") {
  // by default, 'all' category selected
  const grid = document.getElementById("grid");

  let list = [];

  if (filter === "all") {
    list = products;
  } else {
    list = products.filter(function (product) {
      return product.category === filter;
    });
  }

  let html = list
    .map(function (product) {
      return `
    <div
            class="rounded-2xl overflow-hidden border border-black/20 bg-mid-navy hover:border hover:border-crimson transition-transform duration-300 ease-in-out hover:-translate-y-1"
          >
            <div class="relative">
              <img
                class="w-full h-56 object-cover"
                src="${product.image}"
                alt="${product.name}"
              />
              <!-- Badge (Top Left) -->
              <div
              >
                ${product.badge ? `<div class="absolute top-3 left-3 text-xs bg-crimson text-white rounded-md font-bold px-3 py-1">${product.badge}</div>` : ""}
              </div>

              <div
                class="absolute bottom-0 left-1 text-xs text-gray-400 px-3 py-1"
              >
                ★★★★★
              </div>

              <div
                class="absolute bottom-0 right-1 text-xs text-gray-400 px-3 py-1"
              >
                No ratings
              </div>
            </div>
            <div class="p-8 flex flex-col gap-2">
              <div class="font-display text-brown font-bold text-lg">
                ${product.name}
              </div>
              <div class="text-sm text-gray leading-relaxed">
                ${product.desc}
              </div>
              <div class="flex justify-between">
                <div class="text-gray text-xs">
                  <span class="text-gold font-bold text-lg">PKR ${product.price} </span>/item
                </div>
                <div class="flex gap-2">
                  <button
                    class="p-2 border border-gold/10 rounded-md bg-gold/10 hover:bg-gold/20 hover:border-gold transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-4 text-gold"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </button>
                  <button
                    class="p-2 rounded-md bg-crimson hover:bg-crimson-light transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-4 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
    `;
    })
    .join("");
  // join turns the array into a string
  grid.innerHTML = html;
}

renderProducts("all");

// Filter Products
const tabs = document.querySelectorAll(".tab");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    let category = tab.dataset.category;
    renderProducts(category);

    tabs.forEach(function (t) {
      t.classList.remove("tab-active");
    });

    tab.classList.add("tab-active");
  });
});
