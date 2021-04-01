module.exports = {
    multiItem : (arrayObject) => arrayObject.map(object => object.toObject()),
    onlyItem: (item) => item ? item.toObject() : item
}