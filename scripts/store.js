// const foo = 'bar';
import item from './item.js';

let items = [];
let hideCheckedItems = false;

const findById = function(id){
  return items.find(item => item.id === id);
};

const addItem = function(name) {
  try{
    item.validateName(name);
    this.items.push(item.create(name));
  }catch(error){
    //tofo
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function(id){
  let obj = findById(id);
  obj.checked = !obj.checked;
};

const findAndUpdateName = function(id, newName){
  try{
    item.validateName(name);
    findById(id).name = newName;
  }catch(error){
    //todo
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = function(id){
  this.items = this.items.filter(item => item.id !== id);
};


const toggleCheckFilter = function(){
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckFilter
};