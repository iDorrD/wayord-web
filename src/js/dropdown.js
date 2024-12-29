const customSelect = document.getElementById("select-display");
    const dropdown = document.getElementById("dropdown");
    const options = document.querySelectorAll(".dropdown-option");
    const hiddenSelect = document.getElementById("hidden-select");

    customSelect.addEventListener("click", () => {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    options.forEach(option => {
      option.addEventListener("click", () => {
        const value = option.getAttribute("data-value");
        const text = option.textContent.trim();
        customSelect.innerHTML = `
          ${option.innerHTML} <span>▼</span>
        `;
        hiddenSelect.value = value;
        dropdown.style.display = "none";

        localStorage.setItem("selectedValue", value);
        
        if(hiddenSelect.value == "minecraft"){
            document.getElementById("input").disabled=false;
        }
      });
    });

    // Cerrar el desplegable al hacer clic fuera
    document.addEventListener("click", (event) => {
      if (!document.getElementById("options").contains(event.target)) {
        dropdown.style.display = "none";
      }
    });

    if(localStorage.getItem("selectedValue")){
        hiddenSelect.value = localStorage.getItem("selectedValue");
        customSelect.innerHTML = `
          ${document.querySelector(`.dropdown-option[data-value="${hiddenSelect.value}"]`).innerHTML} <span>▼</span>
        `;
        dropdown.style.display = "none";
        document.getElementById("input").disabled=false;
    }
    
    