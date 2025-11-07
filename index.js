//* # Objetos
import soda from "./content/Objects/soda.js";
import bread from "./content/Objects/bread.js";
import cheese from "./content/Objects/cheese.js";
import customer from "./content/Objects/Customer.js";
import grill from "./content/Objects/grill.js";
import lettuce from "./content/Objects/lettuce.js";
import meat from "./content/Objects/meat.js";
import plate from "./content/Objects/Plate.js";
import trash from "./content/Objects/Trash.js";

//* # Componentes GUI
import recipe_book from "./content/UI/RecipeBook.js";
import coins from "./content/UI/coins.js";

let audio=document.getElementById('musica_ambiente');

let trilha_sonora=new Audio(getSound("balcao"));

trilha_sonora.play();