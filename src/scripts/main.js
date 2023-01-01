import dataSource from './../DATA.json'

const main = () => {
  const init = () => {
    renderList()
    handleNavToggler()
  }

  const renderList = () => {
    const restaurants = dataSource.restaurants
    const listElement = document.querySelector('.restaurant__list')

    listElement.innerHTML = ''
    restaurants.forEach((restaurant) => {
      const description = restaurant.description.substring(0, 100) + '...'
      listElement.innerHTML += `
        <article class="restaurant-item">
          <div class="restaurant-item__card">
            <figure class="restaurant-item__card-image">
              <img src="${restaurant.pictureId}" alt="${restaurant.name}">
            </figure>
            <div class="restaurant-item__card-content">
              <div class="restaurant-item__rating">
                <img
                  src="./images/star.png"
                  alt="rating icon"
                  class="restaurant-item__rating-icon"
                >
                <span class="restaurant-item__rating-text">
                  ${restaurant.rating}
                </span>
              </div>
              <h4 class="restaurant-item__name">
                ${restaurant.name}
              </h4>
              <p class="restaurant-item__description">
              ${description}
              </p>
              <div class="restaurant-item__location">
                <img
                  src="./images/place.png"
                  alt="location icon"
                  class="restaurant-item__location-icon"
                >
                <span class="restaurant-item__location-text">
                ${restaurant.city}
                </span>
              </div>
            </div>
          </div>
        </article>
      `
    })
  }

  const handleNavToggler = () => {
    const toggler = document.querySelector('.nav__toggler-button')
    const menu = document.querySelector('.nav__menu')
    const main = document.querySelector('main')
    toggler.addEventListener('click', (e) => {
      e.stopPropagation()
      menu.classList.toggle('nav__menu--active')
    })
    main.addEventListener('click', (e) => {
      e.stopPropagation()
      menu.classList.remove('nav__menu--active')
    })
  }

  init()
}

export default main
