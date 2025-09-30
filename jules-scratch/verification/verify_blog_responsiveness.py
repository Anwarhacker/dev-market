from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    page.goto("http://localhost:3000/blog")

    # Mobile screenshot
    page.set_viewport_size({"width": 375, "height": 667})
    page.screenshot(path="jules-scratch/verification/blog-mobile.png")

    # Tablet screenshot
    page.set_viewport_size({"width": 768, "height": 1024})
    page.screenshot(path="jules-scratch/verification/blog-tablet.png")

    # Desktop screenshot
    page.set_viewport_size({"width": 1280, "height": 720})
    page.screenshot(path="jules-scratch/verification/blog-desktop.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)