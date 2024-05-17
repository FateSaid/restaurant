import Kitchen from '/src/kitchen.jpg';

export default function homeTab(){
    const kitchenContainer = document.createElement('div');
    const kitchenImage = document.createElement('img');
    const kitchenContent = document.createElement('div');
    const kitchenTitle = document.createElement('h1');


    kitchenContent.classList.add('kitchen-content');
    kitchenContent.appendChild(kitchenTitle);

    kitchenTitle.textContent = "Bearnstein's Kitchen";


    kitchenImage.classList.add('kitchen');
    kitchenImage.src = Kitchen;

    kitchenContainer.appendChild(kitchenImage);
    kitchenContainer.appendChild(kitchenContent);

    return kitchenContainer;
}

