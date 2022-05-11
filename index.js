const express = require('express');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');

const app = express();
app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://admin:qwe123@cluster0.igezy.mongodb.net/test-iogru?retryWrites=true&w=majority`);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};


start();
