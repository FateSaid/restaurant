import Kitchen from '/src/kitchen.jpg';

export default function homeTab(){
    const kitchenContainer = document.createElement('div');
    const kitchenImage = document.createElement('img');
    const kitchenContent = document.createElement('div');
    const kitchenTitle = document.createElement('h1');
    const kitchenMenuTitleTea = document.createElement('h2');
    const kitchenMenuTitleBev = document.createElement('h2');
    const kitchenMenuTitlePast = document.createElement('h2');

    const teaItems = ['Black Tea', 'Green Tea', 'White Tea', 'Oolong Tea', 'Herbal Tea', 'Earl Gray',
     'Espresso', 'Americano', 'Latte', 'Cappuccino', 'Macchiato', 'Mocha'];
     const bevItems = ['Hot Chococate', 'Steamer(Steamed Milk with Flavor Syrup', 'Italian Soda', 
     'Lemonade', 'Fruit Smoohie', 'Milkshake', 'Sparkling Water', 'Various Seasonal or Speciality Drinks'];
     const pastItems = ['Croissant', 'Danish Pastry', 'Muffins', 'Scones(Plain, Cranberry, Lemon', 
     'Cinnamon Rolls', 'Bagels(with cream cheese, butter or jam', 'Cookies(Chocolate chip, Oatmeal Raisins, Peanut Butter)',
      'Brownies', 'Coffee Cake', 'Banana Bread'];

    function listItems(item){
      const menuList = document.createElement('div');
      menuList.classList.add('menu-list');
    
     item.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        menuList.appendChild(li);
     });
     kitchenMenu.appendChild(menuList);
    }
    

    const kitchenMenu = document.createElement('div');
    kitchenMenu.classList.add('kitchen-menu');
    
    kitchenMenuTitleTea.textContent = 'Tea/Coffee';
    kitchenMenuTitleTea.classList.add('menu-title');
    kitchenMenu.appendChild(kitchenMenuTitleTea);
    listItems(teaItems);

    kitchenMenuTitleBev.textContent = 'Beverages';
    kitchenMenuTitleBev.classList.add('menu-title');
    kitchenMenu.appendChild(kitchenMenuTitleBev);
    listItems(bevItems);

    kitchenMenuTitlePast.textContent = 'Pastries';
    kitchenMenuTitlePast.classList.add('menu-title');
    kitchenMenu.appendChild(kitchenMenuTitlePast);
    listItems(pastItems);

    kitchenContent.classList.add('kitchen-content');
    kitchenContent.appendChild(kitchenTitle);
    kitchenContent.appendChild(kitchenMenu);

    kitchenTitle.textContent = "Menu";


    kitchenImage.classList.add('kitchen');
    kitchenImage.src = Kitchen;

    kitchenContainer.appendChild(kitchenImage);
    kitchenContainer.appendChild(kitchenContent);

    return kitchenContainer;
}
