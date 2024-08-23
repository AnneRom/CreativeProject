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

const header = document.querySelector('header.content');
const mainHeader = document.querySelector('header.content .main-header');
const catalog = document.querySelectorAll('header.content .catalog');


// let menuContainer = document.querySelector('.menu ul');

// menuContainer.addEventListener('mouseleave', function () {
//     hideCatalog(previousCatalogDiv, true);
// });

menuUl.addEventListener('mouseleave', function(event) {
    // Перевірка, чи мишка все ще на хедері
    if (event.relatedTarget && mainHeader.contains(event.relatedTarget)) {
      hideCatalog(previousCatalogDiv, true);
  }
  });

  catalog.forEach((catalogItem) => {
    catalogItem.addEventListener('mouseleave', function() {
        hideCatalog(previousCatalogDiv, true);
    });
  })

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

function hideAllCatalogs(){
    items.forEach((itemList, index) => {
        let catalogDiv = document.getElementById(`catalog-${index+1}`);//пошук каталогу
        if (catalogDiv){//якщо каталог знайдено
            catalogDiv.style.display = 'none';//сховати
        }
    });
    isCatalogVisible = false;
    animationInProgress = false;
}

function showCatalog(catalogDiv, withAnimation) {
    console.log("showCatalog");
   
    hideAllCatalogs();

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
let closeBtn = document.querySelector('.close-btn i');
let contentElements = document.querySelectorAll('.content');
let body = document.body;
console.log(menuIcon);
console.log(sideBar);
console.log(closeBtn);
console.log(contentElements);

menuIcon.addEventListener('click', function(){
    sideBar.classList.add('active');
    body.style.overflow = 'hidden';//зупинка прокрутки
    contentElements.forEach(content => {
        content.classList.add('blur');
    });
   
});

closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('active');
    body.style.overflow = 'visible';//за замовчуванням прорутка є
    contentElements.forEach(content => {
        content.classList.remove('blur');
    });
   
});

const galleryContainer = document.querySelector('.gallery-container');
const itemsGallery = [
    {src: 'images/galleryMainPage/air-max-1-sc.webp', alt: 'air-max-1', title: 'AIR MAX'},
    {src: 'images/galleryMainPage/air-jordan-1-retro-high-og.webp', alt: 'air-jordan-1', title: 'AIR JORDAN 1'},
    {src: 'images/galleryMainPage/dunk-low-retro.webp', alt: 'dunk', title: 'DUNK'},
    {src: 'images/galleryMainPage/air-force-1.webp', alt: 'air-force-1', title: 'AIR FORCE 1'},
    {src: 'images/galleryMainPage/blazer-mid-77-vintage.webp', alt: 'blazer', title: 'BLAZER'},
    {src: 'images/galleryMainPage/zoom-vomero-5.webp', alt: 'vomero', title: 'VOMERO'}
]

//функція для створення одного елемента галереї
function createGalleryItem(item) {
    const galleryItem = document.createElement('div');//<div></div>
    galleryItem.classList.add('gallery-item');//<div class = 'gallery-item'></div>
    
    const img = document.createElement('img');//<img src="" alt="">
    img.src = item.src;//<img src="images/galleryMainPage/..." alt="">
    img.alt = item.alt;//<img src="images/galleryMainPage/..." alt="AIR MAX/...">
    
    const title = document.createElement('h3');//<h3></h3>
    title.textContent = item.title//<h3>AIR MAX/...</h3>

    galleryItem.appendChild(img);
    galleryItem.appendChild(title);
    //<div class = 'gallery-item'>
        //<img src="images/galleryMainPage/..." alt="AIR MAX/...">
        //<h3>AIR MAX/...</h3>
    //</div>
    return galleryItem;
}

// console.log(createGalleryItem(itemsGallery[0]));

//функція для створення елементів галереї (дублювання цілої галереї)
function createGalleryItems() {
    const fragment = document.createDocumentFragment();//створюється фрагмент коду
    itemsGallery.forEach(item => {
        const galleryItem = createGalleryItem(item);
        // console.log(galleryItem);
        // console.log(fragment);
        fragment.appendChild(galleryItem);    
    });
    // console.log(fragment);
    itemsGallery.forEach(item => {
        const galleryItem = createGalleryItem(item);
        fragment.appendChild(galleryItem);    
    });

    galleryContainer.appendChild(fragment);
    console.log(galleryContainer);
}

