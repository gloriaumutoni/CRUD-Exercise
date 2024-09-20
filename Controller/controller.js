const Items = require("../Model/model");

const controllerItem = {
  getAllItems: async (req, resp) => {
    try {
      const allItems = await Items.find();
      if (!allItems) {
        resp.status(404).json({ message: "Items not found" });
      }
      resp.status(200).json( allItems );
    } catch (error) {
      resp.status(500).json({ message: error.message });
    }
  },
  getItem: async (req, resp) => {
    try {
      const { id } = req.params;
      const item = await Items.findById(id);
      if (!item) {
        resp.status(404).json({ message: "Item not found" });
      }
      resp.status(200).json( item );
    } catch (error) {
      resp.status(500).json({ message: error.message });
    }
  },
  addItem: async (req, resp) => {
    try {
      const newItem = await Items.create(req.body);
      resp.status(201).json( newItem );
    } catch (error) {
      resp.status(500).json({ message: error.message });
    }
  },
  modifyItem: async (req, resp) => {
    try {
      const { id } = req.params;
      const modifiedItems = await Items.findByIdAndUpdate(id, req.body);
      if (!modifiedItems) {
        resp.status(404).json({ message: "No changes made" });
      }
      resp.status(200).json( modifiedItems );
    } catch (error) {
      resp.status(500).json({ message: error.message });
    }
  },
  deleteItem: async (req, resp) => {
    try {
      const { id } = req.params;
      const otherItems = await Items.findByIdAndDelete(id, req.body);
      if (!otherItems) {
        resp.status(404).json({ message: "No changes made" });
      }
      resp.status(204).json( otherItems );
    } catch (error) {
      resp.status(500).json({ message: error.message });
    }
  },
};

module.exports = controllerItem;
