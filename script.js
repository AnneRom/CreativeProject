let items = document.querySelectorAll('.menu ul li');//[New Men Women Kids Acss Sale]

let item = document.querySelector(".menu ul li");
let isCatalogVisible = false;//Чи каталог видимий?
let animationInProgress = false;//Чи вже триває анімація?
let currentCatalogDiv = null;//буде визначати поточний каталог (той, на який курсор миші)

// ! - НЕ
// || - AБО
// && - І

items.forEach((itemList, index) => {

    let catalogDiv = document.getElementById(`catalog-${index+1}`);

    itemList.addEventListener('mouseover', function () {

        if (!isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == false
            hideAndShowCatalog (catalogDiv);
        }
        else if (currentCatalogDiv !== catalogDiv) {
            hideCatalog (catalogDiv);
        }
    });

    itemList.addEventListener('mouseout', function() {

    if(!itemList.matches(':hover') && isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == true
        hideCatalog(currentCatalogDiv);
    }
    
});
});


function hideAndShowCatalog (catalogDiv) { //catalogDiv - це параметр функції(поки щось невідоме)
    if (currentCatalogDiv !==null) {
        hideCatalog (currentCatalogDiv);//при виклику функції currentCatalogDiv - це аргумент функції(конкретне значення)
    }
    showCatalog (catalogDiv);
}

function showCatalog (catalogDiv) {
    catalogDiv.style.display = 'flex';
    isCatalogVisible = true;
    
    catalogDiv.classList.add('catalog-anim-in');
    animationInProgress = true;

    catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
        catalogDiv.classList.remove('catalog-anim-in');
        animationInProgress = false;
        
        catalogDiv.removeEventListener('animationend', doingAnimationEnd);
    }); 
    
    currentCatalogDiv = catalogDiv;
}

function hideCatalog (catalogDiv) {
    catalogDiv.classList.add('catalog-anim-out');
    animationInProgress = true;

    catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
        catalogDiv.classList.remove('catalog-anim-out');
        catalogDiv.style.display = 'none';
        isCatalogVisible = false;
        animationInProgress = true;

        catalogDiv.removeEventListener('animationend', doingAnimationEnd);
    });
}