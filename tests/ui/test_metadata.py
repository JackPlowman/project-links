from .constants import DEFAULT_URL
from playwright.sync_api import Page

def test_title(page: Page) -> None:
    """Test the title of the website."""
    # Arrange
    page.goto(DEFAULT_URL)
    # Act
    title = page.title()
    # Assert
    assert title == "Project Links"



