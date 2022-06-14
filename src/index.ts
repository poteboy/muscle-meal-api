import app from "./app";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`API server ready at: http://localhost:${PORT}`));
