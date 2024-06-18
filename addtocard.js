let openCart= document.querySelector(".cart-icon");
let closeCart= document.querySelector(".closeCart");
let cart= document.querySelector(".cart");
let body= document.querySelector("body");
let list = document.querySelector(".list");
let listCart = document.querySelector(".listCart");
let total= document.querySelector(".total");
let quantity= document.querySelector(".quantity");
//close-open cart
openCart.addEventListener('click',()=>{
    body.classList.add("active");
})
closeCart.addEventListener('click',()=>{
    body.classList.remove("active");
})

function product(id,name,img,price,season){
    this.id= id;
    this.name= name;
    this.img= img;
    this.price= price;
    this.season= season;
}
let products=[];
let product1 = new product(1,"Cóc","../DUAN1/Product/cóc.jpg",20000,2); products.push(product1);
let product2 = new product(2,"Hồng xiêm","../DUAN1/Product/sabo.webp",45000,4); products.push(product2);
let product3 = new product(3,"Việt quất","../DUAN1/Product/blueberry.jfif",90000,1); products.push(product3);
let product4 = new product(4,"Bơ","../DUAN1/Product/bo.jpg",40000,2); products.push(product4);
let product5 = new product(5,"Bưởi da xanh","../DUAN1/Product/buoi.jpg",30000,3); products.push(product5);
let product6 = new product(6,"Bưởi ruby","../DUAN1/Product/Buoiruby.jfif",35000,1); products.push(product6);
let product7 = new product(7,"Thanh long","../DUAN1/Product/thanh long.jpg",32000,4); products.push(product7);
let product8 = new product(8,"Cam sành","../DUAN1/Product/camsanh.jpg",30000,4); products.push(product8);
let product9 = new product(9,"Táo xanh","../DUAN1/Product/táo xanh.jpg",80000,3); products.push(product9);
let product10 = new product(10,"Chanh dây","../DUAN1/Product/chanh day.jpg",30000,2); products.push(product10);
let product11 = new product(11,"Chanh","../DUAN1/Product/chanh.jpg",40000,3); products.push(product11);
let product12 = new product(12,"Chanh vàng","../DUAN1/Product/chanhvang.jfif",50000,1); products.push(product12);

let product13 = new product(13,"Cherry","../DUAN1/Product/cherry.jpg",120000,4); products.push(product13);
let product14 = new product(14,"Chôm chôm","../DUAN1/Product/chomchom.jfif",40000,2); products.push(product14);
let product15 = new product(15,"Chuối cau","../DUAN1/Product/chuối cau.jfif",25000,1); products.push(product15);
let product16 = new product(16,"Chuối","../DUAN1/Product/chuoi.webp",30000,4); products.push(product16);
let product17 = new product(17,"Đào","../DUAN1/Product/đào.webp",45000,1); products.push(product17);
let product18 = new product(18,"Dâu tây","../DUAN1/Product/dau tay.jpg",80000,4); products.push(product18);
let product19 = new product(19,"Đu đủ","../DUAN1/Product/đu đủ.jpg",22000,3); products.push(product19);
let product20 = new product(20,"Dưa gang","../DUAN1/Product/dưa gang.jpg",25000,2); products.push(product20);
let product21 = new product(21,"Vải","../DUAN1/Product/vải.jpg",20000,3); products.push(product21);
let product22 = new product(22,"Dưa hấu","../DUAN1/Product/dưa hấu.jpg",9000,3); products.push(product22);
let product23 = new product(23,"Dứa","../DUAN1/Product/dứa.jpg",10000,4); products.push(product23);
let product24 = new product(24,"Dưa lưới","../DUAN1/Product/dualuoi.webp",35000,3); products.push(product24);