createGalleryItems();//функція дублювання
//1 оригінальна + 2 дубльовані галереї


const galleryItems = document.querySelectorAll('.gallery-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = items.length;//поточний індекс елемента 6

function updateGallery(transition = true) {
    let itemWidth = galleryItems[0].clientWidth + 30;//600+30=630px
    let offset = -currentIndex * itemWidth;//-(-1)*630
    console.log(offset);
    console.log(currentIndex);
    if (transition == true){
        galleryContainer.style.transition = 'transform 0.5s ease'; 
    } else {
        galleryContainer.style.transition = 'none'; 
    }
    galleryContainer.style.transform = `translateX(${offset}px)`;
    //якщо translateX(+) - то рух =>
    //якщо translateX(-) - то рух <=
}

function disableButton(disablePrev = true, disableNext = true) {
    if (disablePrev == true){
        prevButton.classList.add('disabled');
    } 
    if (disableNext == true){
        nextButton.classList.add('disabled');
    }
}

function enableButton(enablePrev = true, enableNext = true) {
    if (enablePrev) {
        prevButton.classList.remove('disabled');
    }
    if (enableNext) {
        nextButton.classList.remove('disabled');
    }
}

function showNext(){
    if (nextButton.classList.contains('disabled')) return;//якщо кнопка неактивна, то функція showNext() не працює 

    currentIndex++;
    disableButton(false, true);
    updateGallery();

    if (currentIndex === galleryItems.length - items.length) {
        galleryContainer.addEventListener('transitionend', () => {
            currentIndex = items.length;
            updateGallery(false); 
            enableButton(false, true);
        }, { once: true });//once: true - обробник подій працює один раз і автоматично видаляється           
    } else {
        galleryContainer.addEventListener('transitionend', () => enableButton(false, true), { once: true });
    }
}

function showPrev() {
     currentIndex--;
     disableButton(true, false);
     updateGallery();
 
     if (currentIndex === itemsGallery.length - 1) {
        galleryContainer.addEventListener('transitionend', () => {
            currentIndex = itemsGallery.length * 2 - 1; 
            updateGallery(false); 
            enableButton(true, false);
        }, { once: true });
     } else {
        galleryContainer.addEventListener('transitionend', () => enableButton(true, false), { once: true });
    }

}


updateGallery(false);
nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);

let lastScrollTop = 0; //змінна для збереження позиції останнього скролінгу

window.addEventListener ('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;//поточна позиція скролінгу
    if ((scrollTop > lastScrollTop) && (scrollTop > header.offsetHeight)) {
        header.classList.add('hidden');
    } else if (scrollTop < lastScrollTop) {
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

const category = document.querySelector('.category');
console.log(category);

console.log(document.documentElement.scrollTop);

category.addEventListener('mouseenter', () => {
    // category.scrollTop = category.scrollHeight;
    // category.scrollTop = 500;
    // document.documentElement.scrollTop = 1800;
    // console.log(document.documentElement.scrollTop);
});

const mediaQuery = window.matchMedia('(max-width: 600px)'); //слідкує за станом медіазапиту, 
//якщо ширина екрану менша або дорівнює 600px, то цей об'єкт матиме властивість matches -> true

const categoryHeader = document.querySelectorAll('.category-item h2');
const categoryUl = document.querySelectorAll('.category-item ul');

let clickHandlers = [];//змінна зберігає всі додані обробники подій

function toggleList (index) {
    const ul = categoryUl[index];
    if (ul.classList.contains('show')){//contains - перевіряє чи міститься клас show в елемені ul
        ul.classList.remove('show');
    } else {
        ul.classList.add('show');
    }
}

function mediaQueryChange(event) {
    //видаляємо попередні обробники подій 
    categoryHeader.forEach((header, index) => {
        if (clickHandlers[index]) {
            header.removeEventListener('click', clickHandlers[index]);
        }
    });

    clickHandlers = [];

    if (event.matches) {//ширина екрану менша або дорівнює 600px
        
        categoryHeader.forEach((header, index) => {
            const handler = () => toggleList(index);//handler - оброблювач
            clickHandlers[index] = handler;
            header.addEventListener('click', handler);
        });
        console.log(clickHandlers);

    } else {//ширина екрану більша 600px
        categoryUl.forEach((ul) => {
            ul.classList.remove('show');
        }); 
    }

}

mediaQueryChange(mediaQuery);//виклик функції одразу після завантаження сторінки

mediaQuery.addEventListener('change', mediaQueryChange);

