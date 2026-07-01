/**
 * Global application constants
 */

export const APP_NAME = "Afro Essentials API";

export const API_PREFIX = "/api/v1";

export const DEFAULT_PORT = 5000;

export const DEFAULT_PAGE = 1;

export const DEFAULT_LIMIT = 10;

export const MAX_LIMIT = 100;

export const USER_ROLES = {
  ADMIN: "admin",
  CUSTOMER: "customer",
} as const;

export const ORDER_STATUS = {
  PENDING: "Pending",
  PROCESSING: "Processing",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
} as const;

export const PAYMENT_STATUS = {
  PENDING: "Pending",
  PAID: "Paid",
  FAILED: "Failed",
} as const;