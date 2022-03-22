export const item = (product) => {

  return `
    <li class="item swiper-slide">

      
  <div class="product__block js_product glass glass-m" id="${product.id}">

  <div class="product__img-box">
    
     <img src="${product.image}" alt="" class="img">

    </div>
  
    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
    
      <span class="product__price">
      $${(product.price).toFixed(2)}
      </span>
      <div class="product__btn-block">
      <a href="product-page.html?id=${product.id}" class="btn btn--first">details</a>
  
    <button class="btn js_add-to-cart">buy</button>
    </div>
      </div>

 
    
</div>

  </li>
    `
}


