 <script>
    let itemCount = 0;
    const maxItems = 6;

    function addItem() {
      if (itemCount >= maxItems) {
        alert("Solo puedes agregar hasta " + maxItems + " ítems");
        return;
      }

      itemCount++;
      const container = document.getElementById("items-container");

      const block = document.createElement("div");
      block.className = "block";
      block.innerHTML = `
        <div class="form-group">
          <label>Texto ${itemCount}</label>
          <input type="text" id="text${itemCount}" placeholder="Ej: Maquillaje ${itemCount}">
        </div>
        <div class="form-group">
          <label>Imagen ${itemCount} (URL)</label>
          <input type="text" id="img${itemCount}" placeholder="https://images...">
        </div>
        <div class="form-group">
          <label>URL ${itemCount}</label>
          <input type="text" id="url${itemCount}" placeholder="https://www.falabella.com/...">
        </div>
      `;

      container.appendChild(block);
    }

    // Cargar 3 ítems por defecto
    for (let i = 0; i < 3; i++) {
      addItem();
    }

    function generateCode() {
      const logo = document.getElementById('logo').value.trim();
      let items = "";

      for (let i = 1; i <= itemCount; i++) {
        const text = document.getElementById(`text${i}`).value.trim();
        const img = document.getElementById(`img${i}`).value.trim();
        const url = document.getElementById(`url${i}`).value.trim();

        if (text && img && url) {
          items += `
                <div class="item">
                    <a href="${url}">
                        <img src="${img}" title="${text}" alt="${text}">
                        <h3>${text}</h3>
                    </a>
                </div>`;
        }
      }

      const fullCode = `
 href="https://assets.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/bltbf57ee07d5468449/huincha-banner-plp.css">

<style>
    /* TAMAÑO TITULOS ITEMS */
    .contenedor-items .sub_container .item h3{
        font-size: 18.7px;
    }
</style>

<div class="contenedor_banner_plp">
    <!-- logo -->
    <img src="${logo || 'https://images.contentstack.io/default-logo.png'}" alt="logo">
    
    <!-- items -->
    <div class="contenedor-items">
        <div class="sub_container">
            ${items}
        </div>
    </div>
</div>`;

      document.getElementById('output').textContent = fullCode;
    }

    function copyCode() {
      const output = document.getElementById('output').textContent;
      if (!output) {
        alert("Primero genera el código.");
        return;
      }
      navigator.clipboard.writeText(output).then(() => {
        alert("Código copiado al portapapeles ✅");
      });
    }
  </script>