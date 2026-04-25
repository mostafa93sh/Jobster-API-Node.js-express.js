require("dotenv").config();
const mongoose = require("mongoose");
const Job = require("./models/Job");
const mockData = require("./MOCK_DATA.json");
const connectDB = require("./db/connect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.create(mockData);
  } catch (error) {
    throw new Error("SOME THING WENT WRONG IN POPULATE THE DATABASE");
  }
};

start();
