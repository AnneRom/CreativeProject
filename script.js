let items = document.querySelectorAll('.menu ul li');
console.log(items);

let item = document.querySelector(".menu ul li");
console.log(item);
let isCatalogVisible = false;
let animationInProgress = false;//Чи вже триває анімація?

// ! - НЕ
// || - AБО
// && - І

/*console.log(false || true);//true
console.log(false && true);//false
console.log(true && true && false);//false
console.log(true || true || false);//true
console.log(true && true && true);//true*/

items.forEach((itemList, index) => {
    console.log(itemList, index);

    let catalogDiv = document.getElementById(`catalog-${index + 1}`);

    itemList.addEventListener('mouseover', function() {

        if (!isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == false && animationInProgress == false

        catalogDiv.style.display = 'flex';
        isCatalogVisible = true;//Чи елемент каталог видимий?
        console.log(catalogDiv);
    
        catalogDiv.classList.add('catalog-anim-in');
        animationInProgress = true;
        console.log(catalogDiv);
    
        catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
            catalogDiv.classList.remove('catalog-anim-in');
            animationInProgress = false;
            console.log(catalogDiv);
    
            catalogDiv.removeEventListener('animationend', doingAnimationEnd);
        });  
    }
    });

    itemList.addEventListener('mouseout', function() {

        if (!item.matches(':hover') && isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == true
    
        catalogDiv.classList.add('catalog-anim-out');
        animationInProgress = true;
        console.log(catalogDiv);
    
        catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
            catalogDiv.classList.remove('catalog-anim-out');
            catalogDiv.style.display = 'none';
            isCatalogVisible = false;
            animationInProgress = false;
            console.log(catalogDiv);
    
            catalogDiv.removeEventListener('animationend', doingAnimationEnd);
        });
    }
        
    });

});


