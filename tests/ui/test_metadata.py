from playwright.sync_api import Page
from requests import get
from .environment_variables import project_url


def test_title(page: Page) -> None:
    """Test the title of the website."""
    # Arrange
    page.goto(project_url)
    # Act
    title = page.title()
    # Assert
    assert title == "Jack's Project Links"

def test_sitemap() -> None:
    """Test the sitemap of the website."""
    # Arrange
    sitemap_url = f"{project_url}/sitemap.xml"
    # Act
    response = get(sitemap_url)
    # Assert
    assert response.status_code == 200
    assert response.headers["Content-Type"] == "application/xml"
    assert "<urlset" in response.text
