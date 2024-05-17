import Kitchen from '/src/kitchen.jpg';
import Coffee from '/src/coffee.jpg';

export default function aboutTab(){
    const kitchenContainer = document.createElement('div');
    const kitchenImage = document.createElement('img');
    const kitchenContent = document.createElement('div');
    const kitchenTitle = document.createElement('h1');
    const coffeeImage = document.createElement('img');
    coffeeImage.classList.add('coffee-image');


    const kitchenMenu = document.createElement('div');
    const kitchenAbout = document.createElement('p');
    kitchenMenu.classList.add('kitchen-menu');
    kitchenAbout.textContent = "Welcome to Bearnstein's Kitchen, where every cup tells a story. At Bearnstein's Kitchen, we're more than just a place to grab your morning caffeine fix – we're a community hub, a meeting place, and a home away from home. Come for the coffee, stay for the community, and experience the warmth and hospitality that defines us.We can't wait to welcome you to our café – where every cup is a story waiting to be shared.";
    kitchenMenu.appendChild(kitchenAbout);

    kitchenContent.classList.add('kitchen-content');
    kitchenContent.appendChild(kitchenTitle);

    kitchenTitle.textContent = "About";


    kitchenImage.classList.add('kitchen');
    kitchenImage.src = Kitchen;

    coffeeImage.src = Coffee;
    kitchenMenu.appendChild(coffeeImage);


    kitchenContent.appendChild(kitchenMenu);
    kitchenContainer.appendChild(kitchenImage);
    kitchenContainer.appendChild(kitchenContent);


    return kitchenContainer;
}