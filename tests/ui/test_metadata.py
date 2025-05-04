from playwright.sync_api import Page

from .environment_variables import project_url


def test_title(page: Page) -> None:
    """Test the title of the website."""
    # Arrange
    page.goto(project_url)
    # Act
    title = page.title()
    # Assert
    assert title == "Jack's Project Links"