let product25 = new product(25,"Hồng giòn","../DUAN1/Product/hồng giòn.jpg",75000,4); products.push(product25);
let product26 = new product(26,"Hồng trứng","../DUAN1/Product/hồng trứng.jpg",40000,4); products.push(product26);
let product27 = new product(27,"Kiwi vàng","../DUAN1/Product/kiwivang.jfif",250000,2); products.push(product27);
let product28 = new product(28,"Kiwi xanh","../DUAN1/Product/kiwixanh.jpg",50000,1); products.push(product28);
let product29 = new product(29,"Lê","../DUAN1/Product/lê đường.jpg",60000,3); products.push(product29);
let product30 = new product(30,"Lê Úc","../DUAN1/Product/lê úc.jfif",350000,4); products.push(product30);
let product31 = new product(31,"Lựu đỏ","../DUAN1/Product/lựu đỏ.jpg",7000,1); products.push(product31);
let product32 = new product(32,"Mận bắc","../DUAN1/Product/mận bắc.jpg",110000,4); products.push(product32);
let product33 = new product(33,"Mận đỏ","../DUAN1/Product/mận đỏ.webp",450000,2); products.push(product33);
let product34 = new product(34,"Mãng cầu","../DUAN1/Product/mãng cầu.webp",50000,2); products.push(product34);
let product35 = new product(35,"Măng cụt","../DUAN1/Product/măng cụt.jpg",270000,1); products.push(product35);
let product36 = new product(36,"Mít thái","../DUAN1/Product/mít thái.webp",18000,4); products.push(product36);

