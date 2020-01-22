module.exports = function parsestringAssArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}