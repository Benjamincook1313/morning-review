
const items = ["Bananas", "Bread", "Tea", "Fresh-Avacado"];

module.exports = {
  getItems: (req, res) => {
    res.status(200).send(items);
  },

  getSingleItem: (req, res) => {
    const { itemId } = req.query
    res.status(200).send(items[itemId-1]);
  },

  addItem: (req, res) => {
    const { item } = req.body;
    // add item to items array 
    // send status and items in the response
  }
}