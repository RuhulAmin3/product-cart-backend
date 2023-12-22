import express from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { productRoutes } from "../modules/product/product.route";
const router = express.Router();

const allRoutes = [
  { path: "/auth", route: authRoutes },
  { path: "/products", route: productRoutes },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
