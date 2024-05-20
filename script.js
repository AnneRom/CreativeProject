let items = document.querySelectorAll('.menu ul li');
console.log(items);

let isCatalogVisible = false;//Чи каталог видимий
let animationInProgress = false;//Чи вже триває анімація?
let currentCatalogDiv = null;//буде визначати поточний каталог (той, на який курсор миші)
let showCatalogTimer = null; // змінна для зберігання таймеру перед викликом функції showCatalog()

let menuContainer = document.querySelector('.menu ul');

menuContainer.addEventListener('mouseleave', function () {
    hideCatalog(currentCatalogDiv, true);
});

items.forEach((itemList, index) => {
    let catalogDiv = document.getElementById(`catalog-${index+1}`);
    
    itemList.addEventListener('mouseenter', function () {
        clearTimeout(showCatalogTimer);
        
        if (!isCatalogVisible && !animationInProgress) { // вказує на те, що жоден каталог не відкритий.
            console.log("eeee");

            showCatalogTimer = setTimeout(() => {
                showCatalog(catalogDiv, true);
            }, 200); // Затримка перед показом каталогу

        } else if (currentCatalogDiv !== catalogDiv) {
            showCatalogTimer = setTimeout(() => {
                hideAndshowCatalog(catalogDiv);
            }, 200); // Затримка перед показом каталогу
          
        }   
    });

    itemList.addEventListener('mouseleave', function () {
        clearTimeout(showCatalogTimer);
    });
});

function showCatalog(catalogDiv, withAnimation) {
    if (withAnimation) {
        catalogDiv.style.display = 'flex';
        catalogDiv.classList.add('catalog-anim-in');
        isCatalogVisible = true;
        animationInProgress = true;

        catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
            catalogDiv.classList.remove('catalog-anim-in');
            animationInProgress = false;

            catalogDiv.removeEventListener('animationend', doingAnimationEnd);
        }); 
    } else {
        catalogDiv.style.display = 'flex';
        isCatalogVisible = true;
        animationInProgress = false;
    }
    currentCatalogDiv = catalogDiv;
}

function hideAndshowCatalog(catalogDiv) {
    console.log("aaaaaaa")
    if (currentCatalogDiv !== null) {
        hideCatalog(currentCatalogDiv, false);
    }
    showCatalog(catalogDiv, false);
}

function hideCatalog(catalogDiv, withAnimation) {
    if (catalogDiv && isCatalogVisible && !animationInProgress) {
    if (withAnimation) {
        catalogDiv.classList.add('catalog-anim-out');
        animationInProgress = true;
   
        catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
            catalogDiv.classList.remove('catalog-anim-out');
            catalogDiv.style.display = 'none';
            isCatalogVisible = false;
            animationInProgress = false;
    
            catalogDiv.removeEventListener('animationend', doingAnimationEnd);
        });
    } else {
        catalogDiv.style.display = 'none';
        isCatalogVisible = false;
        animationInProgress = false;
    }
}   
}