let listCarts= [];
//sort product
function sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].price > arr[j + 1].price) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let sortProducts= sort(products);
function initProduct(startProduct,endProduct){
    for(; startProduct<endProduct; startProduct++){
        function test(value,key){
            let newDiv= document.createElement('div');
            newDiv.classList.add('item');
            newDiv.setAttribute('id','item_'+ key);
            newDiv.innerHTML= `
            <img src="${value.img}">
            <div>
                <div class="titles">${value.name}</div>
                <div class="price">${value.price.toLocaleString()}đ</div>
                <div class="btn-group">
                    <button onclick="addToCart(${key})"><img src="../DUAN1/Image/cart_product_icon.svg"></button>
                    <button onclick="infoProduct(${key})" data-bs-toggle="modal" data-bs-target="#info"><img src="../DUAN1/Image/info-solid.svg"></button>
                </div>
            <\div>`; 
            list.appendChild(newDiv);
        }
        test(sortProducts[startProduct],startProduct);
    }
}
initProduct(0,12);
function deleteProduct(){
    products.forEach((value,key)=>{
        let removeItem= document.getElementById('item_'+key);
        if(removeItem){
            removeItem.remove();
        }
    })
    
}
function filterPrice(minPrice, maxPrice){
    deleteProduct();
    if(minPrice==0&&maxPrice==0){
        initProduct(0,12);
        let page= document.querySelector('.pagination-container');
        if(document.querySelector('.pagination')){
            page.removeChild();
        }
        let newDiv= document.createElement('ul');
        newDiv.classList.add('pagination');
        newDiv.innerHTML=`
                <li class="page-item active page-1" onclick="pageLoad(1)">
                <a class="page-link">1</a>
                </li>
                <li class="page-item page-2" onclick="pageLoad(2)"><a class="page-link" >2</a></li>
                <li class="page-item page-3" onclick="pageLoad(3)"><a class="page-link">3</a></li>
            `;
        page.appendChild(newDiv);
    }
    else{
        products.forEach((value,key)=>{
            if(value.price>=minPrice&&value.price<=maxPrice){
                let newDiv= document.createElement('div');
                newDiv.classList.add('item');
                newDiv.setAttribute('id','item_'+ key);
                newDiv.innerHTML= `
                    <img src="${value.img}">
                    <div>
                        <div class="titles">${value.name}</div>
                        <div class="price">${value.price.toLocaleString()}đ</div>
                        <div class="btn-group">
                            <button onclick="addToCart(${key})"><img src="../DUAN1/Image/cart_product_icon.svg"></button>
                            <button onclick="infoProduct(${key})" data-bs-toggle="modal" data-bs-target="#info"><img src="../DUAN1/Image/info-solid.svg"></button>
                        </div>
                    <\div>`; 
                list.appendChild(newDiv);
            }
        })
        document.querySelector('.pagination').remove();
    }
}
function filterSeason(seasonNum){
    deleteProduct();
    if(seasonNum==0){
        initProduct(0,12);
        let page= document.querySelector('.pagination-container');
        if(document.querySelector('.pagination')){
            page.removeChild();
        }
        let newDiv= document.createElement('ul');
        newDiv.classList.add('pagination');
        newDiv.innerHTML=`
                <li class="page-item active page-1" onclick="pageLoad(1)">
                <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item page-2" onclick="pageLoad(2)"><a class="page-link" href="#">2</a></li>
                <li class="page-item page-3" onclick="pageLoad(3)"><a class="page-link" href="#">3</a></li>
            `;
        page.appendChild(newDiv);
    }
    else{
        products.forEach((value,key)=>{
            var season= value.season;
            console.log(season);
            if(season==seasonNum){
                let newDiv= document.createElement('div');
                newDiv.classList.add('item');
                newDiv.setAttribute('id','item_'+ key);
                newDiv.innerHTML= `
                    <img src="${value.img}">
                    <div>
                        <div class="titles">${value.name}</div>
                        <div class="price">${value.price.toLocaleString()}đ</div>
                        <div class="btn-group">
                            <button onclick="addToCart(${key})"><img src="../DUAN1/Image/cart_product_icon.svg"></button>
                            <button onclick="infoProduct(${key})" data-bs-toggle="modal" data-bs-target="#info"><img src="../DUAN1/Image/info-solid.svg"></button>
                        </div>
                    <\div>`; 
                list.appendChild(newDiv);
            }
        })
        document.querySelector('.pagination').remove();
    }
    
}
function addToCart(key){
    if(listCarts[key]==null){
        listCarts[key]= JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity= 1;
    }
    reloadCart();
}
var proNum= 0;
function reloadCart(){
    listCart.innerHTML = '';
    let count= 0;
    var totalPrice= 0;
    listCarts.forEach((value,key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value!= null){
        let newDiv= document.createElement('li');
        newDiv.innerHTML= `
            <img src='${value.img}'>
            <div class="productName">${value.name}</div>
            <div>${value.price.toLocaleString()}đ</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity-1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity+1})">+</button>
            </div>`;
        listCart.appendChild(newDiv);
        }   
    })
    total.innerHTML= totalPrice.toLocaleString() + "đ " + "(" + count + ")";
    quantity.innerHTML= count;
    proNum= count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = (quantity * products[key].price);
    }
    reloadCart();
}
function clearListCard(){
    while(listCarts.length){
        listCarts.pop();
    }
    reloadCart();
}
function openModal(){
    if(proNum!=0){
        var myModal = new bootstrap.Modal(document.getElementById('successPurchase'));
        myModal.show();
        clearListCard();
    }
    else{
        var myModal = new bootstrap.Modal(document.getElementById('failPurchase'));
        myModal.show();
    }
    
} 
function infoProduct(key){
    product= sortProducts[key];
    document.querySelector(".contentTitle").innerHTML= product.name;
    document.querySelector(".infoImg").innerHTML=`
    <button class="btn-close" data-bs-dismiss="modal"></button>
    <img src="${product.img}" alt="">
    `;
    document.querySelector(".contentPrice").innerHTML= product.price.toLocaleString() +"đ";
    document.querySelector(".contentDes").innerHTML=`
    <table>
    <tr>
        <td><strong>ID</strong></td>
        <td>: ${product.id}</td>
    </tr>
    <tr>
        <td><strong>Category</strong></td>
        <td>: Fruits</td>
    </tr>
    <tr>
        <td><strong>Season</strong></td>
        <td>: ${transferSeason(product.season)}</td>
    </tr>
    </table>
    `;
    document.querySelector("#info .footer").innerHTML=`
    <button  onclick="addToCart(${key})" data-bs-dismiss="modal">Add to cart</button>
    `;
}
function transferSeason(num){
    switch(num){
        case 1: return "Spring";
        case 2: return "Summer";
        case 3: return "Fall";
        case 4: return "Winter";
    }
}
function pageLoad(numPage){
    document.querySelector(".page-item.active").classList.remove("active");
    document.querySelector(".page-"+numPage).classList.add("active");
    deleteProduct();
    initProduct(numPage*12-12,numPage*12);
}

