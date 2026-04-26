import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test("shows hero section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("body")).toContainText(/auth/i);
  });

  test("shows features section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Features")).toBeVisible();
  });

  test("shows pricing section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Pricing")).toBeVisible();
  });

  test("navigates to login", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /login/i }).first().click();
    await expect(page).toHaveURL(/\/login/);
    await expect(page.getByText(/welcome back/i)).toBeVisible();
  });

  test("navigates to register", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /register|sign up|get started/i }).first().click();
    await expect(page).toHaveURL(/\/register/);
  });
});

test.describe("Auth Pages", () => {
  test("login form has email and password fields", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /sign in/i })).toBeVisible();
  });

  test("register form has required fields", async ({ page }) => {
    await page.goto("/register");
    await expect(page.getByLabel(/first name/i)).toBeVisible();
    await expect(page.getByLabel(/last name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();
  });

  test("forgot password page works", async ({ page }) => {
    await page.goto("/forgot-password");
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /send reset link/i })).toBeVisible();
  });

  test("reset password page loads", async ({ page }) => {
    await page.goto("/reset-password");
    await expect(page.getByText(/new password/i)).toBeVisible();
  });

  test("verify email page loads", async ({ page }) => {
    await page.goto("/verify-email");
    await expect(page.getByText(/verify email/i)).toBeVisible();
  });
});
