function pesquisar() {
  const input = document.querySelector('.form_group')
  const pesquisa = input.value.trim().toLowerCase()
  const plantList = document.querySelector('.plants')
  plantList.innerHTML = '' // Limpa a lista antes de preencher com novos resultados

  // Verifica se há algum termo de pesquisa
  if (pesquisa === '') {
    alert('Por favor, digite um termo de pesquisa.')
    return
  }

  // Filtra as plantas com base na pesquisa
  const resultados = plants.filter(plant => {
    const termoMin = pesquisa.toLowerCase()
    return (
      plant.title.toLowerCase().includes(termoMin) ||
      plant.description.toLowerCase().includes(termoMin) ||
      plant.category.toLowerCase().includes(termoMin)
    )
  })

  // Exibe os resultados na página
  if (resultados.length === 0) {
    const nenhumResultado = document.createElement('div')
    nenhumResultado.textContent = 'Nenhum resultado encontrado.'
    plantList.appendChild(nenhumResultado)
  } else {
    resultados.forEach(plant => {
      const plantItem = document.createElement('div')
      plantItem.classList.add('plant_item')

      plantItem.innerHTML = `
      <div class="plant_items">
        <img src="./assets/blur-bg2.svg" alt="">

        <div class="items_content">
            <div class="items_content_img">
                <img src="${plant.image}" alt="${plant.title}">
            </div>
            <div class="items_content_text">
                <h3>${plant.title}</h3>
                <p>${plant.description}</p>
                <div class="items_content_inner">
                    <span class="span_cont">
                        ${plant.category}
                    </span>

                    <a href="#">
                        <div class="info_cont">
                            <img src="./assets/info.svg" alt="">
                        </div>
                    </a>
                </div>
            </div>
        </div>
      </div>
      `
      plantList.appendChild(plantItem)
    })
  }
}

function mostrarTodos() {
  const plantList = document.querySelector('.plants')
  plantList.innerHTML = ''

  plants.forEach(plant => {
    const plantItem = document.createElement('div')
    plantItem.classList.add('plant_item')
    plantItem.innerHTML = `
      <div class="plant_items">
        <img src="./assets/blur-bg2.svg" alt="">

        <div class="items_content">
            <div class="items_content_img">
                <img src="${plant.image}" alt="${plant.title}">
            </div>
            <div class="items_content_text">
                <h3>${plant.title}</h3>
                <p>${plant.description}</p>
                <div class="items_content_inner">
                    <span class="span_cont">
                        ${plant.category}
                    </span>

                    <a href="#">
                        <div class="info_cont">
                            <img src="./assets/info.svg" alt="">
                        </div>
                    </a>
                </div>
            </div>
        </div>
      </div>
      `
    plantList.appendChild(plantItem)
  })
}
