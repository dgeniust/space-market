const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const userList = document.getElementById('users-list');


navToggle.addEventListener('click', () => {
    links.classList.toggle ('show-links');
});

async function layDuLieu() {
    const response = await fetch("https://raw.githubusercontent.com/dgeniust/space-market/main/data.json");
    const users = await response.json();
    users.forEach(function(user) {
        console.log(user);
        //Tạo card
        const card = document.createElement("div");
        card.classList.add("card");
        //Tạo ảnh sản phẩm
        const image = document.createElement("img");
        image.classList.add("image");
        image.src = user.img;
        //Tạo tên sản phẩm
        const title = document.createElement("h2");
        title.classList.add("title");
        title.innerText = user.name;
        //Tạo main name cho sản phẩm
        const mainName = document.createElement("span");
        mainName.classList.add("mainName");
        mainName.innerHTML = user.mainName;
        //Tạo giá
        const price = document.createElement("span");
        price.classList.add("price");
        price.innerText = user.price;

        
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(mainName);
        card.appendChild(price);

        userList.appendChild(card);
    });
}
layDuLieu();

