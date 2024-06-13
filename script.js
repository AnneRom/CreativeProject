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

const galleryItems = document.querySelectorAll('.gallery-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = items.length;//поточний індекс елемента

function updateGallery() {
    let itemWidth = galleryItems[0].clientWidth + 30;//600+30=630px
    let offset = -currentIndex * itemWidth;//-(-1)*630
    console.log(offset);
    galleryContainer.style.transform = `translateX(${offset}px)`;
    //якщо translateX(+) - то рух =>
    //якщо translateX(-) - то рух <=
}
console.log(galleryItems.length);
function showNext(){
    // currentIndex = currentIndex + 1;
    currentIndex++;
    updateGallery();
    if (currentIndex === galleryItems.length - items.length) {
        currentIndex = items.length;
        updateGallery();
    }

}

// a = 10 
// '10' == 10 - true
// '10' === 10 - false
//  10 === 10 - true
// false == 0 - true
// false === 0 - false

function showPrev(){
    // currentIndex = currentIndex - 1;
    currentIndex--;
    updateGallery();
}

nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);
updateGallery();
