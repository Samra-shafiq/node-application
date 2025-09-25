import Item from "../models/item.model.js";

// POST: create a new item
export const createItem = async (req, res) => {
  const { title, content } = req.body;
  try {
    // Create item in MongoDB
    const item = await Item.create({ title, content });

    // Send success response
    res.send({
      status: "success",
      data: item,
      code: 200
    });
  } catch (error) {
    console.error("POST /item error:", error);

    // Send error response
    res.status(400).send({
      status: false,
      error: error.message
    });
  }
};

// GET: fetch all items
export const getItems = async (req, res) => {
  try {
    const items = await Item.find();

    // Send success response
    res.send({
      status: "success",
      data: items,
      code: 200
    });
  } catch (error) {
    console.error("GET /item error:", error);

    // Send error response
    res.status(500).send({
      status: false,
      error: error.message
    });
  }
};
