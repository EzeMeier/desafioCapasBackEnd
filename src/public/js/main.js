// Condicional de clases según la categoría del producto 
const categoryInfo = document.querySelectorAll("[data-category]")

categoryInfo.forEach((cat) => {
    const category = cat.getAttribute("data-category")
    
    if (category === "camiseta") {
        cat.classList.add("camiseta-category-card")
    } else if (category === "pantalon") {
        cat.classList.add("panta-category-card")
    }
})