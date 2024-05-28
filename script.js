let items = document.querySelectorAll('.menu ul li');
console.log(items);

let menuUl = document.querySelector('.menu ul');
console.log(menuUl);

let item = document.querySelector(".menu ul li");
console.log(item);
let isCatalogVisible = false;//Чи каталог видимий
let animationInProgress = false;//Чи вже триває анімація?

let previousCatalogDiv = null;//відповідає за зберігання попередгього каталогу(той, на який було наведено курсор миші до цього)
let showCatalogTimer = null;//змінна для зберігання таймеру перед викликом функції showCatalog()
// ! - НЕ
// || - AБО
// && - І
//комбінація клавіш щоб закоментувати/розкоментувати виділений код -> ctrl + /

// let menuContainer = document.querySelector('.menu ul');

// menuContainer.addEventListener('mouseleave', function () {
//     hideCatalog(previousCatalogDiv, true);
// });

menuUl.addEventListener('mouseleave', function() {
    hideCatalog(previousCatalogDiv, true);
});

items.forEach((itemList, index) => {
    let catalogDiv = document.getElementById(`catalog-${index+1}`);
    
    // let relatedItem = itemList.relatedTarget
    // let targetItem = itemList.target;

    itemList.addEventListener('mouseenter', function () {

        clearTimeout(showCatalogTimer);

        if (!isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == false
            showCatalogTimer = setTimeout (() => {
                showCatalog(catalogDiv, true);
            }, 200);
        }
        else if (previousCatalogDiv !== catalogDiv) {
            showCatalogTimer = setTimeout (() => {
                hideAndshowCatalog(catalogDiv);
            }, 200);
        }
    });

    itemList.addEventListener('mouseleave', function () {
        clearTimeout(showCatalogTimer);
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

let menuIcon = document.querySelector('.menu-icon');
let sideBar = document.querySelector('.sidebar-menu');
console.log(menuIcon);
console.log(sideBar);

menuIcon.addEventListener('click', function(){
    sideBar.classList.add('active');
});

//Створили sideBar, застилізували його і контент всередині нього. В JS створили змінні menuIcon, 
//sideBar. Додали обробник подій, який при натисканні на іконку menuIcon додає до sideBar клас з анімацією.