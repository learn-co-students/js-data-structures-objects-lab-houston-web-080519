// Write your solution in this file!
const driver = {}

//     This function should not mutate the driver and should return a 
//     new driver that has an updated value for the key passed in.

function updateDriverWithKeyAndValue(object, key, value) {
  // driver.assign(street: '11 Broadway')
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function deleteFromDriverByKey(object, key){
  const newObject = Object.assign({}, object);

  delete newObject[key];
  return newObject
}

function destructivelyDeleteFromDriverByKey(object, key){
  delete object[key]
  return object
}

