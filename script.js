let items = document.querySelectorAll('.menu ul li');
console.log(items);

let item = document.querySelector(".menu ul li");
console.log(item);
let isCatalogVisible = false;//Чи каталог видимий
let animationInProgress = false;//Чи вже триває анімація?

let previousCatalogDiv = null;//відповідає за зберігання попередгього каталогу(той, на який було наведено курсор миші до цього)
let hideCatalogTimer = null;//змінна для зберігання таймеру перед викликом функції hideCatalog()
// ! - НЕ
// || - AБО
// && - І
//комбінація клавіш щоб закоментувати/розкоментувати виділений код -> ctrl + /

items.forEach((itemList, index) => {
    let catalogDiv = document.getElementById(`catalog-${index+1}`);
    
    // let relatedItem = itemList.relatedTarget
    // let targetItem = itemList.target;

    itemList.addEventListener('mouseenter', function () {

        //clearTimeout(hideCatalogTimer);

        if (!isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == false
            showCatalog(catalogDiv, true);
        }
        else if (previousCatalogDiv !== catalogDiv) {
            hideAndshowCatalog(catalogDiv);
        }
    });

    itemList.addEventListener('mouseleave', function () {

    });
});


//isCatalogVisible = true;

function showCatalog(catalogDiv, withAnimation) {
    console.log("showCatalog");

    if (withAnimation){
        //(withAnimation) => withAnimation == true 
        //(!withAnimation) => withAnimation == false
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
        isCatalogVisible = true;//Чи елемент каталог видимий? 
        animationInProgress = false;//Чи працює анімація?
    }

    previousCatalogDiv = catalogDiv;//зберігає попередний каталог
}

function hideAndshowCatalog(catalogDiv) {
    //catalogDiv - це параметр функції(поки щось невідоме)
    //при виклику функції currentCatalogDiv - це аргумент функції(конкретне значення)
    if (previousCatalogDiv !== null) {
        hideCatalog(previousCatalogDiv, false);
    }
    showCatalog(catalogDiv, false);
}

function hideCatalog(catalogDiv, withAnimation) {
    console.log("hideCatalog");

    if (isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == true
        if (withAnimation){
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