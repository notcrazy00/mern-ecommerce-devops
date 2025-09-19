require("dotenv").config()
const express = require('express')
const cors = require('cors')
const morgan = require("morgan")
const cookieParser = require("cookie-parser")

// routes
const authRoutes = require("./routes/Auth")
const productRoutes = require("./routes/Product")
const orderRoutes = require("./routes/Order")
const cartRoutes = require("./routes/Cart")
const brandRoutes = require("./routes/Brand")
const categoryRoutes = require("./routes/Category")
const userRoutes = require("./routes/User")
const addressRoutes = require('./routes/Address')
const reviewRoutes = require("./routes/Review")
const wishlistRoutes = require("./routes/Wishlist")

const { connectToDB } = require("./database/db")

// server init
const server = express()

// db
connectToDB()

// middlewares
server.set('trust proxy', 1)
server.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://mern-ecommerce.local:8080'],
  credentials: true,
  exposedHeaders: ['X-Total-Count'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}))
server.use(express.json())
server.use(cookieParser())
server.use(morgan("tiny"))

// ===== официјални API mount-ови (/api/*) =====
server.use("/api/auth", authRoutes)
server.use("/api/users", userRoutes)
server.use("/api/products", productRoutes)
server.use("/api/orders", orderRoutes)
server.use("/api/cart", cartRoutes)
server.use("/api/brands", brandRoutes)
server.use("/api/categories", categoryRoutes)
server.use("/api/address", addressRoutes)
server.use("/api/reviews", reviewRoutes)
server.use("/api/wishlist", wishlistRoutes)

// (опционално) остави ги и старите без /api за компатибилност
server.use("/auth", authRoutes)
server.use("/users", userRoutes)
server.use("/products", productRoutes)
server.use("/orders", orderRoutes)
server.use("/cart", cartRoutes)
server.use("/brands", brandRoutes)
server.use("/categories", categoryRoutes)
server.use("/address", addressRoutes)
server.use("/reviews", reviewRoutes)
server.use("/wishlist", wishlistRoutes)

// health
server.get("/api/health", (_req, res) => res.status(200).json({ ok: true }))

server.listen(8000, () => {
  console.log('server [STARTED] ~ http://localhost:8000');
})
